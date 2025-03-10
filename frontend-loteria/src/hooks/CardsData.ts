import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise } from "axios";
import { PoolData } from "../interfaces/pool-data";

const API_URL = import.meta.env.VITE_API_URL;

const fetchData = async (): AxiosPromise<PoolData[]> => {
    const response = await axios.get<PoolData[]>(API_URL + '/pool');
    return response;
}

export function poolsData(){
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useQuery({
        queryKey: ['pool'],
        queryFn: fetchData
    })

    return {
        ...query,
        data: query.data?.data 
    };
}