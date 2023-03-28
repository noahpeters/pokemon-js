import "./styles.css";
import { Suspense } from "react";
import Pokemon from "./Pokemon";
import Compare from "./Compare";

export default function App() {
  return (
    <Suspense
      fallback={<Pokemon pokemon={{ name: "loading...", moves: [] }} />}
    >
      <Compare />
    </Suspense>
  );
}
