import { MapPin, Clock, DollarSign, ExternalLink } from 'lucide-react';

export function InternshipCard({ internship }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{internship.position}</h3>
          <p className="text-gray-600 font-medium">{internship.company}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>{internship.duration}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-2" />
          <span>{internship.stipend}</span>
        </div>
      </div>

      <a
        href={internship.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md 
          text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
      >
        Apply Now
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}