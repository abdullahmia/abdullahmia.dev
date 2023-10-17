"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "..";
import FormElements from "../ui/form-elements";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin");
    }, 2000);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={login}>
      <div>
        <FormElements.Label>Email</FormElements.Label>
        <FormElements.Input placeholder="youremail@example.com" />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <FormElements.Label>Password</FormElements.Label>

          <Link href="/auth/forgot-password">
            <span className="text-sm text-[#4595D0]">Forgot Password?</span>
          </Link>
        </div>
        <FormElements.Input placeholder="***********" type="password" />
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
