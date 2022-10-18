import React, { FC } from 'react';
import HeroBgOverlay from '../lib/views/index/hero/HeroBgOverlay';
import PricingCard from '../lib/views/pricing/PricingCard';
import PricingContainer from '../lib/views/pricing/PricingContainer';

const Pricing: FC = props => {
  return (
    <>
      <HeroBgOverlay zIndex={0} height='100%' position="fixed" />

      <div className="container section section--sm">
        <PricingContainer stackCount={3} style={{ padding: '48px' }}>
          <header>
            <h1 className="colored--text">Plans & Pricing</h1>
          </header>

          <div className="pricing-cards">
            <PricingCard
              plan="Starter"
              price={0}
              subtitle="Free"
              illustration={{
                src: '/illustrations/boat_space_man.png',
                alt: 'Space man sitting in paper boat',
                width: 300,
                height: 150.59,
              }}
              features={[
                { children: 'Unlimted users', icon: '😎' },
                { children: 'Unlimited decks', icon: '👏' },
                { children: 'Basic analytics', icon: '📈' },
                { children: '30 day change history', icon: '📅' },
                { children: 'Custom theme', icon: '🖌️' },
                { children: 'Built-in templates', icon: '🎉' },
                { children: 'PDF export', icon: '📄' },
                { children: 'Channels', icon: '💬' },
              ]}
            />
            <PricingCard
              plan="Starter"
              price={10}
              subtitle="Free during beta"
              discount={10}
              priceSuffix="per user monthly"
              featureTitle="Everything in Starter, plus"
              highlighted
              illustration={{
                src: '/illustrations/space_ship.png',
                alt: 'Space man sitting in paper boat',
                width: 300,
                height: 159.9,
              }}
              features={[
                { children: 'Advanced analytics', icon: '📊' },
                { children: 'Unlimited customization', icon: '🎨' },
                { children: 'Content library', icon: '📚' },
                { children: 'Unlimited change history', icon: '📅' },
                { children: 'Subdomains', icon: '💬' },
                { children: 'Advanced permissions & admin tools', icon: '⚙️' },
              ]}
            />
          </div>
        </PricingContainer>
      </div>

      <style jsx>{`
        .pricing-cards {
          display: grid;
          gap: var(--space-xs);
          margin: 0 auto;
          grid-template-columns: 1fr 1.3fr;
        }

        header {
          margin-bottom: var(--space-6xl);
        }

        h1 {
          font-size: 72px;
          font-weight: 500;
          font-family: var(--font-p22);
          text-align: center;
        }

        .section--sm {
          padding-bottom: 6rem;
        }

        @media only screen and (max-width: 991px) {
          .pricing-cards {
            grid-template-columns: 1fr;
            gap: var(--space-6xl);
          }
        }

        @media only screen and (max-width: 786px) {
          h1 {
            font-size: 48px;
          }
        }

        @media only screen and (max-width: 479px) {
          h1 {
            font-size: 42px;
          }

          .section--sm {
            padding-top: var(--space-sm);
          }
        }
      `}</style>
    </>
  );
};

export default Pricing;
