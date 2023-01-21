import React from "react";

import { Img, Text, Button, Input } from "components";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy md:gap-[40px] sm:gap-[40px] gap-[79px] items-center justify-start mx-[auto] p-[35px] sm:px-[20px] w-[100%]">
        <header className="flex items-center justify-center max-w-[1266px] ml-[auto] mr-[auto] md:pl-[20px] md:pr-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_21.svg"
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
        <div className="flex flex-col gap-[34px] items-center justify-start mb-[364px] md:pl-[20px] md:pr-[20px] md:w-[100%] sm:w-[100%] w-[39%]">
          <Text
            className="text-bluegray_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Create Account
          </Text>
          <div className="flex flex-col items-center justify-end pt-[5px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[16px] items-center justify-between w-[100%]">
                <div className="flex flex-col gap-[7px] items-start justify-start rounded-radius8 md:w-[100%] sm:w-[100%] w-[49%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    First Name
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_701 text-bluegray_701 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198"
                    placeholder="jane"
                    size="md"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start rounded-radius8 md:w-[100%] sm:w-[100%] w-[49%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Last Name
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_701 text-bluegray_701 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198 One"
                    placeholder="Jnson"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[19px] rounded-radius8 w-[100%]">
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Mobile Number
                </Text>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_701 text-bluegray_701 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  name="mobileNo"
                  placeholder="+91 1234567890"
                ></Input>
              </div>
              <div className="flex flex-col gap-[6px] items-start justify-start mt-[21px] rounded-radius8 w-[100%]">
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Email
                </Text>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_701 text-bluegray_701 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="email"
                  name="email"
                  placeholder="jane@gmail.com"
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-col gap-[6px] items-start justify-start mt-[21px] rounded-radius8 w-[100%]">
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Set Password
                </Text>
                <Input
                  className="font-medium p-[0] text-[18px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="password"
                  name="Group10198 Two"
                  placeholder="Set password"
                  size="md"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-medium mt-[24px] text-[16px] text-center text-white_A700 w-[100%]"
                size="lg"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
