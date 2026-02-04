import React from "react";

function Pizza(props) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? '0 15px 40px rgba(199, 61, 61, 0.3)' : '0 10px 30px rgba(0,0,0,0.15)',
        borderColor: isHovered ? '#c73d3d' : 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.photoName}
        alt={props.name}
        style={{
          ...styles.image,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      <h3 style={styles.title}>{props.name}</h3>
      <p style={styles.ingredients}>{props.ingredients}</p>
      <button 
        style={{
          ...styles.button,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        Order Now
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    padding: "20px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "2px solid transparent",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "2rem",
    margin: "0 0 12px 0",
    color: "#c73d3d",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  ingredients: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
  button: {
    background: "linear-gradient(135deg, #c73d3d 0%, #8b1a1a 100%)",
    color: "#ffffff",
    border: "none",
    padding: "15px 40px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.1rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 6px 20px rgba(199, 61, 61, 0.4)",
    transition: "all 0.3s ease",
  },
};

export default Pizza;
