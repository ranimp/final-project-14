import React from "react";
import { Default, ButtonType } from "./styles/button";
import { Link } from "react-router-dom";

export default function Button({def, type, children, onClick, href}) {
  const classNames = [ButtonType[type], Default[def]].join(" ");
  return (
    <Link to={href}>
      <button className= {classNames} onClick={onClick}>
      {children}
      </button>
    </Link>
  )
}