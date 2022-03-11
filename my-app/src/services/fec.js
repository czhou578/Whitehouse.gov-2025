import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const KEY = `IgNk9OCDrOIWs3iK2cvgx9ddehvvfOFCAYjeUqxe`

export const candidatesApi = createApi({
  reducerPath: "reps",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.open.fec.gov/v1`,
  }),
  endpoints: (builder) => ({
    getCandidates: builder.query({
      query: () =>
        `candidates/search/?sort=name&per_page=20&is_active_candidate=true&sort_hide_null=true&page=1&api_key=${KEY}&state=WA`,
    }),
  }),
});

export const { useGetCandidatesQuery } = candidatesApi;
