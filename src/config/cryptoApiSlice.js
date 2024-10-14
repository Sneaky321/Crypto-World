import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { TrendingCoins, CoinList, SingleCoin, HistoricalChart } from "./api"; 

const baseUrl = "https://api.coingecko.com/api/v3/";

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTrendingCoins: builder.query({
            query: (currency) => TrendingCoins(currency),
        }),
        getCoinList: builder.query({
            query: (currency) => CoinList(currency),
        }),
        getSingleCoin: builder.query({
            query: (id) => SingleCoin(id),
        }),
        getHistoricalChart: builder.query({
            query: ({ id, days }) => HistoricalChart(id, days),
        }),
    }),
});

// Export hooks for usage in functional components
export const { 
    useGetTrendingCoinsQuery, 
    useGetCoinListQuery, 
    useGetSingleCoinQuery, 
    useGetHistoricalChartQuery 
} = cryptoApi;
