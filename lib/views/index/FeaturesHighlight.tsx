import React, { ReactElement, useEffect, useRef } from 'react';
import ContentBlock from '../../components/ContentBlock';
import FeatureListItem from '../../components/FeatureListItem';
import ReviewCard from '../../components/ReviewCard';
import { gsap } from '../../utils/gsap';
import { ScrollTrigger } from '../../utils/gsap';
import { FEATURES } from './features';
import VideoContainer from './VideoContainer';

export interface FeaturesHighlightProp {}

const FeaturesHighlight = () => {
  const scrollVideoElement = useRef<HTMLDivElement>(null);
  const scrollWrapElement = useRef<HTMLDivElement>(null);

  const setupVideoPin = () => {
    const videoWrapElement = document.querySelectorAll('#video-wrap');

    let pinScrollTrigger: ScrollTrigger;
    const matchMedia = gsap.matchMedia();

    matchMedia.add('(min-width: 768px)', () => {
      pinScrollTrigger = ScrollTrigger.create({
        trigger: scrollWrapElement.current,
        pin: videoWrapElement,
        start: 'top center-=100px',
        end: 'bottom center+=170px',
      });

      return pinScrollTrigger;
    });

    return () => {
      matchMedia.kill();
      if (pinScrollTrigger) pinScrollTrigger.kill();
    };
  };

  const scrollAnimation = () => {
    const videos = gsap.utils.toArray<HTMLElement>(document.querySelectorAll('#video'));
    const contentBlocks = gsap.utils.toArray<HTMLElement>(document.querySelectorAll('.content-blocks__block'));
    const tweens: gsap.core.Tween[] = [];

    const destoryPin = setupVideoPin();

    const matchMedia = gsap.matchMedia();

    matchMedia.add('(min-width: 768px)', () => {
      gsap.set(videos, { opacity: '0' });

      contentBlocks.forEach((elem, i) => {
        const tween = gsap.to(videos[i], {
          duration: 0,
          scrollTrigger: {
            trigger: elem,
            end: 'bottom center',
            start: 'top center',
            onEnter: () => {
              videos[i].style.opacity = '1';
            },
            onLeave: () => {
              videos.forEach(video => (video.style.opacity = '0'));
            },
            onEnterBack: () => {
              videos[i].style.opacity = '1';
            },
            onLeaveBack: () => {
              videos.forEach(video => (video.style.opacity = '0'));
            },
          },
        });

        tweens.push(tween);
      });
    });

    return () => {
      destoryPin();
      matchMedia.kill();
      tweens.forEach(trigger => {
        trigger.kill();
        trigger.scrollTrigger?.kill();
      });
    };
  };

  useEffect(() => {
    const destory = scrollAnimation();

    return () => {
      destory();
    };
  }, []);

  return (
    <>
      <div className="scroll-wrap container" ref={scrollWrapElement}>
        <div className="content-blocks">
          {FEATURES.map((feature, i) => (
            <div className="content-blocks__block" key={i}>
              <div className="mobile-video">
                <VideoContainer videoSrc={feature.videoUrl} videoType="video/mp4" />
              </div>

              <ContentBlock subtitle={feature.subtitle} title={feature.title}>
                {feature.body}
              </ContentBlock>
            </div>
          ))}
        </div>

        <div id="video-wrap" className="videos">
          {FEATURES.map((feature, i) => (
            <div className="videos__video" id="video" key={i}>
              <VideoContainer videoSrc={feature.videoUrl} videoType="video/mp4" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .scroll-wrap {
            margin-top: var(--space-2xl);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-lg);
            position: relative;
            z-index: 10;
          }

          .videos {
            position: relative;
            width: 100%;
            height: 270px;

            &__video {
              transition: opacity 0.15s linear;
              height: 100%;
              position: absolute;
              width: 100%;
              height: 100%;
            }
          }

          .content-blocks {
            &__block {
              max-width: 45ch;
              display: flex;
              padding-top: 0;
              padding-bottom: 60vh;
              align-items: center;
            }

            &__block:last-child {
              padding-bottom: 0;
            }

            :global(p) {
              font-size: 20px;
            }
          }

          .mobile-video {
            display: none;
          }

          @media only screen and (max-width: 768px) {
            .content-blocks {
              &__block {
                flex-direction: column;
                gap: var(--space-lg);
                max-width: none;
                align-items: start;
                padding-bottom: calc(var(--space-5xl) + var(--space-2xl));
              }
            }

            .scroll-wrap {
              margin-top: 0;
              grid-template-columns: 1fr;
            }

            .mobile-video {
              display: block;
            }

            .videos {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default FeaturesHighlight;
