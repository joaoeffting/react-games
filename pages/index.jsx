import Head from "next/head";
import GameRouter from "../src/components/GameRouter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <GameRouter url="/memory" name="Memory Game" />
    </div>
  );
}
