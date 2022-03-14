import styled from 'styled-components';

export const Form = styled.form`
  fieldset {
    border: 3px solid ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
  }

  legend {
    padding: 0 10px;
  }
`;

export const Input = styled.input`
  height: 50px;
  margin: 10px;
  width: 100%;
  border-radius: 16px;
  border: none;
  padding: 5px;
  font-size: 18px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  height: 30vh;
  max-height: 300px;
  width: 100%;

  margin-top: 10px;
  border-radius: 16px;
  border: none;
  padding: 5px;
  font-size: 18px;

  margin-left: 6px;
  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 20px;

  label {
    margin-left: 10px;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
