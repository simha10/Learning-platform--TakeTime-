export function NavLink({ href, children }) {
  const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href={href}
      onClick={scrollToSection}
      className="text-gray-300 hover:text-blue-500 px-4 py-2 text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}