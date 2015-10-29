/*global describe, beforeEach, it*/
'use strict';

var path    = require('path'),
    helpers = require('yeoman-generator').test,
    assert = require('yeoman-assert'),
    fs = require('fs'),
    os = require('os');


describe('deployd generator', function () {

  var prompts = {
      'angular': true,
      'bootstrap': true,
      'sample': true
  };
    beforeEach(function (done) {
      helpers.run(path.join(__dirname, '../app'))

  		// Clear the directory and set it as the CWD
  		.inDir(path.join(os.tmpdir(), './temp-test'))

  		// Mock options passed in
  		.withOptions({
  			'skip-install': true
  		})

  		// Mock the prompt answers
  		.withPrompts(prompts)

  		.on('end', done);

    });

    it('creates expected files with angular', function () {
        var expected = [

            ['public/app/app.js',/temptestApp/],
            ['public/app/controller.js', /awesomeThings/],
            ['public/app/views/main.html', /generated/],
            ['public/index.html', /angularjs/],
            ['public/index.html', /bootstrap/],
            ['public/index.html', /<title>tempTest<\/title>/],
            ['README.md',/# temp/]

        ];

        var expectedFiles = [

          'package.json',
          'bower.json',
          '.bowerrc',
          '.gitignore',
          'resources/things/config.json',
          '.dpd/pids/mongod',
          'app.dpd'
        ];
        assert.fileContent(expected);
        assert.file(expectedFiles);
    });

    it('should have a valid bower.json file', function() {
      JSON.parse(fs.readFileSync('bower.json'));
    });

    it('should have a valid package.json file', function() {
      JSON.parse(fs.readFileSync('package.json'));
    });
});
