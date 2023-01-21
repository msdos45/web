import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  icbRoundedBorder11: "rounded-radius11955",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  FillLightblue100: "bg-light_blue_100 text-black_900",
  FillRed200: "bg-red_200 text-black_900",
  FillGreenA100: "bg-green_A100 text-black_900",
  OutlineBlueA700: "border border-blue_A700 border-solid text-blue_A700",
  icbOutlineGray53: "bg-blue_A700 outline outline-[3.33px] outline-gray_53",
};
const sizes = {
  sm: "p-[4px]",
  md: "p-[14px]",
  lg: "p-[17px]",
  smIcn: "p-[2px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4", "icbRoundedBorder11"]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "FillLightblue100",
    "FillRed200",
    "FillGreenA100",
    "OutlineBlueA700",
    "icbOutlineGray53",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder4",
  variant: "FillBlueA700",
  size: "md",
};

export { Button };
