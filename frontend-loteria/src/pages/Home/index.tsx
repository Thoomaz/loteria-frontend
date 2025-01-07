import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Card from "../../components/Card/Card";
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
          {
            data?.map((item) => (
              <Card
                key={item.id}
                title={item.title}
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