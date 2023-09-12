import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FormContainer3 from "../components/form-container3";
import SubMenu2 from "../components/sub-menu2";
import NavigationsFixed from "../components/navigations-fixed";
import Home from "../components/home";

const MypageTop: NextPage = () => {
  const router = useRouter();

  const onNavigationContainerClick = useCallback(() => {
    router.push("/flow1-ncorporation");
  }, [router]);

  const onNavigationContainer1Click = useCallback(() => {
    router.push("/flow2-office-setup");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[2293px] overflow-x-auto text-left text-2xs text-deepskyblue font-noto-sans-jp">
      <div className="absolute top-[calc(50%_-_503.5px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <div className="absolute top-[21px] left-[230px] w-[964px] h-[41px] text-sm text-orangered-100">
        <div className="absolute top-[40.5px] left-[-0.5px] box-border w-[965px] h-px border-t-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[61px] w-[102px] h-[41px]">
          <div className="absolute top-[37px] left-[0px] bg-orangered-100 w-[102px] h-1" />
          <div className="absolute top-[0px] left-[14px] tracking-[0.11em]">
            マイページ
          </div>
        </div>
      </div>
      <FormContainer3 />
      <div className="absolute top-[337px] left-[754px] leading-[20px]">
        <p className="m-0">カレンダー選択できるライブラリに合わせる形で</p>
        <p className="m-0">良いかと思います</p>
      </div>
      <div className="absolute top-[1225px] left-[754px] leading-[20px]">
        +クリックでinputが一つ追加表示される想定です
      </div>
      <div className="absolute top-[1000px] left-[754px] leading-[20px]">
        <p className="m-0">
          正方形にクリッピングできると良いかなと思いますが、
        </p>
        <p className="m-0">最初は元画像ママでもよいかな...とも思います。</p>
        <p className="m-0">
          （表示側cssでobject-fit:cover で中央配置させるような）
        </p>
      </div>
      <div className="absolute top-[159px] left-[754px] leading-[20px]">
        データがあれば、各フォームにセットされている想定です
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
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[2293px] border-r-[1px] border-solid border-whitesmoke-200" />
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

export default MypageTop;
