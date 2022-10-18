import React, { FC, useState } from 'react';
import css from './test.module.css';

type ButtonSize = 'large' | 'small';
interface ButtonProps {
  color?: 'red' | 'green' | 'yellow';
  textColor?: 'white' | 'black';
  size: ButtonSize;
  children: any;
}
const Button: FC<ButtonProps> = props => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className={`button color--${props.color} textColor--${props.textColor}`}
        onClick={() => setCount(count + 1)}
      >
        {props.children}
        {count}
      </button>

      <style jsx>{`
        .button {
          padding: var(--space-sm);
          display: flex;
          gap: var(--space-md);
          transition: background-color 0.15s linear;
        }

        .color--red {
          background-color: red;
          color: white;

          &:hover {
            background-color: rgba(242, 64, 64, 0.155);
          }
        }

        .color--yellow {
          background-color: yellow;
          color: black;

          &:hover {
            background-color: rgba(61, 206, 88, 0.128);
          }
        }
      `}</style>
    </>
  );
};

const Test = () => {
  return (
    <div className="m-10">
      <h1 className="text-2xl mb-4">Hello</h1>
      <Button size="large" color="yellow">
        Hello
      </Button>
    </div>
  );
};

export default Test;
