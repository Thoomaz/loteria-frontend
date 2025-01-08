import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Container from "../../components/container/Container";
import styles from "./PoolDetail.module.css";

interface CardsState {
  id: number;
  title: string;
  type: string;
  price: number;
}

const Page: React.FC = () => {
    const { title } = useParams<{title: string}>();
    const location = useLocation();
    const state = location.state as CardsState;

    const { id, type, price } = state

    return (
      <>
        <Header />
        <Container>
          <section className={styles.poolContainer}>
            <h1 className={styles.poolTitle}>{title}</h1>
            <p>ID: {id}</p>
            <p>Type: {type}</p>
            <p>Price: {price}</p>
          </section>
        </Container>
        <Footer />
      </>
    );
}

export default Page;