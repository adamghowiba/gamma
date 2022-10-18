import React, { useEffect, useRef } from 'react';
import ContentBlock from '../../components/ContentBlock';
import FeatureListItem from '../../components/FeatureListItem';
import ReviewCard from '../../components/ReviewCard';
import { gsap } from '../../utils/gsap';
import { ScrollTrigger } from '../../utils/gsap';

export interface FeaturesHighlightProp {}

const FeaturesHighlight = () => {
  const scrollVideoElement = useRef<HTMLDivElement>(null);
  const scrollWrapElement = useRef<HTMLDivElement>(null);

  const scrollTriggers: gsap.core.Tween[] = [];

  const scrollAnimation = () => {
    const videoWrapElement = document.querySelectorAll('#video-wrap');

    const videos = gsap.utils.toArray<HTMLElement>(document.querySelectorAll('#video'));
    const contentBlocks = gsap.utils.toArray<HTMLElement>(document.querySelectorAll('.content-blocks__block'));

    videos.shift();
    contentBlocks.shift();

    const pinTrigger = ScrollTrigger.create({
      trigger: scrollWrapElement.current,
      pin: videoWrapElement,
      start: 'top center-=100px',
      end: 'bottom center+=300px',
    });

    gsap.set(videos, { opacity: 0 });

    contentBlocks.forEach((elem, i) => {
      const tween = gsap.to(videos[i], {
        opacity: 1,
        scrollTrigger: {
          trigger: elem,
          markers: true,
          end: 'bottom center-=10%',
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      });
      // const trigger = ScrollTrigger.create({
      //   trigger: elem,
      //   start: 'top center+=300px',
      //   end: 'bottom center-=100px',
      //   markers: true,
      // });

      scrollTriggers.push(tween);
    });

    return () => {
      pinTrigger.kill();
      scrollTriggers.forEach(trigger => trigger.kill());
    };
  };

  useEffect(() => {
    // const destory = scrollAnimation();
    // return () => {
    //   destory();
    // };
  }, []);

  return (
    <>
      <div className="scroll-wrap container" ref={scrollWrapElement}>
        <div className="content-blocks">
          <div className="content-blocks__block">
            <ContentBlock subtitle="Beautfiul and on-brand" title="Polished and ready in one click">
              <p className="content-body">
                Save hours spent formatting boxes to fit on a slide with <b>flexible cards </b> and
                <b> fluid layouts </b>
                that expand as you add new blocks.
              </p>

              <ReviewCard
                company="Stotles"
                name="John"
                position="Co-founder & CEO"
                profileSrc="/image/avatars/john_avatar.jpg"
              >
                Creating polished slides gets really tedious, especially aligning boxes and keeping things on-brand.
                With Gamma, I can get things done so much faster.
              </ReviewCard>
            </ContentBlock>
          </div>

          <div className="content-blocks__block">
            <ContentBlock subtitle="Beautfiul and on-brand" title="Polished and ready in one click">
              <p className="content-body">
                Save hours spent formatting boxes to fit on a slide with <b>flexible cards </b> and
                <b> fluid layouts </b>
                that expand as you add new blocks.
              </p>

              <FeatureListItem icon="🎉">
                <b>No more</b> slide masters or template lock-in
              </FeatureListItem>
              <FeatureListItem icon="🎨">
                Restyle your entire deck in just <b>one click</b>
              </FeatureListItem>
              <FeatureListItem icon="⏰">
                Use a <b>flexible template</b> to work faster
              </FeatureListItem>
            </ContentBlock>
          </div>

          <div className="content-blocks__block">
            <ContentBlock subtitle="Beautfiul and on-brand" title="Polished and ready in one click">
              <p className="content-body">
                Save hours spent formatting boxes to fit on a slide with <b>flexible cards </b> and
                <b> fluid layouts </b>
                that expand as you add new blocks.
              </p>

              <ReviewCard
                company="Stotles"
                name="John"
                position="Co-founder & CEO"
                profileSrc="/image/avatars/john_avatar.jpg"
              >
                Creating polished slides gets really tedious, especially aligning boxes and keeping things on-brand.
                With Gamma, I can get things done so much faster.
              </ReviewCard>
            </ContentBlock>
          </div>
        </div>

        <div id="video-wrap" className="videos">
          <div id="video" className="videos__video videos__video--1" ref={scrollVideoElement}></div>
          <div id="video" className="videos__video videos__video--2" ref={scrollVideoElement}></div>
          <div id="video" className="videos__video videos__video--3" ref={scrollVideoElement}></div>
        </div>
      </div>

      <style jsx>
        {`
          .scroll-wrap {
            margin-top: var(--space-2xl);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-md);
          }

          .videos {
            position: relative;
            width: 100%;
            height: 400px;

            &__video {
              position: absolute;
              width: 100%;
              height: 100%;
            }

            &__video--1 {
              background-color: red;
            }

            &__video--2 {
              background-color: blue;
            }

            &__video--3 {
              background-color: yellow;
            }
          }

          .content-blocks {
            .content-body {
              font-size: var(--text-md);
              line-height: 1.6em;
              margin-bottom: var(--space-sm);
            }

            &__block {
              border: 1px solid coral;
              max-width: 45ch;
              padding: 20vh 0;
              display: flex;
              align-items: center;
            }
          }

          @media only screen and (max-width: 768px) {
            .scroll-wrap {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default FeaturesHighlight;
