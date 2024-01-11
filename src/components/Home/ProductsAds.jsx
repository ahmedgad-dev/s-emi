import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function ProductsAds({
  className,
  ads=["", ""],
  sectionHeight,
  names,
}) {
  return(
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
            className={`h-full flex bg-[#FEE7C4] flex-row justify-between items-center sm:mb-0 mb-5 ${
              ads.length > 1 && ads.length <= 2 ? "sm:w-1/2 w-full" : "w-full"
            }`}
          >
              <div className="item h-full w-1/2" style={{
                background: `url(${ads[0]}) center no-repeat`,
                backgroundSize: "cover",
              }}/>

              <div className="space-x-2 flex flex-col items-start border-b border-qyellow h-3/4 w-1/2 bg-white p-5">
                {names? ( <p className="mb-1 uppercase italic">{names[0]}</p>): null}             
                   <ul className="mb-1 ">
                    <li>Casual Wear</li>
                    <li>Active Wear</li>
                    <li>Outer Wear</li>
                    <li>Foot Wear</li>
                    <li>Accessories</li>
                   </ul>
                  <Link to="#" className="inline-flex space-x-2 items-center self-center">
                    <span className="text-sm text-qblack font-600 tracking-wide leading-7">
                       Shop Now
                    </span>
                    <span>
                       <MdKeyboardArrowRight/>
                    </span>
                  </Link>
               </div>          
          </div>
          
            <div data-aos="fade-left" className="flex-1 h-full flex bg-[#AEE6EC] flex-row justify-between items-center">
              <div className="space-x-2 flex flex-col items-start border-b border-qyellow h-3/4 w-1/2 bg-white p-5">
                {names? ( <p className="mb-1 uppercase italic">{names[1]}</p>): null} 
                  <ul className="mb-2">
                   <li>Casual Wear</li>
                   <li>Active Wear</li>
                   <li>Outer Wear</li>
                   <li>Foot Wear</li>
                   <li>Accessories</li>
                  </ul>
                  <Link to="#" className="inline-flex space-x-2 items-center self-center">
                    <span className="text-sm text-qblack font-600 tracking-wide leading-7">
                      Shop Now
                    </span>
                    <span>
                     <MdKeyboardArrowRight/>
                    </span>
                  </Link>
               </div>
               <div className="item h-full w-1/2" style={{
                background: `url(${ads[1]}) center no-repeat`,
                backgroundSize: "contain",
              }}/>
            </div>
          
        </div>
      </div>
    </div>
  );
}
