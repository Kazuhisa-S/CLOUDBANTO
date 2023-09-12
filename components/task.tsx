import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TaskType = {
  completionStatus?: string;
  purposeSettingAnnouncemen?: string;

  /** Style props */
  taskPosition?: CSSProperties["position"];
  taskTop?: CSSProperties["top"];
  taskLeft?: CSSProperties["left"];
  rectangleDivBorder?: CSSProperties["border"];
  divLeft?: CSSProperties["left"];
  divColor?: CSSProperties["color"];
  divTop?: CSSProperties["top"];
  divCursor?: CSSProperties["cursor"];

  /** Action props */
  onText19Click?: () => void;
};

const Task: NextPage<TaskType> = ({
  completionStatus,
  purposeSettingAnnouncemen,
  taskPosition,
  taskTop,
  taskLeft,
  rectangleDivBorder,
  divLeft,
  divColor,
  divTop,
  divCursor,
  onText19Click,
}) => {
  const taskStyle: CSSProperties = useMemo(() => {
    return {
      position: taskPosition,
      top: taskTop,
      left: taskLeft,
    };
  }, [taskPosition, taskTop, taskLeft]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  const div6Style: CSSProperties = useMemo(() => {
    return {
      left: divLeft,
      color: divColor,
    };
  }, [divLeft, divColor]);

  const div7Style: CSSProperties = useMemo(() => {
    return {
      top: divTop,
      cursor: divCursor,
    };
  }, [divTop, divCursor]);

  return (
    <div
      className="w-[561px] h-7 text-left text-sm text-black font-noto-sans-jp"
      style={taskStyle}
    >
      <div
        className="absolute h-full w-[19.17%] top-[0%] right-[80.83%] bottom-[0%] left-[0%] rounded bg-white box-border border-[1px] border-solid border-royalblue"
        style={rectangleDivStyle}
      />
      <div className="absolute w-[15.56%] top-[14.29%] left-[26.25%] flex items-end">
        2023/4/6
      </div>
      <div className="absolute w-[15.56%] top-[14.29%] left-[46.99%] flex items-end">
        山田 太郎
      </div>
      <div
        className="absolute top-[14.29%] left-[7.07%] text-royalblue text-center"
        style={div6Style}
      >
        {completionStatus}
      </div>
      <div
        className="absolute w-[36.54%] top-[14.29%] left-[66.67%] [text-decoration:underline] leading-[20px] flex items-center"
        style={div7Style}
        onClick={onText19Click}
      >
        {purposeSettingAnnouncemen}
      </div>
    </div>
  );
};

export default Task;
