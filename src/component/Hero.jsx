import coffeebg from "../assets/more/3.png";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url('${coffeebg}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-4xl font-bold">
            Would you like a <span className="text-amber-400">Cup of Delicious Coffee?</span>
          </h1>
          <p className="mb-5 text-sm leading-relaxed">
            It’s coffee time – Sip & Smile ☕. Relish the intensity of taste and the soothing touch
            of aroma in every moment. Enjoy the beautiful moments made better with coffee.
          </p>
          <button className="btn btn-warning hover:bg-transparent hover:border-white hover:text-white px-8">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
