"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      setIsHovered(!isHovered);
    }
  };

  const firstStyle = {
    opacity: 0,
    width: "0px",
    transform: "translateX(-24px) scaleX(0) translateZ(0px)",
    transformOrigin: "left 50% 0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    overflow: "visible",
  };

  const secondStyle = {
    opacity: 1,
    width: "156px",
    transform: "none",
    transformOrigin: "left 50% 0px",
    paddingLeft: "12px",
    paddingRight: "12px",
    overflow: "hidden",
  };

  const pathname = usePathname();

  // const isMobile =
  //   /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   );

  return (
    <aside
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="sticky group bottom-0 left-0 z-30 h-18 sm:hover:w-52 shrink-0 transition duration-1000 md:top-0 md:h-screen md:w-24 "
    >
      <div className=" flex w-full flex-row justify-center gap-1.5 bg-gray-100 px-3 py-4 md:h-full md:w-auto md:flex-col md:justify-between md:p-6 ">
        <a className="relative flex items-center" href="/">
          <div className="z-10 hidden h-10 w-10 sm:block md:h-12 md:w-12">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="5.25" fill="#5169F6"></rect>
              <path
                d="M15.959 21.05c.55-.76 1.301-1.377 2.251-1.852.97-.494 2.043-.741 3.22-.741 1.388 0 2.642.332 3.763.997 1.12.665 2.004 1.615 2.65 2.85.646 1.216.97 2.613.97 4.19 0 1.577-.324 2.992-.97 4.246-.646 1.235-1.539 2.204-2.679 2.907-1.12.684-2.365 1.026-3.733 1.026-1.216 0-2.3-.237-3.25-.712-.93-.475-1.671-1.083-2.222-1.824v2.28h-3.25v-21.09h3.25v7.723Zm9.547 5.444c0-1.083-.228-2.014-.684-2.793-.437-.798-1.026-1.397-1.767-1.796a4.586 4.586 0 0 0-2.337-.627c-.817 0-1.596.21-2.337.627-.722.418-1.31 1.026-1.767 1.824-.437.798-.655 1.739-.655 2.822s.218 2.033.655 2.85c.456.798 1.045 1.406 1.767 1.824.741.418 1.52.627 2.337.627.836 0 1.615-.21 2.337-.627.741-.437 1.33-1.064 1.767-1.881.456-.817.684-1.767.684-2.85ZM35.274 13.327v21.09h-3.249v-21.09h3.25Z"
                fill="#FBFBFE"
              ></path>
            </svg>
          </div>
          <div
            className="hidden md:block"
            style={{
              opacity: 0,
              width: "0px",
              transform: "translateX(-40px) scaleX(0) translateZ(0px)",
              transformOrigin: "left 50% 0px",
              paddingLeft: "0px",
              paddingRight: "0px",
              overflow: "visible",
            }}
          >
            <svg
              width="131"
              height="22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.25 8.05C3.8 7.29 4.55 6.672 5.5 6.197c.97-.494 2.043-.741 3.221-.741 1.388 0 2.642.332 3.763.997 1.121.666 2.005 1.616 2.651 2.85.646 1.217.97 2.614.97 4.191s-.324 2.993-.97 4.247c-.646 1.236-1.54 2.205-2.68 2.908-1.12.684-2.365 1.026-3.734 1.026-1.216 0-2.299-.238-3.25-.713-.93-.475-1.671-1.083-2.222-1.824v2.28H0V.325h3.25V8.05Zm9.549 5.444c0-1.083-.228-2.014-.684-2.793-.438-.798-1.027-1.397-1.768-1.796a4.586 4.586 0 0 0-2.337-.627c-.817 0-1.596.209-2.338.627-.722.418-1.31 1.026-1.767 1.824-.437.798-.655 1.739-.655 2.822s.218 2.034.655 2.85c.456.799 1.045 1.407 1.767 1.825.742.418 1.52.627 2.338.627.836 0 1.615-.209 2.337-.627.741-.437 1.33-1.064 1.768-1.881.456-.818.684-1.768.684-2.85ZM22.283.325v21.093h-3.25V.325h3.25ZM40.488 5.712v15.706h-3.25v-1.852c-.512.646-1.187 1.159-2.023 1.539a6.417 6.417 0 0 1-2.623.541c-1.235 0-2.346-.256-3.335-.77-.969-.512-1.738-1.272-2.309-2.28-.55-1.007-.826-2.223-.826-3.648V5.712h3.22v8.751c0 1.407.352 2.49 1.056 3.25.703.74 1.662 1.111 2.878 1.111 1.217 0 2.176-.37 2.88-1.111.722-.76 1.083-1.844 1.083-3.25v-8.75h3.25ZM58.886 13.18c0 .59-.039 1.122-.114 1.597H46.77c.095 1.254.56 2.261 1.397 3.021.836.76 1.862 1.14 3.078 1.14 1.749 0 2.984-.731 3.706-2.194h3.506c-.475 1.444-1.34 2.632-2.594 3.563-1.235.912-2.774 1.368-4.618 1.368-1.501 0-2.85-.333-4.047-.998a7.456 7.456 0 0 1-2.794-2.85c-.665-1.235-.998-2.66-.998-4.276 0-1.615.324-3.03.97-4.247.665-1.235 1.586-2.185 2.765-2.85 1.197-.666 2.565-.998 4.104-.998 1.482 0 2.803.323 3.962.969a6.824 6.824 0 0 1 2.708 2.736c.647 1.16.97 2.5.97 4.02Zm-3.393-1.026c-.019-1.197-.446-2.156-1.282-2.879-.836-.722-1.872-1.083-3.107-1.083-1.121 0-2.081.361-2.88 1.083-.797.704-1.272 1.663-1.424 2.88h8.694ZM65.048.325v21.093h-3.25V.325h3.25ZM83.424 13.18c0 .59-.038 1.122-.114 1.597h-12c.095 1.254.56 2.261 1.396 3.021.836.76 1.863 1.14 3.079 1.14 1.748 0 2.983-.731 3.705-2.194h3.507c-.476 1.444-1.34 2.632-2.594 3.563-1.236.912-2.775 1.368-4.618 1.368-1.501 0-2.85-.333-4.048-.998a7.456 7.456 0 0 1-2.793-2.85c-.665-1.235-.998-2.66-.998-4.276 0-1.615.323-3.03.97-4.247.664-1.235 1.586-2.185 2.764-2.85 1.197-.666 2.566-.998 4.105-.998 1.482 0 2.803.323 3.962.969a6.824 6.824 0 0 1 2.708 2.736c.646 1.16.969 2.5.969 4.02Zm-3.392-1.026c-.019-1.197-.447-2.156-1.283-2.879-.836-.722-1.871-1.083-3.107-1.083-1.12 0-2.08.361-2.879 1.083-.798.704-1.273 1.663-1.425 2.88h8.694ZM85.254 13.494c0-1.577.323-2.974.969-4.19.665-1.216 1.558-2.157 2.68-2.822a7.176 7.176 0 0 1 3.762-1.026c1.235 0 2.309.247 3.22.74.932.476 1.673 1.075 2.224 1.797v-2.28h3.278v15.705h-3.278v-2.337c-.55.741-1.301 1.359-2.252 1.853-.95.494-2.033.741-3.25.741a6.978 6.978 0 0 1-3.705-1.026c-1.12-.703-2.014-1.672-2.68-2.908-.645-1.254-.968-2.67-.968-4.247Zm12.855.057c0-1.083-.228-2.024-.684-2.822-.437-.798-1.016-1.406-1.739-1.824a4.586 4.586 0 0 0-2.337-.627c-.836 0-1.615.209-2.337.627-.722.399-1.312.998-1.768 1.796-.437.779-.655 1.71-.655 2.793 0 1.083.218 2.033.655 2.85.456.818 1.046 1.445 1.768 1.882.74.418 1.52.627 2.337.627.836 0 1.615-.209 2.337-.627.722-.418 1.302-1.026 1.74-1.824.455-.818.683-1.768.683-2.85ZM108.62 7.993a5.026 5.026 0 0 1 1.881-1.853c.798-.456 1.739-.684 2.822-.684v3.363h-.826c-1.274 0-2.243.323-2.908.97-.646.646-.969 1.767-.969 3.363v8.266h-3.25V5.712h3.25v2.28ZM123.949 5.456c1.236 0 2.338.256 3.307.77.988.513 1.758 1.273 2.309 2.28.551 1.007.826 2.223.826 3.648v9.264h-3.221V12.64c0-1.406-.351-2.48-1.054-3.221-.703-.76-1.663-1.14-2.879-1.14s-2.186.38-2.908 1.14c-.703.741-1.054 1.815-1.054 3.221v8.78h-3.25V5.711h3.25v1.796a5.396 5.396 0 0 1 2.024-1.51 6.612 6.612 0 0 1 2.65-.542Z"
                fill="#1C1C22"
              ></path>
            </svg>
          </div>
        </a>
        <div className="flex flex-row gap-1.5 md:flex-col md:gap-4">
          <Link
            href="/work"
            // className="relative flex cursor-pointer items-center rounded-lg p-2 font-medium text-gray-700 transition duration-200 hover:bg-blue-100 md:p-3 bg-blue-100"
            className={`relative flex cursor-pointer items-center rounded-lg p-2 font-medium text-gray-700 transition duration-200 md:p-3 ${
              pathname === "/work" ? "bg-blue-100" : "" // Apply the blue background conditionally
            } ${
              pathname === "/work" ? "hover:bg-blue-100" : "hover:bg-blue-200" // Apply hover effect conditionally
            }`}
          >
            <div className="z-10" style={{ opacity: 1 }}>
              {pathname === "/work" ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    fill="#5169F6"
                    stroke="#5169F6"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7V4C16 3.88213 15.7893 3.21352 15.4142 3.13017C15.0391 3.04683 14.5304 3 14 3H10C9.46957 3 8.96086 3.04683 8.58579 3.13017C8.21071 3.21352 8 3.88213 8 4V7"
                    stroke="#5169F6"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.666 6.33398H3.33268C2.41221 6.33398 1.66602 7.08018 1.66602 8.00065V16.334C1.66602 17.2545 2.41221 18.0007 3.33268 18.0007H16.666C17.5865 18.0007 18.3327 17.2545 18.3327 16.334V8.00065C18.3327 7.08018 17.5865 6.33398 16.666 6.33398Z"
                    stroke="#373943"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.3327 6.33333V3.83333C13.3327 3.73511 13.1571 3.17794 12.8445 3.10848C12.532 3.03902 12.108 3 11.666 3H8.33268C7.89065 3 7.46673 3.03902 7.15417 3.10848C6.84161 3.17794 6.66602 3.73511 6.66602 3.83333V6.33333"
                    stroke="#373943"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              )}
            </div>
            <div
              className="whitespace-nowrap"
              style={isHovered ? secondStyle : firstStyle}
            >
              Work
            </div>
          </Link>
          <Link
            href="/project"
            // className="relative flex cursor-pointer items-center rounded-lg p-2 font-medium text-gray-700 transition duration-200 hover:bg-blue-100 md:p-3"
            className={`relative flex cursor-pointer items-center rounded-lg p-2 font-medium text-gray-700 transition duration-200 md:p-3 ${
              pathname === "/project" ? "bg-blue-100" : "" // Apply the blue background conditionally
            } ${
              pathname === "/project"
                ? "hover:bg-blue-100"
                : "hover:bg-blue-200" // Apply hover effect conditionally
            }`}
          >
            <div className="z-10" style={{ opacity: 1 }}>
              {pathname !== "/project" ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.21521 4.49902C5.71564 4.49902 4.5 5.71467 4.5 7.2142C4.5 8.71373 5.71564 9.92937 7.21521 9.92937C8.71478 9.92937 9.93042 8.71373 9.93042 7.2142C9.93042 5.71467 8.71478 4.49902 7.21521 4.49902ZM11.0697 5.5055C10.4141 4.02888 8.93493 2.99902 7.21521 2.99902C4.88723 2.99902 3 4.88622 3 7.2142C3 8.93548 4.03175 10.4158 5.51054 11.0705C6.03176 11.3012 6.60852 11.4294 7.21521 11.4294C7.8219 11.4294 8.39866 11.3012 8.91988 11.0705C9.87611 10.6471 10.6454 9.87859 11.0697 8.92289C11.3016 8.40062 11.4304 7.82245 11.4304 7.2142C11.4304 6.60594 11.3016 6.02778 11.0697 5.5055ZM4.26582 12.5705C3.56673 12.5705 3 13.1372 3 13.8363V18.4692C3 19.8674 4.13345 21.0008 5.53164 21.0008H10.1646C10.5778 21.0008 10.9448 20.8028 11.1759 20.4965C11.3357 20.2846 11.4304 20.0208 11.4304 19.735V13.2034C11.4304 12.9788 11.3135 12.7816 11.1371 12.6692C11.039 12.6067 10.9225 12.5705 10.7975 12.5705H4.26582ZM12.6694 12.8622C12.6063 12.9606 12.5697 13.0777 12.5697 13.2034V19.735C12.5697 20.0208 12.6645 20.2846 12.8243 20.4965C13.0553 20.8028 13.4223 21.0008 13.8355 21.0008H18.4685C19.8667 21.0008 21.0001 19.8674 21.0001 18.4692V13.8363C21.0001 13.4223 20.8014 13.0547 20.4941 12.8237C20.2825 12.6647 20.0194 12.5705 19.7343 12.5705H13.2026C13.0776 12.5705 12.9611 12.6067 12.863 12.6692C12.7853 12.7187 12.7192 12.7847 12.6694 12.8622ZM12.6694 11.1376C12.782 11.3131 12.9787 11.4294 13.2026 11.4294H19.7343C20.0194 11.4294 20.2825 11.3351 20.4941 11.1761C20.8014 10.9452 21.0001 10.5776 21.0001 10.1636V5.53066C21.0001 4.13248 19.8667 2.99902 18.4685 2.99902H13.8355C13.1364 2.99902 12.5697 3.56575 12.5697 4.26484V10.7965C12.5697 10.9221 12.6063 11.0392 12.6694 11.1376ZM14.0697 4.49902V9.92937H19.5001V5.53066C19.5001 4.9609 19.0383 4.49902 18.4685 4.49902H14.0697ZM14.0697 14.0705V19.5008H18.4685C19.0383 19.5008 19.5001 19.0389 19.5001 18.4692V14.0705H14.0697ZM4.5 14.0705V18.4692C4.5 19.0389 4.96188 19.5008 5.53164 19.5008H9.93042V14.0705H4.5Z"
                    fill="#373943"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 7.2142C4.5 8.71373 5.71564 9.92937 7.21521 9.92937C8.71478 9.92937 9.93042 8.71373 9.93042 7.2142C9.93042 5.71467 8.71478 4.49902 7.21521 4.49902C5.71564 4.49902 4.5 5.71467 4.5 7.2142ZM7.21521 2.99902C4.88723 2.99902 3 4.88622 3 7.2142C3 9.54217 4.88723 11.4294 7.21521 11.4294C9.54319 11.4294 11.4304 9.54217 11.4304 7.2142C11.4304 4.88622 9.54319 2.99902 7.21521 2.99902Z"
                    fill="#5169F6"
                  ></path>
                  <path
                    d="M12.5697 4.26484C12.5697 3.56575 13.1364 2.99902 13.8355 2.99902H18.4685C19.8667 2.99902 21.0001 4.13248 21.0001 5.53066V10.1636C21.0001 10.8626 20.4334 11.4294 19.7343 11.4294H13.2026C12.8531 11.4294 12.5697 11.146 12.5697 10.7965V4.26484Z"
                    fill="#5169F6"
                  ></path>
                  <path
                    d="M12.5697 13.2034C12.5697 12.8538 12.8531 12.5705 13.2026 12.5705H19.7343C20.4334 12.5705 21.0001 13.1372 21.0001 13.8363V18.4692C21.0001 19.8674 19.8667 21.0008 18.4685 21.0008H13.8355C13.1364 21.0008 12.5697 20.4341 12.5697 19.735V13.2034Z"
                    fill="#5169F6"
                  ></path>
                  <path
                    d="M3 13.8363C3 13.1372 3.56673 12.5705 4.26582 12.5705H10.7975C11.1471 12.5705 11.4304 12.8538 11.4304 13.2034V19.735C11.4304 20.4341 10.8637 21.0008 10.1646 21.0008H5.53164C4.13345 21.0008 3 19.8674 3 18.4692V13.8363Z"
                    fill="#5169F6"
                  ></path>
                </svg>
              )}
            </div>
            <div
              className="whitespace-nowrap"
              style={isHovered ? secondStyle : firstStyle}
            >
              Projects
            </div>
          </Link>
          <Link
            href="/profile"
            // className="relative flex cursor-pointer items-center rounded-lg p-2 font-medium text-gray-700 transition duration-200 hover:bg-blue-100 md:p-3"
            className={`relative flex cursor-pointer items-center rounded-lg p-2 font-medium text-gray-700 transition duration-200 md:p-3 ${
              pathname === "/profile" ? "bg-blue-100" : "" // Apply the blue background conditionally
            } ${
              pathname === "/profile"
                ? "hover:bg-blue-100"
                : "hover:bg-blue-200" // Apply hover effect conditionally
            }`}
          >
            <div className="z-10" style={{ opacity: 1 }}>
              {pathname !== "/profile" ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1585 18.8334C17.1585 15.6084 13.9501 13.0001 10.0001 13.0001C6.05013 13.0001 2.8418 15.6084 2.8418 18.8334M10.0002 10.5001C12.3014 10.5001 14.1669 8.6346 14.1669 6.33341C14.1669 4.03223 12.3014 2.16675 10.0002 2.16675C7.69902 2.16675 5.83354 4.03223 5.83354 6.33341C5.83354 8.6346 7.69902 10.5001 10.0002 10.5001Z"
                    stroke="#373943"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 21"
                  fill="#5169F6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1585 18.8334C17.1585 15.6084 13.9501 13.0001 10.0001 13.0001C6.05013 13.0001 2.8418 15.6084 2.8418 18.8334M10.0002 10.5001C12.3014 10.5001 14.1669 8.6346 14.1669 6.33341C14.1669 4.03223 12.3014 2.16675 10.0002 2.16675C7.69902 2.16675 5.83354 4.03223 5.83354 6.33341C5.83354 8.6346 7.69902 10.5001 10.0002 10.5001Z"
                    stroke="#5169F6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              )}
            </div>
            <div
              // className="opacity-0 w-0 transform translate-x-[-24px] scale-x-0 translate-z-0 transform-origin-left-50% py-0 px-0 overflow-visible mx-sm:opacity-0 mx-sm:w-0 mx-sm:transform mx-sm:translate-x-[-24px] mx-sm:scale-x-0 mx-sm:translate-z-0 mx-sm:transform-origin-left-50% mx-sm:py-0 mx-sm:px-0 mx-sm:overflow-visible"
              // className={`whitespace-nowrap transition-all ${
              //   isHovered
              //     ? "mx-sm:opacity-1 mx-sm:w-156 mx-sm:transform-none mx-sm:origin-left-50 mx-sm:pl-12 mx-sm:mx-sm:pr-12 mx-sm:overflow-hidden"
              //     : "opacity-0 w-0 transform translate-x-[-24px] scale-x-0 translate-z-0 transform-origin-left-50% py-0 px-0 overflow-visible"
              // }`}
              // style={{
              //   opacity: 0,
              //   width: "0px",
              //   transform: "translateX(-24px) scaleX(0) translateZ(0px)",
              //   transformOrigin: "left 50% 0px",
              //   paddingLeft: "0px",
              //   paddingRight: "0px",
              //   overflow: "visible",
              // }}
              style={isHovered ? secondStyle : firstStyle}
            >
              Profile
            </div>
          </Link>
          <div className="relative flex cursor-pointer items-center rounded-lg p-2 font-medium text-gray-700 transition duration-200 hover:bg-blue-100 md:p-3">
            <div className="z-10" style={{ opacity: 1 }}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.5L10.9886 5.13637L14.625 7.125L10.9886 9.11362L9 12.75L7.01138 9.11362L3.375 7.125L7.01138 5.13637L9 1.5Z"
                  fill="#F9BE19"
                />
                <path
                  d="M16.875 10.875L18.201 13.299L20.625 14.625L18.201 15.951L16.875 18.375L15.549 15.951L13.125 14.625L15.549 13.299L16.875 10.875Z"
                  fill="#F9BE19"
                />
                <path
                  d="M9 18.75L9.663 19.962L10.875 20.625L9.663 21.288L9 22.5L8.337 21.288L7.125 20.625L8.337 19.962L9 18.75Z"
                  fill="#F9BE19"
                />
              </svg>
            </div>
            <div
              className="whitespace-nowrap"
              style={isHovered ? secondStyle : firstStyle}
            >
              Coming soon
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </aside>
  );
};

export default Sidebar;
