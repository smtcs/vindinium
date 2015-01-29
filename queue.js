var debug = require('debug')('app:queue');
var kue = require('kue');
var jobs = kue.createQueue();

jobs.process('run bot', 10, function(job, done) {
  /**
   * This callback is called `callback` and executes when something finishes
   * @callback callback
   * @param {string} data - the data of the callback
   */

  /**
   * run_cmd - Run command in a subprocess provided by node
   *
   * @param {string} cmd - the command to run
   * @param {Object[]} args - the arguments for the command
   * @param {callback} callback - the callback function to run after command has finished
   */

  function run_cmd(cmd, args, callback ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function(buffer){ resp += buffer.toString();});
    child.stdout.on('end', function(){callback (resp);});
  }

  run_cmd('node', ['-e', job.data.code], function(data) {
    debug(data);
    done(null,data);
  });
});

module.exports = {
  jobs: jobs,
  kue: kue
};
