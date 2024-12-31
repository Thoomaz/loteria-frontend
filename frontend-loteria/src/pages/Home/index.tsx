import Header from "../../components/header/Header"
import Presentation from "../../components/presentation/Presentation"
import Container from "../../components/container/Container"

function Home () {
    return(
        <>
            <Header />
            <Container>
                <Presentation />
            </Container>
        </>
    )
}

export default Home