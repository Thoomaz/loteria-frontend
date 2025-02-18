import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import { useEffect } from "react";

function Lotofacil() {
  
  useEffect(() => {
    document.title = "Lotofácil";
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Lotofácil</h1>
      </Container>
      <Footer />
    </>
  );
}

export default Lotofacil;
