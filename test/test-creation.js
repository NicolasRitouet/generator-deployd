/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('deployd generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('deployd:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files with angular', function (done) {
        var expected = [

            ['public/app/app.js',/tempApp/],
            ['public/index.html', /angularjs/],
            ['public/index.html', /bootstrap/],
            ['public/index.html', /<title>Temp<\/title>/],
            '.dpd/pids/mongod',
            'app.dpd',
            ['README.md',/# Temp/],
            'package.json',
            'bower.json',
            '.bowerrc',
            '.gitignore'
        ];

        helpers.mockPrompt(this.app, {
            'angular': true,
            'bootstrap3': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
