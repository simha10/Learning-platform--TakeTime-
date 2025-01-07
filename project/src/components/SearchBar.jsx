import { Search } from 'lucide-react';

export function SearchBar({ onSearch }) {
  return (
    <div className="relative max-w-md w-full animate-slide-in">
      <input
        type="text"
        placeholder="Search domains..."
        className="w-full px-4 py-2 pl-10 pr-4 rounded-lg bg-gray-800 border border-gray-700 
          text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-300"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}