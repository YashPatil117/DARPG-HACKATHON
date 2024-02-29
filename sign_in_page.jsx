import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col items-center pt-6 pb-3 bg-white">
      <div className="flex flex-col self-end mr-12 max-w-full w-[481px] max-md:mr-2.5">
        <div className="justify-center self-end px-7 py-6 text-6xl font-extrabold text-white whitespace-nowrap rounded-3xl bg-blue-950 max-md:pr-5 max-md:text-4xl">
          CPGRAMS
        </div>
        <div className="mt-5 text-base font-bold text-black max-md:max-w-full">
          Centralised Public Grievance And Redress Monitoring System
        </div>
      </div>
      <div className="overflow-hidden self-stretch mt-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pb-12 mt-0 w-full bg-orange-600 max-md:max-w-full">
              <div className="self-start py-5 pr-20 pl-2.5 bg-white max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-1.5 max-w-full aspect-square w-[100px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="grow w-full aspect-[4.17] max-md:mt-10 max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-center px-16 py-12 mt-20 max-w-full text-base font-bold bg-fuchsia-50 rounded-[75px] w-[615px] max-md:px-5 max-md:mt-10">
                <div className="mt-14 mr-3.5 text-4xl text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  Sign in
                </div>
                <div className="flex gap-2 self-start whitespace-nowrap">
                  <div className="grow text-black">Don’t Have an Account?</div>
                  <div className="grow text-blue-700">Sign up Here</div>
                </div>
                <div className="mt-8 mr-3.5 font-extrabold text-black max-md:mr-2.5 max-md:max-w-full">
                  Mobile No/Email Id/Username
                </div>
                <div className="justify-center items-center px-16 py-2.5 mr-3.5 font-light whitespace-nowrap rounded-md border border-solid border-neutral-500 text-neutral-500 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                  Email id
                </div>
                <div className="mt-8 mr-3.5 text-black max-md:mr-2.5 max-md:max-w-full">
                  Password
                </div>
                <div className="justify-center items-center px-16 py-2.5 mt-1 mr-3.5 font-light whitespace-nowrap rounded-md border border-solid border-neutral-500 text-neutral-500 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                  Password
                </div>
                <div className="mt-2.5 mr-3.5 text-black max-md:mr-2.5 max-md:max-w-full">
                  Security Code
                </div>
                <div className="justify-center items-center px-16 py-2.5 mr-3.5 font-light whitespace-nowrap rounded-md border border-solid border-neutral-500 text-neutral-500 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                  Security Code
                </div>
                <div className="flex gap-1.5 self-center mt-5 text-2xl text-black whitespace-nowrap">
                  <div className="grow px-14 pt-3.5 pb-2 rounded-xl bg-zinc-300 max-md:px-5">
                    fyGOdy
                  </div>
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="my-auto aspect-[1.06] w-[33px]"
                  />
                </div>
                <div className="justify-center items-center self-center px-16 py-5 mt-2.5 max-w-full text-2xl font-light text-black whitespace-nowrap border border-purple-400 border-solid bg-blue-500 bg-opacity-0 rounded-[45px] w-[213px] max-md:px-5">
                  SUBMIT
                </div>
                <div className="flex gap-5 self-center mt-3 mb-2 text-xs text-violet-700 whitespace-nowrap">
                  <div className="grow">Forgot password</div>
                  <div className="grow">Forgot username</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 justify-between px-20 py-7 w-full text-3xl text-center bg-black bg-opacity-80 mt-[705px] text-white text-opacity-80 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="grow whitespace-nowrap">DARPG Website</div>
              <div className="self-start text-white">|</div>
              <div className="flex-auto text-white text-opacity-80">
                National portal of India
              </div>
              <div className="self-start text-white">|</div>
              <div>Disclaimer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm font-bold text-black whitespace-nowrap">
        Test Build
      </div>
      <div className="mt-1.5 text-base text-black whitespace-nowrap">
        Built For Data-Driven Hackathon{" "}
      </div>
      <div className="mt-2.5 text-base text-black whitespace-nowrap">
        Best Viewed in 1440 x 900 resolution
      </div>
    </div>
  );
}


