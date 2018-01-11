import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../bench_actions';
import * as ApiUtil from '../../util/bench_api_util';

import { testBenches } from '../../testUtil/bench_helper';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// wouldn't we want to have the string that the action creator has as its type instead of calling 
// that action creator itself?
describe('actions', () => {
  test('receiveBenches should create an action to receive benches', () => {
    
    const expectedAction = {
      type: actions.RECEIVE_BENCHES,
      // type: "RECEIVE_BENCHES", // or actions.receiveBenches ? isn't this like comparing the action to itself?
      // NO, because this is just calling the constant that is set to the string, not the action itself
      benches: testBenches
    }
    
    expect(actions.receiveBenches(testBenches)).toEqual(expectedAction);
  })
});

describe('async actions', () => {

  test('fetchBenches creates RECEIVE_BENCHES after fetching benches', () => {
    // Set up expectedActions:
    const expectedActions = [
      {
        type: actions.RECEIVE_BENCHES,
        benches: testBenches,
      },
    ];

    ApiUtil.fetchBenches = jest.fn(() => {
      return Promise.resolve(testBenches);
    });

    const store = mockStore({ benches: {} });

    return store.dispatch(actions.fetchBenches()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


// from the docs
// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.reset()
//     fetchMock.restore()
//   })
// 
//   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     fetchMock
//       .getOnce('/todos', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })
// 
// 
//     const expectedActions = [
//       { type: types.FETCH_TODOS_REQUEST },
//       { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
//     ]
//     const store = mockStore({ todos: [] })
// 
//     return store.dispatch(actions.fetchTodos()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Explanation of what Promise.resolve does:

// var promise1 = Promise.resolve([1, 2, 3]);

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: Array [1, 2, 3]
// });