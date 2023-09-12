import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Home from "../components/home";

const ChangePasswordComplete: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onText2Click = useCallback(() => {
    router.push("/log-in");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-left text-sm text-gray-200 font-noto-sans-jp">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <div className="absolute top-[67px] left-[407px] w-[380px] h-[323px]">
        <div className="absolute top-[180px] left-[0px] leading-[28px] inline-block w-[380px] h-14">
          <p className="m-0">パスワードの変更が完了しました。</p>
          <p className="m-0">ログイン画面からお進みください。</p>
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
          パスワードの変更 完了
        </div>
        <div
          className="absolute top-[295px] left-[0px] text-xs leading-[28px] cursor-pointer"
          onClick={onText2Click}
        >
          ログイン画面に移動
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordComplete;
