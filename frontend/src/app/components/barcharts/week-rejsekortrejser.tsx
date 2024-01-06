import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import Chart from 'chart.js/auto';

function WeekChart() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortrejser - ugedage");

  useEffect(() => {
    const getMyRejsekort = async () => {
      try {
        const q = query(rejsekortCollectionRef, orderBy("time"));
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
    const ctx = document.getElementById("myChart2") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: myRejsekort.map((rejsekort) => rejsekort.id),
          datasets: [
            {
              label: "Rejser",
              data: myRejsekort.map((rejsekort) => rejsekort.dag),
              backgroundColor: "rgba(83, 93, 58)",
              borderColor: "rgba(83, 93, 58)",
              borderWidth: 1,
            },
          ],
        },
      });

      return () => {
        myChart2.destroy();
      };
    }
  }, [myRejsekort]);

  return (
    <main>
      <h3>Gennemsnitlig rejser på rejsekort pr. ugedag i 2023</h3>
      <canvas id="myChart2"></canvas>
    </main>
  );
}

export default WeekChart;