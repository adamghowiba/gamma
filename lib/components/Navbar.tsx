import Link from 'next/link';
import Button from './button/Button';
import LocalIcon from './icon/LocalIcon';

const Navbar = () => {
  return (
    <>
      <nav>
        <LocalIcon icon="logo" />

        <div className="links">
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Login</Link>
          <Button size="small">Try for free</Button>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: sticky;
          z-index: 100;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: rgba(255, 248, 242, 0.66);
          backdrop-filter: blur(5px);
          padding: var(--space-3xs) var(--space-lg);
        }

        .links {
          display: flex;
          align-items: center;
          font-size: var(--text-base);
          gap: var(--space-md);
        }

        @media only screen and (max-width: 768px) {
          nav {
            padding: var(--space-3xs) var(--space-xs);
          }
          .links {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
