import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./Pizza"; 

function Header() {
  return (
    <header
  style={{
    ...styles.header,
    background: "linear-gradient(135deg, #c73d3d 0%, #8b1a1a 100%)",
    color: "white",
    padding: "60px 20px",
    borderRadius: "0px",
    boxShadow: "0 8px 20px rgba(199, 61, 61, 0.4)",
    position: "relative",
    overflow: "hidden",
  }}>
  <h1
    style={{
      fontSize: "70px",
      textTransform: "uppercase",
      margin: 0,
      textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
      letterSpacing: "4px",
      animation: "fadeInDown 1s ease-out",
    }}
  >
    🍕 Jerome's Lovely Pies 🍕
  </h1>
  <p style={{
    fontSize: "20px",
    marginTop: "10px",
    fontStyle: "italic",
    opacity: 0.95,
  }}>Authentic Italian Pizza • Fresh Daily</p>
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
        background: "linear-gradient(135deg, #8b1a1a 0%, #c73d3d 100%)",
        color: "white",
        padding: "30px 20px",
        borderRadius: "0px",
        marginTop: "60px",
        boxShadow: "0 -8px 20px rgba(199, 61, 61, 0.4)",
        fontSize: "24px",
        fontWeight: "bold",
      }}>
      {isOpen ? "🔥 We're currently open! Order now!" : "😴 Sorry we're closed - See you tomorrow!"}
      <div style={{
        fontSize: "14px",
        marginTop: "10px",
        opacity: 0.9,
        fontWeight: "normal",
      }}>
        Open daily: 10:00 AM - 10:00 PM
      </div>
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
    background: "linear-gradient(to bottom, #fff8f0 0%, #ffffff 100%)",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "3rem",
    marginBottom: "40px",
    marginTop: "40px",
    color: "#c73d3d",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "3px",
    textShadow: "2px 2px 4px rgba(199, 61, 61, 0.2)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
    padding: "0 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);