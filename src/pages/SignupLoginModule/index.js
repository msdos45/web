import React from "react";

import { Img, Text, Button, Input, Line } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SignupLoginModulePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy md:gap-[40px] sm:gap-[40px] gap-[83px] items-center justify-start mx-[auto] p-[35px] sm:px-[20px] w-[100%]">
        <header className="flex items-center justify-center max-w-[1266px] ml-[auto] mr-[auto] md:pl-[20px] md:pr-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_20.svg"
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
        <div className="flex flex-col gap-[29px] items-center justify-start mb-[267px] md:pl-[20px] md:pr-[20px] md:w-[100%] sm:w-[100%] w-[39%]">
          <Text
            className="text-bluegray_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Sign in to DhiWise
          </Text>
          <div className="flex flex-col items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[6px] items-start justify-start rounded-radius8 w-[100%]">
              <Text
                className="font-medium text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Email
              </Text>
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                wrapClassName="w-[100%]"
                type="email"
                name="Group10198"
                placeholder="Enter Email"
              ></Input>
            </div>
            <div className="flex flex-col gap-[6px] items-start justify-start mt-[21px] rounded-radius8 w-[100%]">
              <Text
                className="font-medium text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Password
              </Text>
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                wrapClassName="w-[100%]"
                type="password"
                name="Group10198 One"
                placeholder="Enter Password"
              ></Input>
            </div>
            <Text
              className="font-medium md:ml-[0] sm:ml-[0] ml-[381px] mt-[15px] text-blue_A700 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Forgot Password?
            </Text>
            <Button className="cursor-pointer font-medium mt-[24px] text-[16px] text-center text-white_A700 w-[100%]">
              Log in
            </Button>
            <div className="flex sm:flex-col flex-row sm:gap-[16px] items-start justify-between md:ml-[0] sm:ml-[0] ml-[8px] mt-[28px] md:w-[100%] sm:w-[100%] w-[97%]">
              <Line className="bg-bluegray_200 h-[1px] sm:mt-[0] my-[7px] w-[36%]" />
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Or continue with
              </Text>
              <Line className="bg-bluegray_200 h-[1px] sm:mt-[0] my-[7px] w-[35%]" />
            </div>
            <div className="flex flex-col gap-[16px] items-center justify-start mt-[29px] w-[100%]">
              <Button
                className="common-pointer cursor-pointer font-medium text-[16px] text-blue_A700 text-center w-[100%]"
                onClick={googleSignIn}
                variant="OutlineBlueA700"
              >
                Sign in with Google
              </Button>
              <Button
                className="cursor-pointer font-medium text-[16px] text-blue_A700 text-center w-[100%]"
                size="lg"
                variant="OutlineBlueA700"
              >
                Sign in with Facebook
              </Button>
              <Button
                className="cursor-pointer font-medium text-[16px] text-blue_A700 text-center w-[100%]"
                size="lg"
                variant="OutlineBlueA700"
              >
                Sign in with Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupLoginModulePage;
