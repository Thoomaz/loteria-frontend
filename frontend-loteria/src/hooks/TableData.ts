import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { BetData } from "../interfaces/bet-data";

const API_URL = "https://loteria-backend-o6rd.onrender.com";

const fetchBets = (
  id: number,
  page: number,
  pageSize: number
): AxiosPromise<{
  content: BetData[];
  totalPages: number;
  number: number;
  last: boolean;
}> => {
  return axios.get(`${API_URL}/bet/${id}/`, {
    params: { page, size: pageSize },
  });
};

export function useBetsData(id: number, page: number, pageSize: number) {
  const query = useQuery({
    queryKey: ["bets", id, page, pageSize],
    queryFn: () => fetchBets(id, page, pageSize),
  });

  return {
    ...query,
    data: query.data?.data || { content: [], totalPages: 0, number: 0, last: true },
  };
}