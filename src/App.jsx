import styles from "./App..module.css";
import img from "./images/drawers.jpg";

// import Header from "./components/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_main}>
        {" "}
        <img src={img} alt="" />
        <div>
          <h1 style={{ padding: "20px" }}>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete. Michelle Appleton 28 Jun 2020 Share
          </p>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
