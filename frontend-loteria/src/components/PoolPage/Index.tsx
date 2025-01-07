import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import Container from "../container/Container";

const Page: React.FC = () => {
    const { title } = useParams<{title: string}>();

    return (
        <>
          <Header />
          <Container>
            <h1>{title}</h1>
          </Container>
          <Footer />
        </>
      );
}

export default Page;