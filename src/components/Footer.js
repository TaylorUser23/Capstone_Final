// Footer Component
import footerLogo from '../assets/footer-logo.png';

const Footer = () => {
  const footerSections = [
    {
      title: 'Navigation',
      links: ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login']
    },
    {
      title: 'Contact',
      links: ['Address', 'Phone number', 'Email']
    },
    {
      title: 'Social Media Links',
      links: ['Facebook', 'Instagram', 'Twitter']
    }
  ];

  return (
    <footer className="bg-yellow-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-start">
            <img 
              src={footerLogo} 
              alt="Little Lemon Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-gray-800 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#top" className="text-gray-600 hover:text-green-700 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;