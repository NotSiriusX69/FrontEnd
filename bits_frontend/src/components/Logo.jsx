import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ width, height, class_name }) => {
  const classname = `${class_name} p-3`;
  return (
    <Link to="/" className={classname}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 315 303"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_8_3)">
          <path
            d="M0 0V47.6348H85.6035V272.578L116.324 302.609H275.449V254.975V178.436H227.814V254.975H133.238V178.436H227.814V130.801H133.238V47.6348H218.842V0H133.238H85.6035H0Z"
            fill="url(#paint0_linear_8_3)"
          />
          <path
            d="M242.58 116.299V163.932H290.215V140.115H266.398V116.299H242.58Z"
            fill="url(#paint1_linear_8_3)"
          />
          <path
            d="M266.397 140.114H242.58V163.932H266.397V140.114Z"
            fill="url(#paint2_linear_8_3)"
          />
          <path
            d="M314.032 116.298H290.215V140.115H314.032V116.298Z"
            fill="url(#paint3_linear_8_3)"
          />
          <path
            d="M290.215 92.4815H266.398V116.299H290.215V92.4815Z"
            fill="url(#paint4_linear_8_3)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_8_3"
            x1="8.75497"
            y1="140.115"
            x2="322.787"
            y2="140.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9D2465" />
            <stop offset="0.592138" stopColor="#7F51D2" />
            <stop offset="1" stopColor="#5151D1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_8_3"
            x1="8.755"
            y1="140.115"
            x2="322.787"
            y2="140.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9D2465" />
            <stop offset="0.592138" stopColor="#7F51D2" />
            <stop offset="1" stopColor="#5151D1" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_8_3"
            x1="8.75494"
            y1="140.115"
            x2="322.787"
            y2="140.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9D2465" />
            <stop offset="0.592138" stopColor="#7F51D2" />
            <stop offset="1" stopColor="#5151D1" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_8_3"
            x1="8.75494"
            y1="140.115"
            x2="322.787"
            y2="140.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9D2465" />
            <stop offset="0.592138" stopColor="#7F51D2" />
            <stop offset="1" stopColor="#5151D1" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_8_3"
            x1="8.75495"
            y1="140.115"
            x2="322.787"
            y2="140.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9D2465" />
            <stop offset="0.592138" stopColor="#7F51D2" />
            <stop offset="1" stopColor="#5151D1" />
          </linearGradient>
          <clipPath id="clip0_8_3">
            <rect width="314.032" height="302.609" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default Logo;
