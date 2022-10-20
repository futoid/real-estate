import React from "react";
import Card from "../card/card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  //Cards components which is the all card section
  //This component is taking single CARD and showing all data
  //data is provided by App.js
  //data is filtered acc. to the parameters of user


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
