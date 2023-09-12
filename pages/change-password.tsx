import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NewPasswordFormContainer from "../components/new-password-form-container";

const ChangePassword: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <NewPasswordFormContainer />
    </div>
  );
};

export default ChangePassword;
