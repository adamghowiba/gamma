import React, { FC } from 'react';

interface FloatingTitle {
  topTitle: string;
  coloredTitle: string;
}

const FloatingTitle: FC<FloatingTitle> = props => {
  return (
    <>
      <section className="floating-title section--lg tight">
        <h1>See Gamma</h1>
        <h1 className="colored--text">in action</h1>
      </section>

      <style jsx>
        {`
          section {
            font-family: var(--font-p22);
            font-weight: 500;

            h1 {
              line-height: 1em;
              text-align: center;
              font-size: var(--text-title);
            }

            .colored--text {
              background-image: linear-gradient(
                50deg,
                #2b0aff,
                #ff5b8a 49%,
                #ff5b8a 53%,
                #ff5b8a 55%,
                #fba64b 77%,
                #f99b52
              );
            }
          }
        `}
      </style>
    </>
  );
};

export default FloatingTitle;
