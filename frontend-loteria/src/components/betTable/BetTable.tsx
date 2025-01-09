import "./BetTabel.css"
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCoreRowModel, useReactTable, ColumnDef } from "@tanstack/react-table";
import axios from "axios";

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
  const { data, isLoading, isError } = useQuery({
    queryKey: ["bets"],
    queryFn: fetchBets,
  });

  // Definindo colunas
  const columns: ColumnDef<BetData>[] = [
    {
      accessorKey: "bet",
      header: "Jogos",
      cell: (info) => info.getValue()
    },
    {
      accessorKey: "matched",
      header: "Acertos",
    },
  ];

  // Criando a tabela
  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar os dados.</div>;

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.column.columnDef.header?.toString.name}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {String(cell.getValue())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BetsTable;
