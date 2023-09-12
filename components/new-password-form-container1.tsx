import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PasswordFormContainer1 from "./password-form-container1";
import Home from "./home";

const NewPasswordFormContainer1: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onBtnLogInContainerClick = useCallback(() => {
    router.push("/change-password-complete");
  }, [router]);

  return (
    <div className="absolute h-[48.8%] w-[31.83%] top-[8.03%] right-[34.09%] bottom-[43.17%] left-[34.09%] text-left text-sm text-gray-200 font-noto-sans-jp">
      <PasswordFormContainer1 newPasswordConfirmPasswor="新しいパスワード" />
      <PasswordFormContainer1
        newPasswordConfirmPasswor="新しいパスワード（確認）"
        propTop="65.11%"
        propBottom="17.2%"
      />
      <div
        className="absolute h-[11.3%] w-[28.16%] top-[88.7%] right-[71.84%] bottom-[0%] left-[0%] cursor-pointer text-center text-white"
        onClick={onBtnLogInContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orangered-100" />
        <div className="absolute top-[13px] left-[39px] leading-[20px]">
          変更
        </div>
      </div>
      <HeaderFixedIcon
        imageDimensions="/undefined9.png"
        propTop="0px"
        propLeft="0px"
        propWidth="81px"
        propHeight="76px"
        propCursor="pointer"
        propPosition="absolute"
        onLogoClick={onLogoClick}
      />
      <div className="absolute top-[118px] left-[0px] text-3xl leading-[20px]">
        新しいパスワードの入力
      </div>
    </div>
  );
};

export default NewPasswordFormContainer1;
