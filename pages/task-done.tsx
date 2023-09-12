import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Component2 from "../components/component2";
import Component from "/";
import NavigationsPnaviFixed from "../components/navigations-pnavi-fixed";
import FormContainer2 from "../components/form-container2";

const TaskDone: NextPage = () => {
  const router = useRouter();

  const onBtnBackContainerClick = useCallback(() => {
    router.push("/flow1-ncorporation1");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/folder");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/mypage-settings");
  }, [router]);

  const onHeaderFixedClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-left text-base text-gray-200 font-noto-sans">
      <div className="absolute top-[calc(50%_-_566px)] left-[calc(50%_-_512px)] bg-white w-[1024px] h-[1131px]" />
      <div className="absolute top-[225px] left-[400px] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-aliceblue w-[448px] h-[90px]" />
      <i className="absolute top-[123px] left-[291px] tracking-[0.11em] leading-[161.5%] font-thin">
        <p className="m-0">法人設立の準備</p>
        <p className="m-0 text-13xl">事業目的の決定</p>
      </i>
      <i className="absolute top-[246px] left-[430px] text-smi tracking-[-0.2px] leading-[24px] inline-block font-thin text-black w-[388px] h-[62px]">
        取引先・金融機関によっては事業目的が多すぎると心証悪化・実際に許認可を取得するよう要請される場合もあるので要注意。
      </i>
      <img
        className="absolute top-[225px] left-[299px] w-16 h-[91px] overflow-hidden object-cover"
        alt=""
        src="/undefined42.png"
      />
      <div className="absolute top-[1027px] left-[584px] rounded-181xl bg-white box-border w-[190px] h-11 text-center text-sm text-orangered-100 border-[1px] border-solid border-orangered-100">
        <i className="absolute top-[14px] left-[39px] font-thin">
          専門家に相談する
        </i>
      </div>
      <Component2 divPosition="absolute" divTop="359px" divLeft="629px" />
      <Component divPosition="absolute" divTop="747px" divLeft="229px" />
      <NavigationsPnaviFixed
        companyFormationBusinessP="事業目的の決定"
        navigationsPnaviFixedPosition="absolute"
        navigationsPnaviFixedTop="0px"
        navigationsPnaviFixedLeft="229px"
        btnBackCursor="pointer"
        iLeft="44.46%"
        onBtnBackContainerClick={onBtnBackContainerClick}
      />
      <FormContainer2
        maskGroup="/undefined13.png"
        headerFixed="/undefined29.png"
        onGroupContainer3Click={onGroupContainerClick}
        onGroupContainer4Click={onGroupContainer1Click}
        onHeaderFixedClick={onHeaderFixedClick}
      />
    </div>
  );
};

export default TaskDone;
