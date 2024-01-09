import { Link } from "react-router-dom";
import bg from '../../assets/bg/woman-new-year.png'

export default function ProductsAds({
  className,
  ads = ["https://i.ibb.co/qMQ75QZ/floral-shirt.png", "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"],
  sectionHeight,
}) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        <div
          className={`${sectionHeight} ${
            ads.length > 1 && ads.length <= 2
              ? "sm:flex xl:space-x-[30px] sm:space-x-5"
              : ""
          } items-center w-full  overflow-hidden`}
        >
          <div
            data-aos="fade-right"
            className={`h-full flex bg-[#C2D7F0] flex-row justify-between items-center sm:mb-0 mb-5 ${
              ads.length > 1 && ads.length <= 2 ? "sm:w-1/2 w-full" : "w-full"
            }`}
          >
              <div className="item h-full w-1/2" style={{
                background: `url(${bg}) center no-repeat`,
                backgroundSize: "cover",
              }}/>

              <div className="space-x-2 items-center border-b border-qyellow h-3/4 w-1/2 bg-white p-5">
                  <Link to="#" className="inline-flex space-x-2 items-center ">
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
                  </Link>
               </div>          
          </div>
          {ads.length > 1 && ads.length <= 2 && (
            <div data-aos="fade-left" className="flex-1 h-full flex bg-[#FEE7C4] flex-row justify-between items-center">
              <div className="space-x-2 items-center border-b border-qyellow h-3/4 w-1/2 bg-white p-5">
                  <Link to="#" className="inline-flex space-x-2 items-center ">
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
                  </Link>
               </div>
               <div className="item bg-[#C2D7F0] h-full w-1/2" style={{
                background: `url(${bg}) center no-repeat`,
                backgroundSize: "cover",
              }}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
