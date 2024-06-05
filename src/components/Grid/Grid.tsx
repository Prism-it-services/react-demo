import React, { ReactNode} from 'react';
import { Container, GridItem } from './styles';

export interface GridProps {
  columns: number;
  children: ReactNode; 
}

export const Grid: React.FC<GridProps> = ({ columns, children }) => {
  return (
    <Container style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {children}
    </Container>
  );
};
