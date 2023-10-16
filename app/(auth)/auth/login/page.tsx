import LoginForm from "@/app/components/auth/login-form";
import { Images } from "@/assets";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Abdulalh Mia",
  description: "Login to your account to access your dashboard.",
};

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-1/4 h-auto">
        <div className="flex items-center justify-center">
          <Image
            src={Images.PorfileImg}
            alt="Abdullah Mia"
            className="w-[100px] h-[100px] object-contain rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
            Welcome Back!
          </h1>
        </div>

        <div className="mt-5">
          <LoginForm />
        </div>

        <div className="mt-7">
          <p className="text-sm text-gray-500 dark:text-[#999] mt-5">
            By clicking “Continue” above, you acknowledge that you have read and
            understood, Aren&rsquo;t admin? go to{" "}
            <Link href={"/home"}>home</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
