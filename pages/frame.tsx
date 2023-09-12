import type { NextPage } from "next";

const Frame: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-center text-[96px] text-gray-200 font-noto-sans-jp">
      <div className="absolute top-[276px] left-[317px] w-[559px] h-[268px]">
        <div className="absolute top-[0px] left-[0px] leading-[20px] flex items-center justify-center w-[559px] h-20">
          404
        </div>
        <div className="absolute top-[90px] left-[0px] text-5xl leading-[20px] flex items-center justify-center w-[559px] h-6">
          ページが見つかりません
        </div>
        <div className="absolute top-[150px] left-[0px] text-base leading-[20px] flex items-center w-[559px] h-16">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              お探しのページは、移動または削除された可能性があります。
            </p>
            <p className="m-0">下部ボタンより目的のページをお探しください。</p>
          </span>
        </div>
        <div className="absolute top-[224px] left-[185px] w-[190px] h-11 text-sm text-orangered-100">
          <div className="absolute top-[0px] left-[0px] rounded-181xl bg-white box-border w-[190px] h-11 border-[1px] border-solid border-orangered-100" />
          <div className="absolute top-[12px] left-[54px]">トップページ</div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
