import { Rocket, Target, BookOpen, Users } from 'lucide-react';

export function Welcome() {
  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: "Structured Learning Paths",
      description: "Follow carefully curated roadmaps designed to take you from beginner to professional"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      title: "Comprehensive Resources",
      description: "Access high-quality learning materials, tutorials, and practical exercises"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Community Driven",
      description: "Learn alongside peers and get guidance from experienced developers"
    },
    {
      icon: <Rocket className="h-6 w-6 text-blue-500" />,
      title: "Career Ready",
      description: "Build real-world projects and develop skills that employers are looking for"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-white mb-4 animate-float">
            Your Journey to Tech Excellence Starts Here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-right">
            Navigate your learning journey with confidence. Our platform provides structured paths, 
            expert-curated resources, and practical guidance to help you achieve your tech career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 stagger-animation">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover-scale border border-gray-700"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg mb-4 mx-auto animate-rotate-in">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}