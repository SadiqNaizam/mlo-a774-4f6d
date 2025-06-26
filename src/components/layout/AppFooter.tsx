import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter: React.FC = () => {
  console.log('AppFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-6 px-4 md:flex md:items-center md:justify-between">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {currentYear} WhatsApp Lite. All Rights Reserved.
        </p>
        <nav className="mt-4 flex justify-center gap-4 sm:gap-6 md:mt-0">
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AppFooter;