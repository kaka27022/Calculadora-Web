import React from 'react';
import { CalculatorContainer, Button, Display, EqualButton, ZeroButton } from '../styles/general';
import { useInput } from './input';

export const Calculator: React.FC = () => {
    const { addFirstNumber, firstNumber, changeOperator, operator, addSecondNumber, secondNumber } = useInput();

    const handleClick = (value: string) => {
        if (['+', '-', '*', '/'].includes(value)) {
            changeOperator(value);
        } else if (value === '=') {
            if (operator && firstNumber && secondNumber) {
              const result = evaluate(`${firstNumber}${operator}${secondNumber}`);
              addFirstNumber(result.toString()); // Atualiza o primeiro número com o resultado
              addSecondNumber(''); // Limpa o segundo número
              changeOperator(''); // Limpa o operador
            }
        } else if (value === 'C') {
            addFirstNumber('');
            addSecondNumber('');
            changeOperator('');
        } else {
            // Supondo que estamos adicionando números e não operadores adicionais
            if (!operator) {
              addFirstNumber(firstNumber + value);
            } else {
              addSecondNumber(secondNumber + value);
            }
        }
    };

    const evaluate = (expression: string): number => {
        try {
          return eval(expression);
        } catch {
          return NaN;
        }
    };

    return (
          <CalculatorContainer>
          <Display>{firstNumber || '0'} {operator} {secondNumber}</Display>
            <Button onClick={() => handleClick('C')}>C</Button>
            <Button onClick={() => handleClick('C')}>CC</Button>
            <Button onClick={() => handleClick('*')}>*</Button>
            <Button onClick={() => handleClick('/')}>/</Button>
            
            <Button onClick={() => handleClick('7')}>7</Button>
            <Button onClick={() => handleClick('8')}>8</Button>
            <Button onClick={() => handleClick('9')}>9</Button>
            <Button onClick={() => handleClick('-')}>-</Button>
    
            <Button onClick={() => handleClick('4')}>4</Button>
            <Button onClick={() => handleClick('5')}>5</Button>
            <Button onClick={() => handleClick('6')}>6</Button>
            <Button onClick={() => handleClick('+')}>+</Button>
    
            <Button onClick={() => handleClick('1')}>1</Button>
            <Button onClick={() => handleClick('2')}>2</Button>
            <Button onClick={() => handleClick('3')}>3</Button>
            <EqualButton onClick={() => handleClick('=')}>=</EqualButton>
    
            <ZeroButton onClick={() => handleClick('0')}>0</ZeroButton>
            <Button onClick={() => handleClick('.')}>.</Button>
          </CalculatorContainer>
    );
};