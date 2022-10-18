import LandingFooter from '../lib/views/index/LandingFooter';

const Test = () => {
  return (
    <div className="">
      <div className="filler"></div>
      <LandingFooter />

      <style jsx>{`
        .filler {
          height: 50vh;
        }
      `}</style>
    </div>
  );
};

export default Test;
