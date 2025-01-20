import React, { useState } from 'react';
import { Search } from 'lucide-react';
import jsonData from '../data/liftlist.json';

const SearchList = () => {
  // Sample data - replace with your JSON data
  const items = jsonData.items;

  const [searchTerm, setSearchTerm] = useState('');

  // Filter items based on search term
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
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Results Box */}
      <div className="w-full border rounded-lg shadow-sm">
        <div className="h-96 overflow-y-auto">
          <div className="p-4">
            {filteredItems.length === 0 ? (
              <p className="text-center text-gray-500">No items found</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {filteredItems.map(item => (
                  <li key={item.id} className="py-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;