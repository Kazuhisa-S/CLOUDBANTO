import type { NextPage } from "next";

const FolderSection: NextPage = () => {
  return (
    <div
      className="absolute h-3/6 w-full top-[0%] right-[0%] bottom-[50%] left-[0%] text-left text-sm text-black font-noto-sans"
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
  );
};

export default FolderSection;
