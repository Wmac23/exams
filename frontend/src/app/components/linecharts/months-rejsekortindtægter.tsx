import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import Chart from 'chart.js/auto';

function MonthChart2() {
  const [myRejsekort, setMyRejsekort] = useState([]);
  const rejsekortCollectionRef = collection(db, "rejsekortindtægter - måneder");

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
    const ctx = document.getElementById("myChart10") as HTMLCanvasElement | null;
    if (ctx) {
      const myChart10 = new Chart(ctx, {
        type: 'line',
        data: {
          labels: myRejsekort.map((rejsekort) => rejsekort.id),
          datasets: [
            {
              label: "2020",
              data: myRejsekort.map((rejsekort) => rejsekort.zero),
              backgroundColor: "rgba(255, 165, 0)",
              borderColor: "rgba(255, 165, 0)",
              borderWidth: 1,
            },
            {
                label: "2021",
                data: myRejsekort.map((rejsekort) => rejsekort.one),
                backgroundColor: "rgba(255, 0, 0)",
                borderColor: "rgba(255, 0, 0)",
                borderWidth: 1,
              },
              {
                label: "2022",
                data: myRejsekort.map((rejsekort) => rejsekort.two),
                backgroundColor: "rgba(0, 0, 255)",
                borderColor: "rgba(0, 0, 255)",
                borderWidth: 1,
              },
              {
                label: "2023",
                data: myRejsekort.map((rejsekort) => rejsekort.three),
                backgroundColor: "rgba(83, 93, 58)",
                borderColor: "rgba(83, 93, 58)",
                borderWidth: 1,
              },
          ],
        },
      });

      return () => {
        myChart10.destroy();
      };
    }
  }, [myRejsekort]);

  return (
    <main>
        <h3>Rejsekortindtægter (kr.) pr. måned for årene 2020-2023</h3>
      <canvas id="myChart10"></canvas>
    </main>
  );
}

export default MonthChart2;