export interface PoolData {
    id: number,
    name: string,
    valueTotal: number
}

export interface PoolResponse {
    data: PoolData[]
}