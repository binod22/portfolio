import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/binod22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/binod22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/BinodRe04842860"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              Twitter
            </a>
          </div>
          <p className="text-textSecondary text-sm">
            {currentYear} Binod Regmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
