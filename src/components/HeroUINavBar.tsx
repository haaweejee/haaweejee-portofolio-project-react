
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@heroui/react";
import PrimaryButton from "./widget/PrimaryButton";

export const AcmeLogo = () => {
  return (
    <div className="text-[1.4rem] font-bold text-[#fff]">
        <span>Haaw</span>
        <span className="text-[#3498db]">eejee</span>
        <span className="text-[#3498db] text-[1.5rem]">.</span>
      </div>
  );
};

// Custom Material Design Hamburger Menu Icon
const BurgerMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 cursor-pointer">
      <div 
        className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      />
      <div 
        className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out my-1 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <div 
        className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      />
    </div>
  );
};

const HeroUINavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Debug log
  React.useEffect(() => {
    console.log("Menu state changed:", isMenuOpen);
  }, [isMenuOpen]);

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { 
      name: "Home", 
      href: "#home",
      description: "Halaman utama"
    },
    { 
      name: "Experience", 
      href: "#experience",
      description: "Pengalaman kerja"
    },
    { 
      name: "Projects", 
      href: "#projects",
      description: "Portfolio proyek"
    },
    { 
      name: "Contact", 
      href: "#contact",
      description: "Hubungi saya"
    },
  ];

  return (
    <>
      <Navbar 
        className="bg-[#222] shadow-md h-16 p-4" 
        aria-label="Portfolio Navbar"
      >
        {/* Mobile Brand - Tampil hanya di mobile */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <AcmeLogo />
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Brand - Tampil hanya di desktop */}
        <NavbarContent className="hidden sm:flex" justify="start">
          <NavbarBrand>
            <AcmeLogo />
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Navigation - Tersembunyi di mobile */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#home" className="text-[#fff] hover:text-[#3498db] transition-colors duration-500">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#experience" className="text-[#3498db] hover:text-[#2176bd] transition-colors duration-500">
              Experience
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#projects" className="text-[#fff] hover:text-[#3498db] transition-colors duration-500">
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Contact Button */}
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <PrimaryButton href="#contact" size="sm" className="text-white">Contact Me</PrimaryButton>
          </NavbarItem>
          <NavbarItem className="sm:hidden">
            <button
              onClick={() => {
                console.log("Burger clicked, current state:", isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md hover:bg-[#333] transition-colors duration-200"
            >
              <BurgerMenuIcon isOpen={isMenuOpen} />
            </button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Mobile Menu Overlay - Outside Navbar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 animate-in fade-in duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content - Side Navigation */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#222] overflow-y-auto animate-in slide-in-from-right duration-300 shadow-2xl">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-[#333] bg-[#1a1a1a]">
              <div className="flex items-center gap-3">
                <AcmeLogo />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full hover:bg-[#333] transition-all duration-200 group"
              >
                <div className="w-6 h-6 flex items-center justify-center relative">
                  <div className="w-5 h-0.5 bg-white group-hover:bg-[#3498db] rotate-45 absolute transition-colors duration-200"></div>
                  <div className="w-5 h-0.5 bg-white group-hover:bg-[#3498db] -rotate-45 absolute transition-colors duration-200"></div>
                </div>
              </button>
            </div>
            
            <div className="p-4">
              {/* Profile Section */}
              <div className="border-b border-[#333] pb-4 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#3498db] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">HW</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Hendrawan Wibowo</h3>
                    <p className="text-[#888] text-sm">Software Engineer</p>
                  </div>
                </div>
              </div>
              
              {/* Menu Items */}
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <a
                    key={`${item.name}-${index}`}
                    href={item.href}
                    className="block py-3 px-4 rounded-lg hover:bg-[#333] transition-colors duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="text-[#fff] text-lg font-medium group-hover:text-[#3498db] transition-colors duration-300">
                      {item.name}
                    </div>
                    <div className="text-[#888] text-sm mt-1">
                      {item.description}
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="border-t border-[#333] pt-4 mt-6">
                <h4 className="text-white font-semibold mb-3">Connect with me</h4>
                <div className="space-y-2">
                  <a 
                    href="https://www.linkedin.com/in/haaweejee/" 
                    className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-[#333] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-[#3498db] text-lg">🔗</span>
                    <span className="text-[#fff]">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/haaweejee" 
                    className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-[#333] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-[#3498db] text-lg">💻</span>
                    <span className="text-[#fff]">GitHub</span>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroUINavBar;