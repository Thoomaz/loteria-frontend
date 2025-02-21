/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "https://loteria-backend-o6rd.onrender.com";

// Função para fazer o POST com os dados do concurso
const postContest = async (data: { id: number; drawNumbers: number[] }): AxiosPromise<any> => {
  return axios.post(`${API_URL}/contest/${data.id}`, { drawNumbers: data.drawNumbers });
};

// Hook que retorna a função de mutação para criar o concurso
export function useCreateContest() {
  return useMutation({
    mutationFn: postContest,
  });
}