import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import Card from "../../components/card/Card";
import ButtonCreatePool from "../../components/CreatePool/Button/ButtonCreatePool";
import Modal from "../../components/CreatePool/Modal/Modal";
import { useState } from "react";
import { cardsData } from "../../hooks/CardsData";

function Home() {
  const { data } = cardsData();

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
          {
            data?.map((item) => (
              <Card
                key={item.id}
                title={item.name}
                price={item.valueTotal}
                id={item.id}
              />
            ))
          
          }
        </section>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </Container>
      <Footer />
    </>
  );
}

export default Home;