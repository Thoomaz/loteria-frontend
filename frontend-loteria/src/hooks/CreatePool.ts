/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PoolInput } from "../interfaces/pool-input";

const API_URL = 'http://localhost:8080'

const postData = async (data: PoolInput): AxiosPromise<any> => {
    const response = await axios.post<any>(API_URL + '/pool/create', data);
    return response;
}

export function createPool(){
    const mutate = useMutation({
        mutationFn: postData,
    })

    return mutate
}