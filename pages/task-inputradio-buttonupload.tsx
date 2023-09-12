import type { NextPage } from "next";
import Component2 from "../components/component2";
import Component1 from "../components/component1";
import Component from "/";
import Component4 from "../components/component4";
import NavigationsPnaviFixed from "../components/navigations-pnavi-fixed";
import FormContainer2 from "../components/form-container2";

const TaskInputradioButtonupload: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1000px] overflow-x-auto text-left text-base text-gray-200 font-noto-sans">
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
        src="/undefined10.png"
      />
      <Component2 divPosition="absolute" divTop="767px" divLeft="649px" />
      <Component1 divPosition="absolute" divTop="347px" divLeft="299px" />
      <Component divPosition="absolute" divTop="914px" divLeft="230px" />
      <Component4 divPosition="absolute" divTop="687px" divLeft="299px" />
      <div className="absolute top-[570px] left-[299px] w-[334px] h-[79px] text-sm">
        <div className="absolute top-[61px] left-[0px] rounded-181xl bg-white box-border w-4 h-4 border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[63px] left-[2px] rounded-181xl bg-orangered-100 box-border w-3 h-3 border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[61px] left-[192px] rounded-181xl bg-white box-border w-4 h-4 border-[1px] border-solid border-gainsboro" />
        <i className="absolute top-[0px] left-[0px] leading-[20px] font-thin">
          単一選択肢
        </i>
        <i className="absolute top-[26px] left-[0px] text-xs leading-[20px] font-thin text-lightslategray">
          項目の補足説明があればここに表示します。
        </i>
        <i className="absolute top-[59px] left-[24px] leading-[20px] font-thin">
          なし（取締役会日設置）
        </i>
        <i className="absolute top-[59px] left-[222px] leading-[20px] font-thin">
          取締役会設置会社
        </i>
      </div>
      <NavigationsPnaviFixed
        companyFormationBusinessP="事業目的の決定"
        navigationsPnaviFixedPosition="absolute"
        navigationsPnaviFixedTop="0px"
        navigationsPnaviFixedLeft="229px"
        btnBackCursor="unset"
        iLeft="44.46%"
      />
      <FormContainer2
        maskGroup="/undefined11.png"
        headerFixed="/undefined12.png"
        propTop="875px"
        propCursor="unset"
        propCursor1="unset"
        propCursor2="unset"
      />
    </div>
  );
};

export default TaskInputradioButtonupload;
