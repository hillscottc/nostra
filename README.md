[![NPM](https://nodei.co/npm/nostra.png)](https://nodei.co/npm/nostra/)[![Build Status](https://travis-ci.org/hillscottc/nostra.svg?branch=master)](https://travis-ci.org/hillscottc/nostra)[![Coverage Status](https://coveralls.io/repos/hillscottc/nostra/badge.svg?branch=master&service=github)](https://coveralls.io/github/hillscottc/nostra?branch=master)

Nostra
=========

Generates random-ish fortune-teller text. 

## Installation

    npm install nostra

## Usage

    var nostra = require('nostra');

    var fortune = nostra.generate();
  
## Tests

Components:
- [Mocha](https://mochajs.org/) JavaScript test framework.
- [Travis CI](https://travis-ci.org/) for continuous integration.
- [Istanbul](http://gotwarlost.github.io/istanbul/) and [Coveralls](https://coveralls.io/) for code coverage.

    
## ES6 -- Publishing to npm handled by configuring the package.json file
- See `build` and `prepublish` (which calls build) in the `scripts` section.
- The .npmignore file contains the `src` dir -- it doesn't get published to npm.
- The .gitignore file contains the `dist` dir -- it doesn't get saved to git

## ES6 -- Testing
- The test file should call the files in the `dist` directory, not the `src`.
- See `test` in the `scripts` section -- make sure it builds before it runs the tests.

### Resources
- [test coverage with es6](https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/)
- [writing npm packages with es6](http://jamesknelson.com/writing-npm-packages-with-es6-using-the-babel-6-cli/)
- [how to publish es6 npm modules](https://booker.codes/how-to-build-and-publish-es6-npm-modules-today-with-babel/)


## Notes
- Adapted from Michael Sproul's python [Horoscope Generator](https://github.com/michaelsproul/bullshit). 


    
