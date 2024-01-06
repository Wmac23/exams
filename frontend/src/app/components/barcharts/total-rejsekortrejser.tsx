import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import Chart from 'chart.js/auto';

function TotalChart() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortrejser - antal");

  useEffect(() => {
    const getMyRejsekort = async () => {
      try {
        const data = await getDocs(rejsekortCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMyRejsekort(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getMyRejsekort();
  }, []);

  useEffect(() => {
    
    const ctx = document.getElementById("myChart1") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: myRejsekort.map((rejsekort) => rejsekort.id),
          datasets: [
            {
              label: "Rejser",
              data: myRejsekort.map((rejsekort) => rejsekort.passagere),
              backgroundColor: "rgba(83, 93, 58)",
              borderColor: "rgba(83, 93, 58)",
              borderWidth: 1,
            },
          ],
        },
      });

      return () => {
        myChart1.destroy();
      };
    }
  }, [myRejsekort]);

  return (
    <main>
      <h3>Antal rejser på rejsekort pr. år</h3>
      <canvas id="myChart1"></canvas>
    </main>
  );
}

export default TotalChart;