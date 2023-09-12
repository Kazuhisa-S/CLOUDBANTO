import type { NextPage } from "next";
import { useCallback } from "react";
import ContainerCard1 from "../components/container-card1";
import { useRouter } from "next/router";

const GuideLine1: NextPage = () => {
  const router = useRouter();

  const onNodeClick = useCallback(() => {
    router.push("/guide-line2");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[2000px] overflow-hidden text-left text-smi text-gray-100 font-noto-sans-jp">
      <img
        className="absolute top-[242px] left-[333px] w-[528.43px] h-[159.72px] object-cover"
        alt=""
        src="/undefined34.png"
      />
      <img
        className="absolute top-[60px] left-[67px] w-[102px] h-[18.39px] object-cover"
        alt=""
        src="/undefined35.png"
      />
      <div className="absolute top-[63px] left-[201px] text-3xs font-inria-sans text-center">
        Cloud Back Office
      </div>
      <ContainerCard1 />
      <div className="absolute h-[4.2%] w-[23.7%] top-[69.9%] right-[57.71%] bottom-[25.9%] left-[18.59%]">
        <div className="absolute top-[50%] left-[0%] tracking-[0.1em] leading-[42px]">
          代理店/FC戦略構築・管理コンサルティング
        </div>
        <img
          className="absolute h-[23.81%] w-[12.3%] top-[0%] right-[87.7%] bottom-[76.19%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/undefined37.png"
        />
      </div>
      <img
        className="absolute top-[1619px] left-[0px] w-[1309px] h-[395.65px] object-cover"
        alt=""
        src="/undefined38.png"
      />
      <div className="absolute top-[1376px] left-[845px] rounded-17xl bg-whitesmoke-100 w-[127px] h-[127px]" />
      <div className="absolute top-[1211px] left-[845px] rounded-17xl bg-whitesmoke-100 w-[127px] h-[127px]" />
      <div className="absolute top-[1234px] left-[222px] w-[750px] h-[125px]">
        <img
          className="absolute top-[16px] left-[646px] w-[81px] h-[50px] overflow-hidden object-cover cursor-pointer"
          alt=""
          src="/undefined39.png"
          onClick={onNodeClick}
        />
        <div className="absolute h-[64.8%] w-[20.67%] top-[0%] right-[79.33%] bottom-[35.2%] left-[0%]">
          <div className="absolute top-[48.15%] left-[0%] tracking-[0.1em] leading-[42px]">
            スタートアップサポート
          </div>
          <img
            className="absolute h-[24.69%] w-[21.42%] top-[0%] right-[78.58%] bottom-[75.31%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/undefined40.png"
          />
        </div>
        <div className="absolute top-[124.5px] left-[calc(50%_-_375.5px)] box-border w-[751px] h-px border-t-[1px] border-solid border-black" />
      </div>
      <img
        className="absolute h-[2.5%] w-[4.94%] top-[70.7%] right-[21.36%] bottom-[26.8%] left-[73.7%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/undefined41.png"
      />
    </div>
  );
};

export default GuideLine1;
