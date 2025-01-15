/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "http://localhost:8080";

const postBet = async (data: { id: number, gameType: string; bet: number[] }): AxiosPromise<any> => {
  return axios.post(`${API_URL}/bet/${data.id}`, { bet: data.bet, gameType: data.gameType });
};

export function useCreateBet() {
  return useMutation({
    mutationFn: postBet,
  });
}