import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Container from "../../components/container/Container";
import styles from "./PoolDetail.module.css";
import BetsTable from "../../components/betTable/BetTable";
import AddingBet from "../../components/addingBet/AddingBet";
import AddingContest from "../../components/addingContest/AddingContest";
import { poolData } from "../../hooks/PoolDataPage";

interface CardsState {
  id: number;
  title: string;
  type: string;
  price: number;
}

const Page: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const location = useLocation();
  const state = location.state as CardsState | null;
  const { id = 0, type } = state || { id: 0, type: "default" };

  const { data } = poolData(id);

  const pool = data || {
    valueTotal: 0
  }
  
  return (
    <>
      <Header />
      <Container>
        <section className={styles.poolContainer}>
          <div className={styles.poolPageContent}>
            <div className={styles.poolLogoAndPoolType}>
              <img src="/icon.svg" alt="Logo" className={styles.poolLogo} />
              <h1 className={styles.poolType}>{type}</h1>
            </div>
            <h1 className={styles.poolTitle}>{title}</h1>
            <div className={styles.tableAndPriceContainer}>
              <BetsTable id={id} />
              <h3 className={styles.totalPrice}>Valor Investido: R$ {pool?.valueTotal}.00</h3>
            </div>
          </div>
          <h2 className={styles.addGamesAndContestTitle}>Adicione os Jogos</h2>
          <AddingBet id={id} gameType={type} />
          <h2 className={styles.addGamesAndContestTitle}>Adicione o Sorteio</h2>
          <AddingContest id={id} gameType={type} />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Page;