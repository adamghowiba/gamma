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
      <div className="top">
        <img
          className="spinning-logo"
          ref={floatingLogoElement}
          src="/image/footer_logo_spinning.gif"
          alt="Floating logo animation"
        />
        <img className="top-image" src="/image/footer_balls.png" alt="Balls on geometric circles" />
      </div>

      <footer>
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
            //padding-top: calc(140px + var(--space-xs));
            margin-top: clamp(-35rem, -60vw, 600px);
          }

          .footer-wrap {
            position: relative;
            margin-top: clamp(45rem, 55vw, 75rem);
            background-color: #1d0042;
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
            position: relative;
            object-position: top;
            overflow: hidden;
            width: 100%;
            z-index: 10;
          }

          .top {
            position: relative;
            top: 0;
            width: 100%;
            transform: translateY(-90%);
          }

          .bottom-image {
            bottom: 0;
            margin: 0 auto;
            max-width: 900px;
            width: 100%;
            margin-top: var(--space-xl);
          }

          .spinning-logo {
            top: 0;
            margin: 0 auto;
            transform: translateY(-100%);
            left: 50%;
            max-width: 200px;
            border: 3px solid #ffeef3;
            border-radius: 50%;
          }

          @media only screen and (max-width: 725px) {
            .content {
              margin-top: -3rem;
            }
            .footer-wrap {
              margin-top: 40rem;
            }
          }

          @media only screen and (max-width: 425px) {
            .footer-wrap {
              margin-top: 35rem;
            }
          }

          @media only screen and (min-width: 1024px) {
            .bottom-image {
              max-width: 700px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingFooter;
