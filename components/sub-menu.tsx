import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SubMenuType = {
  itemCode?: string;

  /** Style props */
  subMenuPosition?: CSSProperties["position"];
  subMenuTop?: CSSProperties["top"];
  subMenuLeft?: CSSProperties["left"];
  groupDivCursor?: CSSProperties["cursor"];
  groupDivCursor1?: CSSProperties["cursor"];
  subMenuBottom?: CSSProperties["bottom"];
  subMenuBorder?: CSSProperties["border"];
  subMenuBoxSizing?: CSSProperties["boxSizing"];

  /** Action props */
  onGroupContainer3Click?: () => void;
  onGroupContainer4Click?: () => void;
};

const SubMenu: NextPage<SubMenuType> = ({
  itemCode,
  subMenuPosition,
  subMenuTop,
  subMenuLeft,
  groupDivCursor,
  groupDivCursor1,
  subMenuBottom,
  subMenuBorder,
  subMenuBoxSizing,
  onGroupContainer3Click,
  onGroupContainer4Click,
}) => {
  const subMenuStyle: CSSProperties = useMemo(() => {
    return {
      position: subMenuPosition,
      top: subMenuTop,
      left: subMenuLeft,
      bottom: subMenuBottom,
      border: subMenuBorder,
      boxSizing: subMenuBoxSizing,
    };
  }, [
    subMenuPosition,
    subMenuTop,
    subMenuLeft,
    subMenuBottom,
    subMenuBorder,
    subMenuBoxSizing,
  ]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      cursor: groupDivCursor,
    };
  }, [groupDivCursor]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      cursor: groupDivCursor1,
    };
  }, [groupDivCursor1]);

  return (
    <div
      className="w-[229px] h-[124px] text-left text-sm text-black font-noto-sans"
      style={subMenuStyle}
    >
      <div
        className="absolute h-3/6 w-full top-[0%] right-[0%] bottom-[50%] left-[0%]"
        style={groupDivStyle}
        onClick={onGroupContainer3Click}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-t-[1px] border-solid border-gainsboro" />
        <img
          className="absolute h-[33.87%] w-[11.35%] top-[35.48%] right-[79.04%] bottom-[30.65%] left-[9.61%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/undefined5.png"
        />
        <i className="absolute h-[43.48%] w-[49.78%] top-[29.03%] left-[28.38%] leading-[20px] flex font-thin items-center">
          フォルダ
        </i>
      </div>
      <div
        className="absolute h-3/6 w-full top-[50%] right-[0%] bottom-[0%] left-[0%]"
        style={groupDiv1Style}
        onClick={onGroupContainer4Click}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-t-[1px] border-solid border-gainsboro" />
        <i className="absolute h-[43.48%] w-[49.78%] top-[29.03%] left-[28.38%] leading-[20px] flex font-thin items-center">
          マイページ
        </i>
        <img
          className="absolute h-[54.84%] w-[14.85%] top-[22.58%] right-[77.29%] bottom-[22.58%] left-[7.86%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={itemCode}
        />
      </div>
    </div>
  );
};

export default SubMenu;
