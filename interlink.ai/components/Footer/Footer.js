import Separator from "@/pages/separator";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/Inter-Link-Logo-Invert.png";
import logoDark from "../../public/images/logo/Inter-Link-Logo-Invert.png";

import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter";

const Footer = () => {
  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <Separator top={true} />
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center mb--30">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget text-center">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        className="logo-light"
                        src={logo}
                        width={201}
                        height={35}
                        alt="Corporate Logo"
                      />
                      <Image
                        className="logo-dark"
                        src={logoDark}
                        width={201}
                        height={35}
                        alt="Corporate Logo"
                      />
                    </Link>
                  </div>
                  <p className="b1 text-center mt--20 mb--0">
                  Streamline data verification with Inter-Link AI.
                  </p>
                </div>
              </div>
            </div>
            <div className="separator-animated animated-true mt--50 mb--50"></div>
            {FooterData &&
              FooterData.footer.map((data, index) => (
                <div className="row" key={index}>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="rainbow-footer-widget">
                      <h4 className="title">{data.title}</h4>
                      <div className="inner">
                        <h6 className="subtitle">{data.desc}</h6>
                        <form className="newsletter-form" action="https://formspree.io/f/xpzvnjrl" method="POST">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Your Email Here"
                              required
                            />
                            <textarea
                              name="message"
                              placeholder="Your message"
                              hidden
                              defaultValue="Interested in early access!"
                            />
                            <button
                              className="btn-default bg-solid-primary"
                              type="submit"
                            >
                              <i className="feather-arrow-right"></i>
                              Subscribe
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <SingleFooter data={data.services} /> */}
                  <SingleFooter data={data.products} />
                  <SingleFooter data={data.company} />
                </div>
              ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
