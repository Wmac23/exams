
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Chart from 'chart.js/auto';

const FirestoreData = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('rejsekort').doc('month').get();
        const monthData = snapshot.data();
        setData(monthData);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Render a bar chart using Chart.js
    const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label: 'Data Values',
              data: Object.values(data),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
      });

      // Clean up the chart when the component unmounts
      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return (
    <div>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
};

export default FirestoreData;