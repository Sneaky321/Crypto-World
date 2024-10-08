import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'
const cryptoApiHeaders = {
    'x-rapidapi-key': 'aefb83d104msh0b80a6ba5c1e6bfp11eb5fjsn78a190a64243',
    'x-rapidapi-host': 'coingecko.p.rapidapi.com'
}

const baseUrl = 'https://coingecko.p.rapidapi.com/exchanges/%7Bid%7D';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCrypto: builder.query(
            {
                get
            }
        )
    })
})





// const options = {
//   method: 'GET',
//   url: 'https://coingecko.p.rapidapi.com/exchanges/%7Bid%7D',
//   headers: {
//     'x-rapidapi-key': 'aefb83d104msh0b80a6ba5c1e6bfp11eb5fjsn78a190a64243',
//     'x-rapidapi-host': 'coingecko.p.rapidapi.com'
//   }
// };
