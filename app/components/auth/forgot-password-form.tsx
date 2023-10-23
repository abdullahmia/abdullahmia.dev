"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "..";
import FormElements from "../ui/form-elements";

const PasswordResetForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/auth/login");
    }, 600);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={resetPassword}>
      <div>
        <FormElements.Label>Email</FormElements.Label>
        <FormElements.Input placeholder="youremail@example.com" />
      </div>

      <div>
        <Button
          type="submit"
          varriant="primary"
          width="full"
          loading={isLoading}
        >
          Reset Password
        </Button>
      </div>
    </form>
  );
};

export default PasswordResetForm;
