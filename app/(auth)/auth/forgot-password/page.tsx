import PasswordResetForm from "@/app/components/auth/forgot-password-form";
import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[400px] h-auto">
        <div className="flex items-center justify-center mb-4">
          <Image
            src={Images.PorfileImg}
            alt="Abdullah Mia"
            className="w-[100px] h-[100px] object-contain rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
            RESET PASSWORD?
          </h1>
        </div>

        <div className="mt-5">
          <PasswordResetForm />
        </div>

        <div className="mt-7">
          <p className="text-sm text-gray-500 dark:text-[#999] mt-5">
            Enter your email address and we&rsquo;ll send you an email with
            instructions to reset your password. Go to{" "}
            <Link href="/auth/login" className="text-blue-400">
              login?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
