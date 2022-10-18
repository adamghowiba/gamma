import React, { FC, CSSProperties, useRef } from 'react';

interface PricingCardStackedProps {
  /* Number of stacks the card should have. */
  stackCount: number;
  children: any;
  style: CSSProperties;
}

const PricingCardStacked: FC<PricingCardStackedProps> = props => {
  return (
    <>
      <div className="card-container" style={{}}>
        {Array.from({ length: props?.stackCount || 3 }).map((_, i) => (
          <div className="card" key={i} style={{ top: i * 20 }}>
            {i === props.stackCount - 1 && (
              <div className="child" style={props.style}>
                {props.children}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .card-container {
          position: relative;
        }

        .card {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          background-color: white;
          position: absolute;
          top: 0;
          border: 1px solid #e5ddd4;
          box-shadow: 0 0 42px 0 rgba(182, 159, 136, 0.13), 0 20px 30px 0 rgba(211, 187, 162, 0.24);

          &:last-child {
            position: relative;
            box-shadow: 0 0 42px 0 rgba(182, 159, 136, 0.13), 0 20px 30px 0 rgba(211, 187, 162, 0.54);
          }
        }

        @media only screen and (max-width: 479px) {
          .child {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </>
  );
};

PricingCardStacked.defaultProps = {
  stackCount: 3,
};

export default PricingCardStacked;
