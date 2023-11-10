"use client";

import { LoginBody } from "@/app/interfaces";
import { useLogin } from "@/app/services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Button } from "..";
import FormElements from "../ui/form-elements";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Hooks
  const router = useRouter();

  const { isPending: isLoading, mutateAsync } = useLogin();

  // Login handler
  const handleLogin = async (data: LoginBody) => {
    await mutateAsync(data, {
      onSuccess: () => {
        reset();
        router.push("/admin");
      },
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleLogin)}>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <FormElements.Label>Email</FormElements.Label>
              <FormElements.Input
                onChange={field.onChange}
                value={field.value}
                placeholder="youremail@example.com"
              />
            </div>
          )}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Invalid email address",
            },
          }}
        />
        {errors.email && (
          <FormElements.FromError>
            {errors.email.message}
          </FormElements.FromError>
        )}
      </div>

      <div>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div>
              <div className="flex justify-between items-center">
                <FormElements.Label>Password</FormElements.Label>

                <Link href="/auth/forgot-password">
                  <span className="text-sm text-[#4595D0]">
                    Forgot Password?
                  </span>
                </Link>
              </div>
              <FormElements.Input
                onChange={field.onChange}
                value={field.value}
                placeholder="***********"
                type="password"
              />
            </div>
          )}
          rules={{
            required: {
              value: true,
              message: "Password is required",
            },
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            //   message:
            //     "Password should be at least 8 characters & contain 1 uppercase letter, 1 lowercase letter, and 1 number",
            // },
          }}
        />
        {errors.password && (
          <FormElements.FromError>
            {errors.password.message}
          </FormElements.FromError>
        )}
      </div>

      <div>
        <Button
          type="submit"
          varriant="primary"
          width="full"
          loading={isLoading}
        >
          Continue
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
