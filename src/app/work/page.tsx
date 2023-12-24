import Sidebar from "@/components/Sidebar";
import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col-reverse text-sm md:flex-row">
      <Sidebar />
      <main className="min-h-screen grow">
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-gray-100 bg-white px-6 py-3 lg:px-10">
          <h1 className="grow text-3xl font-medium">Work</h1>
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
            id="radix-:rh:"
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
        <div className="space-y-6 p-10">
          <p className="text-md font-semibold text-gray-700">
            Trending gigs on bluelearn
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 transition duration-300 bg-transparent border-b focus-within:border-blue-200">
              <div className="p-2 text-lg text-gray-500">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1484 13.9688C16.8516 12.8625 17.2641 11.55 17.2641 10.1391C17.2641 6.19688 14.0719 3 10.1344 3C6.19219 3 3 6.19688 3 10.1391C3 14.0813 6.19219 17.2781 10.1297 17.2781C11.5594 17.2781 12.8906 16.8563 14.0062 16.1344L14.3297 15.9094L19.4203 21L21 19.3922L15.9141 14.3016L16.1484 13.9688ZM14.1281 6.15C15.1922 7.21406 15.7781 8.62969 15.7781 10.1344C15.7781 11.6391 15.1922 13.0547 14.1281 14.1188C13.0641 15.1828 11.6484 15.7687 10.1437 15.7687C8.63906 15.7687 7.22344 15.1828 6.15937 14.1188C5.09531 13.0547 4.50937 11.6391 4.50937 10.1344C4.50937 8.62969 5.09531 7.21406 6.15937 6.15C7.22344 5.08594 8.63906 4.5 10.1437 4.5C11.6484 4.5 13.0641 5.08594 14.1281 6.15Z"
                    fill="#7B7F93"
                  />
                </svg>
              </div>
              <input
                className="flex h-10 w-full bg-transparent py-3 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search gigs"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid xl:grid-cols-3">
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://api.dicebear.com/6.x/avataaars/png?accessoriesProbability=40&mouth=default%2Cgrimace%2Csmile%2Ctongue%2Ctwinkle&eyebrows=default%2CdefaultNatural%2CflatNatural%2CraisedExcited%2CraisedExcitedNatural%2CupDown%2CupDownNatural&skinColor=ae5d29%2Cd08b5b%2Cedb98a%2Cf8d25c%2Cfd9841%2Cffdbb4&accessories=eyepatch%2Ckurt%2Cprescription01%2Cround%2Csunglasses&eyes=closed%2Cdefault%2CeyeRoll%2Chappy&seed=229683-3-24&backgroundColor=8695FA&facialHairProbability=0&tops=bigHair%2Cbob%2Cbun%2Ccurly%2Ccurvy%2Cdreads%2Cfrida%2CfroBand%2ClongButNotTooLong%2CmiaWallace%2CshaggyMullet%2CshavedSides%2Cstraight01%2Cstraight02%2CstraightAndStrand"
                  />
                </span>
                <p className="grow text-xs text-gray-500">Babai Das</p>
                <p className="text-xs text-gray-500">26 minutes ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">
                    Front-end developer intern
                  </p>
                  <p className="text-xs text-gray-500">Babai Das</p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/OTHER/companylogo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹8000 - ₹10000/month
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Intern
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://files.bluelearn.in/STUDENT_PROFILE/158800/2023-12-22T22%3A26%3A20%2B00%3A00-Group%203338.png"
                  />
                </span>
                <p className="grow text-xs text-gray-500">Wellscribe </p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">
                    Full stack developer for my startup
                  </p>
                  <p className="text-xs text-gray-500">Slogan</p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/COMPANIES/Wellscribe/2023-12-23T17%3A17%3A40%2B00%3A00-Group%20289537.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹250000 - ₹300000/year
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Full-time
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/a/ACg8ocLcU1fu2qoWAEQGBeZJ1JtIdc5pROiSByCs2vnZ7SK-=s96-c"
                  />
                </span>
                <p className="grow text-xs text-gray-500">Vikas Dhayal</p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">Video editor</p>
                  <p className="text-xs text-gray-500">Kluster</p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/OTHER/companylogo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹5000 - ₹10000/project
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Freelancer
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://files.bluelearn.in/STUDENT_PROFILE/174678/2023-07-26T06%3A12%3A34%2B00%3A00-IMG_0172.JPG"
                  />
                </span>
                <p className="grow text-xs text-gray-500">Ameer Sohail</p>
                <p className="text-xs text-gray-500">a day ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">
                    Web dev - Frontend developer
                  </p>
                  <p className="text-xs text-gray-500">SANCHEZZ CREATIONS</p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/COMPANIES/SANCHEZZ_CREATIONS/2023-12-23T02%3A57%3A42%2B00%3A00-IMG_2851.PNG"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹15000 - ₹30000/project
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Freelancer
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://files.bluelearn.in/STUDENT_PROFILE/174678/2023-07-26T06%3A12%3A34%2B00%3A00-IMG_0172.JPG"
                  />
                </span>
                <p className="grow text-xs text-gray-500">Ameer Sohail</p>
                <p className="text-xs text-gray-500">a day ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">
                    Backend Developer - With strong knowledge in node and react.
                  </p>
                  <p className="text-xs text-gray-500">SANCHEZZ CREATIONS</p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/COMPANIES/SANCHEZZ_CREATIONS/2023-12-23T02%3A57%3A42%2B00%3A00-IMG_2851.PNG"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹15000 - ₹100000/project
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Freelancer
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/a/ACg8ocKz27MH6RTWwRJ3AyeHNi5jzEqREYnP08HwWjWNkReUMSH_=s96-c"
                  />
                </span>
                <p className="grow text-xs text-gray-500">
                  Sourabh Kumar Singh
                </p>
                <p className="text-xs text-gray-500">a day ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">
                    Video editor for IG Reels and YT Shorts
                  </p>
                  <p className="text-xs text-gray-500">Sourabh Kumar Singh</p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/OTHER/companylogo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹6000 - ₹10000/month
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Freelancer
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/a/ACg8ocKz27MH6RTWwRJ3AyeHNi5jzEqREYnP08HwWjWNkReUMSH_=s96-c"
                  />
                </span>
                <p className="grow text-xs text-gray-500">
                  Sourabh Kumar Singh
                </p>
                <p className="text-xs text-gray-500">a day ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">
                    Video editor for IG Reels, YT Shorts and more
                  </p>
                  <p className="text-xs text-gray-500">Sourabh Kumar Singh</p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/OTHER/companylogo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹6000 - ₹10000/month
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Intern
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://files.bluelearn.in/STUDENT_PROFILE/142771/2023-03-29T17%3A01%3A46%2B00%3A00-Shiva-profile-image"
                  />
                </span>
                <p className="grow text-xs text-gray-500">Shiva Sharma</p>
                <p className="text-xs text-gray-500">a day ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">
                    Sales and Marketing Intern [SaaS]
                  </p>
                  <p className="text-xs text-gray-500">
                    MiBi Services Pvt Ltd{" "}
                  </p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/OTHER/companylogo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹10000 - ₹15000/month
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Intern
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
            <div className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border border-gray-100 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src="https://files.bluelearn.in/STUDENT_PROFILE/131271/2023-08-06T22%3A08%3A13%2B00%3A00-IMG_2180.PNG"
                  />
                </span>
                <p className="grow text-xs text-gray-500">Lancer X</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
              <div className="flex grow gap-2">
                <div className="grow space-y-1">
                  <p className="font-semibold line-clamp-2">
                    We are looking a person for Cold Dms and can Generate Actual
                    results
                  </p>
                  <p className="text-xs text-gray-500">Lancer X</p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    className="w-full object-cover"
                    src="https://files.bluelearn.in/COMPANIES/Lancerx/2023-11-28T10%3A52%3A28%2B00%3A00-IMG_2184.PNG"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                  <svg
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                      fill="#42BE42"
                    />
                  </svg>
                  ₹5000 - ₹50000/month
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Intern
                </div>
                <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-transparent text-gray-800">
                  Remote
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </main>
    </div>
  );
};

export default Work;
