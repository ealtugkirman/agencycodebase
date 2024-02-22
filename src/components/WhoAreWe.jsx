import Image from "next/image";
import bg from "../../public/WorkWithUs.json";
import Lottie from "lottie-react";

export default function WhoAreWe() {
  return (
    <div className="relative isolate overflow-hidden bg-light px-6 py-24 sm:py-32 lg:overflow-visible lg:px-6">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-4 lg:px-4">
          <div className="lg:pr-4">
            <div className="lg:max-w-xl">
              <p className="text-base font-semibold leading-3 text-indigo-600">
                Digital Voyage Hakkında
              </p>
              <h1 className="mt-2 text-2xl font-bold  text-black underline md:text-3xl">
                Yolculuğunuzu Geleceğe Taşıyoruz{" "}
              </h1>
              <p className="mt-6 text-xl leading-6 font-mr text-gray-700">
                Digital Voyage, adını büyük keşiflerin ve maceraların başlangıcı
                olan "yolculuk" kavramından alır. Bizler, dijital dünyanın
                sonsuz olanaklarını keşfetmeniz için size rehberlik eden bir
                dijital ajansız. En son teknolojileri kullanarak güncel ve
                yenilikçi çözümler üretiyor, markanızın dijital alandaki
                yolculuğunu benzersiz bir maceraya dönüştürüyoruz.
              </p>
            </div>
          </div>
        </div>
        <div className="  p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Lottie animationData={bg} />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-4 lg:px-4">
          <div className="">
            <div className="max-w-xl text-base  text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  {/* <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-first underline">
                      Yenilikçi Yaklaşım{" "}
                    </strong>{" "}
                    Klasik ve sıkıcı ajans modellerini bir kenara bırakıyor, her
                    müşterimiz için özgün ve etkili stratejiler geliştiriyoruz.
                    Digital Voyage ile standartların ötesine geçin.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-first underline">
                      Teknoloji ile İç İçe
                    </strong>{" "}
                    En yeni dijital araçları ve teknolojileri kullanarak,
                    markanızın ihtiyaçlarına en uygun çözümleri sunuyoruz.
                    Geleceğin dijital trendlerini bugünden yakalayın
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-first underline">
                      Sonuç Odaklı
                    </strong>{" "}
                    Yalnızca görsel ve teknik çözümler sunmakla kalmıyor,
                    işinizi büyütmek için gerçek sonuçlar elde etmeyi
                    hedefliyoruz. Başarınız, bizim başarımızdır.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-first underline">
                      Kişiye Özel Çözümler
                    </strong>{" "}
                    Her markanın bir hikayesi vardır ve biz bu hikayeyi dünyaya
                    en etkili şekilde anlatmanız için kişiye özel çözümler
                    üretiyoruz. Digital Voyage ile markanızın özgün sesini
                    bulun.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-first underline">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
