import Styled, { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
