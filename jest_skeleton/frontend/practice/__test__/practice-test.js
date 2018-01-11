import { 
  sum, 
  screamify 
} from '../practice';

describe('sum', () => {
  test('adds two inputs correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});