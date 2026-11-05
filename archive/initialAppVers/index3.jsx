
import React, { useState } from 'react';
import MenuDropdown from '../../src/ui/MenuDropdown/index.jsx';
import generateIntegerTests from '../../src/generators/integerGenerator.js';
import exportToTxt from '../../src/exporters/txtExporter.js';

const DataTypeDropdown = () => {
    const [selectedType, setSelectedType] = useState('Integer');
    const [testCases, setTestCases] = useState([]);

    const [lowerBoundary, setLowerBoundary] = useState('-2147483648');
    const [upperBoundary, setUpperBoundary] = useState('2147483647');

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

    //generate the test cases for the selected data type func (only has int)
    const handleGenerate = () => {
    if (selectedType === 'Integer') {
        const generatedTests = generateIntegerTests();
        setTestCases(generatedTests);
    } else {
        setTestCases([]);
        alert(`I didn't make ${selectedType} yet.`);
    }
    };

    //export the generated test cases func
    const handleExport = () => {
    if (testCases.length > 0) {
        exportToTxt(testCases, selectedType);
    }
    };

    return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#cccccc] p-8">

        <header className="mb-4">
        <h1 className="text-xl font-semibold tracking-tight text-[#e0e0e0]">
            Test Data Generator
        </h1>

        <p className="text-xs text-[#999999] mt-2">
            Generate test data using equivalence partitioning
            and boundary value analysis.
        </p>
        </header>

        {/*main */}
        <main className="max-w-5xl">

        {/*data type selection */}
        <section
        className={`bg-[#222224] border border-[#333333] p-4 ${
            testCases.length > 0
            ? 'rounded-t-md rounded-b-none border-b-0'
            : 'rounded-md'
        }`}
        >



        <div className="flex w-full items-end gap-6">

        <div className="flex flex-col gap-1">
        
        <h2 className="text-sm font-semibold text-[#dddddd] mb-3">
            Data type
        </h2>

            {/*dropdown */}
            <MenuDropdown
            items={items}
            selectedItemId={selectedType}
            placement="bottom-end"
            showTickMark={true}
            >
            <div
                className="inline-flex items-center gap-3 cursor-pointer select-none bg-[#222224] border border-[#444444] hover:border-[#666666] rounded-md px-3 py-2 transition-colors"
                aria-label={`Data type: ${selectedType}`}
            >
                <span className="text-[#cccccc]">
                {selectedType}
                </span>



                <span className="text-[#aaaaaa]">
                ⌄
                </span>
            </div>
            </MenuDropdown>
            </div>

            {/*============ the lower boundary =============== */}
            <div className="flex flex-col gap-1">
            <h2 className="text-sm font-semibold text-[#dddddd] mb-3">
                Lower boundary
            </h2>

            <input
                id="lowerBoundary"
                type="number"
                value={lowerBoundary}
                onChange={(e) => setLowerBoundary(e.target.value)}
                placeholder="Enter lower boundary"
                className="w-40 bg-[#1e1e1e] border border-[#444444] rounded-md px-3 py-2 text-sm text-[#cccccc] outline-none focus:border-[#e4ae48] transition-colors"
            />
            </div>
            

            {/*============ the upper boundary ===============  */}
            <div className="flex flex-col gap-1">
            <h2 className="text-sm font-semibold text-[#dddddd] mb-3">
                Upper boundary
            </h2>


            <input
                id="upperBoundary"
                type="number"
                value={upperBoundary}
                onChange={(e) => setUpperBoundary(e.target.value)}
                placeholder="Enter upper boundary"
                className="w-40 bg-[#1e1e1e] border border-[#444444] rounded-md px-3 py-2 text-sm text-[#cccccc] outline-none focus:border-[#e4ae48] transition-colors"
            />
            </div>

            {/*generate button */}
            <button
            onClick={handleGenerate}
            className="px-4 py-2 ml-auto rounded-md text-sm font-medium bg-[#e4ae48] text-[#222224] hover:bg-[#e2a83c] transition-colors cursor-pointer"
            >
            Generate
            </button>

        </div>
        </section>

        {/*results */}
        {testCases.length > 0 && (
            <section className="bg-[#222224] border border-[#333333] rounded-b-md rounded-t-none overflow-hidden">

            {/*header */}
            <div className="px-4 py-3 border-b border-[#333333]">
                <h2 className="text-sm font-semibold text-[#dddddd]">
                Generated test cases
                </h2>

                <p className="text-xs text-[#999999] mt-1">
                {testCases.length} test cases generated
                </p>
            </div>

            {/*results table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">

                <thead className="bg-[#26292b] text-[#aaaaaa]">
                    <tr>
                    <th className="px-4 py-3 font-medium">
                        Test case
                    </th>

                    <th className="px-4 py-3 font-medium">
                        Value
                    </th>

                    <th className="px-4 py-3 font-medium">
                        Expected result
                    </th>
                    </tr>
                </thead>

                <tbody>
                    {testCases.map((test, index) => (
                    <tr
                        key={index}
                        className="border-t border-[#333333] hover:bg-[#26292b] transition-colors"
                    >
                        <td className="px-4 py-3 text-[#cccccc]">
                        {test.testCase}
                        </td>

                        <td className="px-4 py-3 font-mono text-[#e4ae48]">
                        {test.value}
                        </td>

                        <td className="px-4 py-3 text-[#aaaaaa]">
                        {test.expected}
                        </td>
                    </tr>
                    ))}
                </tbody>

                </table>
            </div>

            {/*export action */}
            <div className="p-4 border-t border-[#333333]">
                <button
                onClick={handleExport}
                className="px-4 py-2 rounded-md text-sm border border-[#555555] text-[#cccccc] hover:bg-[#2b2b2e] hover:border-[#777777] transition-colors cursor-pointer"
                >
                Export TXT
                </button>
            </div>

            </section>
        )}

        </main>
    </div>
    );
};

export default DataTypeDropdown;
