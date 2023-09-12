import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import BtnMenu from "../components/btn-menu";
import NavigationsPnaviFixed1 from "../components/navigations-pnavi-fixed1";
import FormContainer4 from "../components/form-container4";

const Flow2OfficeSetup: NextPage = () => {
  const router = useRouter();

  const onBtnMenuContainer10Click = useCallback(() => {
    router.push("/task-done");
  }, [router]);

  const onBtnBackContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

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
    <div className="relative bg-white w-full h-[1362px] overflow-x-auto text-left text-23xl text-gray-200 font-noto-sans-jp">
      <div className="absolute top-[calc(50%_-_566px)] left-[calc(50%_-_512px)] bg-white w-[1024px] h-[1131px]" />
      <BtnMenu
        preparationForIncorporati="会計ソフトセットアップ"
        btnMenuPosition="absolute"
        btnMenuTop="632px"
        btnMenuLeft="291px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="契約管理体制構築"
        btnMenuPosition="absolute"
        btnMenuTop="834px"
        btnMenuLeft="291px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="源泉管理"
        btnMenuPosition="absolute"
        btnMenuTop="1036px"
        btnMenuLeft="291px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="unset"
        divWidth="unset"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="社会保険口座振替"
        btnMenuPosition="absolute"
        btnMenuTop="1036px"
        btnMenuLeft="586px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="unset"
        divWidth="unset"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="バックオフィスフォルダの整備"
        btnMenuPosition="absolute"
        btnMenuTop="430px"
        btnMenuLeft="586px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="経理生産ワークフロー構築"
        btnMenuPosition="absolute"
        btnMenuTop="632px"
        btnMenuLeft="586px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="売上請求ワークフロー構築"
        btnMenuPosition="absolute"
        btnMenuTop="834px"
        btnMenuLeft="586px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="給与計算・支払いワークフロー構築"
        btnMenuPosition="absolute"
        btnMenuTop="834px"
        btnMenuLeft="881px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="スタートアップドキュメントの整備"
        btnMenuPosition="absolute"
        btnMenuTop="430px"
        btnMenuLeft="881px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <BtnMenu
        preparationForIncorporati="請求支払いワークフローワークフロー構築"
        btnMenuPosition="absolute"
        btnMenuTop="632px"
        btnMenuLeft="881px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
      />
      <div className="absolute top-[122px] left-[291px] tracking-[0.11em]">
        <p className="m-0">バックオフィス</p>
        <p className="m-0">体制構築</p>
      </div>
      <div className="absolute top-[273px] left-[291px] text-3xs tracking-[0.01em] leading-[20px] flex items-end w-[401px] h-20">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">
            事業立ち上げでもっとも重要なのは、開発・テスト・販売のサイクルを回すことです。
          </p>
          <p className="m-0">
            これに全集中するために、ROCKET START
            はすべてのスタートアップの初期バックオフィス業務を支援します。
          </p>
        </span>
      </div>
      <BtnMenu
        preparationForIncorporati="ワークツールの選定・設定"
        btnMenuPosition="absolute"
        btnMenuTop="430px"
        btnMenuLeft="291px"
        btnMenuCursor="pointer"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
        onBtnMenuContainer1Click={onBtnMenuContainer10Click}
      />
      <img
        className="absolute top-[159px] left-[871.5px] w-[197.14px] h-[196.5px] object-cover"
        alt=""
        src="/undefined44.png"
      />
      <NavigationsPnaviFixed1
        serviceDescription="バックオフィス体制構築"
        propLeft="41.35%"
        onBtnBackContainerClick={onBtnBackContainerClick}
      />
      <FormContainer4 />
    </div>
  );
};

export default Flow2OfficeSetup;
