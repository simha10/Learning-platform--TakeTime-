import { Github, Linkedin, Instagram } from 'lucide-react';

export function FounderSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Founder</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The visionary behind our learning platform
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-fade-in border border-gray-700">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <img
                  src="/images/founder.jpg"
                  alt="Simhachalam Mandapudi"
                  className="w-32 h-32 rounded-full border-4 border-gray-800 object-cover"
                />
              </div>
            </div>

            <div className="pt-16 pb-8 px-6 text-center">
              <h3 className="text-2xl font-bold text-white">Simhachalam Mandapudi</h3>
              <p className="text-lg text-blue-400 mb-4">Founder & CEO</p>

              <p className="text-gray-300 mb-6">
                A passionate tech enthusiast and developer with some experience in
                transforming education through technology. Committed to making quality education
                accessible to learners worldwide.
              </p>

              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/this_is_simha__4__/" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://github.com/simha10/simha10" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}