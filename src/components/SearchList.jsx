import React, { useState } from 'react';
import { Search } from 'lucide-react';
import jsonData from '../data/liftlist.json';

const SearchList = () => {
  const items = jsonData.items;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleCheckboxChange = (itemId) => {
    setSelectedItems(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(itemId)) {
        newSelected.delete(itemId);
      } else {
        newSelected.add(itemId);
      }
      return newSelected;
    });
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Lift Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Scrollable Results Box */}
      <div className="w-full bg-white rounded-md">
        <div className="h-96 overflow-y-auto">
          <div className="p-4">
            {filteredItems.length === 0 ? (
              <p className="text-center text-gray-500">No items found</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {filteredItems.map(item => (
                  <li 
                    key={item.id} 
                    className="py-4 px-3 hover:bg-gray-50 transition-colors duration-150 rounded-md -mx-3"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="pt-1">
                        <input
                          type="checkbox"
                          checked={selectedItems.has(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium font-exo2 text-black">{item.name}</h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      {/* Optional: Display selected items count */}
      <div className="text-sm text-center text-gray-600">
        Selected items: {selectedItems.size}
      </div>
    </div>
  );
};

export default SearchList;