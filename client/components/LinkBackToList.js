import React from 'react';
import { Link } from 'react-router-dom';

export const LinkBackToList = () => (
  <Link to="/songs" style={{ display: 'block', marginTop: 20 }}>
    Back to list
  </Link>
);
