import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise } from "axios";
import { PoolData } from "../interfaces/pool-data";

const API_URL = 'http://localhost:8080'

const fetchPool = (id: number): AxiosPromise<PoolData> => {
    const response = axios.get(`${API_URL}/pool/${id}`);
    return response;
}

export function poolData(id: number){
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useQuery({
        queryKey: ['pool', id],
        queryFn: () => fetchPool(id),
    });

    return {
        ...query,
        data: query.data?.data
    };
}