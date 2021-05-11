import React from 'react';
import './Layout.css';

interface Props {
  children: React.ReactChild;
}

const Layout = ({ children }: Props) => {
  return (
    <main>
      <header className="header">
        <p className="title">Hello Challenge!</p>
      </header>
      <div className="content">{children}</div>
    </main>
  );
};

export default Layout;
