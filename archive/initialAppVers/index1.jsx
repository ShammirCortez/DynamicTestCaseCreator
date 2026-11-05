
import React, { useState } from 'react';
import MenuDropdown from '../../src/ui/MenuDropdown/index.jsx';


const DataTypeDropdown = () => {
  const [selectedType, setSelectedType] = useState('Integer');

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
    onClick: () => setSelectedType(type)
  }));

  return (
    <div>
      <MenuDropdown
        items={items}
        selectedItemId={selectedType}
        placement="bottom-end"
        showTickMark={true}
      >
        <div
          className="flex items-center cursor-pointer select-none bg-[#222224] border border-[#444] rounded-md px-3 py-2"
          aria-label={`Data type: ${selectedType}`}
        >
          <span>{selectedType}</span>
          <span className="ml-1">⌄</span>
        </div>
      </MenuDropdown>
    </div>
  );
};

export default DataTypeDropdown;
