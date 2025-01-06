import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PoolResponse } from "../interfaces/pool-data";

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<PoolResponse> => {
    const response = await axios.get<PoolResponse>(API_URL + '/pool_megasena');
    return response;
}

export function cardsData(){
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useQuery({
        queryKey: ['card-pool'],
        queryFn: fetchData
    })

    return {
        ...query,
        data: query.data?.data 
    }
}