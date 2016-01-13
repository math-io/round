'use strict';

// MODULES //

var test = require( 'tape' );
var round = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof round === 'function', 'main export is a function' );
	t.end();
});

test( 'the function rounds a numeric value to the nearest integer', function test( t ) {
	t.equal( round( -4.2 ), -4, 'equals -4' );
	t.equal( round( -4.5 ), -4, 'equals -4' );
	t.equal( round( 4.2 ), 4, 'equals 4' );
	t.equal( round( 9.99999 ), 10, 'equals 10' );
	t.equal( round( 9.5 ), 10, 'equals 10' );
	t.equal( round( 9.4 ), 9, 'equals 10' );
	t.equal( round( 0 ), 0, 'equals 0' );
	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = round( NaN );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});

test( 'the function returns `+infinity` if provided a `+infinity`', function test( t ) {
	var val = round( Number.POSITIVE_INFINITY );
	t.equal( val, Number.POSITIVE_INFINITY, 'returns +infinity' );
	t.end();
});

test( 'the function returns `-infinity` if provided a `-infinity`', function test( t ) {
	var val = round( Number.NEGATIVE_INFINITY );
	t.equal( val, Number.NEGATIVE_INFINITY, 'returns -infinity' );
	t.end();
});
