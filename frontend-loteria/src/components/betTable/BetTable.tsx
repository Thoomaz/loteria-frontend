import React, { useState } from "react";
import { useTable, Column } from "react-table";
import { useBetsData } from "../../hooks/TableData";
import useDeleteBet from "../../hooks/RemoveBet";
import "./BetTable.css";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { BetData } from "../../interfaces/bet-data";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface BetTabelProp {
  id: number;
}

const BetsTable: React.FC<BetTabelProp> = ({ id }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, isError } = useBetsData(id, page, pageSize);
  const deleteBet = useDeleteBet();

  const columns: Column<BetData>[] = React.useMemo(
    () => [
      {
        Header: "Apostas",
        accessor: "betNumbers",
        Cell: ({ value }) => (Array.isArray(value) ? value.join(", ") : value),
      },
      {
        Header: "Acertos",
        accessor: "matched",
      },
      {
        Header: "Valor Investido",
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

  const handleRemoveRow = (betId: number) => {
    deleteBet.mutate(betId);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(event.target.value));
    setPage(0);
  };

  if (isLoading) return <Loader />;
  if (isError)
    return <ErrorMessage message="Erro no processamento dos resultados." />;

  return (
    <div className="tableContainer">
      <div className="paginationControls">
        <label htmlFor="pageSize" className="pageSizeLabel">Apostas por página: </label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={handlePageSizeChange}
          className="pageSizeSelect"
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size} className="option">
              {size}
            </option>
          ))}
        </select>
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id || headerGroupIndex}
              className="tableHeaderRow"
            >
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id || `${headerGroupIndex}-${columnIndex}`}
                  className="tableHeaderCell"
                >
                  {column.render("Header")}
                </th>
              ))}
              <th className="tableHeaderCell"></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="tableBody">
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="tableEmptyContent">
                Sem conteúdo
              </td>
            </tr>
          )}
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            const betId = row.original.id; // Pegando o ID da aposta
            return (
              <tr {...row.getRowProps()} key={betId} className="tableBodyRow">
                {row.cells.map((cell, cellIndex) => (
                  <td {...cell.getCellProps()} key={`${rowIndex}-${cellIndex}`} className="tableBodyCell">
                    {cell.render("Cell")}
                  </td>
                ))}
                <td className="tableBodyCell removeColumn">
                  <IconButton
                    onClick={() => handleRemoveRow(betId)}
                    aria-label="Remover aposta"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="paginationButton"
        >
          Anterior
        </button>
        <span className="paginationInfo">
          Pág. {data.number + 1} de {data.totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data.last}
          className="paginationButton"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default BetsTable;