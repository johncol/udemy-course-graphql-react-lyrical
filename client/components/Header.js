import React from 'react';

export const Header = ({ children }) => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{children}</header>
);
