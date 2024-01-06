import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import Chart from 'chart.js/auto';

function ZoneChart() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortrejser - zoner");

  useEffect(() => {
    const getMyRejsekort = async () => {
      try {
        const q = query(rejsekortCollectionRef, orderBy("nr"));
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
    const ctx = document.getElementById("myChart3") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart3 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: myRejsekort.map((rejsekort) => rejsekort.id),
          datasets: [
            {
              label: "Zoner",
              data: myRejsekort.map((rejsekort) => rejsekort.zoner),
              backgroundColor: "rgba(83, 93, 58)",
              borderColor: "rgba(83, 93, 58)",
              borderWidth: 1,
            },
          ],
        },
      });

      return () => {
        myChart3.destroy();
      };
    }
  }, [myRejsekort]);

  return (
    <main>
        <h3>Gennemsnitlig antal rejste zoner på rejsekort i 2023</h3>
      <canvas id="myChart3"></canvas>
    </main>
  );
}

export default ZoneChart;