
const INTEGER_MIN = -2147483648;
const INTEGER_MAX = 2147483647;

const generateIntegerTests = () => {
  return [
    {
      testCase: 'Below minimum',
      value: INTEGER_MIN - 1,
      expected: 'Invalid'
    },
    {
      testCase: 'Minimum',
      value: INTEGER_MIN,
      expected: 'Valid'
    },
    {
      testCase: 'Just above minimum',
      value: INTEGER_MIN + 1,
      expected: 'Valid'
    },
    {
      testCase: 'Just below maximum',
      value: INTEGER_MAX - 1,
      expected: 'Valid'
    },
    {
      testCase: 'Maximum',
      value: INTEGER_MAX,
      expected: 'Valid'
    },
    {
      testCase: 'Above maximum',
      value: INTEGER_MAX + 1,
      expected: 'Invalid'
    }
  ];
};

export default generateIntegerTests;
