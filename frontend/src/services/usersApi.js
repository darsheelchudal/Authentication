import { baseApi } from "./baseApi";
// ** api/users - Register the user     (POST)
// ** api/users/auth - Authenticate the user and get a token and a cookie (POST)
// ** api/users/logout - Clear the cookie and logout (POST)
// ** api/users/profile - Show user profile (GET)
// ** api/users/profile - Update user profile (PUT)

const USERS_URL = "api/users";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApi;