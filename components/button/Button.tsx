import React, { Component } from "react";

const ButtonTypes = ["default", "primary", "ghost", "dashed", "link", "text"] as const;
export type ButtonType = typeof ButtonTypes[number];


export interface ButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  block?: boolean;
  children?: React.ReactNode;
  
  [key: `data-${ string }`]: string;
  
  styles?: { icon: React.CSSProperties };
}

const Button = (props: ButtonProps) => {
  const { children, type, icon, disabled } = props;
  return (
    <button disabled={ disabled }>{ children }</button>
  );
};

export default Button;
