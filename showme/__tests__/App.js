import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const expect = require("chai").expect;

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});

describe('Example test', function () {
	it('should return true if 2 (integer) is equal 2 (integer).', function () {
		expect(2).to.equal(23);
	});
});