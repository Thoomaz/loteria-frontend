import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Card from "../../components/Card/Card";
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
        <section className="presentation">
          <div className="logo">
            <div className="circle largeCircle"></div>
            <div className="circle mediumCircle"></div>
            <div className="circle smallCircle"></div>
            <h1 className="textPresentation title">
              Loteria
            </h1>
          </div>

          <div className="slogan">
            <p className="textPresentation text">
              agilize o processo <br />
              verifique seu bolão{" "}
              <a
                href="https://youtu.be/dQw4w9WgXcQ?si=mxaXf9FK-tcH9S7E"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
              >
                AQUI
              </a>
            </p>
          </div>
        </section>
        <section className="home">
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