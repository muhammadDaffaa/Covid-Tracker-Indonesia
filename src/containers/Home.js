import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Axios from "axios";
import BannerComponent from "../components/BannerComponent";
import CardComponent from "../components/CardComponent";
import ChartComponent from "../components/ChartComponent";
import TableComponent from "../components/TableComponent";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `https://indonesia-covid-19.mathdro.id/api/`;
    Axios.get(url).then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);

  return (
    <>
      <Box mt="2%" p="3">
        <Text align="center" fontSize="6xl">
          Total Corona Cases In Indonesia
        </Text>
        <Text align="center" fontSize="2xl" color="grey">
          Indonesia Live Data
        </Text>
      </Box>

      <Flex
        direction={{
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        justifyContent={{
          sm: "center",
          md: "center",
          lg: "space-around",
          xl: "center",
        }}
        alignItems={{ sm: "center", md: "center", lg: "center", xl: "center" }}
        m={{ sm: "5% auto", md: "5% auto", xl: "2% 10%" }}
      >
        <BannerComponent />
        <Box w={{ sm: "90%" }}>
          <Flex
            direction={{ sm: "column", md: "row", lg: "row", xl: "row" }}
            justifyContent={{ sm: "center" }}
            alignItems={{ sm: "center" }}
          >
            <CardComponent
              name="Infection"
              desc="Number of active cases of COVID-19"
              borderColor="red.500"
              totalCases={data != null && data.jumlahKasus}
            />
            <CardComponent
              name="Recovered"
              desc="Number of recoveries cases of COVID-19"
              borderColor="green.500"
              totalCases={data != null && data.sembuh}
            />
            <CardComponent
              name="Deaths"
              desc="Number of deaths cases of COVID-19"
              borderColor="black"
              totalCases={data != null && data.meninggal}
            />
            <CardComponent
              name="Treatments"
              desc="Number of treatments cases of COVID-19"
              borderColor="blue.500"
              totalCases={data != null && data.perawatan}
            />
          </Flex>
          <ChartComponent />
        </Box>
      </Flex>

      <TableComponent />
    </>
  );
};

export default Home;
