/**
 * External dependencies
 */
var assert = require( 'chai' ).assert;

/**
 * Internal dependencies
 */
var actions = require( './lib/mock-actions' );

require( 'lib/react-test-env-setup' )();

describe( 'Happiness engineers Store', function() {
	var Dispatcher, HappinessEngineersStore;

	beforeEach( function() {
		Dispatcher = require( 'dispatcher' );
		HappinessEngineersStore = require( 'lib/happiness-engineers/store' );
	} );

	it( 'Store should be an object', function() {
		assert.isObject( HappinessEngineersStore );
	} );

	it( 'Store should have method getHappinessEngineers', function() {
		assert.isFunction( HappinessEngineersStore.getHappinessEngineers );
	} );

	describe( 'Get Happiness Engineers', function() {
		it( 'Should return empty array when there are no happiness engineers', function() {
			var happinessEngineers = HappinessEngineersStore.getHappinessEngineers();

			assert( Array.isArray( happinessEngineers ), 'happiness engineers is an array' );
			assert( 0 === happinessEngineers.length, 'happiness engineers is empty' );
		} );

		it( 'Should return an array of happiness engineers when there are happiness engineers', function() {
			var happinessEngineers;

			Dispatcher.handleServerAction( actions.fetchedHappinessEngineers );
			happinessEngineers = HappinessEngineersStore.getHappinessEngineers();

			assert( Array.isArray( happinessEngineers ), 'happiness engineers is an array' );
			assert.isObject( happinessEngineers[ 0 ] );
		} );
	} );
} );
