import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import Chart from 'chart.js/auto';

function TotalChart3() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortfordeling - korttype");

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
              backgroundColor: ["rgba(255, 165, 0)", "rgba(0, 107, 166)", "rgba(83	93	58)",],
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
      <h3>Antal rejser på rejsekort i 2023 fordelt på korttype</h3>
      <canvas id="myChart6"></canvas>
    </main>
  );
}

export default TotalChart3