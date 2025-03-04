import Button from "./Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[100vh] w-[50vw] top-10 left-full"
          fill="red"
        />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="red" />
      </div>
      <div className="text-center my-20 mx-auto max-w-[900px] justify-center flex flex-col ">
        <Reveal>
          <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-extrabold">
            Hey, I&apos;m {''}
            <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              Kush Prakhar!
            </span>
          </h1>
        </Reveal>
        <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl">
          I&apos;m an AI/ML Developer & Data Science Enthusiast!
        </h2>
        <p className="max-w-[700px] mx-auto">
          Passionate about Machine Learning, Deep Learning, and Generative AI. I build end-to-end AI solutions, optimize models, 
          and explore cutting-edge research to solve real-world challenges. Let&apos;s connect and innovate together! 🚀
        </p>
        <a className="mt-10 mx-auto" href="#contact">
          <Button
            title="Contact me"
            icon={<img src="assets/send.svg" alt="Send Icon" />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;