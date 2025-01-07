import { useState } from 'react';
import { domains } from './data/domains';
import { SearchBar } from './components/SearchBar';
import { DomainGrid } from './components/DomainGrid';
import { Welcome } from './components/Welcome';
import { InternshipSection } from './components/internships/InternshipSection';
import { ContactSection } from './components/ContactSection';
import { FounderSection } from './components/FounderSection';
import { NavigationBar } from './components/Navigation/NavigationBar';
import { GraduationCap } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDomains = domains.filter(domain =>
    domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    domain.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDomainClick = (domain) => {
    console.log('Selected domain:', domain);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      
      <header id="home" className="bg-white shadow-sm animate-slide-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Learning Platform</h1>
            </div>
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
      </header>

      <main>
        <Welcome />
        
        <div id="domains" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">
            Explore Learning Paths
          </h2>
          <DomainGrid 
            domains={filteredDomains}
            onDomainClick={handleDomainClick}
          />
        </div>

        <div id="internships">
          <InternshipSection />
        </div>
        
        <div id="founder">
          <FounderSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}