import styles from "./style.module.scss";
import { translate } from "../../anim";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        2024'te dünya genelinde 452,961,207 web sitesi var. Bunların arasında
        kaybolmamak için digital voyage ile websitesinizi herkesi hayranlık
        içinde bırakacak şekilde inşa edelim. Websitesini tasarımınızı,
        hikayenizi ve kişiliğinizi yansıtacak şekilde özel olarak hazırlayarak,
        diğerlerinden ayıralım. Birbirin kopyası olan websitelerinden
        sıkıldıgınızı biliyoruz. Bu yüzden Digital Voyage ile yolculugunuzu
        başlatalım
      </p>
    </div>
  );
}
