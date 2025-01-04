import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import Card from "../../components/card/Card";
import ButtonCreatePool from "../../components/CreatePool/Button/ButtonCreatePool";
import Modal from "../../components/CreatePool/Modal/Modal";
import { useState } from "react";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <Container>
        <section className={styles.presentation}>
          <div className={styles.logo}>
            <div className={`${styles.circle} ${styles.largeCircle}`}></div>
            <div className={`${styles.circle} ${styles.mediumCircle}`}></div>
            <div className={`${styles.circle} ${styles.smallCircle}`}></div>
            <h1 className={`${styles.textPresentation} ${styles.title}`}>
              Loteria
            </h1>
          </div>

          <div className={styles.slogan}>
            <p className={`${styles.textPresentation} ${styles.text}`}>
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
        </section>
        <section className={styles.home}>
          <ButtonCreatePool onClick={openModal} />
          <Card title="Bolão da Sorte" price="R$50,00" />
          <Card title="Mega Sena" price="R$100,00" />
        </section>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </Container>
      <Footer />
    </>
  );
}

export default Home;