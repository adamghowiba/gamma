import React, { useEffect, useRef } from 'react';
import Button from '../../components/button/Button';
import { gsap } from '../../utils/gsap';

export interface LandingFooter {}

const LandingFooter = () => {
  const floatingLogoElement = useRef<HTMLImageElement>(null);

  const logoFloatingAnimation = () => {
    const tween = gsap.to(floatingLogoElement.current, { y: -60, repeat: -1, yoyo: true, duration: 2 });

    return () => tween.kill();
  };

  useEffect(() => {
    const destory = logoFloatingAnimation();

    return () => {
      destory();
    };
  }, []);

  return (
    <div className="footer-wrap">
      <img
        className="spinning-logo"
        ref={floatingLogoElement}
        src="/image/footer_logo_spinning.gif"
        alt="Floating logo animation"
      />

      <footer>
        <img className="top-image" src="/image/footer_balls.png" alt="Balls on geometric circles" />

        <div className="content">
          <div className="title tight">
            <h1>Open the door</h1>
            <h1 className="colored">to a new universe</h1>
          </div>

          <p className="content__body">
            More visual than a doc. More collaborative than a slide deck. More interactive than a video.
          </p>

          <Button color="gradient" size="large">
            Try for free
          </Button>
        </div>

        <img
          className="bottom-image"
          src="image/footer_space_man.png"
          alt="Illustration of man standing in door looking at space"
        />
      </footer>

      <style jsx>
        {`
          footer {
            position: relative;
            background-color: #1d0042;
            height: 143vh;
            margin-top: 180px;
            padding-top: calc(140px + var(--space-xs));
          }

          .footer-wrap {
            margin-top: 30rem;
          }

          .content {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            max-width: max-content;
            margin: 0 auto;
            text-align: center;
            gap: var(--space-xs);
            z-index: 10;

            .title {
              font-size: var(--text-title);
              line-height: 1em;
              font-family: var(--font-p22);
              color: #efd0ff;
              font-weight: 500;
              margin-bottom: var(--space-sm);
            }

            .colored {
              background-image: radial-gradient(
                circle farthest-corner at -20% 0%,
                #2b0aff,
                #e93abf 31%,
                #f658a8 48%,
                #febf72
              );
            }

            &__body {
              max-width: 40ch;
              text-align: center;
              color: rgba(239, 208, 255, 0.7);
              font-size: var(--text-md);
              line-height: 1.5em;
            }
          }

          .top-image {
            top: 0;
            transform: translateY(-45%);
            width: 100%;
            position: absolute;
            z-index: 10;
          }

          .bottom-image {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            max-width: 900px;
            width: 100%;
          }

          .spinning-logo {
            margin: 0 auto;
            max-width: 200px;
            border: 3px solid #ffeef3;
            border-radius: 50%;
          }

          @media only screen and (max-width: 725px) {
            footer {
              height: 100vh;
            }
            .content {
              margin-top: -3rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingFooter;
