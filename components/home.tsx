import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const onTextClick = useCallback(() => {
    router.push("/news-list");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/task-done");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-left text-sm text-gray-200 font-noto-sans-jp">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <div
        className="absolute top-[644px] left-[291px] text-base cursor-pointer"
        onClick={onTextClick}
      >
        サービスからのお知らせ
      </div>
      <div className="absolute top-[684px] left-[291px] text-3xs tracking-[0.01em] leading-[20px] inline-block w-[401px] h-[23px]">
        2023/2/2　サービスリリースのご案内
      </div>
      <div className="absolute top-[0px] left-[229px] bg-orangered-100 w-[965px] h-[215px]" />
      <div
        className="absolute top-[270px] left-[291px] w-[840px] h-[90px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lavenderblush w-[840px] h-[90px]" />
        <div className="absolute top-[51px] left-[21px] flex items-end w-[87.29px]">
          2023/4/6
        </div>
        <div className="absolute top-[50px] left-[111px] flex items-end w-[710px] h-[21px]">
          <span className="[line-break:anywhere] w-full">
            <span>{`山田太郎　法人設立 / 法人設立の準備 / `}</span>
            <span>事業目的の決定</span>
          </span>
        </div>
        <div className="absolute top-[17px] left-[21px] text-base text-crimson inline-block w-[377px] h-6">
          期日を過ぎているタスクがあります
        </div>
      </div>
      <div className="absolute top-[405px] left-[291px] w-[545px] h-40 text-black">
        <div
          className="absolute top-[0px] left-[0px] w-[250px] h-40 cursor-pointer"
          onClick={onBtnMenuContainer1Click}
          style={btnMenuStyle}
        >
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-white box-border border-[1px] border-solid border-gainsboro"
            style={rectangleDivStyle}
          />
          <div className="absolute h-[10.63%] w-[66.8%] top-[78.13%] left-[12.8%] flex items-end">
            {preparationForIncorporati}
          </div>
          <div
            className="absolute h-[26.96%] w-[7.94%] top-[11.27%] left-[12.62%] text-27xl font-inria-sans text-gray-100 inline-block"
            style={divStyle}
          >
            1
          </div>
        </div>
        <img
          className="absolute top-[68px] left-[153px] w-[64.42px] h-[70.35px] object-cover"
          alt=""
          src="/undefined27.png"
        />
        <div
          className="absolute top-[0px] left-[295px] w-[250px] h-40 cursor-pointer"
          onClick={onBtnMenuContainer1Click}
          style={btnMenu1Style}
        >
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-white box-border border-[1px] border-solid border-gainsboro"
            style={rectangleDiv1Style}
          />
          <div className="absolute h-[10.63%] w-[66.8%] top-[78.13%] left-[12.8%] flex items-end">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">バックオフィス</p>
              <p className="m-0">体制構築</p>
            </span>
          </div>
          <div className="absolute h-[26.96%] w-[7.94%] top-[11.27%] left-[12.62%] text-27xl font-inria-sans text-gray-100 inline-block">
            2
          </div>
        </div>
        <img
          className="absolute top-[67px] left-[455px] w-[71.23px] h-[71px] object-cover"
          alt=""
          src="/undefined28.png"
        />
      </div>
      <div className="absolute top-[63px] left-[893px] text-lg tracking-[0.11em] leading-[32px] text-gray-100 text-right">
        <p className="m-0">最速で法人立ち上げ</p>
        <p className="m-0">社会を変える事業の開発に</p>
        <p className="m-0">フォーカスできる環境を</p>
      </div>
      <div
        className="absolute bottom-[32px] left-[0px] w-[229px] h-[124px] text-black"
        style={subMenuStyle}
      >
        <div
          className="absolute h-3/6 w-full top-[0%] right-[0%] bottom-[50%] left-[0%] bg-white box-border cursor-pointer border-t-[1px] border-solid border-gainsboro"
          onClick={onRectangle5Click}
          style={rectangleDiv2Style}
        />
        <div className="absolute h-[21.74%] w-[49.78%] top-[14.52%] left-[28.38%] leading-[20px] flex items-center">
          フォルダ
        </div>
        <div
          className="absolute h-3/6 w-full top-[50%] right-[0%] bottom-[0%] left-[0%] cursor-pointer"
          onClick={onGroupContainer2Click}
          style={groupDivStyle}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-t-[1px] border-solid border-gainsboro" />
          <div
            className="absolute h-[43.48%] w-[49.78%] top-[29.03%] left-[28.38%] leading-[20px] flex items-center"
            style={div1Style}
          >
            マイページ
          </div>
          <img
            className="absolute h-[54.84%] w-[14.85%] top-[22.58%] right-[77.29%] bottom-[22.58%] left-[7.86%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={itemCode}
          />
        </div>
        <img
          className="absolute top-[19px] left-[22px] w-[26px] h-[26px] overflow-hidden object-cover"
          alt=""
          src="/undefined23.png"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[802px] border-r-[1px] border-solid border-whitesmoke-200" />
      <div className="absolute top-[295px] left-[46px] w-[91px] h-[174px] text-gray-100">
        <div className="absolute h-[36.21%] w-[2.2%] top-[10.34%] right-[87.91%] bottom-[53.45%] left-[9.89%] bg-gainsboro" />
        <div
          className="absolute h-[13.79%] w-[95.6%] top-[0%] right-[0%] bottom-[86.21%] left-[4.4%] cursor-pointer"
          onClick={onNavigationContainerClick}
          style={navigationStyle}
        >
          <div
            className="absolute h-[87.5%] w-[137.93%] top-[8.33%] left-[26.44%] leading-[20px] flex items-center"
            style={div2Style}
          >
            {companyFormationText}
          </div>
          <div
            className="absolute h-3/6 w-[13.79%] top-[25%] right-[86.21%] bottom-[25%] left-[0%] rounded-[50%] bg-lightslategray"
            style={ellipseDivStyle}
          />
        </div>
        <div
          className="absolute h-[13.79%] w-[95.6%] top-[43.1%] right-[0%] bottom-[43.1%] left-[4.4%] cursor-pointer"
          onClick={onNavigationContainer1Click}
          style={navigation1Style}
        >
          <div
            className="absolute h-[87.5%] w-[137.93%] top-[8.33%] left-[26.44%] leading-[20px] flex items-center"
            style={div3Style}
          >
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">バックオフィス</p>
              <p className="m-0">体制構築</p>
            </span>
          </div>
          <div className="absolute h-3/6 w-[13.79%] top-[25%] right-[86.21%] bottom-[25%] left-[0%] rounded-[50%] bg-lightslategray" />
        </div>
      </div>
      <img
        className="absolute top-[49px] left-[44px] w-[133px] h-[124px] object-cover"
        alt=""
        src={imageDimensions}
        style={headerFixedIconStyle}
        onClick={onLogoClick}
      />
      <div
        className="absolute top-[802px] left-[0px] w-[1217px] h-8 text-3xs text-white font-noto-sans"
        style={component2Style}
      >
        <div className="absolute h-full w-[98.11%] top-[0%] right-[1.89%] bottom-[0%] left-[0%] bg-gray-100" />
        <i
          className="absolute h-full w-[4.19%] top-[0%] left-[68.78%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center cursor-pointer"
          onClick={onText14Click}
          style={iStyle}
        >
          利用規約
        </i>
        <i
          className="absolute h-full w-[6.98%] top-[0%] left-[73.71%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center cursor-pointer"
          onClick={onText15Click}
          style={i1Style}
        >
          個人情報保護方針
        </i>
        <i className="absolute h-full w-[5.42%] top-[0%] left-[81.68%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center">
          よくある質問
        </i>
        <i
          className="absolute h-full w-[4.03%] top-[0%] left-[88.17%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center cursor-pointer"
          onClick={onText17Click}
          style={i2Style}
        >
          お知らせ
        </i>
        <i className="absolute h-full w-[5.09%] top-[0%] left-[93.02%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center">
          お問合せ
        </i>
      </div>
    </div>
  );
};

export default Home;
