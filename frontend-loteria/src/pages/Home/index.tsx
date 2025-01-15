import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import Card from "../../components/card/Card";
import ButtonCreatePool from "../../components/buttonCreatePool/ButtonCreatePool";
import Modal from "../../components/modal/Modal";
import { useEffect, useState } from "react";
import { poolsData } from "../../hooks/CardsData";
import Loader from "../../components/loader/Loader";

function Home() {
  const { data } = poolsData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] =useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

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

          <div className="cardColumnTitlesContainer">
            <h3 className="cardColumnTitles">Nome</h3>
            <h3 className="cardColumnTitles">Modalidade</h3>
            <h3 className="cardColumnTitles">Valor Invest.</h3>
          </div>

          {loading ? (
            <Loader/>
          ) : (
            data?.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                type={item.type}
                price={item.valueTotal}
                id={item.id}
              />
            ))
          )}
        </section>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </Container>
      <Footer />
    </>
  );
}

export default Home;