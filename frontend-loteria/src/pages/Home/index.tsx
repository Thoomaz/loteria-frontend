import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.logo}>
            <div className={`${styles.circle} ${styles.large_circle}`}></div>
            <div className={`${styles.circle} ${styles.medium_circle}`}></div>
            <div className={`${styles.circle} ${styles.small_circle}`}></div>
            <h1 className={`${styles.text_presentation} ${styles.title}`}>Loteria</h1>
          </div>

          <div className={styles.slogan}>
            <p className={`${styles.text_presentation} ${styles.text}`}>
              agilize o processo <br />
              verifique seu bolão{" "}
              <a
                href="https://youtu.be/dQw4w9WgXcQ?si=mxaXf9FK-tcH9S7E"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlight}
              >
                AQUI
              </a>
            </p>
          </div>
          <button></button>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
