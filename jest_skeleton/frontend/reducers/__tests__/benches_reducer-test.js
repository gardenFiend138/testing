import BenchesReducer from '../benches_reducer';
import { testBenches } from '../../testUtil/bench_helper';
import * as BenchActions from '../../actions/bench_actions';

/*
note: Our frontend state shape looks like this:
{
  benches: {
    1: {
        id: 1,
        description: "...",
        lat: 0.0,
        lng: 0.0
      },
    2: {
      id: 2,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    ...
  }
  ...
}
*/

// passing undefined for the state in BenchesReducer, then pass it an object (dummy action); could also 
// pass in an object with a key type: that is not a real type of action
describe('BenchesReducer', () => {

  test('should initialize with an empty object as the default state', () => {
    expect(BenchesReducer(undefined, {})).toEqual({});
  });

  describe('handling the RECEIVE_BENCHES action', () => {
    let action;
// this is similar to RSpec -- it runs this block of code before each test case runs
    beforeEach(() => {
      action = {
        type: BenchActions.RECEIVE_BENCHES,
        benches: testBenches
      }
      
      let oldState = { 1: 'oldState' };
      
      // don't do this (below); it depends on the action creator being correctly written; not a good 
      // unit test
      // Set up the action that will be passed into the reducer:
      // const receiveBenches = testBenches => ({
      //   type: RECEIVE_BENCHES,
      //   testBenches
      // });
    });

    test('should replace the state with the action\'s benches', () => {
      expect(BenchesReducer(undefined, action)).toEqual(testBenches);
      
      // just like above in the 'beforeEach', this relies on the action creator being correctly implemented;
      // prefer the above approach;
      // expect(BenchesReducer(undefined, BenchActions.receiveBenches(testBenches))).toEqual(testBenches);
    });

    test('should not modify the old state', () => {
      BenchesReducer(oldState, action);
      expect(oldState).toEqual({ 1: 'oldState' });
    });
  });
});
