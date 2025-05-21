import React from 'react';
import { Button } from '@design-system/components/Button/Button';
import { tokens } from '@design-system/themes';

const App: React.FC = () => {
  return (
    <div style={{ 
      padding: tokens.spacing.xl,
      backgroundColor: tokens.colors.background.default,
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        color: tokens.colors.text.primary,
        fontFamily: tokens.typography.fontFamily.primary,
        marginBottom: tokens.spacing.lg
      }}>
        Design System Demo
      </h1>
      
      <div style={{ display: 'flex', gap: tokens.spacing.md, flexWrap: 'wrap' }}>
        <Button variant="primary" size="small">Small Primary</Button>
        <Button variant="primary" size="medium">Medium Primary</Button>
        <Button variant="primary" size="large">Large Primary</Button>
        
        <Button variant="secondary" size="small">Small Secondary</Button>
        <Button variant="secondary" size="medium">Medium Secondary</Button>
        <Button variant="secondary" size="large">Large Secondary</Button>
      </div>
    </div>
  );
};

export default App; 