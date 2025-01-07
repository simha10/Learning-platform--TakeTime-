import { useState } from 'react';
import { internships } from '../../data/internships';
import { InternshipCard } from './InternshipCard';
import { Briefcase } from 'lucide-react';

export function InternshipSection() {
  const [selectedDomain, setSelectedDomain] = useState(Object.keys(internships)[0]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-8 w-8 text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">
              Available Internships
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kickstart your career with hands-on experience at top companies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(internships).map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${selectedDomain === domain
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships[selectedDomain].map((internship, index) => (
            <InternshipCard
              key={`${internship.company}-${index}`}
              internship={internship}
            />
          ))}
        </div>
      </div>
    </section>
  );
}