import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import Axios from "axios";

const ChartComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `https://indonesia-covid-19.mathdro.id/api/`;
    Axios.get(url)
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); //component did mount

  // Chart
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let total = [];
    let rec = [];
    let dea = [];
    let tre = [];

    total.push(data != null && data.jumlahKasus);
    rec.push(data != null && data.sembuh);
    dea.push(data != null && data.meninggal);
    tre.push(data != null && data.perawatan);

    setChartData({
      data: {
        labels: [
          "Total Cases",
          "Total Recovered",
          "Total Deaths",
          "Total Treatments",
        ],
        datasets: [
          {
            data: [...total, ...rec, ...dea, ...tre],
            backgroundColor: ["red", "green", "black", "blue"],
          },
        ],
      },
    });
  };

  useEffect(() => {
    chart();
  }, [data]);

  return (
    <Box w={{ sm: "100%", md: "70%", lg: "70%", xl: "70%" }} m="7% auto">
      <Bar
        data={chartData.data}
        width={600}
        height={400}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
        }}
      />
    </Box>
  );
};

export default ChartComponent;
