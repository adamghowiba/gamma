import React, { FC } from 'react';

interface ContentBlockProps {
  subtitle: string;
  title: string;
  children?: any;
}

const ContentBlock: FC<ContentBlockProps> = props => {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <h4 className="content__subtitle">{props.subtitle}</h4>
          <h1 className="content__title tight">{props.title}</h1>
        </div>

        {props.children}
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          max-width: 30ch;

          &__subtitle {
            font-size: var(--text-md);
            color: var(--color-text-muted);
          }

          &__title {
            line-height: 1.1em;
            font-size: var(--text-h1);
            font-weight: 600;
            font-family: P22, Impact, 'Gill Sans';
          }
        }
      `}</style>
    </>
  );
};

export default ContentBlock;
