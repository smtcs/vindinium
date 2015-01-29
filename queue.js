var kue = require('kue');
var jobs = kue.createQueue();

jobs.process('bot', function(job, done) {
  /**
   * Run command in a subprocess provided by node
   *
   * @param {string} cmd - the command to run
   * @param {array} args - the arguments for the command
   * @param {function} callBack - the callback function
   */

  function run_cmd(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
  }

  run_cmd('node', ['-e', job.data.code], function(data) {
    console.log(data);
  });

  console.log('Job', job.id, 'is done');
  done();
});

var hworld = jobs.create('bot', {
  code: "console.log('Hello World')"
}).save( function(err){
  if( !err ) console.log( hworld.id );
});

module.exports = {
  jobs: jobs,
  kue: kue
};
