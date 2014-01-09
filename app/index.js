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

this.angularScript = '';
this.bootstrapInclude = '';

  var prompts = [{
    type: 'confirm',
    name: 'angular',
    message: 'Would you like to use angularJS?',
    default: true
  }, {
    type: 'confirm',
    name: 'bootstrap3',
    message: 'Would you like to use twitter bootstrap 3?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.angular = props.angular;
    this.bootstrap3 = props.bootstrap3;

    cb();
  }.bind(this));

};

DeploydGenerator.prototype.includeAngular = function includeAngular() {
    if (this.angular) {
        this.mkdir('public/app');
        this.template('_app.js', 'public/app/app.js');
        this.angularScript = "\n<script src=\"//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js\"></script>";
    }
};

DeploydGenerator.prototype.includeBootstrap = function includeBootstrap() {
    if (this.bootstrap3) {
        this.bootstrapInclude = "\n<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css\" rel=\"stylesheet\">";
    }
};

DeploydGenerator.prototype.createFolders = function createFolders() {
  this.mkdir('public');
  this.template('_index.html', 'public/index.html');
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

