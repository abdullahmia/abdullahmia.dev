"use client";

import Link from "next/link";
import { Button } from "..";
import FormElements from "../ui/form-elements";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-5">
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
        <Button varriant="primary" width="full">
          Continue
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
