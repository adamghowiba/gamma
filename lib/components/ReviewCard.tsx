import React, { FC } from 'react';

export interface ReviewCard {
  children: string;
  name: string;
  position?: string;
  company: string;
  profileSrc: string;
}

const ReviewCard: FC<ReviewCard> = props => {
  return (
    <>
      <div className="review">
        <p className='review__body'>{props.children}</p>

        <div className="from">
          <img src={props.profileSrc} className="from__profile" />

          <div className="from__info">
            <span>{props.name}, </span>
            <span>
              {props.position} {props.position && 'at '}
            </span>
            <span>{props.company}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .review {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          border: 1px solid #e7dfd7;
          padding: var(--space-sm);
          border-radius: 12px;
          background-color: white;
          box-shadow: 0 40px 86px 0 rgba(211, 187, 162, 0.34);

          &__body {
            line-height: 1.5em;
            font-size: var(--text-md);
          }
        }

        .from {
          display: flex;
          align-items: center;
          gap: var(--space-2xs);

          &__profile {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid #e7dfd7;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
        }
      `}</style>
    </>
  );
};

export default ReviewCard;
