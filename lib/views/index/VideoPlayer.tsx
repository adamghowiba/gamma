import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from '../../utils/gsap';

const VideoPlayer = () => {
  let videoWrapperElement = useRef<HTMLDivElement>(null);
  let videoContainerElement = useRef<HTMLDivElement>(null);

  const expandPlayerAnimation = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: videoContainerElement.current,
        start: 'top+=100% bottom-=20%',
        end: 'bottom+=80% center',
        markers: true,
        scrub: 1.5,
        pin: videoContainerElement.current,
      },
    });

    timeline.to(videoWrapperElement.current, {
      scale: 2,
    });
    timeline.to(videoWrapperElement.current, {
      scale: 1,
    });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  };

  useEffect(() => {}, []);

  const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

  return (
    <>
      <div className="video-container" ref={videoContainerElement}>
        <div className="wrapper" ref={videoWrapperElement}>
          <ReactPlayer
            loop={true}
            onReady={() => console.log('ready')}
            url="https://www.youtube.com/embed/ENRK08JMg4Y"
            stopOnUnmount={true}
            playing={true}
            muted={true}
          />
        </div>
      </div>

      <style jsx>
        {`
          .video-container {
            width: min-content;
            margin: 0 auto;
            width: 640px;
            height: 360px;
            background-color: #F7EDEA;
          }

          .wrapper {
            width: min-content;
            height: min-content;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 10;
            overflow: hidden;
            margin: 0 auto;
            border-radius: 15px;
          }

          @media only screen and (max-width: 768px) {
            .video-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default VideoPlayer;
