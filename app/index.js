'use strict';
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    _ = require('underscore.string'),
    yosay = require('yosay'),
    chalk = require('chalk'),
    mkdir = require('mkdirp'),
    htmlWiring = require('html-wiring');


var DeploydGenerator = module.exports = function DeploydGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  this.appname = _.camelize(_.slugify(_.humanize(this.appname)));

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(htmlWiring.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DeploydGenerator, yeoman.generators.Base);

DeploydGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  this.log(yosay(
			'Welcome to the ' + chalk.yellow('Deployd') + ' generator!'
		));

  var prompts = [{
    type: 'confirm',
    name: 'angular',
    message: 'Would you like to use angularJS?',
    default: true
  }, {
    type: 'confirm',
    name: 'bootstrap',
    message: 'Would you like to use twitter bootstrap?',
    default: true
  }, {
    type: 'confirm',
    name: 'sample',
    message: 'Would you to generate a sample app?',
    when: function (props) {
      return props.bootstrap;
    },
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.angular = props.angular;
    this.bootstrap = props.bootstrap;
    this.sample = props.sample;

    cb();
  }.bind(this));

};

DeploydGenerator.prototype.includeAngular = function includeAngular() {
    if (this.angular) {
        this.scriptAppName = _.slugify(this.appname) + 'App';
          mkdir('public/app');
        this.template('app/_app.js', 'public/app/app.js');
        this.template('app/_controller.js', 'public/app/controller.js');
        this.template('app/views/_main.html', 'public/app/views/main.html');
    }
};

DeploydGenerator.prototype.createApp = function createApp() {
  mkdir('public');
  this.template('_index.html', 'public/index.html');
  this.template('styles/_main.css', 'public/styles/main.css');
  mkdir('data');
  mkdir('resources');
  mkdir('.dpd');
  mkdir('.dpd/pids');
  this.copy('mongod', '.dpd/pids/mongod');
  this.copy('app.dpd', 'app.dpd');
};

DeploydGenerator.prototype.createSample = function createSample() {
    if (this.sample) {
        this.copy('resources/things/config.json', 'resources/things/config.json');
    }
};

DeploydGenerator.prototype.projectfiles = function projectfiles() {
  this.template('_README.md', 'README.md');
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};
