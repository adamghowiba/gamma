import React, { FC } from 'react';
import Button from '../../components/button/Button';

interface LoginCardProps {}

const LoginCard: FC<LoginCardProps> = props => {
  return (
    <>
      <div className="card">
        <h2 className="card__subtitle">👋 Welcome back!</h2>
        <h1 className="card__title colored">Sign in to gamma</h1>
        <p>Use Google to sign in to Gamma</p>

        <div className="button">
          <Button color="gradient" size="large">
            Sign in with Google
          </Button>
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: white;
          padding: var(--space-md);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: var(--space-2xs);
          border: 1px solid var(--color-border);
          width: 100%;
          
          &__subtitle {
            font-size: var(--fs-md);
            font-weight: 600;
          }

          &__title {
            font-size: var(--fs-xxl);
            font-family: var(--font-p22);
            font-weight: 500;
          }

          p {
            font-size: var(--text-md);
            color: var(--color-text);
          }

          .button {
            margin: 0 auto;
            margin-top: var(--space-sm);
          }
        }
      `}</style>
    </>
  );
};

LoginCard.defaultProps = {};

export default LoginCard;
