import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import styles from "./PoolDetail.module.css";

const Page: React.FC = () => {
    const { title } = useParams<{title: string}>();

    return (
        <>
          <Header />
          <Container>
            <section className={styles.poolContainer}>
              <h1 className={styles.poolTitle}>{title}</h1>
            </section>
          </Container>
          <Footer />
        </>
      );
}

export default Page;