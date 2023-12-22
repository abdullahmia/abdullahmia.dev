"use client";

import { ILoginPayload } from "@/app/interfaces";
import cogoToast from "cogo-toast";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "..";
import FormElements from "../ui/form-elements";

const LoginForm = () => {
  // Local State
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  // Login handler
  const handleLogin = async (data: ILoginPayload) => {
    setIsLoading(true);
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      console.log(response, "from login form");

      if (response?.error) {
        cogoToast.error(response?.error, {
          position: "top-right",
        });
        setIsLoading(false);
      } else {
        cogoToast.success("Login Successfull", {
          position: "top-right",
        });
        router.push("/admin");
      }
    } catch (error) {
      //
    }
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
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
              message:
                "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters & special characters",
            },
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
