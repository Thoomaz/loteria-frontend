import React from "react";
import { useTable, Column } from "react-table";
import { useBetsData } from "../../hooks/TableData";
import "./BetTable.css";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { BetData } from "../../interfaces/bet-data";

interface BetTabelProp {
  id: number;
}

const BetsTable: React.FC<BetTabelProp> = ({ id }) => {
  const { data, isLoading, isError } = useBetsData(id);

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
  if (isError) return <ErrorMessage message="Erro no processamento dos resultados." />;

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
