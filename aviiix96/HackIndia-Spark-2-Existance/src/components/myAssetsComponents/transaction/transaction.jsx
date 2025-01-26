import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  margin: 0 auto;
  max-width: 1200px; /* Set a maximum width */
  width: 100%; /* Make it responsive */
  box-sizing: border-box; /* Include padding in the element's total width and height */
`;

const Content = styled.div`
  position: relative;
  top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 100%; /* Ensure it doesn't exceed container width */

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Transaction = () => {
  return (
    <Container>
      <Content>
        Transaction Page
      </Content>
    </Container>
  );
};

export default Transaction;
