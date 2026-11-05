const INTEGER_MIN = -2147483648;
const INTEGER_MAX = 2147483647;

const generateIntegerTests = (lowerBoundary = '', upperBoundary = '') => {
  //the six Integer data type boundary tests
  const testCases = [
    {
      testCase: 'Below Integer minimum',
      value: INTEGER_MIN - 1,
      expected: 'Invalid'
    },
    {
      testCase: 'Integer minimum',
      value: INTEGER_MIN,
      expected: 'Valid'
    },
    {
      testCase: 'Just above Integer minimum',
      value: INTEGER_MIN + 1,
      expected: 'Valid'
    },
    {
      testCase: 'Just below Integer maximum',
      value: INTEGER_MAX - 1,
      expected: 'Valid'
    },
    {
      testCase: 'Integer maximum',
      value: INTEGER_MAX,
      expected: 'Valid'
    },
    {
      testCase: 'Above Integer maximum',
      value: INTEGER_MAX + 1,
      expected: 'Invalid'
    }
  ];

  //the application boundary tests if the user put in custom boundaries
  const hasCustomBoundaries =
    lowerBoundary !== '' && upperBoundary !== '';

  const usesFullIntegerRange =
    lowerBoundary === INTEGER_MIN &&
    upperBoundary === INTEGER_MAX;

  if (hasCustomBoundaries && !usesFullIntegerRange) {
    testCases.push(
      {
        testCase: 'Below application minimum',
        value: lowerBoundary - 1,
        expected: 'Invalid'
      },
      {
        testCase: 'Application minimum',
        value: lowerBoundary,
        expected: 'Valid'
      },
      {
        testCase: 'Just above application minimum',
        value: lowerBoundary + 1,
        expected: 'Valid'
      },
      {
        testCase: 'Just below application maximum',
        value: upperBoundary - 1,
        expected: 'Valid'
      },
      {
        testCase: 'Application maximum',
        value: upperBoundary,
        expected: 'Valid'
      },
      {
        testCase: 'Above application maximum',
        value: upperBoundary + 1,
        expected: 'Invalid'
      }
    );
  }

  return testCases;
};

export default generateIntegerTests;