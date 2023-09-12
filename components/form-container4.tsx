import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SubMenu1 from "./sub-menu1";
import SubMenu2 from "./sub-menu2";
import NavigationsFixed from "./navigations-fixed";
import Home from "./home";

const FormContainer4: NextPage = () => {
  const router = useRouter();

  const onRectangle11Click = useCallback(() => {
    router.push("/folder");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/mypage-settings");
  }, [router]);

  const onNavigationContainerClick = useCallback(() => {
    router.push("/flow1-ncorporation");
  }, [router]);

  const onHeaderFixedClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="absolute bottom-[231px] left-[0px] w-[230px] h-[1131px]">
      <SubMenu1
        subMenuPosition="absolute"
        subMenuBottom="297px"
        subMenuLeft="0px"
      />
      <SubMenu2
        itemCode="/undefined13.png"
        subMenuPosition="absolute"
        subMenuTop="unset"
        subMenuLeft="0px"
        subMenuBottom="297px"
        rectangleDivCursor="pointer"
        groupDivCursor="pointer"
        divColor="#000"
        onRectangle5Click={onRectangle11Click}
        onGroupContainer2Click={onGroupContainerClick}
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1131px] border-r-[1px] border-solid border-whitesmoke-200" />
      <div className="absolute top-[372px] left-[46px] rounded-[50%] bg-gainsboro w-5 h-5" />
      <NavigationsFixed
        propCursor="pointer"
        propColor="#0c1528"
        propCursor1="unset"
        propColor1="#ff5e18"
        onNavigationContainerClick={onNavigationContainerClick}
      />
      <HeaderFixedIcon
        imageDimensions="/undefined29.png"
        propTop="49px"
        propLeft="44px"
        propWidth="133px"
        propHeight="124px"
        propCursor="pointer"
        propPosition="absolute"
        onLogoClick={onHeaderFixedClick}
      />
    </div>
  );
};

export default FormContainer4;
