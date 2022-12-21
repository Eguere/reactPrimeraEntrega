import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const title = "¡¡¡Bienvenidos a React!!!!!!!";

  function hacerAlgo() {
    alert("Hola");
  }

  const miEstilo = {
    backgroundColor: "pink",
    margin: "30px",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <div>
      <NavBar />
      <div style={miEstilo} className="catalogo">
        <Card
          img="https://cdn.shopify.com/s/files/1/0340/2190/0332/products/01-IPHONEBIOOCEAN_1800x1800.jpg?v=1637947552"
          title="Fundas"
          price={2500}
          detail="Fundas"
        />
        <Card
          img="https://www.fixtecnologia.com.ar/1086-large_default/cargador-iphone-x.jpg"
          title="Cargadores"
          price={1000}
          detail="Cargadores"
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyPJnyNNgfOPEdHhv0upS4PdiOmF51W_i2g&usqp=CAU"
          title="Memorias"
          price={3000}
          detail="Memorias"
        />
      </div>

    </div>
  );
}

export default App;