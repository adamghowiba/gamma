import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import LocalIcon from '../lib/components/icon/LocalIcon';
import HeroBgOverlay from '../lib/views/index/hero/HeroBgOverlay';
import LoginCard from '../lib/views/login/LoginCard';

const Login = () => {
  return (
    <div className="login-container">
      {/* <HeroBgOverlay position="fixed" height="100%" zIndex={-1} /> */}
      {/* <Image src="/image/trippy_wave.png" layout="fill" height={200} /> */}

      <div className="container login-wrapper">
        <LoginCard />
        <div className="divider" />
        <span className="signup">Regestration is currently disabled.</span>

        <footer>
          <LocalIcon icon="logo-colorless" />
          <span>© 2022 Gamma Tech, Inc.</span>
        </footer>
      </div>

      <footer></footer>
      <style jsx>{`
        footer {
          position: absolute;
          bottom: var(--space-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2xs);

          span {
            font-size: 12px;
            color: #8f8b8b;
          }
        }
        .login-container {
          height: 100%;
          width: 100%;
          background-color: #f7f3f2;
          padding: 0 var(--space-sm);
        }
        .login-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 600px;
          padding: 10rem 0;

          .divider {
            border: none;
            height: 1px;
            width: 100%;
            background-color: var(--color-border);
            margin-bottom: var(--space-xs);
            margin-top: 2rem;
          }

          .signup {
            font-size: var(--text-sm);
            color: #726e6e;
          }
        }

        @media only screen and (max-width: 425px) {
          .login-container {
            padding: 0 var(--space-2xs);
          }

          .login-wrapper {
            padding: 5rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
