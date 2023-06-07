import styles from "./Hero.module.css";
import CallToAction from "./CallToAction";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>PAAL AI</h1>
        <span className={styles.heroSubtitle}>With multi platform support</span>
        <p className={styles.heroText}>
          A powerful AI ecosystem, predicated on principles of continuous
          learning and adaptation. Empowered by cutting-edge machine learning
          algorithms, it offers seamless integration across numerous platforms
          including Discord, Telegram, chatbot applications, and web links. It's
          more than a simple chatbot; it's an entire digital environment that
          adapts to the needs of its users. This AI ecosystem provides a
          consistent, versatile experience, constantly evolving to better
          understand and respond to user inquiries, regardless of where or how
          they interact with it.
        </p>

        <CallToAction label="Whitepaper" />
      </div>
    </div>
  );
}