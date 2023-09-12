import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Component4Type = {
  /** Style props */
  divPosition?: CSSProperties["position"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
};

const Component4: NextPage<Component4Type> = ({
  divPosition,
  divTop,
  divLeft,
}) => {
  const div5Style: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divTop, divLeft]);

  return (
    <div
      className="w-[220px] h-[46px] text-center text-sm text-white font-noto-sans-jp"
      style={div5Style}
    >
      <div className="absolute h-full w-[96.36%] top-[0%] right-[1.82%] bottom-[0%] left-[1.82%] rounded-md bg-orangered-100" />
      <img
        className="absolute h-[13.04%] w-[5.51%] top-[45.65%] right-[9.97%] bottom-[41.3%] left-[84.52%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/undefined24.png"
      />
      <b className="absolute top-[30.43%] left-[8.18%] leading-[20px]">
        アップロード
      </b>
    </div>
  );
};

export default Component4;
