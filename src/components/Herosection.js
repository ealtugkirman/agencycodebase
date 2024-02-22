/* eslint-disable react/no-unescaped-entities */
"use client";
import Lottie from "lottie-react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <div className="flex flex-col  lg:pt-16 h-max">
      <div className="flex ml-4 md:ml-28 text-gradient space-y-4 pt-32 justify-start text-left">
        <div>
          {" "}
          <h2 className="text-sm md:text-xl">
            Digital Voyage, Türkiye merkezli yeni nesil çözümler sunan dijital
            danışmanlık ve web geliştirme ajansıdır.
          </h2>
          <h1 className=" text-4xl md:text-6xl pt-6 md:pt-0 lg:text-8xl   font-bold">
            YOLCULUGUNUZ ARTIK
          </h1>
          <span className="text-gradient text-4xl md:text-6xl  lg:text-8xl font-bold">
            <TypeAnimation
              sequence={[
                "DİKKAT ÇEKİCİ",
                1500,
                "SIRADIŞI",
                1500,
                "DAHA GÜÇLÜ",
                1500,
              ]}
              speed={50}
              className=""
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-12 lg:mt-24 md:mt-32 justify-between ">
        <div className="flex text-sm md:text-lg lg:text-2xl md:w-1/3 mx-4 mr-6 md:mx-0 md:ml-28">
          Müşterilerinizin sizin hakkınızda olumlu bir karara varması ilk 7
          saniyede gerçekleşir. <br /> Bizim için 5 saniye yeterli.
        </div>
        <div className="px-2 md:w-1/3 pt-3 md:pt-0 md:text-left text-sm md:text-lg lg:text-xl md:mr-44">
          <Accordion variant="light" className="">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Web Geliştirme">
              <p>
                Modern bir marka dijital varlığı ile tanımlanır ve bu digital
                varlık web siteniz ile başlar. Markanızın kimliğini ve bakış
                açısını etkili bir şekilde ileten web siteleri oluşturmaya
                odaklanıyoruz.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Uygulama Geliştirme">
              <p>
                Web ve mobil uygulama geliştiricilerimiz, görsel ve performans
                mükemmelliğine ulaşmaya adanmıştır. Backend'den frontend'e, tüm
                cihazlarda sorunsuz ve keyifli bir kullanıcı deneyimi sunmayı
                önemsiyoruz.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Dijital Ürünler">
              <p>
                Digital Voyage, hem estetik hem de davranış bilimi kullanarak
                otantik bağlantılar tasarlamaya odaklanır. Deneyimli UI/UX
                tasarımcılarımızdan oluşan ekibimiz, markaların modern ekonomide
                gelişmesine yardımcı olan çekici dijital ürünler sunar.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
