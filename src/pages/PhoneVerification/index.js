import React from "react";

import { Img, Text, Button } from "components";

const PhoneVerificationPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-start mx-[auto] p-[297px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-start p-[50px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:px-[40px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[65%]">
          <div className="flex flex-col gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[40%]">
            <Img
              src="images/img_mobile.svg"
              className="h-[60px] w-[22%]"
              alt="mobile"
            />
            <Text
              className="text-blue_A700 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              OTP Verification
            </Text>
          </div>
          <Text
            className="font-medium mt-[37px] text-gray_700 text-left w-[auto]"
            as="h3"
            variant="h3"
          >
            <span className="text-colors text-[18px] font-gilroy">
              OTP Is Send to
            </span>
            <span className="text-colors1 text-[18px] font-gilroy"> </span>
            <span className="text-colors2 text-[18px] font-gilroy font-bold">
              +91 01234567890
            </span>
          </Text>
          <Img
            src="images/img_group11201.svg"
            className="h-[52px] mt-[29px] rounded-radius3 w-[73%]"
            alt="Group11201"
          />
          <Button className="cursor-pointer font-medium min-w-[90%] mt-[50px] text-[16px] text-center text-white_A700 w-[max-content]">
            Verify OTP
          </Button>
          <Text
            className="font-medium mb-[5px] mt-[28px] text-blue_A700 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            <span className="text-colors text-[16px] font-gilroy">
              Didn’t Recieved Code ?
            </span>
            <span className="text-colors2 text-[16px] font-gilroy"> </span>
            <span className="text-colors2 text-[16px] font-gilroy font-bold">
              Resend{" "}
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default PhoneVerificationPage;
