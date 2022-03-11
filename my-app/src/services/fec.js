import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const candidatesApi = createApi({
  reducerPath: "reps",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.open.fec.gov/v1`,
  }),
  endpoints: (builder) => ({
    getCandidates: builder.query({
      query: () =>
        `candidates/search/?is_active_candidate=true&sort_null_only=false&incumbent_challenge=I&sort_hide_null=false&per_page=20&sort_nulls_last=true&page=1&office=H&has_raised_funds=true&api_key=IgNk9OCDrOIWs3iK2cvgx9ddehvvfOFCAYjeUqxe&sort=name`,
    }),
  }),
});

export const { useGetCandidatesQuery } = candidatesApi;
