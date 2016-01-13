Round
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Rounds a numeric value to the nearest integer.


## Installation

``` bash
$ npm install math-round
```


## Usage

``` javascript
var round = require( 'math-round' );
```

#### round( x )

Rounds a `numeric` value to the nearest `integer`.

``` javascript
var val = round( -4.2 );
// returns -4

val = round( -4.5 );
// returns -4

val = round( -4.6 );
// returns -5

val = round( 9.99999 );
// returns 10

val = round( 9.5 );
// returns 10

val = round( 9.2 );
// returns 9

val = round( 0 );
// returns 0
```


## Examples

``` javascript
var round = require( 'math-round' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	console.log( 'Value: %d. Rounded: %d.', x, round( x ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-round.svg
[npm-url]: https://npmjs.org/package/math-round

[build-image]: http://img.shields.io/travis/math-io/round/master.svg
[build-url]: https://travis-ci.org/math-io/round

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/round/master.svg
[coverage-url]: https://codecov.io/github/math-io/round?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/round.svg
[dependencies-url]: https://david-dm.org/math-io/round

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/round.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/round

[github-issues-image]: http://img.shields.io/github/issues/math-io/round.svg
[github-issues-url]: https://github.com/math-io/round/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
