import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1 style={{ fontSize: '48px', color: '#e74c3c' }}>Something Went Wrong!</h1>
          <p>{this.state.errorMessage || 'We encountered an error while loading the page.'}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
