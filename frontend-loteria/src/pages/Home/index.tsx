import Header from "../../components/Header/Header";
import Presentation from "../../components/Presentation/Presentation";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Presentation />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
