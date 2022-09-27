import React, { FC } from 'react';

interface HeroTitle {
  subtitle: string;
  title?: string;
}

const HeroTitle: FC<HeroTitle> = props => {
  return (
    <>
      <div className="title">
        <h4 className="subtitle">{props.subtitle}</h4>

        <div className="title__main tight">
          <h1>Write like a doc</h1>
          <h1 className="colored">Present like a deck</h1>
        </div>
      </div>

      <style jsx>{`
        .title {
          position: relative;
          text-align: center;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          z-index: 40;

          &__main {
            font-size: var(--fs-xxxl);
            line-height: 1.2em;
            font-family: var(--font-p22);
          }

          .subtitle {
            font-size: var(--text-md);
            color: var(--color-text-muted);
          }
        }

        .colored {
          background-image: linear-gradient(50deg, #2b0aff, #ff5b8a 49%, #ff5b8a 53%, #ff5b8a 55%, #fba64b 77%, #f99b52);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};

export default HeroTitle;
