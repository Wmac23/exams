import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import Chart from 'chart.js/auto';

function ZoneChart2() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortindtægter - zoner");

  useEffect(() => {
    const getMyRejsekort = async () => {
      try {
        const q = query(rejsekortCollectionRef);
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMyRejsekort(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getMyRejsekort();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById("myChart6") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart6 = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: myRejsekort.map((rejsekort) => rejsekort.id),
          datasets: [
            {
              label: "Antal rejser",
              data: myRejsekort.map((rejsekort) => rejsekort.antal),
              backgroundColor: ["rgba(255, 165, 0)", "rgba(0, 107, 166)", "rgba(83,	93,	58)", "rgba(60, 179, 113)", "rgba(238, 130, 238)", "rgba(84, 1, 83)", "rgba(183, 0, 0)",],
              borderColor: "rgba(240, 240, 240)",
              borderWidth: 1,
            },
          ],
        },
      });

      return () => {
        myChart6.destroy();
      };
    }
  }, [myRejsekort]);

  return (
    <main>
      <h3>Rejsekortindtægter i 2023 fordelt på områder</h3>
      <canvas id="myChart6"></canvas>
    </main>
  );
}

export default ZoneChart2