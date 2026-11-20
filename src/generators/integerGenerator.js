const INTEGER_MIN = -2147483648;
const INTEGER_MAX = 2147483647;

const generateIntegerTests = (lowerBoundary = '', upperBoundary = '') => {
  //check if the user put in custom boundaries
  const hasCustomBoundaries =
    lowerBoundary !== '' && upperBoundary !== '';

  const usesFullIntegerRange =
    lowerBoundary === INTEGER_MIN &&
    upperBoundary === INTEGER_MAX;

  //the range of values the application accepts
  //custom boundaries if the user set them, otherwise the full Integer range
  const validMin = hasCustomBoundaries ? lowerBoundary : INTEGER_MIN;
  const validMax = hasCustomBoundaries ? upperBoundary : INTEGER_MAX;

  //a value is Valid if it's inside the accepted range, Invalid if not
  const getExpected = (value) =>
    value >= validMin && value <= validMax ? 'Valid' : 'Invalid';

  //the six Integer data type boundary tests
  const testCases = [
    {
      testCase: 'Below Integer minimum',
      value: INTEGER_MIN - 1
    },
    {
      testCase: 'Integer minimum',
      value: INTEGER_MIN
    },
    {
      testCase: 'Just above Integer minimum',
      value: INTEGER_MIN + 1
    },
    {
      testCase: 'Just below Integer maximum',
      value: INTEGER_MAX - 1
    },
    {
      testCase: 'Integer maximum',
      value: INTEGER_MAX
    },
    {
      testCase: 'Above Integer maximum',
      value: INTEGER_MAX + 1
    }
  ];

  //the application boundary tests if the user put in custom boundaries
  if (hasCustomBoundaries && !usesFullIntegerRange) {
    testCases.push(
      {
        testCase: 'Below application minimum',
        value: lowerBoundary - 1
      },
      {
        testCase: 'Application minimum',
        value: lowerBoundary
      },
      {
        testCase: 'Just above application minimum',
        value: lowerBoundary + 1
      },
      {
        testCase: 'Just below application maximum',
        value: upperBoundary - 1
      },
      {
        testCase: 'Application maximum',
        value: upperBoundary
      },
      {
        testCase: 'Above application maximum',
        value: upperBoundary + 1
      }
    );
  }

  //add the expected result to every test case based on its value
  return testCases.map((test) => ({
    ...test,
    expected: getExpected(test.value)
  }));
};

export default generateIntegerTests;