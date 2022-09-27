import React, { FC } from 'react';
import HeroBgOverlay from './hero/HeroBgOverlay';
import HeroCta from './hero/HeroCta';
import HeroTitle from './hero/HeroTitle';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <>
      <main>
        <HeroBadge content="Slides are stuck in the past" />
        <HeroTitle subtitle="The future is fast, flexible, and fun" />
        <HeroBgOverlay />

        <section className="hero-cta">
          <HeroCta
            title="The best of both worlds"
            body="It's the closest thing to time travel.
            Fast forward from doc to deck."
          />
        </section>

        <img
          className="hero-image hero-image--left"
          src="/image/hero_left_portal.png"
          alt="Astornught walking up portal"
        />
        <img
          className="hero-image hero-image--center"
          src="/image/hero_middle_square.png"
          alt="Astornught walking up portal"
        />

        <img
          className="hero-image hero-image--right"
          src="/image/hero_portal_right.png"
          alt="Astornught walking up portal"
        />
      </main>

      <style jsx>
        {`
          .hero-cta {
            margin-top: var(--space-2xl);
          }

          main {
            padding-top: var(--space-xs);
            width: 100%;
            height: 94vh;
            background: (linear, left top, left bottom, from(#faf2e9), to(rgba(250, 242, 233, 0)));
          }

          .hero-image {
            position: absolute;
            width: 100%;

            &--left {
              left: 0;
            }

            &--right {
              max-width: 400px;
              right: 0;
            }

            &--left,
            &--right {
              top: 50%;
              max-width: 420px;
              transform: translateY(-50%);
            }

            &--center {
              z-index: 10;
              max-width: 340px;
              opacity: 0.65;
              left: 50%;
              transform: translate(-50%, -10%);
            }
          }

          @media only screen and (max-width: 1024px) {
            .hero-image {
              &--left,
              &--right {
                max-width: 350px;
              }

              &--center {
                max-width: 290px;
              }
            }
          }

          @media only screen and (max-width: 768px) {
            .hero-image {
              &--left, &--right {
                display: none;
              }
            }
          }
        `}
      </style>
    </>
  );
};

interface HeroBadge {
  content: string;
}

const HeroBadge: FC<HeroBadge> = props => {
  return (
    <>
      <div className="badge">
        <div className="badge__circle">
          <div className="badge__icon">📽️</div>
        </div>
        <span>{props.content}</span>
      </div>

      <style jsx>
        {`
          .badge {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-bottom: var(--space-md);
            position: relative;
            z-index: 40;

            &__circle {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 42px;
              height: 42px;
              position: relative;
              background-color: white;
              transform: translateY(20%);
              border-radius: 50%;
              border: 1px solid #c3c3c3;
            }

            &__icon {
              position: relative;
              top: -3px;
            }

            span {
              display: block;
              position: relative;
              font-weight: 500;
              background: linear-gradient(225deg, #b575d8, #4816ef);
              color: white;
              padding: var(--space-3xs) var(--space-xs);
              font-size: var(--text-sm);
              border-radius: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Hero;
