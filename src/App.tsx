import { useState } from 'react'
import { Button, EqualButton, ZeroButton, CalculatorContainer, Display } from './styles/general'
import './App.css'

type Operator = '+' | '-' | "*" | '/';

function App() {

  const [input, setInput] = useState<string>('');
  const [currentOperand, setCurrentOperand] = useState<string>('');
  const [operation, setOperation] = useState<Operator | null>(null);

  const handleClick = (value: string) => {
    if (['+', '-', '*', '/'].includes(value)) {
      setOperation(value as Operator);
      setCurrentOperand(input);
      setInput('');
    } else if (value === '=') {
      if (operation && currentOperand && input) {
        const result = evaluate(`${currentOperand}${operation}${input}`);
        setInput(result.toString());
        setCurrentOperand('');
        setOperation(null);
      }
    } else if (value === 'C') {
      setInput('');
      setCurrentOperand('');
      setOperation(null);
    } else {
      setInput(prev => prev + value);
    }
  };

  const evaluate = (expression: string): number => {
    try {
      // Avalia a expressão matemática
      return eval(expression);
    } catch {
      return NaN;
    }
  };

  return (
    <>
      <CalculatorContainer>
        <Display>{input || '0'}</Display>
        <Button onClick={() => handleClick('C')}>C</Button>
        <Button onClick={() => handleClick('CC')}>CC</Button>
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
    </>
  )
}

export default App
