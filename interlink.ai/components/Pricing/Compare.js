import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";

const Compare = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="rainbow-pricing-detailed-area mt--30 rainbow-section-gapTop">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-left mb--30"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="150"
            >
              <h3 className="title w-600 mb--0">Plan Comparison</h3>
            </div>
          </div>
        </div>
        <div className="row row--15">
          <div className="col-lg-12">
            <div className="rainbow-compare-table style-1">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th></th>
                    <th className="sm-radius-top-left">Free</th>
                    <th className="style-prymary">SME</th>
                    <th className="style-prymary">Enterprise</th>
                    <th className="style-prymary sm-radius-top-right">
                      Developers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="heading-row">
                    <td>
                      <h6>Usage</h6>
                    </td>
                    <td>
                      <h6>30 Documents / Day</h6>
                    </td>
                    <td>
                      <h6>Unlimited</h6>
                    </td>
                    <td>
                      <h6>Unlimited</h6>
                    </td>
                    <td>
                      <h6>Usage Based</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>Unit Price</td>
                    <td>Free</td>
                    <td>$1,999 / Month / Site</td>
                    <td>$4,999 / Month / Site</td>
                    <td>Usage Based</td>
                  </tr>
                  <tr>
                    <td>Switch/Cancel Anytime</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>Usage Based</td>
                  </tr>
                  <tr className="heading-row">
                    <td>
                      <h6>PDF Support</h6>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Text Based PDF Support</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Scanned PDF Support</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Built-in PDF Editing Tool</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>

                  <tr className="heading-row">
                    <td>
                      <h6>Audio File Support</h6>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>WAV, MP3, MP4 Support</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>FTR Audio Support</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>High Criteria Liberty Support</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>VIQ Audio Support</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Verbatim Speech to Text</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Track Based Diarisation</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>AI Based Diarisation</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Audio-Document Linker</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="heading-row">
                    <td>
                      <h6>Team Collaboration</h6>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Seats per Site</td>
                    <td>1 Seat</td>
                    <td>5 Seats</td>
                    <td>30 Seats</td>
                    <td>Customizable</td>
                  </tr>
                  <tr>
                    <td>Federated Learning</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Role Control</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Usage Report</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Access Control</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>LDAP Support</td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon bg-dark">
                        <i className="feather-x"></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="heading-row">
                    <td>
                      <h6>Verification Rule Creation</h6>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Customizable Key Value Pairs</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Rule Based Matching</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>AI Based Matching</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Workflow Tools</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="heading-row">
                    <td>
                      <h6>Deployment Options</h6>
                    </td>
                    <td>
                      <h6>Cloud Only</h6>
                    </td>
                    <td>
                      <h6>On-Premise or Cloud</h6>
                    </td>
                    <td>
                      <h6>On-Premise or Cloud</h6>
                    </td>
                    <td>
                      <h6>Limited to API</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>AWS Support</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Azure Support</td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                    <td>
                      <span className="icon">
                        <i className="feather-check"></i>
                      </span>
                    </td>
                  </tr>

                  <tr className="submit-btn-row">
                    <td></td>
                    <td>
                      <Link className="btn-default btn-border" href="#">
                        Enjoy now
                      </Link>
                    </td>
                    <td>
                      <Link className="btn-default btn-border" href="#">
                        Get started
                      </Link>
                    </td>
                    <td>
                      <Link className="btn-default" href="#">
                        Get started
                      </Link>
                    </td>
                    <td>
                      <Link className="btn-default btn-border p-0" href="https://ai-square.io/contact/">
                        Contact Sales
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
