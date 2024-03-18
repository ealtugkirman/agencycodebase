import Image from "next/image";
import bg from "../../public/WorkWithUs.json";
import Lottie from "lottie-react";

export default function WhoAreWe() {
  return (
    <div className="relative font-af  isolate overflow-hidden bg-light  py-32 lg:overflow-visible lg:px-6">
      <div className="flex flex-col mb-6 md:mb-0  px-8 md:mx-16 lg:mx-16 ">
        <h1 className="mt-2 text-center text-xl md:text-2xl lg:text-4xl font-bold  text-first ">
          Yolculuğunuzu Geleceğe Taşıyoruz{" "}
        </h1>
        <p className="mt-4 md:mt-6 text-md   md:text-xl lg:text-3xl leading-6  text-gray-700">
          Digital Voyage, adını büyük keşiflerin ve maceraların başlangıcı olan
          "yolculuk" kavramından alır. Bizler, dijital dünyanın sonsuz
          olanaklarını keşfetmeniz için size rehberlik eden bir dijital ajansız.
          En son teknolojileri kullanarak güncel ve yenilikçi çözümler üretiyor,
          markanızın dijital alandaki yolculuğunu benzersiz bir maceraya
          dönüştürüyoruz.
        </p>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="hidden md:block  p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Lottie animationData={bg} />
        </div>
        <div className="lg:col-span-2  lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-4 lg:px-4">
          <div className="">
            <div className="max-w-xl  text-sm lg:text-base  text-gray-700 lg:max-w-lg">
              {/* <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p> */}
              <ul role="list" className="md:mt-6 space-y-8 text-gray-600">
                <li className="flex gap-x-3 text-sm md:text-lg  ">
                  {/* <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-first">
                      Yenilikçi Yaklaşım{" "}
                    </strong>{" "}
                    Klasik ve sıkıcı ajans modellerini bir kenara bırakıyor, her
                    müşterimiz için özgün ve etkili stratejiler geliştiriyoruz.
                    Digital Voyage ile standartların ötesine geçin.
                  </span>
                </li>
                <li className="flex gap-x-3 text-sm md:text-lg  ">
                  {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-first">
                      Teknoloji ile İç İçe
                    </strong>{" "}
                    En yeni dijital araçları ve teknolojileri kullanarak,
                    markanızın ihtiyaçlarına en uygun çözümleri sunuyoruz.
                    Geleceğin dijital trendlerini bugünden yakalayın
                  </span>
                </li>
                <li className="flex gap-x-3 text-sm md:text-lg  ">
                  {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-first">
                      Sonuç Odaklı
                    </strong>{" "}
                    Yalnızca görsel ve teknik çözümler sunmakla kalmıyor,
                    işinizi büyütmek için gerçek sonuçlar elde etmeyi
                    hedefliyoruz. Başarınız, bizim başarımızdır.
                  </span>
                </li>
                <li className="flex gap-x-3 text-sm md:text-lg  ">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold  text-first">
                      Kişiye Özel Çözümler
                    </strong>{" "}
                    Her markanın bir hikayesi vardır ve biz bu hikayeyi dünyaya
                    en etkili şekilde anlatmanız için kişiye özel çözümler
                    üretiyoruz. Digital Voyage ile markanızın özgün sesini
                    bulun.
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-sm md:text-lg ">
                Digital Voyage ile dijital dünyada yeni bir yolculuğa çıkmaya
                hazır olun. Geleneksel ajans modellerinden sıyrılarak, markanızı
                geleceğe taşıyacak yenilikçi ve etkili dijital stratejiler
                geliştirelim. İster yeni bir marka olun ister sektörde uzun
                yıllardır var olan bir isim, sizin için en uygun rotayı birlikte
                belirleyelim. Digital Voyage, sizi ve markanızı dijital
                geleceğin zirvesine taşımaya hazır.
              </p>
              <h2 className="mt-16 text-lg md:text-xl lg:text-2xl tracking-tight text-first">
                Hem Çalışalım Hem Öğretelim: Bilgiyi Paylaşmanın Gücü
              </h2>
              <p className="mt-2 md:mt-4 lg:mt-6 text-sm md:text-lg  ">
                Digital Voyage olarak bizler, "Hem Çalışalım Hem Öğretelim"
                mottosu ile yola çıkıyoruz. Bu yaklaşım, markamızın dijital
                dünyada sadece hizmet sağlayıcı olmadığını, aynı zamanda bilgi
                ve deneyim paylaşımında da öncü bir rol üstlendiğini vurgular.
                Müşterilerimizle iş birliği yaparken, onlara sadece çözümler
                sunmakla kalmıyor, dijital dünyanın karmaşık yapısını anlamaları
                ve bu alanda kendilerini geliştirmeleri için gereken bilgileri
                de paylaşıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
