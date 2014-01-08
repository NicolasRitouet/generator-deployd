'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var DeploydGenerator = module.exports = function DeploydGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DeploydGenerator, yeoman.generators.Base);

DeploydGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'angular',
    message: 'Would you like to use angular?',
    default: true
  },
  {
    type: 'confirm',
    name: 'bootstrap3',
    message: 'Would you like to include Twitter Bootstrap 3?',
    default: true
  } ];

  this.prompt(prompts, function (props) {
    this.angular = props.angular;

    cb();
  }.bind(this));
};

DeploydGenerator.prototype.createFolders = function createFolders() {
  this.mkdir('public');
  this.mkdir('data');
  this.mkdir('resources');
  this.mkdir('.dpd');
  this.mkdir('.dpd/pids');
  this.copy('mongod', '.dpd/pids/mongod');
  this.copy('app.dpd', 'app.dpd');
};

DeploydGenerator.prototype.projectfiles = function projectfiles() {
  this.template('_README.md', 'README.md');
  //this.template('_Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};

DeploydGenerator.prototype.includeAngular = function includeAngular() {
    console.log(this.angular);
    if (this.angular) {
        this.mkdir('public/app');
    }
};
