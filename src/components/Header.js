import React from 'react';

function Header() {
  return (
    <header className="jumbotron text-center">
      <h1 className="display-4">Welcome to Coding Tutorials</h1>
      <p className="lead">Your go-to place for learning to code with step-by-step instructions and practice exercises.</p>
      <a className="btn btn-primary btn-lg" href="/tutorials" role="button">Get Started</a>
    </header>
  );
}

export default Header;
