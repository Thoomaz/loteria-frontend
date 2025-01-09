import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Container from "../../components/container/Container";
import styles from "./PoolDetail.module.css";
import AddingGames from "../../components/addingGames/AddingGames";
import BetsTable from "../../components/betTable/BetTable";

interface CardsState {
  id: number;
  title: string;
  type: string;
  price: number;
}

const Page: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const location = useLocation();
  const state = location.state as CardsState;

  const { id, type, price } = state;

  return (
    <>
      <Header />
      <Container>
        <section className={styles.poolContainer}>
          <div className={styles.poolLogoAndPoolType}>
            <img src="/icon.svg" alt="Logo" className={styles.poolLogo} />
            <h1 className={styles.poolType}>{type}</h1>
          </div>
          <h1 className={styles.poolTitle}>{title}</h1>
          <BetsTable />
          <p>ID: {id}</p>
          <p>Price: {price}</p>
          {/* Passando o type para o componente AddingGames */}
          <AddingGames gameType={type} />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Page;