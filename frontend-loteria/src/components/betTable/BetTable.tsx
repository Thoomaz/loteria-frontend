import React from "react";
import { useTable, Column } from "react-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./BetTable.css";
import Loader from "../loader/Loader";

interface BetData {
  id: number;
  valueInvested: number;
  quantityNumbers: number;
  bet: number[];
  matched: number;
}

interface BetTabelProp {
  id: number;
}

const fetchBets = async (id: number): Promise<BetData[]> => {
  const response = await axios.get(`http://localhost:8080/pool/${id}/bets`);
  return Array.isArray(response.data) ? response.data : [response.data];
};

const BetsTable: React.FC<BetTabelProp> = ({ id }) => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<BetData[]>({
    queryKey: ["bets", id],
    queryFn: () => fetchBets(id),
  });

  const columns: Column<BetData>[] = React.useMemo(
    () => [
      {
        Header: "Bet",
        accessor: "bet",
        Cell: ({ value }) => (Array.isArray(value) ? value.join(", ") : value),
      },
      {
        Header: "Matched",
        accessor: "matched",
      },
      {
        Header: "Value Invested",
        accessor: "valueInvested",
        Cell: ({ value }) => `R$ ${value.toFixed(2)}`, 
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  if (isLoading) return <Loader />;
  if (isError) return <div>Erro ao carregar os dados.</div>;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id || headerGroupIndex}
            >
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id || `${headerGroupIndex}-${columnIndex}`}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id || rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td {...cell.getCellProps()} key={`${rowIndex}-${cellIndex}`}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BetsTable;