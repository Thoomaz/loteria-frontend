/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";


const API_URL = "https://loteria-backend-o6rd.onrender.com";

const deleteData = async (poolId: number): AxiosPromise<any> => {
  const response = await axios.delete<any>(`${API_URL}/pool/${poolId}`);
  return response;
};

export function useDeletePool() {

  const mutate = useMutation({
    mutationFn: deleteData,
  });

  return mutate;
}
