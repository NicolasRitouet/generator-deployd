# generator-deployd [![Build Status](https://secure.travis-ci.org/NicolasRitouet/generator-deployd.png?branch=master)](https://travis-ci.org/NicolasRitouet/generator-deployd)

A generator for [Yeoman](http://yeoman.io).

## Notes about generator-deployd
Early alpha phase, use at your own risk!

Currently, it doesn't do more than "dpd create", but I plan to have more options with this generator (angularjs, bootstrap, Grunt tasks, etc...).

Yet, this only works if you [install the Deployd binaries from the deployd website](http://deployd.com/download.html), but I assure you, it's worth it!

## Usage
### Generate the app
```
$ npm install -g yo generator-deployd
$ mkdir name_of_your_app && cd $_
$ yo deployd
```

### Start the app
```
dpd -d
```

## Todo
- integrate Grunt to launch the server using [grunt-deployd](https://github.com/taras/grunt-deployd)
- integrate angularjs
- integrate bootstrap 3
- create grunt tasks for live reloading, jshint, build, etc...