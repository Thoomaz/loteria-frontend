import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import "./Lotofacil.css"
import { useEffect } from "react";

function Lotofacil() {
  
  useEffect(() => {
    document.title = "Lotofácil";
  }, []);

  return (
    <>
      <Header />
      <Container>
        <section className="lotoFacil">
          <h1 className="typeLotofacil">Lotofácil</h1>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Lotofacil;
