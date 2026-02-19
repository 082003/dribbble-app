 import { Twitter, Facebook, Instagram, Disc as Discord } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { title: "For designers", links: ["Inspiration", "Hire talent", "Advertising", "Blog", "About", "Careers", "Support"] },
  ];

  const socialIcons = [
    { Icon: Twitter, link: "#" },
    { Icon: Facebook, link: "#" },
    { Icon: Instagram, link: "#" },
    { Icon: Discord, link: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tighter italic">Dribbble</h2>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {footerLinks[0].links.map((link) => (
            <a key={link} href="#" className="text-sm font-semibold text-gray-800 hover:text-pink-500 transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-16 text-gray-800">
          {socialIcons.map(({ Icon, link }, index) => (
            <a key={index} href={link} className="hover:text-pink-500 transition-colors">
              <Icon size={20} strokeWidth={2.5} />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500 gap-4">
          <p>© 2026 Dribbble</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
          <p>Jobs · Designers · Freelancers · Tags · Places · Resources</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;