import React from "react";

import { Img, Text, Line, Stack, Input, Button } from "components";

const SecurityPolicyPage = () => {
  return (
    <>
      <div className="bg-gray_52 flex flex-col font-gilroy items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-start justify-between max-w-[1408px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
          <aside className="md:hidden sm:hidden w-[22%]">
            <div className="bg-gray_50 flex flex-col justify-start p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_group10392_19.svg"
                className="h-[35px] mx-[auto] w-[65%]"
                alt="Group10392"
              />
              <div className="flex flex-col gap-[41px] justify-start mt-[48px] md:w-[100%] sm:w-[100%] w-[60%]">
                <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[8px] md:w-[100%] sm:w-[100%] w-[95%]">
                  <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                    <Img
                      src="images/img_save.svg"
                      className="h-[24px] w-[24px]"
                      alt="save"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-bluegray_701 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-end justify-start mt-[42px] md:w-[100%] sm:w-[100%] w-[74%]">
                    <Img
                      src="images/img_dollaraltsoli.svg"
                      className="h-[24px] w-[24px]"
                      alt="dollaraltSoli"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-bluegray_701 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Payments
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-start justify-start mt-[41px] w-[100%]">
                    <Img
                      src="images/img_walletoutline.svg"
                      className="h-[24px] w-[24px]"
                      alt="walletOutline"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-bluegray_701 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Wallet & Cards
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-start justify-start mt-[42px] md:w-[100%] sm:w-[100%] w-[89%]">
                    <Img
                      src="images/img_car.svg"
                      className="h-[24px] w-[24px]"
                      alt="car"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-bluegray_701 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Transactions
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-start justify-start mt-[42px] md:w-[100%] sm:w-[100%] w-[70%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark"
                    />
                    <Text
                      className="font-semibold mt-[4px] text-bluegray_701 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Analytics
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-end justify-start mt-[41px] md:w-[100%] sm:w-[100%] w-[74%]">
                    <Img
                      src="images/img_menu.svg"
                      className="h-[24px] w-[24px]"
                      alt="menu"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-bluegray_701 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start md:w-[100%] sm:w-[100%] w-[67%]">
                  <Line className="bg-blue_A700 h-[24px] w-[2px]" />
                  <Img
                    src="images/img_settings.svg"
                    className="h-[24px] ml-[6px] w-[24px]"
                    alt="settings"
                  />
                  <Text
                    className="font-semibold ml-[8px] mt-[5px] text-blue_A700 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Settings
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-opensans gap-[8px] items-end justify-start mb-[24px] md:ml-[0] sm:ml-[0] ml-[8px] mt-[478px] md:w-[100%] sm:w-[100%] w-[27%]">
                <Img
                  src="images/img_question.svg"
                  className="h-[24px] w-[24px]"
                  alt="question"
                />
                <Text
                  className="font-semibold mt-[5px] text-bluegray_701 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Help
                </Text>
              </div>
            </div>
          </aside>
          <div className="flex flex-col gap-[32px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[32px] md:w-[100%] sm:w-[100%] w-[77%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start w-[100%]">
              <Text
                className="mb-[2px] md:mt-[0] sm:mt-[0] mt-[14px] text-bluegray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                Settings
              </Text>
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col font-opensans h-[56px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[819px] p-[8px] rounded-radius50 w-[56px]">
                <Stack className="h-[35px] mb-[4px] relative w-[36px]">
                  <Img
                    src="images/img_notification.svg"
                    className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red_700 border border-bluegray_50 border-solid font-semibold h-[18px] pb-[5px] pt-[2px] px-[5px] right-[0] rounded-radius50 text-left text-white_A700 top-[0] w-[18px]"
                    as="h6"
                    variant="h6"
                  >
                    2
                  </Text>
                </Stack>
              </div>
              <div className="border border-blue_A701 border-solid flex flex-col h-[56px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[24px] p-[4px] rounded-radius50 w-[56px]">
                <Img
                  src="images/img_profileimglarg.png"
                  className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                  alt="ProfileImgLarg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[46px] items-center justify-start pt-[4px] w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[40px] md:w-[100%] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-medium text-bluegray_401 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      My Profile
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[44px] text-bluegray_400 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Notifications
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[34px] text-bluegray_400 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Language
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[34px] md:mt-[0] sm:mt-[0] mt-[2px] text-bluegray_400 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      General settings
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[34px] text-bluegray_400 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Theme
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[37px] text-blue_A700 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Privacy
                    </Text>
                  </div>
                  <Stack className="h-[2px] relative w-[100%]">
                    <Line className="absolute bg-gray_300 h-[1px] inset-x-[0] mx-[auto] top-[0] w-[100%]" />
                    <Line className="absolute bg-blue_A700 h-[2px] inset-y-[0] my-[auto] right-[35%] w-[9%]" />
                  </Stack>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-[4px] md:w-[100%] sm:w-[100%] w-[49%]">
                <div className="flex flex-col gap-[9px] items-start justify-start rounded-radius8 w-[100%]">
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Username or Email
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
                <div className="flex flex-col gap-[9px] items-start justify-start mt-[20px] rounded-radius8 w-[100%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Password
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_401 text-bluegray_401 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    type="password"
                    name="Group10198"
                    placeholder="Enter Password"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start mt-[21px] rounded-radius8 w-[100%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Security Question
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="mt-[3px] w-[100%]"
                    type="text"
                    name="Group10198 One"
                    placeholder="What Was Your First Pet’s Name?"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-[20px] rounded-radius8 w-[100%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Answer
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198 Two"
                    placeholder="Pluto"
                  ></Input>
                </div>
                <Button className="cursor-pointer font-medium mt-[16px] text-[16px] text-center text-white_A700 w-[100%]">
                  Save sequrity question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPolicyPage;
