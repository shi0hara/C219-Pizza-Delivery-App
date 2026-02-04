import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./Pizza"; 

function Header() {
  return (
    <header
  style={{
    ...styles.header,
    backgroundColor: "#c73d3dff",
    color: "white",           // makes all text inside white
    padding: "40px 20px",
    borderRadius: "0px",
  }}>
  <h1
    style={{
      fontSize: "70px",
      textTransform: "uppercase",
      margin: 0,
    }}
  >
    Shagga Shayne's Pies
  </h1>
  <p>Shayne's W Pies</p>
</header>
  );
};

function Menu() {
  return (
    <div className="menu">
      <h2 style={styles.sectionTitle}>Menu</h2>
      <div style={styles.grid}>
        <Pizza
          name="Focaccia"
          ingredients="Bread with olive oil and rosemary"
          photoName="/pizzas/focaccia.jpg"
        />
        <Pizza
          name="Funghi"
          ingredients="Tomato, mozzarella, mushrooms, and oregano"
          photoName="/pizzas/funghi.jpg"
        />
        <Pizza
          name="Margherita"
          ingredients="Tomato, mozzarella, and basil"
          photoName="/pizzas/margherita.jpg"
        />
        <Pizza
          name="Prosciutto"
          ingredients="Tomato, mozzarella, ham, mushrooms, and artichokes"
          photoName="/pizzas/prosciutto.jpg"
        />
        <Pizza
          name="Salamino"
          ingredients="Tomato, mozzarella, and pepperoni"
          photoName="/pizzas/salamino.jpg"
        />
        <Pizza
          name="Spinaci"
          ingredients="Tomato, mozzarella, spinach, and ricotta"
          photoName="/pizzas/spinaci.jpg"
        />
        
        </div>
        <br></br>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer" 
    style={{
        ...styles.header,
        backgroundColor: "#c73d3dff",
        color: "white",           // makes all text inside white
        padding: "   20px",
        borderRadius: "12px",
      }}>
      {isOpen ? "We’re currently open" : "Sorry we’re closed"}
    </footer>
  );
}



function App() {
  return (
    <div style={styles.container}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#ffffffff",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
    textAlign:"center",
    
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "60px",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);