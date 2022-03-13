import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const KEY = `IgNk9OCDrOIWs3iK2cvgx9ddehvvfOFCAYjeUqxe`;

export const candidatesApi = createApi({
  reducerPath: "reps",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.open.fec.gov/v1`,
  }),
  endpoints: (builder) => ({
    getCandidates: builder.query({
      query: (request) =>
        `candidates/search/?candidate_status=C&sort=name&per_page=20&is_active_candidate=${request.active}&sort_hide_null=${request.nullVal}&page=1&api_key=${KEY}&state=${request.stateAbbv}`,
    }),
    finances: builder.query({
      query: (request) =>
        `candidate/${request}/totals/?election_full=true&sort_nulls_last=false&sort_hide_null=false&sort=-cycle&per_page=20&page=1&api_key=${KEY}`,
    }),
  }),
});

export const { useGetCandidatesQuery, useFinancesQuery } = candidatesApi;
