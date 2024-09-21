import UserAuthForm from "@/components/forms/user-auth-form";
import Image from "next/image";
import FinanceImage from "/public/finance.svg";

export default async function Login() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col justify-between bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          InvenSync
        </div>
        <div>
          <Image
            src={FinanceImage}
            alt="Holla"
            className="relative z-20 py-12 pr-20"
          />
        </div>
        <div className="relative z-20">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Efficient inventory, empowered business: <br />
              Track, manage, and grow with precision.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password below
            </p>
          </div>
          <UserAuthForm />
          <p className="text-sm text-center">
            Email: <b>inven@admin.com</b> | Password: <b>invenadmin</b>
          </p>
        </div>
      </div>
    </div>
  );
}
