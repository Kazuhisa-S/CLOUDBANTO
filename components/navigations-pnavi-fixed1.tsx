import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import BtnBack from "./btn-back";

type NavigationsPnaviFixed1Type = {
  serviceDescription?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];

  /** Action props */
  onBtnBackContainerClick?: () => void;
};

const NavigationsPnaviFixed1: NextPage<NavigationsPnaviFixed1Type> = ({
  serviceDescription,
  propLeft,
  onBtnBackContainerClick,
}) => {
  const div11Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="absolute top-[0px] left-[229px] w-[965px] h-[62px] text-center text-sm text-gray-200 font-noto-sans-jp">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-b-[1px] border-solid border-whitesmoke-200" />
      <BtnBack
        btnBackWidth="4.16%"
        btnBackHeight="29.03%"
        btnBackPosition="absolute"
        btnBackTop="35.48%"
        btnBackRight="92.85%"
        btnBackBottom="35.48%"
        btnBackLeft="2.99%"
        btnBackCursor="pointer"
        divFontFamily="'Noto Sans JP'"
        divFontWeight="unset"
        divFontStyle="unset"
        onBtnBackContainerClick={onBtnBackContainerClick}
      />
      <div
        className="absolute top-[32.26%] left-[46.94%] tracking-[0.11em]"
        style={div11Style}
      >
        {serviceDescription}
      </div>
    </div>
  );
};

export default NavigationsPnaviFixed1;
