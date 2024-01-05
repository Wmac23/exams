import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "./barchart.module.css";
import { getDocs, collection } from "firebase/firestore";
import { Chart } from "chart.js";
import Navbar from "../components/Navbar";
import RejsekortNav from "../components/RejsekortNav";
import { Tooltip } from "../components/tooltip";

function Barchart() {
  const [myPokemon, setMyPokemon] = useState([]);
  const pokemonCollectionRef = collection(db, "pokemon");

  useEffect(() => {
    const getMyPokemon = async () => {
      try {
        const data = await getDocs(pokemonCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMyPokemon(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getMyPokemon();
  }, []);

  useEffect(() => {
    // Render a bar chart using Chart.js
    const ctx = document.getElementById("myChart") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: myPokemon.map((pokemon) => pokemon.name),
          datasets: [
            {
              label: "Abilities",
              data: myPokemon.map((pokemon) => pokemon.Abilities),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
      });

      // Clean up the chart when the component unmounts
      return () => {
        myChart.destroy();
      };
    }
  }, [myPokemon]);

  return (
    <main className={styles.main}>
      <Navbar />
      <RejsekortNav />
      <div>
        <h1>Rejsekort</h1>
      </div>
      <canvas id="myChart" width="200" height="100"></canvas>
      <Tooltip />
    </main>
  );
}

export default Barchart;