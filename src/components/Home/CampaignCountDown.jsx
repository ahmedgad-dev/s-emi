import { Link } from "react-router-dom";
import CountDown from "../Helpers/CountDown";
import bg1 from '../../assets/img/banner-2.png'
import outfit from '../../assets/img/outfit.jpg'

export default function CampaignCountDown({
  className,
  lastDate,
  counterbg,
  appscreen,
}) {
  const { showDate, showHour, showMinute, showSecound } = CountDown(lastDate);

  return (
    <div>
      <div className={`w-full lg:h-[460px] ${className || ""}`}>
        <div className="container-x mx-auto h-full">
          <div className="lg:flex xl:space-x-[30px] lg:space-x-5 items-center h-full">
            <div
              data-aos="fade-right"
              className="campaign-countdown lg:w-1/2 h-full w-full mb-5 lg:mb-0"
              style={{
                background: `url(${bg1}) center no-repeat`,
                backgroundSize: "contain",
              }}
            >
              <Link to="/flash-sale">
                <div className="w-full xl:p-12 p-5">
                  <div className="countdown-wrapper w-full flex lg:justify-start justify-evenly mb-10">
                    <div className="countdown-item mr-4">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#EB5757]">
                          {showDate}
                        </span>
                      </div>
                      <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                        Days
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#2F80ED]">
                          {showHour}
                        </span>
                      </div>
                      <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                        Hours
                      </p>
                    </div>


                  </div>
                  <div className="countdown-title mb-4">
                    <h1 className="text-[44px] text-qblack font-600">
                      Don't Miss! Our Big Sale%
                    </h1>
                  </div>
                  <div className="inline-flex space-x-2 items-center border-b border-qyellow">
                    <span className="text-sm text-qblack font-600 tracking-wide leading-7">
                      Shop Now
                    </span>
                    <span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.08984"
                          y="0.636719"
                          width="6.94219"
                          height="1.54271"
                          transform="rotate(45 2.08984 0.636719)"
                          fill="black"
                        />
                        <rect
                          x="7"
                          y="5.54492"
                          width="6.94219"
                          height="1.54271"
                          transform="rotate(135 7 5.54492)"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-left"
              className="download-app flex-1 lg:h-full h-[430px] xl:p-12 p-5"
              style={{
                background: `url(${
                  counterbg ||
                  `${
                    import.meta.env.VITE_PUBLIC_URL
                  }/assets/images/download-app-cover.png`
                }) no-repeat`,
                  backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="get-app">
                  <p className="text-[13px] font-600 text-qblack mb-3">
                    MOBILE APP VERSION
                  </p>
                  <h1 className="text-[30px] font-600 text-qblack leading-10 mb-8">
                    Realsing Soon Our
                    <span className="text-qred border-b-2 border-qred mx-2">
                      Mobile App
                    </span>
                    <br /> It’s Make easy for you life !
                  </h1>
                  <div className="flex space-x-5 items-center">
                    <div>
                      <a href="#">
                        <img
                          width="170"
                          height="69"
                          src={`${
                            import.meta.env.VITE_PUBLIC_URL
                          }/assets/images/play-store.png`}
                          alt=""
                        />
                      </a>
                    </div>
                {/* <div>
                      <a href="#">
                        <img
                          width="170"
                          height="69"
                          src={`${
                            import.meta.env.VITE_PUBLIC_URL
                          }/assets/images/apple-store.png`}
                          alt=""
                        />
                      </a>
                   </div>*/}
                  </div>
                </div>
                <div className="app-screen mt-6">
                  <img
                    src={
                      appscreen ||
                      `${outfit}`
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
