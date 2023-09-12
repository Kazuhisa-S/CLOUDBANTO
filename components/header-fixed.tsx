import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type HeaderFixedType = {
  imageDimensions?: string;

  /** Style props */
  headerFixedIconPosition?: CSSProperties["position"];
  headerFixedIconTop?: CSSProperties["top"];
  headerFixedIconLeft?: CSSProperties["left"];
  headerFixedIconCursor?: CSSProperties["cursor"];

  /** Action props */
  onHeaderFixedClick?: () => void;
};

const HeaderFixed: NextPage<HeaderFixedType> = ({
  imageDimensions,
  headerFixedIconPosition,
  headerFixedIconTop,
  headerFixedIconLeft,
  headerFixedIconCursor,
  onHeaderFixedClick,
}) => {
  const headerFixedIconStyle: CSSProperties = useMemo(() => {
    return {
      position: headerFixedIconPosition,
      top: headerFixedIconTop,
      left: headerFixedIconLeft,
      cursor: headerFixedIconCursor,
    };
  }, [
    headerFixedIconPosition,
    headerFixedIconTop,
    headerFixedIconLeft,
    headerFixedIconCursor,
  ]);

  return (
    <img
      className="w-[133px] h-[124px] object-cover"
      alt=""
      src={imageDimensions}
      style={headerFixedIconStyle}
      onClick={onHeaderFixedClick}
    />
  );
};

export default HeaderFixed;
