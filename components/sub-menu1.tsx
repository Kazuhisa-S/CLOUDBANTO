import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SubMenu1Type = {
  /** Style props */
  subMenuPosition?: CSSProperties["position"];
  subMenuBottom?: CSSProperties["bottom"];
  subMenuLeft?: CSSProperties["left"];
};

const SubMenu1: NextPage<SubMenu1Type> = ({
  subMenuPosition,
  subMenuBottom,
  subMenuLeft,
}) => {
  const subMenu1Style: CSSProperties = useMemo(() => {
    return {
      position: subMenuPosition,
      bottom: subMenuBottom,
      left: subMenuLeft,
    };
  }, [subMenuPosition, subMenuBottom, subMenuLeft]);

  return <div className="w-[230px] h-[124px]" style={subMenu1Style} />;
};

export default SubMenu1;
