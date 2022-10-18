import React, { FC } from 'react';
import Button from '../../../components/button/Button';
import { useAlertStore } from '../../../store/zalertStore';

interface HeroCtaProps {
  title: string;
  body: string;
  button?: { href: string; text: string };
}

const HeroCta: FC<HeroCtaProps> = props => {
  const alertStore = useAlertStore(state => state);

  const handleAddAlert = () => {
    alertStore.addAlert({ message: 'WIld', type: 'danger' });
  };

  return (
    <>
      <div className="cta-wrapper">
        <div className="cta__border"></div>

        <div className="cta">
          <CtaLogo />
          <h2 className="cta__title colored">{props.title}</h2>
          <p className="cta__desc"> {props.body}</p>

          <Button color="gradient" size="medium" onClick={handleAddAlert}>
            {props.button!.text}
          </Button>
        </div>
      </div>

      <style jsx>{`
        .cta-wrapper {
          position: relative;
          width: max-content;
          margin: 0 auto;
          border-radius: 12px;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 18px 16px 52px 0 rgba(251, 149, 136, 0.1),
            -10px -6px 52px -12px rgba(135, 33, 224, 0.13);
        }

        .cta {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: var(--space-md);
          padding-top: var(--space-lg);
          width: 100%;
          max-width: 507px;
          margin: 0 auto;
          background-color: white;
          flex-direction: column;
          z-index: 40;
          border-radius: inherit;
          gap: var(--space-xs);

          &__border {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 102%;
            height: 103%;
            border-radius: inherit;
            background: linear-gradient(50deg, #2b0aff, #ff5b8a 49%, #ff5b8a 53%, #ff5b8a 55%, #fba64b 77%, #f99b52);
            z-index: 10;
          }

          &__title {
            font-size: 28px;
            font-weight: 600;
          }

          &__desc {
            margin: 0 auto;
            margin-bottom: var(--space-2xs);
            max-width: 22ch;
            font-size: 18px;
          }
        }

        @media only screen and (max-width: 425px) {
          .cta {
            padding: var(--space-sm) calc(var(--space-2xs) + 2px);
            padding-top: var(--space-lg);
            gap: var(--space-2xs);

            &__title {
              font-size: 24px;
            }

            &__desc {
              font-size: 16px;
            }
          }
        }
      `}</style>
    </>
  );
};

HeroCta.defaultProps = {
  button: {
    href: '/',
    text: 'Try for free',
  },
};

const CtaLogo = () => {
  return (
    <div className="logo-wrapper">
      <img className="logo" src="/image/logo.png" alt="Logo" />

      <style jsx>
        {`
          .logo {
            max-width: 30px;
          }

          .logo-wrapper {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -60%);
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
            padding: var(--space-xs);
            background-color: white;
            border-radius: 50%;
            border: 1px solid #f7eeea;
          }
        `}
      </style>
    </div>
  );
};

export default HeroCta;
