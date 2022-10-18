import Link from 'next/link';
import Button from './button/Button';
import LocalIcon from './icon/LocalIcon';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link href="/">
            <div>
              <LocalIcon icon="logo" />
            </div>
          </Link>
        </div>

        <div className="links">
          <div className="link">
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="link">
            <Link className="link links__mobile-hide" href="/login">
              Login
            </Link>
          </div>
          <Button size="small" href="/pricing">
            Try for free
          </Button>
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

        .logo:hover {
          cursor: pointer;
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

          .link:nth-child(1),
          .link:nth-child(2) {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
