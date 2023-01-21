import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Text, Button, Line } from "components";

const NavigationMenuDrawer = (props) => {
  return (
    <>
      <Drawer placement="left" className="!w-[22%]" {...props}>
        <div>
          <div className="flex flex-col font-gilroy items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%]">
            <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
              <div className="bg-gray_50 flex flex-col gap-[375px] md:gap-[40px] sm:gap-[40px] h-[1080px] md:h-[auto] sm:h-[auto] items-start justify-start p-[24px] sm:px-[20px] w-[310px]">
                <div className="flex flex-col gap-[32px] h-[478px] md:h-[auto] sm:h-[auto] items-start justify-start self-stretch w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Img
                      src="images/img_81.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                      alt="EightyOne"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                      <Text
                        className="font-semibold self-stretch text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Ashfak Sayem
                      </Text>
                      <Text
                        className="font-medium self-stretch text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        ashfaksayem@gmail.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                    <div className="bg-blue_A700 flex flex-row gap-[12px] items-center justify-start p-[12px] rounded-radius8 self-stretch w-[100%]">
                      <div className="flex flex-1 flex-row font-gilroy gap-[6px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Img
                          src="images/img_calendar.svg"
                          className="h-[24px] w-[24px]"
                          alt="calendar"
                        />
                        <Text
                          className="flex-1 font-semibold text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Calendar
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-inter font-semibold h-[20px] leading-[normal] text-[10px] text-black_900 text-center tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[20px]"
                        size="sm"
                        variant="FillLightblue100"
                      >
                        2
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] rounded-radius8 self-stretch w-[100%]">
                      <div className="flex flex-1 flex-row font-gilroy gap-[6px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Img
                          src="images/img_iconoutline.svg"
                          className="h-[24px] w-[24px]"
                          alt="IconOutline"
                        />
                        <Text
                          className="flex-1 font-semibold text-bluegray_700 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Rewards
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-inter font-semibold h-[20px] leading-[normal] text-[10px] text-black_900 text-center tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[20px]"
                        size="sm"
                        variant="FillRed200"
                      >
                        2
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-center p-[12px] rounded-radius8 self-stretch w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[24px] w-[24px]"
                          alt="location"
                        />
                        <Text
                          className="flex-1 font-semibold text-bluegray_700 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Address
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-[12px] rounded-radius8 self-stretch w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Img
                          src="images/img_calendar_24X24.svg"
                          className="h-[24px] w-[24px]"
                          alt="calendar Two"
                        />
                        <Text
                          className="flex-1 font-semibold text-bluegray_700 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Payments Methods
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] rounded-radius8 self-stretch w-[100%]">
                      <div className="flex flex-1 flex-row font-gilroy gap-[6px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Img
                          src="images/img_settings_2.svg"
                          className="h-[24px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="flex-1 font-semibold text-bluegray_700 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Offers
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-inter font-semibold h-[20px] leading-[normal] text-[10px] text-black_900 text-center tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[20px]"
                        size="sm"
                        variant="FillGreenA100"
                      >
                        2
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-center p-[12px] rounded-radius8 self-stretch w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Img
                          src="images/img_user_2.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="flex-1 font-semibold text-bluegray_700 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Refer a Friend
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-[12px] rounded-radius8 self-stretch w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Img
                          src="images/img_call.svg"
                          className="h-[24px] w-[24px]"
                          alt="call"
                        />
                        <Text
                          className="flex-1 font-semibold text-bluegray_700 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Support
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                  <div className="flex flex-col items-start justify-start self-stretch w-[100%]">
                    <Line className="bg-bluegray_100_6c h-[2px] rounded-radius1 self-stretch w-[100%]" />
                    <div className="flex flex-col items-start justify-center p-[12px] rounded-radius8 self-stretch w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Img
                          src="images/img_question_1.svg"
                          className="h-[24px] w-[24px]"
                          alt="question"
                        />
                        <Text
                          className="flex-1 font-semibold text-bluegray_700 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Colour Scheme
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_200 flex flex-row gap-[4px] items-center justify-center p-[4px] rounded-radius20 self-stretch w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-row gap-[8px] items-center justify-center pl-[8px] pr-[16px] py-[4px] rounded-radius16 md:self-stretch sm:self-stretch shadow-bs w-[100%]">
                      <Img
                        src="images/img_brightness.svg"
                        className="h-[24px] w-[24px]"
                        alt="brightness"
                      />
                      <Text
                        className="text-bluegray_700 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Light
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-[8px] items-center justify-center pl-[8px] pr-[16px] py-[4px] rounded-radius16 md:self-stretch sm:self-stretch w-[100%]">
                      <Img
                        src="images/img_uiiconmoonli.svg"
                        className="h-[24px] w-[24px]"
                        alt="UIiconmoonli"
                      />
                      <Text
                        className="text-bluegray_700 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dark
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavigationMenuDrawer;
