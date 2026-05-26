import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Documentation Blog Project. All rights reserved.</p>
    </footer>
  );
}