import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "./barchart.module.css";
import { getDocs, collection } from "firebase/firestore";
import { Chart } from "chart.js";
import Navbar from "../components/Navbar";
import RejsekortNav from "../components/RejsekortNav";
import { Tooltip } from "../components/tooltip";

function Barchart() {
  const [myRejser, setMyRejser] = useState([]);
  const rejserCollectionRef = collection(db, "rejsekortrejser - antal");

  useEffect(() => {
    const getMyPokemon = async () => {
      try {
        const data = await getDocs(rejserCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMyRejser(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getMyPokemon();
  }, []);

  useEffect(() => {
    
    const ctx = document.getElementById("myChart") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: myRejser.map((antal) => antal.id),
          datasets: [
            {
              label: "Abilities",
              data: myRejser.map((antal) => antal.passagere),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [myRejser]);

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