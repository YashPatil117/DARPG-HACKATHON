import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex overflow-hidden relative flex-col w-full min-h-[3751px] max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="..."
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative gap-5 justify-between items-center px-9 py-11 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center self-stretch px-5 my-auto rounded-3xl border-white border-solid bg-zinc-300 bg-opacity-0 border-[3px] h-[75px] w-[75px]">
          <img
            loading="lazy"
            srcSet="..."
            className="w-full aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-between self-stretch text-2xl font-bold text-white text-opacity-80 max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.63] w-[59px]"
          />
          <div className="flex-auto my-auto">
            DEPARTMENT OF <br />
            ADMINISTRATIVE REFORMS
            <br />
            AND PUBLIC GRIEVANCES
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center self-stretch my-auto text-2xl font-bold text-white text-opacity-80 max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto">HOME</div>
          <div className="flex-auto self-stretch my-auto">
            PUBLIC GRIEVANCES
          </div>
          <div className="flex-auto self-stretch my-auto">E-GOVERNANCE</div>
          <div className="self-stretch my-auto">ABOUT</div>
          <div className="self-stretch my-auto">D&D</div>
          <div className="flex flex-col flex-1 justify-center self-stretch text-2xl text-center text-white whitespace-nowrap">
            <div className="justify-center px-14 py-5 border-white border-solid bg-white bg-opacity-0 border-[3px] rounded-[45px] max-md:px-5">
              LOGIN
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col px-12 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-start ml-24 text-4xl font-bold text-center text-black whitespace-nowrap max-md:ml-2.5">
          WHAT’s NEW
        </div>
        <div className="flex flex-col justify-center self-center px-7 py-5 mt-5 max-w-full bg-indigo-300 rounded-3xl border border-solid border-blue-700 border-opacity-50 w-[1628px] max-md:px-5">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="grow w-full aspect-[1.75] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto font-bold text-black max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl text-center max-md:max-w-full max-md:text-4xl">
                    CIVIL SERVICES DAY 2023
                  </div>
                  <div className="mt-20 text-4xl text-neutral-500 max-md:mt-10 max-md:max-w-full">
                    Hon’ble Prime Minister of India <br />
                    Shri Narendra Modi seen celebrating <br />
                    the 16th civil services day
                  </div>
                  <div className="justify-center self-start px-12 py-5 mt-16 text-2xl text-center whitespace-nowrap border-black border-solid bg-white bg-opacity-0 border-[3px] rounded-[45px] max-md:px-5 max-md:mt-10">
                    View More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-12 h-px bg-blue-800 max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-0 mt-16 ml-5 max-w-full text-2xl font-bold text-white whitespace-nowrap bg-blue-800 rounded-none w-[911px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center px-9 py-4 bg-blue-800 rounded-none max-md:px-5">
              Dashboard
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center self-start bg-blue-800">
            <div className="pt-5 pr-10 pb-3 pl-px bg-blue-800 max-md:pr-5">
              {" "}
              Documents & Reports
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center self-start bg-blue-800">
            <div className="justify-center items-start px-12 py-4 bg-blue-800 max-md:px-5">
              Tenders
            </div>
          </div>
          <div className="grow self-end mt-6">Right To Information</div>
        </div>
        <div className="flex gap-2.5 justify-between pr-2.5 mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 pt-3.5 font-bold bg-blue-500 rounded-[30px]">
            <div className="flex gap-5 justify-between items-start self-center text-3xl text-white">
              <div className="mt-9">
                CPGRAMS <br />
                CENTRE
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="self-start aspect-[0.99] w-[81px]"
              />
            </div>
            <div className="flex flex-col items-center px-3.5 py-12 mt-8 text-base bg-white rounded-none">
              <div className="self-stretch text-center whitespace-nowrap text-zinc-800">
                <span className="text-lime-500">1,03,5677</span> - Grievance
                Redressed
              </div>
              <div className="mt-6 text-black whitespace-nowrap">
                <span className="text-lime-500">34,664</span>- No. of GROs
              </div>
              <div className="mb-9 text-white">
                <span className="text-lime-500">1400</span>
                <span className="text-black">
                  -Mandatory Services Offered by{" "}
                </span>
                <br />
                <span className="text-black"> States\UT</span>s
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-3.5 font-bold bg-blue-700 rounded-[30px]">
            <div className="flex gap-2 items-start self-end text-3xl text-white">
              <div className="mt-9">
                CPGRAMS <br />
                STATES
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="self-start aspect-[0.99] w-[81px]"
              />
            </div>
            <div className="flex flex-col items-center px-9 py-12 mt-8 text-base text-black whitespace-nowrap bg-indigo-100 rounded-none max-md:px-5">
              <div className="self-stretch text-zinc-800">
                <span className="text-lime-300">51,133 </span>- Grievance
                Redressed
              </div>
              <div className="mt-6">
                <span className="text-lime-500">35,609</span>- No. of GROs
              </div>
              <div className="mt-4 mb-10">
                <span className="text-lime-500">106</span>
                <span className="text-black">-GOI Officers Trained</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-3 font-bold bg-blue-500 rounded-[30px]">
            <div className="flex gap-5 justify-between items-start pr-1.5 text-3xl text-white">
              <div className="mt-5">
                SPECIAL <br />
                CAMPAIGN 3.0
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.99] w-[81px]"
              />
            </div>
            <div className="flex flex-col px-3.5 py-12 mt-3 text-base text-black whitespace-nowrap bg-white rounded-none">
              <div>
                <span className="text-lime-500">2.58L</span>-Swachhata Campaign
                Sites
              </div>
              <div className="self-center mt-8">
                <span className="text-lime-300">164 L sq.ft</span>- Space Freed
              </div>
              <div className="mt-8 mb-9">
                <span className="text-lime-300">Rs.556.35 Cr</span>- Revenue
                earned
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-11 bg-blue-700 rounded-[30px]">
            <div className="text-3xl font-bold text-white">
              E-GOV <br />
              AWARDS 2023
            </div>
            <div className="flex flex-col px-14 py-12 mt-10 text-2xl text-black whitespace-nowrap bg-indigo-100 rounded-none max-md:px-5">
              <div>
                <span className="text-lime-300">935</span>-{" "}
                <span className="text-black">Registration</span>
              </div>
              <div className="mt-2.5 mb-16 max-md:mb-10">
                <span className="text-lime-500">425</span>-{" "}
                <span className="text-black">Nominations</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-3.5 bg-blue-500 rounded-[30px]">
            <div className="flex gap-5 justify-between items-start self-center text-3xl font-bold text-white">
              <div className="mt-7">
                CSD & PM
                <br />
                AWARDS
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="self-start aspect-[0.99] w-[81px]"
              />
            </div>
            <div className="flex flex-col px-6 py-12 mt-10 text-xl text-black whitespace-nowrap bg-white rounded-none max-md:px-5">
              <div>
                <span className="text-lime-500">16</span>-{" "}
                <span className="text-black">Civil Service Day Conducted</span>
              </div>
              <div className="self-center mt-5 mb-14 max-md:mb-10">
                <span className="text-lime-500">2520</span>-{" "}
                <span className="text-black">Nominations in 2022</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-11 whitespace-nowrap bg-blue-700 rounded-[30px]">
            <div className="ml-3 text-3xl font-bold text-white max-md:ml-2.5">
              REGIONAL
              <br />
              CONFERENCE
            </div>
            <div className="justify-center items-center px-16 pt-14 pb-32 mt-10 text-2xl text-black bg-indigo-100 rounded-none max-md:px-5 max-md:pb-10">
              <span className="text-lime-500">44</span>-Conducted
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-between mt-2.5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 pt-6 bg-blue-700 rounded-[30px]">
            <div className="flex gap-5 justify-between self-center max-w-full text-3xl font-bold text-white whitespace-nowrap w-[257px]">
              <div className="flex-auto self-start mt-3">NESDA</div>
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.99] w-[81px]"
              />
            </div>
            <div className="flex flex-col items-start py-11 pr-20 pl-10 mt-10 text-base text-black bg-indigo-100 rounded-none max-md:px-5">
              <div>
                <span className="text-lime-500">21</span>-States Covered
              </div>
              <div className="mt-7 mb-16 max-md:mb-10">
                <span className="text-green-500">106</span>
                <span className="text-black">-GOI Officers Trained</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-9 bg-blue-500 rounded-[30px]">
            <div className="self-start ml-9 text-3xl font-bold text-white max-md:ml-2.5">
              SEVOTTAM
            </div>
            <div className="z-10 justify-center items-start px-14 pt-12 pb-32 mt-24 text-base text-lime-500 bg-white rounded-none max-md:px-5 max-md:pb-10 max-md:mt-10">
              <span className="text-green-500">21</span>
              <span className=""> - States Covered</span>
              <br />
              <span className="text-lime-500">106</span>
              <span className=""> - GOI Officers Trained</span>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-9 whitespace-nowrap bg-blue-700 rounded-[30px]">
            <div className="ml-6 text-3xl font-bold text-white max-md:ml-2.5">
              E-GOV
              <br />
              CONFERENCE
            </div>
            <div className="justify-center px-6 pt-12 pb-36 mt-9 text-base text-black bg-indigo-100 rounded-none max-md:pb-10 max-md:pl-5">
              <span className="text-lime-500">26</span> - No. of e-gov
              conferences conducted
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-2 whitespace-nowrap bg-blue-500 rounded-[30px]">
            <div className="flex gap-5 justify-between self-center text-3xl font-bold text-white">
              <div className="flex-auto my-auto">E-OFFICE</div>
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.99] w-[81px]"
              />
            </div>
            <div className="flex flex-col px-11 py-12 mt-14 text-base text-black bg-white rounded-none max-md:px-5 max-md:mt-10">
              <div className="self-center">
                <span className="text-lime-500">53770914</span> - e-files
                Created
              </div>
              <div className="mt-11 mb-14 max-md:my-10">
                <span className="text-lime-500">248296679</span> - e-receipts
                Created
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-5 whitespace-nowrap bg-blue-700 rounded-[30px]">
            <div className="flex gap-5 justify-between self-center max-w-full text-3xl font-bold text-white w-[266px]">
              <div className="self-start mt-4">CGI</div>
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.99] w-[81px]"
              />
            </div>
            <div className="flex flex-col px-20 py-12 mt-11 text-base text-black bg-indigo-100 rounded-none max-md:px-5 max-md:mt-10">
              <div>
                <span className="text-lime-500">10</span> - Sectors Covered
              </div>
              <div className="mt-12 max-md:mt-10">
                <span className="text-lime-500">50</span> - Indicators in 2019
              </div>
              <div className="mt-10 mb-7">
                <span className="text-lime-500">58 </span>- Indicators in 2021
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pt-5 whitespace-nowrap bg-blue-500 rounded-[30px]">
            <div className="flex gap-5 justify-between self-center max-w-full text-3xl font-bold text-white w-[252px]">
              <div className="self-start mt-4">DGGI</div>
              <img
                loading="lazy"
                srcSet="..."
                className="flex-1 shrink-0 w-full aspect-square"
              />
            </div>
            <div className="flex flex-col px-20 py-12 mt-11 text-base text-black bg-white rounded-none max-md:px-5 max-md:mt-10">
              <div>
                <span className="text-lime-500">3 </span>- Released for States
              </div>
              <div className="mt-12 mb-11 max-md:my-10">
                <span className="text-lime-500">2</span> - States onboarded
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-28 h-px bg-blue-700 max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 justify-between self-center mt-28 w-full text-6xl font-bold text-black whitespace-nowrap max-w-[1313px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <div className="flex-auto max-md:text-4xl">Tweets</div>
          <div className="flex-auto max-md:text-4xl">Links</div>
        </div>
        <div className="mx-14 mt-3.5 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-3 pt-3 pb-6 w-full text-4xl text-black whitespace-nowrap border-red-300 border-solid bg-zinc-300 bg-opacity-0 border-[14px] max-md:mt-10 max-md:max-w-full">
                <div className="overflow-hidden relative flex-col justify-center items-start pt-64 pr-16 pb-36 pl-20 min-h-[474px] max-md:py-10 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                  />
                  DARPG Portals
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-3 pt-3 pb-12 w-full text-3xl font-bold text-center text-black border-blue-400 border-solid bg-zinc-300 bg-opacity-0 border-[15px] max-md:mt-10 max-md:max-w-full">
                <div className="justify-center px-8 py-5 text-3xl bg-blue-500 max-md:pl-5 max-md:max-w-full">
                  {" "}
                  &gt; Monthly major Achievements
                  <br />
                </div>
                <div className="justify-center items-start py-5 pr-16 pl-7 mt-3 whitespace-nowrap bg-blue-500 max-md:px-5 max-md:max-w-full">
                  &gt;Regional Conferences
                </div>
                <div className="justify-center items-start py-5 pr-16 pl-5 mt-3 whitespace-nowrap bg-blue-500 max-md:px-5 max-md:max-w-full">
                  &gt;Photo Gallery
                </div>
                <div className="justify-center items-start py-5 pr-16 pl-6 mt-3 whitespace-nowrap bg-blue-500 max-md:px-5 max-md:max-w-full">
                  &gt;Reports
                </div>
                <div className="justify-center items-start py-6 pr-16 pl-7 mt-3 bg-blue-500 max-md:px-5 max-md:max-w-full">
                  {" "}
                  &gt;RTI
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-12 w-full max-w-[1680px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="flex-1 grow shrink-0 w-full aspect-[0.85] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="flex-1 grow shrink-0 w-full aspect-[0.85] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="flex-1 grow shrink-0 w-full aspect-[0.85] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="flex-1 grow shrink-0 w-full aspect-[0.85] max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="grow w-full aspect-[0.85] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="grow w-full aspect-[0.85] max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative gap-5 justify-between py-9 pr-5 pl-14 mt-96 w-full bg-violet-900 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-start text-2xl font-bold text-white whitespace-nowrap basis-0">
          <div>MOBILE APP</div>
          <img
            loading="lazy"
            srcSet="..."
            className="self-center mt-9 aspect-[0.85] w-[138px]"
          />
        </div>
        <div className="flex flex-col flex-1 max-md:max-w-full">
          <div className="self-start ml-7 text-2xl font-bold text-white max-md:max-w-full">
            Website Policies Feedback Contact Us Help Web Information Manager{" "}
            <span className="font-extralight">|</span> Archive{" "}
            <span className="font-extralight">|</span> Chief Data Officer
          </div>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-1.5 justify-between mt-4 text-xl font-bold text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="my-auto aspect-[0.88] w-[67px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="my-auto max-w-full aspect-[3.7] w-[212px]"
                  />
                  <div className="bg-orange-500 h-[147px] w-[3px]" />
                  <div className="flex-auto self-start mt-4 underline max-md:max-w-full">
                    Website Content Managed by Department of Administrative
                    Reforms & Public Grievances, MoPP&P, GoI
                    <br />
                    Designed, Developed and Hosted by{" "}
                    <a
                      href="http://www.nic.in/"
                      className="underline"
                      target="_blank"
                    >
                      National Informatics Centre( NIC )
                    </a>
                    <br />
                    Last Updated: 19 Jan 2024
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                <div className="flex gap-0 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="self-start mt-3 aspect-square w-[98px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="self-end mt-5 aspect-[1.1] w-[98px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="max-w-full aspect-square w-[110px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


