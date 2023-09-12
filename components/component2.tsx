import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Component2Type = {
  /** Style props */
  divPosition?: CSSProperties["position"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
};

const Component2: NextPage<Component2Type> = ({
  divPosition,
  divTop,
  divLeft,
}) => {
  const div2Style: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divTop, divLeft]);

  return (
    <div
      className="w-[126px] h-[46px] text-center text-sm text-white font-noto-sans"
      style={div2Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orangered-100" />
      <i className="absolute w-[79.38%] top-[28.26%] left-[10.31%] leading-[20px] flex font-thin items-center justify-center">
        完了
      </i>
    </div>
  );
};

export default Component2;
