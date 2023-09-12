import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Component3Type = {
  /** Style props */
  divPosition?: CSSProperties["position"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
};

const Component3: NextPage<Component3Type> = ({
  divPosition,
  divTop,
  divLeft,
}) => {
  const div4Style: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divTop, divLeft]);

  return (
    <div
      className="w-[212px] h-[142px] text-center text-sm text-white font-noto-sans-jp"
      style={div4Style}
    >
      <div className="absolute h-[32.39%] w-full top-[0%] right-[0%] bottom-[67.61%] left-[0%] rounded-md bg-orangered-100" />
      <img
        className="absolute h-[4.23%] w-[5.72%] top-[14.79%] right-[8.46%] bottom-[80.99%] left-[85.82%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/undefined24.png"
      />
      <b className="absolute top-[9.86%] left-[6.6%] leading-[20px]">
        アップロード
      </b>
      <div className="absolute h-[67.61%] w-full top-[32.39%] right-[0%] bottom-[0%] left-[0%] text-left text-gray-200">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
        <b className="absolute top-[15.63%] left-[6.6%] leading-[20px]">
          リンクを保存
        </b>
        <b className="absolute top-[65.63%] left-[6.6%] leading-[20px]">
          ファイルをアップロード
        </b>
        <div className="absolute h-[1.04%] w-[100.47%] top-[49.48%] right-[-0.24%] bottom-[49.48%] left-[-0.24%] box-border border-t-[1px] border-solid border-gainsboro" />
      </div>
      <img
        className="absolute h-[11.97%] w-[9.91%] top-[44.37%] right-[6.6%] bottom-[43.66%] left-[83.49%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/undefined25.png"
      />
      <img
        className="absolute h-[9.15%] w-[9.91%] top-[78.87%] right-[6.6%] bottom-[11.97%] left-[83.49%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/undefined26.png"
      />
    </div>
  );
};

export default Component3;
