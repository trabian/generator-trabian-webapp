'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var TrabianWebappGenerator = module.exports = function TrabianWebappGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  var name = null;

  if (name = this.arguments[0]) {
    this.appname = name;
  }

  // console.warn(this, this.appname);

  // this.argument('appname', { type: String, required: false });

  // this.appname = this.appname || this.arguments[0] || path.basename(process.cwd());

  console.warn(this.appname);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(TrabianWebappGenerator, yeoman.generators.Base);

// TrabianWebappGenerator.prototype.askFor = function askFor() {
//   var cb = this.async();

//   // have Yeoman greet the user.
//   console.log(this.yeoman);

//   var prompts = [{
//     type: ''
//   }]

//   var prompts = [{
//     type: 'prompt',
//     name: 'livereloadPort',
//     message: 'Which port should we use for livereload?',
//     'default': '35740'
//   }, {
//     type: 'prompt',
//     name: 'connectPort',
//     message: 'Which port should we use for serving the development app?',
//     'default': '9001'
//   }];

//   this.prompt(prompts, function (props) {
//     this.livereloadPort = props.livereloadPort;
//     this.connectPort = props.connectPort;

//     cb();
//   }.bind(this));
// };

TrabianWebappGenerator.prototype.buildTools = function () {

  this.copy('_package.json', 'package.json');

  this.template('_Gruntfile.coffee', 'Gruntfile.coffee');

  this.template('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');

};

TrabianWebappGenerator.prototype.app = function () {

  this.template('_index.html', 'public/index.html');

  this.directory('client/app', 'client/app');
  this.directory('test', 'test');

};

TrabianWebappGenerator.prototype.styles = function () {

  this.copy('Gemfile', 'Gemfile')
  this.directory('client/sass', 'client/sass');

};

TrabianWebappGenerator.prototype.configFiles = function () {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
};
