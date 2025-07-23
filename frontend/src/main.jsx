import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: 'dark',
        variables: {
          colorPrimary: '#3b82f6',         // Primary color (blue)
          colorText: '#ffffff',            // All text
          colorBackground: '#0f0f0f',      // Background
          colorInputText: '#ffffff',       // Input text
          colorInputBackground: '#1f1f1f', // Input background
          colorInputBorder: '#444444',     // Border color
          borderRadius: '8px',
        },
        elements: {
          // All cards
          card: 'bg-[#121212] shadow-xl rounded-xl',

          // Header
          headerTitle: 'text-white',
          headerSubtitle: 'text-gray-300',

          // Form Labels & Inputs
          formFieldLabel: 'text-white',
          formFieldInput: 'bg-[#1f1f1f] text-white border border-gray-700',
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',

          // Footer links
          footerActionText: 'text-gray-400',
          footerActionLink: 'text-blue-500 hover:underline',

          // User Button (Account Dropdown)
          userButtonPopoverCard: 'bg-[#1a1a1a] text-white border border-gray-700 shadow-lg',
          userButtonPopoverActionButton: 'hover:bg-[#2a2a2a] text-white',
          userButtonPopoverActionButtonText: 'text-white',
          userButtonPopoverFooter: 'text-gray-400',
        },
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);
