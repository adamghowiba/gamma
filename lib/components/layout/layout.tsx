import Head from 'next/head';
import Navbar from '../Navbar';

interface LayoutProps {
  children: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="main">{props.children}</div>

      <style jsx>
        {`
          .main {
            height: calc(100% - 64px);
            
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
