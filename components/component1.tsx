import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Component1Type = {
  /** Style props */
  divPosition?: CSSProperties["position"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
};

const Component1: NextPage<Component1Type> = ({
  divPosition,
  divTop,
  divLeft,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divTop, divLeft]);

  return (
    <div
      className="w-[842px] h-[189px] text-left text-sm text-gainsboro font-noto-sans"
      style={div1Style}
    >
      <div className="absolute h-[84.13%] w-full top-[15.87%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
      <i className="absolute top-[24.34%] left-[2.14%] leading-[20px] font-thin">
        ここに入力してください
      </i>
      <i className="absolute top-[0%] left-[0%] leading-[20px] font-thin text-gray-200">
        OOを記載してください
      </i>
    </div>
  );
};

export default Component1;
