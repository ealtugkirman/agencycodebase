"use client";
import Slider from "react-infinite-logo-slider";
import tecvity from "../../public/clients/tecvity-logo.png";
import hakemportal from "../../public/clients/hakemportalLogo.png";
import cognizer from "../../public/clients/cognizerlogo.png";
import voyage from "../../public/clients/altcoinvoyage.png";
import atilogo from "../../public/clients/atilogo.png";
import psykri from "../../public/clients/psykri.png";

import Image from "next/image";

const LogoSlider = () => {
  return (
    <div className="h-80 py-12 md:py-16 lg:py-24 items-center">
      <h1 className="text-dark mb-8 text-xl lg:text-2xl font-bold opacity-70 text-center">
        Müşterilerimiz
      </h1>
      <Slider
        className="shadow-xl"
        width="250px"
        duration={15}
        // pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}>
        <Slider.Slide>
          <Image src={tecvity} alt="any" className="w-32 xl:w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={psykri} alt="any3" className="w-32 xl:w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={hakemportal} alt="any2" className="w-32 xl:w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={cognizer} alt="any3" className="w-32 xl:w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={voyage} alt="any3" className="w-32 xl:w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={atilogo} alt="any3" className="w-32 xl:w-48" />
        </Slider.Slide>

        {/* <Slider.Slide>
          <div>Other component...</div>
        </Slider.Slide> */}
      </Slider>
    </div>
  );
};

export default LogoSlider;
