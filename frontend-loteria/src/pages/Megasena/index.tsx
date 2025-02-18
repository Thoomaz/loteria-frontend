import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useEffect } from "react";

function Megasena() {

  useEffect(() => {
    document.title = "Mega-Sena";
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Mega-sena</h1>
      </Container>
      <Footer />
    </>
  );
}

export default Megasena;
