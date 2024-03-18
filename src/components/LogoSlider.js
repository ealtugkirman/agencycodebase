"use client";
import tecvity from "../../public/clients/tecvity-logo.png";
import hakemportal from "../../public/clients/hakemportalLogo.png";
import cognizer from "../../public/clients/cognizerlogo.png";
import voyage from "../../public/clients/altcoinvoyage.png";
import atilogo from "../../public/clients/atilogo.png";
import psykri from "../../public/clients/psykri.png";
import bilkent from "../../public/clients/bilkent-logo.png";
import Image from "next/image";

const LogoSlider = () => {
  return (
    <div className="flex px-12 font-it py-24 flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-semibold text-gradient">Müşterilerimiz</h1>
      <div className="grid gap-y-12 gap-x-24 items-center grid-cols-2 md:grid-cols-4 mt-12">
        <div className="" >
          <Image src={tecvity} alt="" width={200} height={80} />
        </div>
        <div className="" >
          <Image src={bilkent} alt="" width={200} height={80} />
        </div>
        <div className="" >
          <Image src={hakemportal} alt="" width={200} height={80} />
        </div>
        <div className="" >
          <Image src={atilogo} alt="" width={200} height={80} />
        </div>
      </div>
      <div className="grid gap-y-12 gap-x-24 items-center grid-cols-2 md:grid-cols-3 mt-12">
        <div className="" >
          <Image src={voyage} alt="" width={200} height={80} />
        </div>
        <div className="" >
          <Image src={cognizer} alt="" width={200} height={80} />
        </div>
        <div className="" >
          <Image src={psykri} alt="" width={200} height={80} />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
