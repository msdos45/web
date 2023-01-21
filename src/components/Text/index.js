import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[28px] md:text-[30px] text-[32px]",
  h2: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "text-[18px]",
  h4: "text-[16px]",
  h5: "font-semibold text-[14px]",
  h6: "text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
