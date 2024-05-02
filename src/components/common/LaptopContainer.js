import React from "react";

const LaptopContainer = () => {
  return (
    <div className="col-md-6">
      <div className="about_img">
        <div className="laptop">
          <div className="laptop__screen">
            <ul>
              <li>
                <div className="about_list">
                  <img src="assets/Reserch.gif" alt="product-img" />
                </div>
              </li>
              <li>
                <div className="about_list">
                  <img src="assets/Documentation.gif" alt="product-img" />
                </div>
              </li>
              <li>
                <div className="about_list">
                  <img src="assets/Frameworks.gif" alt="product-img" />
                </div>
              </li>
              <li>
                <div className="about_list">
                  <img src="assets/userFeedback.gif" alt="product-img" />
                </div>
              </li>
              <li>
                <div className="about_list">
                  <img src="assets/userOnboarding.gif" alt="product-img" />
                </div>
              </li>
              <li>
                <div className="about_list">
                  <img src="assets/userPersona.gif" alt="product-img" />
                </div>
              </li>
              <li>
                <div className="about_list">
                  <img src="assets/productStrategy.gif" alt="product-img" />
                </div>
              </li>
              <li>
                <div className="about_list">
                  <img src="assets/userExperience.gif" alt="product-img" />
                </div>
              </li>
            </ul>
          </div>
          <div className="laptop__bottom">
            <div className="laptop__under"></div>
          </div>
          <div className="laptop__shadow"></div>
        </div>
      </div>
      {/* <div className="box">
  <div id="content"></div>
  <div id="shadow"></div>
</div> */}
    </div>
  );
};

export default LaptopContainer;
