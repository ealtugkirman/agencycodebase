import Image from "next/image";
import bg from "../../public/whoarewe.avif";
const links = [
  { name: "Web Geliştirme", href: "about" },
  { name: "Mobil Uygulama", href: "about" },
  { name: "Medya Yönetimi", href: "about" },
  { name: "Dijital Ürünler", href: "about" },
];
const stats = [
  { name: "Kişilik Ekip", value: "12" },
  { name: "Organik Baglantı", value: "300+" },
  { name: "Haftalık Saat", value: "40+" },
  { name: "Size verilen deger", value: "Sınırsız" },
];

export default function WorkWithUs() {
  return (
    <div className="relative text-light mx-4 md:mx-12 lg:mx-24 rounded-3xl isolate overflow-hidden bg-gray-900 py-20">
      <Image
        src={bg}
        alt=""
        width={500}
        height={500}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
            Dijital Yolculugunuzu Beraber Başlatalım
          </h2>
          <p className="mt-6 text-md font-light leading-8 text-gray-300">
            Digital Voyage ihtiyaçınız olan çözümleri güncel, sektör standartı
            teknolojilerle, yenlikçi bir yaklaşım sayesinde size en uygun
            şekilde sunar
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-2 gap-x-1 gap-y-2 text-base font-light leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
