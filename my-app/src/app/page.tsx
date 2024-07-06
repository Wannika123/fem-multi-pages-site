import styles from "./page.module.css";
import Collection from "@/components/home/Collection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeIntro from "@/components/home/HomeIntro";
import HowItWorks from "@/components/HowItWorks";
import CreateBtn from "@/components/CreateBtn";

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.intro}>
        <HomeIntro />
      </section>

      <section className={styles.collection}>
        <Collection />
      </section>

      <section className={styles['why-choose-us']}>
        <WhyChooseUs />
      </section>

      <section className={styles['how-it-works']}>
        <h3>How it works</h3>
        <HowItWorks textColor="#333d4b" />
        <div className={styles.btnWrapper}>
          <CreateBtn />
        </div>
      </section>

    </main>
  );
}
