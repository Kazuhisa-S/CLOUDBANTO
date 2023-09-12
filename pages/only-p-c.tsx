import type { NextPage } from "next";

const OnlyPC: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-center text-base text-gray-200 font-noto-sans-jp">
      <div className="absolute top-[417px] left-[317px] w-[590px] h-16">
        <div className="absolute top-[0px] left-[0px] leading-[20px] flex items-center w-[590px] h-16">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              本サービスはPC限定のサービスとなっております。
            </p>
            <p className="m-0">
              恐縮ではございますが、PCにて再度アクセスいただくようお願い申し上げます。
            </p>
          </span>
        </div>
      </div>
      <img
        className="absolute h-[8.39%] w-[5.86%] top-[31.29%] right-[45.81%] bottom-[60.31%] left-[48.32%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/undefined49.png"
      />
      <div className="absolute top-[358px] left-[357px] flex flex-row items-start justify-start text-5xl text-orangered-100">
        <div className="relative leading-[20px] flex items-center justify-center w-[510px] h-8 shrink-0 z-[0]">
          本サービスはモバイルでのご利用ができません
        </div>
      </div>
    </div>
  );
};

export default OnlyPC;
