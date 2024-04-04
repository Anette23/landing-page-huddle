import logo from "../assets/img/logo.svg";
import heroImage from '../assets/img/illustration-mockups.svg'
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-veryPaleCyan px-6 lg:px-20 py-12">
      <header className="flex justify-between items-center ">
        <img src={logo} width={150} height={25} alt="Huddle logo" />
        <button className="bg-white py-2 px-6 rounded-full shadow-lg text-sm duration-500 hover:text-grayishBlue hover:shadow-xl">
          Try it free
        </button>
      </header>
      <section className="text-center lg:text-left pt-20 lg:pt-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:mt-6">
        <h1 className="text-3xl text-veryDarkCyan mb-8 lg:mb-4"> Build The Community Your Fans Will Love</h1>
        <p className="mb-8 lg:mb-6">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <Button />
        </div>
        <div>
        <img src={heroImage} alt="mockups" className="mt-14" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
