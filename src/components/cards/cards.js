import React from "react";
import Card from "../card/card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.layout}>
          {props.result.map((element) => (
            <Card element={element} />
          ))}
        </div>
      </section>
    </div>
  );
}
