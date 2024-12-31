import React from 'react';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '48px', color: '#e74c3c' }}>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button
        onClick={() => window.location.href = '/'}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFound;