import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
     <p>Intégrer logo ici</p>
      © {currentYear} Kasa. All Rights reserved
    </footer>
  );
}
