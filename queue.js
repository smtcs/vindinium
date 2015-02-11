var Promise = require('bluebird');
var debug = require('debug')('app:queue');
var kue = require('kue');
if(process.env.REDIS_URL) {
  var jobs = kue.createQueue({
    redis: {
      port: 10728,
      host: 'tarpon.redistogo.com',
      auth: '857e5c81f132d726a82d5bad47119b9e'
    }
  });
} else {
  var jobs = kue.createQueue();
}

jobs.process('run bot', 20, function(job, done) {
  /**
   * run_cmd - Run command in a subprocess provided by node
   *
   * @param {string} cmd - the command to run
   * @param {Object[]} args - the arguments for the command
   * @returns {} - nothing
   */

  function run_cmd(cmd, args) {
    return new Promise(function(resolve, reject) {
      var spawn = require('child_process').spawn;
      var child = spawn(cmd, args);
      var resp = "";

      child.stdout.on('data', function(buffer){ resp += buffer.toString();});
      child.stdout.on('end', function(){resolve(resp);});
    });
  }

  run_cmd('node', ['-e', job.data.code]).then(function(data) {
    debug(data);
    done(null, data);
  });
});

module.exports = {
  jobs: jobs,
  kue: kue
};
