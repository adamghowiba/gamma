import Link from 'next/link';
import React, { FC, MouseEvent, MouseEventHandler, useRef } from 'react';
import { gsap } from '../../utils/gsap';

export interface ButtonProps {
  children?: string;
  color?: 'gradient' | 'white';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  fullWidth?: boolean;
  borderRadius?: number;
  href?: string;
}

const Button: FC<ButtonProps> = props => {
  const buttonElement = useRef<HTMLButtonElement>(null);

  const buttonClasses = `color--${props.color} size--${props.size}`;

  let originalGradient: number = 40;

  let movement = originalGradient;
  const handleMouseMove = (event: any) => {
    if (!buttonElement.current || props.color !== 'gradient') return;
    const target = event.target as HTMLDivElement;
    let offsetLeft = Math.floor(event.clientX - target.getBoundingClientRect().left);

    let transitionAmount = originalGradient + offsetLeft * 0.12;

    gsap.to(buttonElement.current, {
      background: `linear-gradient(50deg, #2b0aff, #e93abf ${transitionAmount}%, #f658a8 46%, #f658a8 51%, #f99b52 91%, #f99b52)`,
    });
  };

  const handleMouseLeave = (event: any) => {
    if (!buttonElement.current || props.color !== 'gradient') return;
    movement = originalGradient;

    gsap.to(buttonElement.current, {
      duration: 0.5,
      background: `linear-gradient(50deg, #2b0aff, #e93abf ${originalGradient}%, #f658a8 46%, #f658a8 51%, #f99b52 91%, #f99b52)`,
    });
  };

  return (
    <>
      <div className="button-wrap">
        {props.href && (
          <div className="link">
            <Link
              href={props.href || ''}
              className="link"
              style={{ position: 'absolute', right: 0, backgroundColor: 'red' }}
            >
              <div className="link-inner"></div>
            </Link>
          </div>
        )
        }
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
      </div>

      <style jsx>{`
        .button-wrap {
          position: relative;
          cursor: pointer;
          width: max-content;

          .link {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 100;

            .link-inner {
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
        button {
          position: relative;
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
            border: 1px solid #C2C2C2;
            font-weight: 600;
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
