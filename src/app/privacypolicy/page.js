import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col space-y-6 text-sm py-32 px-12 md:px-32 lg:px-40 xl:px-52">
      <h1 className="text-3xl font-bold">Digital Voyage Gizlilik Politikası</h1>
      <p className="text-sm">Son Güncelleme: [28.02.2024]</p>
      <p>
        Digital Voyage'a hoş geldiniz. Digital Voyage, kullanıcılarının gizliliğini korumaya kararlıdır.
        Bu Gizlilik Politikası, web sitemizi kullandığınızda topladığımız kişisel bilgi türlerini,
        bu bilgileri nasıl kullandığımızı, paylaştığımızı ve koruduğumuzu açıklamaktadır.
        Digital Voyage'ı kullanarak, bu Gizlilik Politikası'nın şartlarını kabul etmiş olursunuz.
      </p>
      <div>
        <h2 className="text-lg font-semibold">1. Topladığımız Bilgiler</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>1.1. Kişisel Bilgiler:</strong> Digital Voyage'ı ziyaret ettiğinizde,
            adınız ve e-posta adresiniz gibi kişisel olarak tanımlanabilir bilgileri,
            sadece siz gönüllü olarak sağladıysanız toplayabiliriz.
          </li>
          <li>
            <strong>1.2. Kişisel Olmayan Bilgiler:</strong> Ayrıca, tarayıcı türü, dil tercihi,
            yönlendiren site ve her ziyaretçi talebinin tarihi ve saati gibi kişisel olmayan bilgileri de toplayabiliriz.
            Bu bilgiler, istatistiksel amaçlar için kullanılır ve Site'nin kullanıcı deneyimini iyileştirmeye yardımcı olur.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold">2. Bilgilerinizi Nasıl Kullanırız</h2>
        <p>Kişisel ve kişisel olmayan bilgileri, kullanıcı deneyimini geliştirmek,
          içerik sunmak ve site güvenliğini sağlamak amacıyla kullanırız.</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">3. Çerezler</h2>
        <p>Deneyiminizi geliştirmek ve analitik amaçlar için çerezler kullanırız.
          Çerez kullanımını tarayıcı ayarlarınızdan kontrol edebilirsiniz.</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">4. Üçüncü Taraf Bağlantılar</h2>
        <p>Üçüncü taraf web sitelerine bağlantılar içerebiliriz ve bu sitelerin gizlilik politikalarını gözden geçirmenizi öneririz.</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">5. Bilgi Paylaşımı</h2>
        <p>Kişisel bilgilerinizi sadece işimizi yürütmek için gerekli olan güvenilir üçüncü taraflarla paylaşırız ve gizliliğinizi koruruz.</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">6. Güvenlik</h2>
        <p>Kişisel bilgilerinizin güvenliğini sağlamak için makul önlemler alırız.</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">7. Çocukların Gizliliği</h2>
        <p>13 yaşın altındaki bireylerden bilgi toplamıyoruz ve ebeveynleri çocuklarının bize bilgi sağlaması durumunda iletişime geçmeye teşvik ederiz.</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">8. Gizlilik Politikasındaki Değişiklikler</h2>
        <p>Gizlilik politikamızda değişiklik yaparsak, bu sayfada güncelleriz.</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">9. İletişim Bilgileri</h2>
        <p>Sorularınız veya endişeleriniz varsa, lütfen contact@DigitalVoyage ile iletişime geçin.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
