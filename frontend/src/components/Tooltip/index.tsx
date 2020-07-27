import React from 'react';

import { Container } from './style';

interface TooltipProps {
  msg: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ msg, className = '', children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{msg}</span>
    </Container>
  );
};

export default Tooltip;
