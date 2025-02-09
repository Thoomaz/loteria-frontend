import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "http://localhost:8080";

const postBet = async (data: { id: number, gameType: string; betNumbers: number[] }): AxiosPromise => {
  return axios.post(`${API_URL}/bet/${data.id}`, { betNumbers: data.betNumbers, gameType: data.gameType });
};

export function useCreateBet() {
  return useMutation({
    mutationFn: postBet,
  });
}