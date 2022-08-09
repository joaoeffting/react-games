import Head from "next/head";
import GameRouter from "../src/components/GameRouter";
import styles from "../styles/Home.module.css";
import GameList from "./games";

export default function Home() {
  return <GameList />;
}
