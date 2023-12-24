import React from "react";
import Sidebar from "@/components/Sidebar";

function page() {
  return (
    <div className="flex flex-col-reverse text-sm md:flex-row">
      <Sidebar />
      <main className="min-h-screen grow">
        <main>
          <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-gray-100 bg-white px-6 py-3 lg:px-10">
            <h1 className="grow text-3xl font-medium">@keyurchitroda</h1>
            <button
              type="button"
              className="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale hover:text-accent-foreground dark:text-white dark:hover:bg-gray-50/5 hover:bg-gray-900/5 text-xl md:text-2xl h-9 w-9 md:h-10 md:w-10"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 17.5H13.5V18V20.7597C11.1569 19.8084 8.53371 18.6468 6.42834 17.04C4.12619 15.2831 2.5 13.0394 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5H14C15.9891 2.5 17.8968 3.29018 19.3033 4.6967C20.7098 6.10322 21.5 8.01088 21.5 10C21.5 11.9891 20.7098 13.8968 19.3033 15.3033C17.8968 16.7098 15.9891 17.5 14 17.5ZM12.5 18.48V16.5H14C14.8536 16.5 15.6988 16.3319 16.4874 16.0052C17.2761 15.6786 17.9926 15.1998 18.5962 14.5962C19.1998 13.9926 19.6786 13.2761 20.0052 12.4874C20.3319 11.6988 20.5 10.8536 20.5 10C20.5 9.14641 20.3319 8.30117 20.0052 7.51256C19.6786 6.72394 19.1998 6.00739 18.5962 5.40381C17.9926 4.80023 17.2761 4.32144 16.4874 3.99478C15.6988 3.66813 14.8536 3.5 14 3.5H10C8.27609 3.5 6.62279 4.18482 5.40381 5.40381C4.18482 6.62279 3.5 8.27609 3.5 10C3.5 11.9403 4.16984 13.5548 5.56354 14.9983C6.93758 16.4214 9.0067 17.6703 11.7933 18.9353L12.5 19.2561V18.48Z"
                  stroke="#1C1C22"
                />
              </svg>
            </button>
            <div
              className="flex items-center gap-1"
              id="radix-:r35:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-200">
                  KC
                </span>
              </span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fontSize={18}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </header>
          <div className="flex w-full flex-wrap items-start py-6 px-6 md:gap-6 lg:flex-nowrap lg:gap-16 lg:py-10 lg:px-10 xl:gap-24">
            <div className="top-24 w-full shrink-0 rounded-xl border border-gray-100 p-7 lg:sticky lg:w-fit lg:max-w-sm lg:basis-96">
              <div className="relative space-y-6">
                <div className="absolute -top-6 right-0">
                  <button
                    type="button"
                    className="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale hover:text-accent-foreground dark:text-white dark:hover:bg-gray-50/5 hover:bg-gray-900/5 text-sm md:text-md h-7 w-7 md:h-8 md:w-8"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.725 5.275L14.725 8.275L5.5 17.5H2.5V14.5L11.725 5.275ZM12.775 4.225L14.5 2.5L17.5 5.5L15.775 7.225L12.775 4.225Z"
                        fill="#7B7F93"
                      />
                    </svg>
                  </button>
                </div>
                <span className="relative flex shrink-0 overflow-hidden rounded-full mx-auto h-40 w-40">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-4xl">
                    K
                  </span>
                </span>
                <div className="flex justify-center gap-2">
                  <h3 className="text-center text-xl font-semibold">
                    Keyur Chitroda
                  </h3>
                </div>
                <p className="truncate text-center text-gray-400" />
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-500">SOCIAL LINKS</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale border border-input bg-transparent dark:text-white hover:bg-accent hover:text-accent-foreground text-sm md:text-md h-7 w-7 md:h-8 md:w-8 text-blue-500"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-100 px-4 py-6">
                  <div className="mb-4 flex items-center gap-1">
                    <h3 className="grow font-semibold lg:text-xl">
                      Private info
                    </h3>
                    <div className="flex items-center gap-2 rounded-full bg-white px-2 py-1 text-2xs font-medium text-gray-500">
                      <svg
                        width={10}
                        height={12}
                        viewBox="0 0 10 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 4.28571V2.87571C8.49868 2.11338 8.14478 1.38258 7.51588 0.843529C6.88698 0.304474 6.0344 0.00113362 5.145 0H4.855C3.96561 0.00113362 3.11302 0.304474 2.48412 0.843529C1.85522 1.38258 1.50132 2.11338 1.5 2.87571V4.28571C1.10218 4.28571 0.720644 4.42117 0.43934 4.66229C0.158035 4.90341 0 5.23044 0 5.57143V9.55714C0.00132191 10.2047 0.302013 10.8254 0.836206 11.2833C1.3704 11.7411 2.09454 11.9989 2.85 12H7.15C7.90546 11.9989 8.6296 11.7411 9.16379 11.2833C9.69799 10.8254 9.99868 10.2047 10 9.55714V5.57143C10 5.23044 9.84196 4.90341 9.56066 4.66229C9.27936 4.42117 8.89783 4.28571 8.5 4.28571ZM2.5 2.87572C2.5 2.34036 2.74812 1.82693 3.18976 1.44837C3.63141 1.06982 4.23042 0.857147 4.855 0.857147H5.145C5.76959 0.857147 6.36859 1.06982 6.81024 1.44837C7.25188 1.82693 7.5 2.34036 7.5 2.87572V4.28572H2.5V2.87572Z"
                          fill="#7B7F93"
                        />
                        <path
                          d="M5.5 8.02303V9.42875C5.5 9.54241 5.44732 9.65142 5.35355 9.73179C5.25979 9.81217 5.13261 9.85732 5 9.85732C4.86739 9.85732 4.74022 9.81217 4.64645 9.73179C4.55268 9.65142 4.5 9.54241 4.5 9.42875V8.02303C4.30936 7.92869 4.16036 7.78306 4.07612 7.60874C3.99188 7.43442 3.9771 7.24114 4.03407 7.05888C4.09105 6.87662 4.21659 6.71557 4.39124 6.60071C4.56588 6.48584 4.77987 6.42358 5 6.42358C5.22013 6.42358 5.43412 6.48584 5.60876 6.60071C5.78341 6.71557 5.90895 6.87662 5.96593 7.05888C6.0229 7.24114 6.00812 7.43442 5.92388 7.60874C5.83964 7.78306 5.69064 7.92869 5.5 8.02303Z"
                          fill="#7B7F93"
                        />
                      </svg>
                      <p>Only visible to you</p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale hover:text-accent-foreground dark:text-white dark:hover:bg-gray-50/5 hover:bg-gray-900/5 text-sm md:text-md h-7 w-7 md:h-8 md:w-8"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.725 5.275L14.725 8.275L5.5 17.5H2.5V14.5L11.725 5.275ZM12.775 4.225L14.5 2.5L17.5 5.5L15.775 7.225L12.775 4.225Z"
                          fill="#7B7F93"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <p>Gender</p>
                      <p className="font-medium text-gray-500">
                        <a className="cursor-pointer hover:underline">Add</a>
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Phone</p>
                      <p className="font-medium text-gray-500">
                        <a className="cursor-pointer hover:underline">Add</a>
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Year of birth</p>
                      <p className="font-medium text-gray-500">
                        <a className="cursor-pointer hover:underline">Add</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="mb-10 mt-10 grid grid-cols-2 gap-3 md:mt-0 md:grid-cols-3 xl:grid-cols-4">
                <div className="flex cursor-pointer flex-col justify-around gap-3 rounded-lg border p-3 text-left">
                  <div className="mx-auto flex w-auto justify-center rounded-md p-3 bg-yellow-300">
                    <svg
                      width={21}
                      height={20}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1673 1.66699C5.56149 1.66699 1.83398 5.39408 1.83398 10.0003C1.83398 14.6061 5.56107 18.3337 10.1673 18.3337C14.7731 18.3337 18.5007 14.6066 18.5007 10.0003C18.5007 5.39456 14.7736 1.66699 10.1673 1.66699ZM10.1673 17.1709C6.21348 17.1709 2.99678 13.9542 2.99678 10.0003C2.99678 6.04645 6.21348 2.82979 10.1673 2.82979C14.1212 2.82979 17.3379 6.04645 17.3379 10.0003C17.3379 13.9542 14.1212 17.1709 10.1673 17.1709Z"
                        fill="#101114"
                      />
                      <path
                        d="M10.1669 8.33594C9.57453 8.33594 9.15332 8.58609 9.15332 8.95465V13.9697C9.15332 14.2857 9.57453 14.6015 10.1669 14.6015C10.7329 14.6015 11.1936 14.2857 11.1936 13.9697V8.95457C11.1936 8.58605 10.7329 8.33594 10.1669 8.33594Z"
                        fill="#101114"
                      />
                      <path
                        d="M10.1672 5.24219C9.56172 5.24219 9.08789 5.67656 9.08789 6.17676C9.08789 6.67699 9.56176 7.12453 10.1672 7.12453C10.7596 7.12453 11.2335 6.67699 11.2335 6.17676C11.2335 5.67656 10.7595 5.24219 10.1672 5.24219Z"
                        fill="#101114"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-sm font-semibold text-gray-600">
                      Personal Information
                    </h1>
                    <p className="text-2xs font-normal text-gray-400">
                      Headline, about you, and location
                    </p>
                  </div>
                  <p className="text-2xs font-normal text-gray-600">
                    1/5 completed -&gt;
                  </p>
                </div>
                <div className="flex cursor-pointer flex-col justify-around gap-3 rounded-lg border p-3 text-left">
                  <div className="mx-auto flex w-auto justify-center rounded-md p-3 bg-blue-300">
                    <svg
                      width={21}
                      height={20}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.25001 6.01167C4.25001 7.26128 5.26305 8.27432 6.5127 8.27432C7.76235 8.27432 8.77539 7.26128 8.77539 6.01167C8.77539 4.76206 7.76235 3.74902 6.5127 3.74902C5.26305 3.74902 4.25001 4.76206 4.25001 6.01167ZM6.5127 2.49902C4.57271 2.49902 3 4.07169 3 6.01167C3 7.95165 4.57271 9.52432 6.5127 9.52432C8.45269 9.52432 10.0254 7.95165 10.0254 6.01167C10.0254 4.07169 8.45269 2.49902 6.5127 2.49902Z"
                        fill="#373943"
                      />
                      <path
                        d="M10.9748 3.55387C10.9748 2.9713 11.4471 2.49902 12.0297 2.49902H15.8905C17.0557 2.49902 18.0002 3.44357 18.0002 4.60872V8.46947C18.0002 9.05204 17.5279 9.52432 16.9454 9.52432H11.5022C11.211 9.52432 10.9748 9.28818 10.9748 8.99689V3.55387Z"
                        fill="#373943"
                      />
                      <path
                        d="M10.9748 11.0026C10.9748 10.7114 11.211 10.4752 11.5022 10.4752H16.9454C17.5279 10.4752 18.0002 10.9475 18.0002 11.5301V15.3908C18.0002 16.556 17.0557 17.5005 15.8905 17.5005H12.0297C11.4471 17.5005 10.9748 17.0282 10.9748 16.4457V11.0026Z"
                        fill="#373943"
                      />
                      <path
                        d="M3 11.5301C3 10.9475 3.47228 10.4752 4.05486 10.4752H9.49797C9.78926 10.4752 10.0254 10.7114 10.0254 11.0026V16.4457C10.0254 17.0282 9.55313 17.5005 8.97054 17.5005H5.10971C3.94455 17.5005 3 16.556 3 15.3908V11.5301Z"
                        fill="#373943"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-sm font-semibold text-gray-600">
                      Work
                    </h1>
                    <p className="text-2xs font-normal text-gray-400">
                      Add skills and your proof of work
                    </p>
                  </div>
                  <p className="text-2xs font-normal text-gray-600">
                    0/2 completed -&gt;
                  </p>
                </div>
                <div className="flex cursor-pointer flex-col justify-around gap-3 rounded-lg border p-3 text-left">
                  <div className="mx-auto flex w-auto justify-center rounded-md p-3 bg-green-300">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_5967_5381)">
                        <path
                          d="M7.52637 2.35938L0.776367 5.95937L7.52637 9.55937L14.2764 5.95937L7.52637 2.35938Z"
                          stroke="#101114"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.47607 7.39844V10.4584C3.47607 11.4484 5.27607 12.7084 7.52607 12.7084C9.77607 12.7084 11.5761 11.4484 11.5761 10.4584V7.39844"
                          stroke="#101114"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.2764 5.95703V11.807"
                          stroke="#101114"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5967_5381">
                          <rect
                            width="14.4"
                            height="14.4"
                            fill="white"
                            transform="translate(0.326172 0.558594)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-sm font-semibold text-gray-600">
                      Education
                    </h1>
                    <p className="text-2xs font-normal text-gray-400">
                      Add college/school name
                    </p>
                  </div>
                  <p className="text-2xs font-normal text-gray-600">
                    0/2 completed -&gt;
                  </p>
                </div>
              </div>
              <div className="mb-10">
                <div className="mb-7 flex items-center justify-between">
                  <h3 className="font-medium">PROOF OF WORK</h3>
                </div>
                <div className="flex gap-6 rounded-lg border p-4">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.749 30.0593C18.749 36.3074 23.8142 41.3725 30.0624 41.3725C36.3106 41.3725 41.3758 36.3074 41.3758 30.0593C41.3758 23.8113 36.3106 18.7461 30.0624 18.7461C23.8142 18.7461 18.749 23.8113 18.749 30.0593ZM30.0624 12.4961C20.3625 12.4961 12.499 20.3594 12.499 30.0593C12.499 39.7592 20.3625 47.6225 30.0624 47.6225C39.7623 47.6225 47.6258 39.7592 47.6258 30.0593C47.6258 20.3594 39.7623 12.4961 30.0624 12.4961Z"
                      fill="#E0E1E6"
                    />
                    <path
                      d="M52.3728 17.7703C52.3728 14.8575 54.7342 12.4961 57.6471 12.4961H76.9511C82.7769 12.4961 87.4996 17.2188 87.4996 23.0446V42.3483C87.4996 45.2612 85.1382 47.6225 82.2253 47.6225H55.0099C53.5535 47.6225 52.3728 46.4419 52.3728 44.9854V17.7703Z"
                      fill="#E0E1E6"
                    />
                    <path
                      d="M52.3728 55.0142C52.3728 53.5577 53.5535 52.3771 55.0099 52.3771H82.2253C85.1382 52.3771 87.4996 54.7384 87.4996 57.6513V76.955C87.4996 82.7808 82.7768 87.5035 76.9511 87.5035H57.6471C54.7342 87.5035 52.3728 85.1422 52.3728 82.2293V55.0142Z"
                      fill="#E0E1E6"
                    />
                    <path
                      d="M12.499 57.6513C12.499 54.7384 14.8604 52.3771 17.7733 52.3771H44.9887C46.4451 52.3771 47.6258 53.5577 47.6258 55.0142V82.2293C47.6258 85.1422 45.2644 87.5035 42.3515 87.5035H23.0475C17.2217 87.5035 12.499 82.7808 12.499 76.955V57.6513Z"
                      fill="#E0E1E6"
                    />
                  </svg>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-sm font-semibold text-gray-800">
                      Add your Proof of Work
                    </h2>
                    <p className="text-sm font-normal text-gray-600">
                      Adding Proof of Work increases your visibility in the
                      community and your chances of getting hired
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale bg-primary text-primary-foreground hover:bg-opacity-60 text-xs px-3 md:px-4 py-1.5 md:py-2 w-fit"
                    >
                      Add PoW{" "}
                      <svg
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.49902 7.5H10.499"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.99902 11V4"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border p-5">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.25613"
                      y="0.703393"
                      width="37.9887"
                      height="37.9887"
                      rx="18.9944"
                      fill="#F0F2FF"
                    />
                    <path
                      d="M10.4014 19.6982H30.0991"
                      stroke="#BFC7FC"
                      strokeWidth="2.46222"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.251 29.5464V9.84863"
                      stroke="#BFC7FC"
                      strokeWidth="2.46222"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="1.25613"
                      y="0.703393"
                      width="37.9887"
                      height="37.9887"
                      rx="18.9944"
                      stroke="#BFC7FC"
                      strokeWidth="1.40679"
                    />
                  </svg>
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">
                      Add your headline
                    </h2>
                    <p className="text-sm font-normal text-gray-600">
                      Explain yourself in one line. Make it clickbaity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}

export default page;
