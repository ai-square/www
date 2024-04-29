import Image from "next/image";

import brand1 from "../../public/images/brand/Nissan.png";
import brand2 from "../../public/images/brand/Epiq-Global.png";
import brand3 from "../../public/images/brand/Changi-Airport.png";
import brand4 from "../../public/images/brand/Alpha-Ring.png";
import brand5 from "../../public/images/brand/Code-Complete.png";
import brand6 from "../../public/images/brand/Foxconn.png";
import brand7 from "../../public/images/brand/Telesynergy.png";
import brand8 from "../../public/images/brand/Hutchinson.png";

const Brands = () => {
  return (
    <>
      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Industry Partners</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <ul className="brand-list brand-style-2">
                <li>
                  <a href="#">
                    <Image
                      src={brand1}
                      width={148}
                      height={70}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand2}
                      width={148}
                      height={70}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand3}
                      width={148}
                      height={70}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand4}
                      width={148}
                      height={70}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand5}
                      width={148}
                      height={70}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand6}
                      width={148}
                      height={70}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand7}
                      width={148}
                      height={70}
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={brand8}
                      width={148}
                      height={70}
                      alt="Brand Image"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
