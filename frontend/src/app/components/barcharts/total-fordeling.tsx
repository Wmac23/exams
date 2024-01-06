import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import Chart from 'chart.js/auto';

function TotalChart2() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortfordeling - antal");

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
    const ctx = document.getElementById("myChart5") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart5 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: myRejsekort.map((rejsekort) => rejsekort.id),
          datasets: [
            {
              label: "Rejser",
              data: myRejsekort.map((rejsekort) => rejsekort.antal),
              backgroundColor: "rgba(83, 93, 58)",
              borderColor: "rgba(83, 93, 58)",
              borderWidth: 1,
            },
          ],
        },
      });

      return () => {
        myChart5.destroy();
      };
    }
  }, [myRejsekort]);

  return (
    <main>
      <h3>Antal rejser på rejsekort i 2023 fordelt på områder</h3>
      <canvas id="myChart5"></canvas>
    </main>
  );
}

export default TotalChart2