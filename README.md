# generator-deployd [![Build Status](https://secure.travis-ci.org/NicolasRitouet/generator-deployd.png?branch=master)](https://travis-ci.org/NicolasRitouet/generator-deployd) [![NPM](https://nodei.co/npm/generator-deployd.png?compact=true)](https://nodei.co/npm/generator-deployd/)

## Description
A [Yeoman](http://yeoman.io) generator for [Deployd](http://deployd.com/).

__Early alpha phase, use at your own risk!__

Don't hesitate to [fill an issue](https://github.com/NicolasRitouet/generator-deployd/issues/new) if you find a bug or need a feature. Pull requests also gladly accepted!

## Usage
### Generate your app
```
$ npm install -g yo generator-deployd
$ mkdir name_of_your_app && cd $_
$ yo deployd
```

### Start the app using Deployd binaries
```
$ dpd -d
```

### Start the app using Grunt
#### Requirements
 - MongoDB (set the host, port, dbname and credentials in Gruntfile.js)  

```
$ grunt server
```
This will launch you deployd API, open the start page and watch the files.

## Changelog
- [0.0.6](https://github.com/NicolasRitouet/generator-deployd/releases/tag/0.0.6)
	- Update dependencies and improve tests
- [0.0.5](https://github.com/NicolasRitouet/generator-deployd/releases/tag/0.0.5)
  - Add (optional) sample angular/deployd app

## Todo
- Grunt: complete integration of grunt-deployd (start of deployd simultaneously with a server-side app)
- Grunt: real livereloading
- Grunt: build task (uglify, concat, jshint)
- Grunt: test task
- Improve angularjs integration (angular template more complete)
