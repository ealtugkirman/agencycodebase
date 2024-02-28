/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import CoolButton from "./Elements/EncryptButton";
export default function NewsLetter() {
  return (
    <div className="relative items-center isolate overflow-hidden bg-first rounded-3xl mx-2 my-12 lg:my-4 md:mx-12 py-8 md:py-16 ">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white">
              Bültenimize Abone Olun
            </h2>
            <p className="mt-4 text-sm md:leading-8 text-gray-300">
              Dijital dünya hakkında en güncel içerikler, bilgiler, e-kitaplar
              için haftalık bültenimize abone olun.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Mail Adresiniz
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="email@gmail.com"
              />
              {/* <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-first shadow-sm hover:bg-red-500 hover:text-white duration-1100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Abone Ol
              </button> */}
              <CoolButton />
            </div>
          </div>
          <dl className="hidden lg:flex flex-row items-center lg:justify-between text-left text-wrap gap-x-8 gap-y-6  lg:pt-2">
            <div className="flex flex-col items-start">
              <CalendarDaysIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
              <dt className="mt-2 text-sm font-semibold text-white">
                Haftalık Makaleler
              </dt>
              <dd className="mt-1 text-sm  hidden md:block md:text-nd  md:leading-7 text-gray-300">
                Her Hafta Digital Voyage'da yayınlanan içerikleri bülten
                olarak mail adresinize göndeririz.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <HandRaisedIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
              <dt className="mt-2 text-sm font-semibold text-white">Spam Yok</dt>
              <dd className="mt-1 hidden md:block text-sm md:text-md md:leading-7 text-gray-300">
                E-posta adresiniz üçüncü taraflarla paylaşılmaz. Reklam, kampanya vb. içerikli mailler  gönderilmez.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-light to-yellow-900 opacity-70"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute right-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:top-6"
        aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-light to-yellow-900 opacity-70"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
