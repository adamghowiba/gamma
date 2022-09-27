import React, { FC, useRef } from 'react';
import { gsap } from '../../utils/gsap';

export interface ButtonProps {
  children?: string;
  color?: 'gradient' | 'white';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  fullWidth?: boolean;
  borderRadius?: number;
}

const Button: FC<ButtonProps> = props => {
  const buttonElement = useRef<HTMLButtonElement>(null);

  const buttonClasses = `color--${props.color} size--${props.size}`;

  let originalGradient: number = 40;

  const handleMouseMove = (event: any) => {
    if (!buttonElement.current || props.color !== 'gradient') return;
    const target = event.target as HTMLDivElement;
    let offsetLeft = Math.floor(event.clientX - target.getBoundingClientRect().left);

    gsap.to(buttonElement.current, {
      background: `linear-gradient(50deg, #2b0aff, #e93abf ${
        offsetLeft * 0.6
      }%, #f658a8 46%, #f658a8 51%, #f99b52 91%, #f99b52)`,
      stagger: 0.25,
    });
  };

  const handleMouseLeave = (event: any) => {
    if (!buttonElement.current || props.color !== 'gradient') return;

    gsap.to(buttonElement.current, {
      background: `linear-gradient(50deg, #2b0aff, #e93abf ${originalGradient}%, #f658a8 46%, #f658a8 51%, #f99b52 91%, #f99b52)`,
    });
  };

  return (
    <>
      <button
        ref={buttonElement}
        onClick={props.onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ borderRadius: props.borderRadius }}
        className={buttonClasses}
      >
        {props.children}
      </button>

      <style jsx>{`
        button {
          appearance: none;
          border-radius: 8px;
          padding: var(--space-2xs) var(--space-md);
          width: ${props.fullWidth ? '100%' : 'max-content'};
        }

        .color {
          &--gradient {
            background: linear-gradient(50deg, #2b0aff, #e93abf 40%, #f658a8 46%, #f658a8 51%, #f99b52 91%, #f99b52);
            color: white;
            font-weight: 500;
          }

          &--white {
            border: 1px solid #f7eeea;
            background-color: white;
            border-radius: 100px;
          }
        }

        .size {
          &--small {
            padding: var(--space-3xs) calc(var(--space-xs) + 2px);
          }

          &--medium {
            padding: var(--space-2xs) var(--space-lg);
          }

          &--large {
            padding: calc(var(--space-2xs) + 4px) var(--space-lg);
          }
        }
      `}</style>
    </>
  );
};

Button.defaultProps = {
  color: 'white',
  size: 'medium',
  fullWidth: false,
};

export default Button;
