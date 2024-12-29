import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Card title="Bolão da Sorte" price="R$50,00"/>
    </>
  );
}

export default App;
