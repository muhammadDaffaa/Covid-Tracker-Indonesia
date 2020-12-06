import { Text } from "@chakra-ui/react";
import Axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import Table from "./TableCreator";

const TableComponent = () => {
  const [dataProvinsi, setDataProvinsi] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); //component did mount

  const fetchData = () => {
    const url = `https://indonesia-covid-19.mathdro.id/api/provinsi`;
    Axios.get(url)
      .then((res) => {
        setDataProvinsi(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const columns = useMemo(
    () => [
      {
        Header: "Provinces",
        accessor: "provinsi",
      },
      {
        Header: "Total Cases",
        accessor: "kasusPosi",
      },
      {
        Header: "Total Recovered",
        accessor: "kasusSemb",
      },
      {
        Header: "Total Deaths",
        accessor: "kasusMeni",
      },
      // {
      //   Header: "Json Data",
      //   id: "jsonData",
      //   accessor: (key, i) => i + 1,
      //   Cell: ({ row }) => {
      //     return <pre>{JSON.stringify(row.original, null, 2)}</pre>;
      //   },
      // },
    ],
    []
  );

  return (
    <>
      <Text align="center" fontSize="4xl">
        Daftar Kasus Covid-19 per-Provinsi
      </Text>
      <Table columns={columns} data={dataProvinsi} />
    </>
  );
};

export default TableComponent;
