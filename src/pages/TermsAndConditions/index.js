import React from "react";

import { Img, Text, Button } from "components";

const TermsAndConditionsPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy md:gap-[40px] sm:gap-[40px] gap-[70px] items-center justify-end mx-[auto] pt-[35px] sm:px-[20px] px-[35px] w-[100%]">
        <header className="flex items-center justify-center max-w-[1266px] ml-[auto] mr-[auto] md:pl-[20px] md:pr-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_22.svg"
                className="h-[35px]"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <ul className="flex sm:flex-col flex-row gap-[24px] sm:hidden items-start justify-center md:ml-[0] ml-[285px] md:w-[100%] w-[30%] common-row-list">
              <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[27%]">
                <div className="flex flex-row items-start justify-between">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-medium hover:h-[undefinedpx] mt-[3px] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                    rel="noreferrer"
                  >
                    Products
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowdown"
                  />
                </div>
              </li>
              <li className="mb-[1px] ml-[24px] sm:w-[100%] sm:my-[10px] w-[28%]">
                <div className="flex flex-row gap-[9px] items-start justify-center">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-medium hover:h-[undefinedpx] mt-[3px] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                    rel="noreferrer"
                  >
                    Resouces
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowdown One"
                  />
                </div>
              </li>
              <li className="mt-[4px] ml-[24px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  href={"javascript:"}
                  className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                  rel="noreferrer"
                >
                  Request a demo
                </a>
              </li>
            </ul>
            <div className="flex flex-row sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-radius6 md:w-[100%] w-[18%]">
              <Text
                className="font-medium text-gray_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Sign in
              </Text>
              <Button className="cursor-pointer font-medium min-w-[67%] text-[16px] text-center text-white_A700 w-[max-content]">
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-end max-w-[1268px] ml-[auto] mr-[auto] md:pl-[20px] md:pr-[20px] pt-[9px] w-[100%]">
          <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
            <a
              href={"javascript:"}
              className="font-semibold sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-left underline w-[auto]"
              rel="noreferrer"
            >
              Terms and Conditions
            </a>
            <Text
              className="font-normal leading-[29.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900 text-left"
              as="h3"
              variant="h3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus. Mauris nunc mi aliquet pellentesque.
              <br />
              Arcu justo orci dolor in. Ac porttitor mi quis quam id varius.
              Amet vestibulum rhoncus massa bibendum nisl. Facilisis egestas
              quam non posuere proin tellus dolor. Commodo diam imperdiet lorem
              maecenas enim sit. Ullamcorper varius turpis pellentesque
              adipiscing turpis. Ipsum cursus sagittis nunc, enim. Vulputate
              etiam senectus nulla sociis quam et. Semper integer diam nulla et
              bibendum fringilla.
            </Text>
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start mt-[39px] w-[100%]">
            <a
              href={"javascript:"}
              className="font-semibold sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-left underline w-[auto]"
              rel="noreferrer"
            >
              Lorem ipsum
            </a>
            <Text
              className="font-normal leading-[29.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900 text-left w-[100%]"
              as="h3"
              variant="h3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus
            </Text>
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start mt-[39px] w-[100%]">
            <a
              href={"javascript:"}
              className="font-semibold sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-left underline w-[auto]"
              rel="noreferrer"
            >
              Lorem ipsum
            </a>
            <Text
              className="font-normal leading-[29.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900 text-left w-[100%]"
              as="h3"
              variant="h3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus
            </Text>
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start mt-[39px] w-[100%]">
            <a
              href={"javascript:"}
              className="font-semibold sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-left underline w-[auto]"
              rel="noreferrer"
            >
              Lorem ipsum
            </a>
            <Text
              className="font-normal leading-[29.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900 text-left w-[100%]"
              as="h3"
              variant="h3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus
            </Text>
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start mt-[39px] w-[100%]">
            <a
              href={"javascript:"}
              className="font-semibold sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-left underline w-[auto]"
              rel="noreferrer"
            >
              Lorem ipsum
            </a>
            <Text
              className="font-normal leading-[29.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900 text-left w-[100%]"
              as="h3"
              variant="h3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
