import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import Chart from 'chart.js/auto';

function MoneyChart() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortindtægter - år");

  useEffect(() => {
    const getMyRejsekort = async () => {
      try {
        const q = query(rejsekortCollectionRef );
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
    const ctx = document.getElementById("myChart8") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart8 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: myRejsekort.map((rejsekort) => rejsekort.id),
          datasets: [
            {
              label: "Rejser",
              data: myRejsekort.map((rejsekort) => rejsekort.indtægt),
              backgroundColor: "rgba(83, 93, 58)",
              borderColor: "rgba(83, 93, 58)",
              borderWidth: 1,
            },
          ],
        },
      });

      return () => {
        myChart8.destroy();
      };
    }
  }, [myRejsekort]);

  return (
    <main>
      <h3>Rejsekortindtægter (kr.) pr. år</h3>
      <canvas id="myChart8"></canvas>
    </main>
  );
}

export default MoneyChart