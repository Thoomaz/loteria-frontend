import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { BetData } from "../interfaces/bet-data";

const API_URL = "http://localhost:8080";

const fetchBets = (id: number): AxiosPromise<BetData[]> => {
  return axios.get(`${API_URL}/pool/${id}/bets`);
};

export function useBetsData(id: number) {
  const query = useQuery({
    queryKey: ["bets", id],
    queryFn: () => fetchBets(id),
  });

  return {
    ...query,
    data: query.data?.data || [],
  };
}