import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import SubMenu from "./sub-menu";
import HeaderFixed from "./header-fixed";

type FormContainer2Type = {
  maskGroup?: string;
  headerFixed?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propCursor?: CSSProperties["cursor"];
  propCursor1?: CSSProperties["cursor"];
  propCursor2?: CSSProperties["cursor"];

  /** Action props */
  onGroupContainer3Click?: () => void;
  onGroupContainer4Click?: () => void;
  onHeaderFixedClick?: () => void;
};

const FormContainer2: NextPage<FormContainer2Type> = ({
  maskGroup,
  headerFixed,
  propTop,
  propCursor,
  propCursor1,
  propCursor2,
  onGroupContainer3Click,
  onGroupContainer4Click,
  onHeaderFixedClick,
}) => {
  const subMenuStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const headerFixedIconStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/folder");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/mypage-settings");
  }, [router]);

  return (
    <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1131px] border-[1px] border-solid border-whitesmoke-200">
      <SubMenu
        itemCode="/undefined13.png"
        subMenuPosition="absolute"
        subMenuTop="710px"
        subMenuLeft="0px"
        groupDivCursor="pointer"
        groupDivCursor1="pointer"
        subMenuBottom="unset"
        subMenuBorder="unset"
        subMenuBoxSizing="unset"
        onGroupContainer3Click={onGroupContainerClick}
        onGroupContainer4Click={onGroupContainer1Click}
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1131px] border-r-[1px] border-solid border-whitesmoke-200" />
      <HeaderFixed
        imageDimensions="/undefined29.png"
        headerFixedIconPosition="absolute"
        headerFixedIconTop="49px"
        headerFixedIconLeft="44px"
        headerFixedIconCursor="pointer"
        onHeaderFixedClick={onHeaderFixedClick}
      />
    </div>
  );
};

export default FormContainer2;
