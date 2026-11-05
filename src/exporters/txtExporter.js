
const exportToTxt = (testCases, dataType) => {
  //content of the txt file to be exported
  //... = spread syntax to iterate through the testCases array and create a string for each test case
  const content = [
    `Test Data: ${dataType}`,
    '==============================',
    '',
    ...testCases.map((test, index) => (
      `Test Case ${index + 1}\n` +
      `Description: ${test.testCase}\n` +
      `Value: ${test.value}\n` +
      `Expected: ${test.expected}\n`
    ))
  ].join('\n'); //combine the array into a string but with new line between em

  //binary large object to have a file as an obj
  const blob = new Blob([content], {
    type: 'text/plain;charset=utf-8'
  });

  //url for the blob
  const url = URL.createObjectURL(blob);
  //clickable link for the blob
  const link = document.createElement('a');

  //give the link the blob url
  link.href = url;
  //filename
  link.download = `${dataType.toLowerCase()}-test-cases.txt`;
  //click of the download link
  link.click();

  //get rid of the blob url after download
  URL.revokeObjectURL(url);
};

export default exportToTxt;
