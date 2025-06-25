
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <div className="text-[1.4rem] font-bold text-[#fff]">
        <span>Haaw</span>
        <span className="text-[#3498db]">eejee</span>
        <span className="text-[#3498db] text-[1.5rem]">.</span>
      </div>
  );
};

const HeroUINavBar = () => {
  return (
    <Navbar className="bg-[#222] shadow-md h-16 p-4" aria-label="ACME Navbar">
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home" className="text-[#fff] hover:text-[#3498db] transition-colors duration-500">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#experience" className="text-[#fff] hover:text-[#3498db] transition-colors duration-500">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects" className="text-[#fff] hover:text-[#3498db] transition-colors duration-500">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button color="primary" variant="solid" className="bg-[#3498db] hover:bg-[#2176bd] transition-colors duration-500 rounded-[8px]">
            <Link color="foreground" href="#contact"> Contact Me </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default HeroUINavBar;