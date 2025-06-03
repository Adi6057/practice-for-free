// SomeComponent.js
import React from 'react';
import { useAuth } from './AuthContext';

function SomeComponent() {
  const value = useAuth(); // will be "Hello"
  return <h1>{value}</h1>;
}

export default SomeComponent;
