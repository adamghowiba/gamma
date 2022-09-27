import React, { ReactElement, FC } from 'react';

export interface FeatureListItemProps {
  children: any;
  icon: string;
}

const FeatureListItem: FC<FeatureListItemProps> = props => {
  return (
    <>
      <div className="item">
        <div className="item__icon">
          <div className="icon">{props.icon}</div>
        </div>

        <p className="item__content">{props.children}</p>
      </div>

      <style jsx>
        {`
          .item {
            display: flex;
            align-items: center;
            gap: var(--space-xs);

            p {
              font-size: var(--text-md);
            }

            &__icon {
              width:  42px;
              height: 42px;
              display: flex;
              background-color: white;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              border: 1px solid #fcd7e9;
              box-shadow: 0 4px 4px 0 rgba(234, 190, 237, 0.4);
            }

            &__icon .icon {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 150%;
              position: relative;
              top: -2px;
            }
          }
        `}
      </style>
    </>
  );
};

export default FeatureListItem;
