import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Megasena.css"
import { useEffect } from "react";

function Megasena() {

  useEffect(() => {
    document.title = "Mega-Sena";
  }, []);

  return (
    <>
      <Header />
      <Container>
        <section className="megaSena">
          <h1 className="typeMegaSena">Mega-sena</h1>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Megasena;
