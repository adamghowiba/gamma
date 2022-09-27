import React, { useEffect, useRef } from 'react';
import ContentBlock from '../../components/ContentBlock';
import FeatureListItem from '../../components/FeatureListItem';
import ReviewCard from '../../components/ReviewCard';
import { gsap } from '../../utils/gsap';

export interface FeaturesHighlightProp {}

const FeaturesHighlight = () => {
  const scrollVideoElement = useRef<HTMLDivElement>(null);
  const scrollWrapElement = useRef<HTMLDivElement>(null);

  const scrollAnimation = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollWrapElement.current,
        pin: scrollVideoElement.current,
        start: 'top center-=100px',
        end: 'bottom center+=300px',
      },
    });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
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

        <div className="video-wrap">
          <div className="video-wrap__video" ref={scrollVideoElement}></div>
          <div className="video-wrap__video"></div>
          <div className="video-wrap__video"></div>
        </div>
      </div>

      <style jsx>
        {`
          .scroll-wrap {
            margin-top: var(--space-2xl);
            display: flex;
            justify-content: space-between;
          }

          .video-wrap {
            &__video {
              width: 400px;
              height: 400px;
              background-color: beige;
            }
          }

          .content-blocks {
            .content-body {
              font-size: var(--text-md);
              line-height: 1.6em;
              margin-bottom: var(--space-sm);
            }

            &__block:nth-child(1) {
              padding-top: 0;
            }

            &__block:last-child {
              padding-bottom: 0;
            }

            &__block {
              max-width: 45ch;
              padding: 20vh 0;
              display: flex;
              align-items: center;
            }
          }

          @media only screen and (max-width: 768px) {
            .scroll-wrap {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default FeaturesHighlight;
