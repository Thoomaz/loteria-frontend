import React, { useState } from "react";
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
  const [page, setPage] = useState(0); // Página atual
  const [pageSize, setPageSize] = useState(10); // Tamanho da página
  const { data, isLoading, isError } = useBetsData(id, page, pageSize);

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
      data: data.content || [],
    });

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(event.target.value));
    setPage(0);
  };

  if (isLoading) return <Loader />;
  if (isError)
    return <ErrorMessage message="Erro no processamento dos resultados." />;

  return (
    <div>
      <div className="pagination-controls">
        <label htmlFor="pageSize">Itens por página: </label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
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
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Anterior
        </button>
        <span>
          Página {data.number + 1} de {data.totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data.last}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default BetsTable;