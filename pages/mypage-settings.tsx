import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SubMenu2 from "../components/sub-menu2";
import NavigationsFixed from "../components/navigations-fixed";
import Home from "../components/home";

const MypageSettings: NextPage = () => {
  const router = useRouter();

  const onNavigationContainerClick = useCallback(() => {
    router.push("/flow1-ncorporation");
  }, [router]);

  const onNavigationContainer1Click = useCallback(() => {
    router.push("/flow2-office-setup");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-left text-sm text-lightslategray font-noto-sans-jp">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <div className="absolute top-[21px] left-[230px] w-[964px] h-[41px]">
        <div className="absolute top-[40.5px] left-[-0.5px] box-border w-[965px] h-px border-t-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[75px] w-[74px] h-[21px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.11em]">
            マイページ
          </div>
        </div>
        <div className="absolute top-[0px] left-[180px] w-[68px] h-[41px] text-center text-orangered-100">
          <div className="absolute top-[37px] left-[0px] bg-orangered-100 w-[68px] h-1" />
          <div className="absolute top-[0px] left-[19px] tracking-[0.11em]">
            設定
          </div>
        </div>
      </div>
      <div className="absolute top-[122px] left-[291px] text-xs leading-[28px] text-gray-200">
        <p className="m-0">運営会社</p>
        <p className="m-0">利用規約</p>
        <p className="m-0">プライバシーポリシー</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">メールアドレスの変更</p>
        <p className="m-0">パスワードの変更</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">ログアウト</p>
      </div>
      <div className="absolute top-[133px] left-[730px] text-2xs leading-[20px] text-deepskyblue">
        <p className="m-0">一旦ログアウト機能と関連リンクなど</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">今後のところでプラン設定などを想定しています</p>
      </div>
      <SubMenu2
        itemCode="/undefined13.png"
        subMenuPosition="absolute"
        subMenuTop="710px"
        subMenuLeft="0px"
        subMenuBottom="unset"
        rectangleDivCursor="unset"
        groupDivCursor="unset"
        divColor="#ff5e18"
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1669px] border-r-[1px] border-solid border-whitesmoke-200" />
      <NavigationsFixed
        propCursor="pointer"
        propColor="#0c1528"
        propCursor1="pointer"
        propColor1="#0c1528"
        onNavigationContainerClick={onNavigationContainerClick}
        onNavigationContainer1Click={onNavigationContainer1Click}
      />
      <HeaderFixedIcon
        imageDimensions="/undefined31.png"
        propTop="49px"
        propLeft="44px"
        propWidth="133px"
        propHeight="124px"
        propCursor="unset"
        propPosition="absolute"
      />
    </div>
  );
};

export default MypageSettings;
