import React, { FC, SourceHTMLAttributes } from 'react';

export interface VideoContainerProps {
  videoSrc: string;
  videoType: SourceHTMLAttributes<HTMLSourceElement>['type'];
}

const VideoContainer: FC<VideoContainerProps> = props => {
  return (
    <>
      <div className="video-wrap">
        <video className="video" autoPlay muted loop>
          <source src={props.videoSrc} type={props.videoType} />
        </video>
      </div>

      <style jsx>
        {`
          .video-wrap {
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 20px 30px 0 rgba(211, 187, 162, 0.64), 0 0 42px 0 rgba(182, 159, 136, 0.13);
            border: 2px solid #e7dfd7;
          }
          video {
            max-width: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
};

export default VideoContainer;
