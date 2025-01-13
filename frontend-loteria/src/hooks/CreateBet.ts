/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "http://localhost:8080";

const postBet = async (data: { id: number; bet: number[] }): AxiosPromise<any> => {
  return axios.post(`${API_URL}/bet/${data.id}`, { bet: data.bet });
};

export function useCreateBet() {
  return useMutation({
    mutationFn: postBet,
  });
}