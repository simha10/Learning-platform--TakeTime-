import { ArrowRight, Link as LinkIcon } from 'lucide-react';

export function DomainCard({ domain, onClick, index }) {
  return (
    <div 
      className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700
        hover-scale animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={domain.imageUrl} 
          alt={domain.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 animate-slide-right">{domain.title}</h3>
        <p className="text-gray-300 mb-4">{domain.description}</p>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => onClick(domain)}
            className="flex items-center text-blue-400 hover:text-blue-500 transition-colors duration-200
              group animate-pulse-slow"
          >
            <span>Explore path</span>
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 
              group-hover:translate-x-1" />
          </button>
          
          {domain.roadmapUrl && (
            <a
              href={domain.roadmapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200 animate-float"
            >
              <LinkIcon className="h-4 w-4 mr-1" />
              <span>Roadmap</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}