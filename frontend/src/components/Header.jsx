import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0f0f0f', // Pure dark
    color: 'white',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    marginRight: '1rem',
    textDecoration: 'none',
    color: '#e0e0e0', // Slightly grey for better contrast
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  loginBtn: {
    backgroundColor: '#2563eb', // Blue
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
};

const Header = () => {
  return (
    <nav style={styles.nav}>
      {/* Brand / Logo */}
      <Link to="/" style={styles.brand}>AI Coach</Link>

      {/* Navigation Links + Auth Buttons */}
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/resume" style={styles.link}>Resume</Link>
        <Link to="/support" style={styles.link}>Support</Link>

        {/* Show login button if signed out */}
        <SignedOut>
          <SignInButton mode="modal">
            <button style={styles.loginBtn}>Login</button>
          </SignInButton>
        </SignedOut>

        {/* Show user icon if signed in */}
        <SignedIn>
         <UserButton
  appearance={{
    baseTheme: "dark",
    variables: {
      colorText: "#ffffff",
      colorBackground: "#0f0f0f",
      colorPrimary: "#3b82f6",
      colorInputText: "#ffffff",
      colorInputBackground: "#1f1f1f",
      colorInputBorder: "#444",
    },
    elements: {
      userButtonPopoverCard: {
        backgroundColor: "#0f0f0f",
        color: "#ffffff",
      },
      userButtonPopoverActionButton: {
        color: "#ffffff",
        ':hover': {
          color: "#ffffff",
          backgroundColor: "#1f1f1f", // optional subtle hover bg
        },
        ':active': {
          color: "#ffffff",
          backgroundColor: "#1f1f1f",
        },
      },
      userButtonPopoverActionButtonText: {
        color: "#ffffff",
        ':hover': {
          color: "#ffffff",
        },
        ':active': {
          color: "#ffffff",
        },
      },
      userButtonPopoverActionButtonIcon: {
        color: "#ffffff",
      },
      userButtonPopoverFooter: {
        color: "#ffffff",
      },
      userPreviewMainIdentifier: {
        color: "#ffffff",
      },
      userPreviewSecondaryIdentifier: {
        color: "#a3a3a3",
      },
    },
  }}
/>


        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;