import React from 'react';

const HeroBgOverlay = () => {
  return (
    <>
      <div className="circle-wrapper">
        <div className="circle circle--1"></div>
        <div className="circle circle--2"></div>
        <div className="circle circle--3"></div>
        <div className="circle circle--4"></div>
      </div>

      <style jsx>{`
        .circle-wrapper {
          top: 0;
          width: 100%;
          height: 200%;
          overflow: hidden;
          position: absolute;
          z-index: 10;
        }

        .circle {
          position: absolute;
          top: 0%;
          bottom: auto;
          width: 50.34vw;
          height: 50.34vw;
          border-radius: 100%;
          filter: blur(220px);
          -webkit-filter: blur(220px);
          -webkit-text-fill-color: inherit;
          background-clip: border-box;

          &--1 {
            opacity: 0.3;
            left: -7.9vw;
            background-color: #dcc0ff;
          }

          &--2 {
            right: -7.9vw;
            opacity: 0.2;
            background-color: #f99b52;
          }

          &--3 {
            left: 21.775vw;
            right: 21.775vw;
            opacity: 0.14;
            background-color: #f2ef3f;
          }

          &--4 {
            left: 17vw;
            right: 27vw;
            width: 66vw;
            height: 66vw;
            margin-top: -85px;
            filter: blur(80px);
            opacity: 1;
            background-image: radial-gradient(circle farthest-corner at 50% 50%, #fff, hsla(0, 0%, 100%, 0.2));
          }
        }
      `}</style>
    </>
  );
};

export default HeroBgOverlay;
