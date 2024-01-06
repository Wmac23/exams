import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import Chart from 'chart.js/auto';

function HourChart() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortfordeling - time");

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
    const ctx = document.getElementById("myChart7") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart7 = new Chart(ctx, {
        type: 'line',
        data: {
          labels: myRejsekort.map((rejsekort) => rejsekort.id),
          datasets: [
            {
              label: "Mandag - Torsdag",
              data: myRejsekort.map((rejsekort) => rejsekort.hver),
              backgroundColor: "rgba(255, 165, 0)",
              borderColor: "rgba(255, 165, 0)",
              borderWidth: 1,
            },
            {
                label: "Fredag",
                data: myRejsekort.map((rejsekort) => rejsekort.fre),
                backgroundColor: "rgba(255, 0, 0)",
                borderColor: "rgba(255, 0, 0)",
                borderWidth: 1,
              },
              {
                label: "Lørdag",
                data: myRejsekort.map((rejsekort) => rejsekort.lør),
                backgroundColor: "rgba(0, 0, 255)",
                borderColor: "rgba(0, 0, 255)",
                borderWidth: 1,
              },
              {
                label: "Søndag",
                data: myRejsekort.map((rejsekort) => rejsekort.søn),
                backgroundColor: "rgba(83, 93, 58)",
                borderColor: "rgba(83, 93, 58)",
                borderWidth: 1,
              },
          ],
        },
      });

      return () => {
        myChart7.destroy();
      };
    }
  }, [myRejsekort]);

  return (
    <main>
        <h3>Gennemsnitlig antal rejser på rejsekort pr. time fordelt på dagstyper i 2023</h3>
      <canvas id="myChart7"></canvas>
    </main>
  );
}

export default HourChart;