import React, { createContext, useContext, useCallback, useState, ReactNode } from 'react';

interface InputContextData {
  addFirstNumber(firstNumber: string): void;
  firstNumber: string;
  changeOperator(operator: string): void;
  operator: string;
  addSecondNumber(secondNumber: string): void;
  secondNumber: string;
}

const InputContext = createContext<InputContextData>({} as InputContextData);

interface InputProviderProps {
  children: ReactNode;
}

const InputProvider: React.FC<InputProviderProps> = ({ children }) => {
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  const addFirstNumber = useCallback((firstNumber: string) => {
    setFirstNumber(firstNumber);
  }, []);

  const changeOperator = useCallback((operator: string) => {
    setOperator(operator);
  }, []);

  const addSecondNumber = useCallback((secondNumber: string) => {
    setSecondNumber(secondNumber);
  }, []);

  return (
    <InputContext.Provider
      value={{
        addFirstNumber,
        firstNumber,
        changeOperator,
        operator,
        addSecondNumber,
        secondNumber,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

function useInput(): InputContextData {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('useInput must be used within an InputProvider');
  }

  return context;
}

export { InputProvider, useInput };
