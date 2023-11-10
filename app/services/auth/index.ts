import { client, endpoints } from "@/app/config";
import constants from "@/app/constants";
import { ILoginResponse, LoginBody } from "@/app/interfaces";
import { cookies } from "@/app/utils";
import { useMutation } from "@tanstack/react-query";

// make a login hook using axios to call the login api & tanstack query
export const useLogin = () => {
  const params = useMutation({
    mutationFn: async (body: LoginBody) => {
      const response = await client.post(endpoints.auth.login, body);
      return response.data;
    },
    onSuccess: (data: ILoginResponse) => {
      const { token, user } = data;

      // store token on cookies
      cookies.set(constants.auth.token, token, "86400");

      // store user information on loacl storage
      localStorage.setItem(constants.auth.user, JSON.stringify(user));
    },
  });

  return { ...params };
};
