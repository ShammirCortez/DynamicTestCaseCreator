
import React, { useState } from 'react';
import MenuDropdown from '../../src/ui/MenuDropdown/index.jsx';
import generateIntegerTests from '../../src/generators/integerGenerator.js';
import exportToTxt from '../../src/exporters/txtExporter.js';

const DataTypeDropdown = () => {
  const [selectedType, setSelectedType] = useState('Integer');
  const [testCases, setTestCases] = useState([]);

  const dataTypes = [
    'Integer',
    'Double',
    'Long',
    'Float',
    'Short',
    'Byte',
    'Boolean',
    'String',
    'Character'
  ];

  const items = dataTypes.map((type) => ({
    id: type,
    label: type,
    onClick: () => {
      setSelectedType(type);
      setTestCases([]);
    }
  }));

  const handleGenerate = () => {
    if (selectedType === 'Integer') {
      const generatedTests = generateIntegerTests();
      setTestCases(generatedTests);
    } else {
      setTestCases([]);
      alert(`I didn't make ${selectedType} yet.`);
    }
  };

  const handleExport = () => {
    if (testCases.length > 0) {
      exportToTxt(testCases, selectedType);
    }
  };

  return (
    <div className="space-y-6">

      {/*datatype dropdown */}
      <div>
        <h2 className="mb-2 text-lg font-semibold">
          Select data type
        </h2>

        <MenuDropdown
          items={items}
          selectedItemId={selectedType}
          placement="bottom-end"
          showTickMark={true}
        >
          <div className="flex items-center cursor-pointer select-none bg-[#222224] border border-[#444] rounded-md px-3 py-2">
            <span>{selectedType}</span>
            <span className="ml-2">⌄</span>
          </div>
        </MenuDropdown>
      </div>

      {/*generate button */}
      <button
        onClick={handleGenerate}
        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 cursor-pointer"
      >
        Generate
      </button>

      {/*generated test cases */}
      {testCases.length > 0 && (
        <div className="space-y-3">

          <h2 className="text-lg font-semibold">
            Generated Integer test cases
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#333]">
                  <th className="border border-[#555] p-2 text-left">
                    Test case
                  </th>
                  <th className="border border-[#555] p-2 text-left">
                    Value
                  </th>
                  <th className="border border-[#555] p-2 text-left">
                    Expected result
                  </th>
                </tr>
              </thead>

              <tbody>
                {testCases.map((test, index) => (
                  <tr key={index}>
                    <td className="border border-[#555] p-2">
                      {test.testCase}
                    </td>
                    <td className="border border-[#555] p-2">
                      {test.value}
                    </td>
                    <td className="border border-[#555] p-2">
                      {test.expected}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/*export button */}
          <button
            onClick={handleExport}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 cursor-pointer"
          >
            Export TXT
          </button>

        </div>
      )}

    </div>
  );
};

export default DataTypeDropdown;
