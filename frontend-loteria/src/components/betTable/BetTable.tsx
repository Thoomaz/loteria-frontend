import React from "react";
import { useTable, Column } from "react-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./BetTabel.css"

// Modelo de dados esperado
interface BetData {
  id: number;
  valueInvested: number;
  quantityNumbers: number;
  bet: number[];
  matched: number;
}

// Função para buscar os dados da API
const fetchBets = async (): Promise<BetData[]> => {
  const response = await axios.get("http://localhost:8080/pool/1/bets");
  return Array.isArray(response.data) ? response.data : [response.data];
};

const BetsTable: React.FC = () => {
  const { data = [], isLoading, isError } = useQuery<BetData[]>({
    queryKey: ["bets"],
    queryFn: fetchBets,
  });

  // Definindo colunas
  const columns: Column<BetData>[] = React.useMemo(
    () => [
      {
        Header: "Bet",
        accessor: "bet",
        Cell: ({ value }) => (Array.isArray(value) ? value.join(" ") : value),
      },
      {
        Header: "Matched",
        accessor: "matched",
      },
    ],
    []
  );

  // Criando a instância da tabela
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar os dados.</div>;

  return (
    <div>
      <table {...getTableProps()} style={{ border: "1px solid black", width: "100%" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ border: "1px solid black", padding: "5px" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{ border: "1px solid black", padding: "5px" }}
                  >
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