import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="overflow-hidden w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-12 w-full bg-purple-300 max-md:max-w-full">
              <div className="flex gap-3 justify-between items-center px-11 py-11 bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex justify-center items-center self-stretch px-5 my-auto rounded-3xl border-solid bg-zinc-300 bg-opacity-0 border-[3px] border-black border-opacity-50 h-[75px] w-[75px]">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-full aspect-square"
                  />
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-stretch aspect-[0.63] w-[59px]"
                />
                <div className="flex-auto self-stretch my-auto text-2xl font-bold text-black max-md:max-w-full">
                  DEPARTMENT OF <br />
                  ADMINISTRATIVE REFORMS
                  <br />
                  AND PUBLIC GRIEVANCES
                </div>
              </div>
              <div className="flex flex-col self-center py-10 mt-24 max-w-full rounded-3xl bg-zinc-200 w-[540px] max-md:mt-10">
                <div className="flex flex-col items-center pl-8 text-xl text-neutral-400 max-md:pl-5 max-md:max-w-full">
                  <div className="self-start text-4xl font-bold text-black max-md:max-w-full">
                    Sign in
                  </div>
                  <div className="justify-center items-start py-6 pr-16 pl-6 mt-20 max-w-full whitespace-nowrap bg-white rounded-xl w-[450px] max-md:px-5 max-md:mt-10">
                    Hint Text
                  </div>
                  <div className="justify-center items-start py-6 pr-16 pl-6 mt-9 max-w-full whitespace-nowrap bg-white rounded-xl w-[450px] max-md:px-5">
                    Hint Text
                  </div>
                  <div className="justify-center items-start py-6 pr-16 pl-6 mt-9 max-w-full whitespace-nowrap bg-white rounded-xl w-[450px] max-md:px-5">
                    Hint Text
                  </div>
                  <div className="mt-8 max-w-full h-px bg-black w-[450px]" />
                  <div className="mt-5 ml-7 text-base whitespace-nowrap text-black text-opacity-50">
                    or login using
                  </div>
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-4 ml-7 max-w-full aspect-[2.17] w-[130px]"
                  />
                </div>
                <div className="flex gap-5 justify-between self-end pr-6 mt-7 font-bold max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="flex-auto my-auto text-base text-blue-700">
                    Forgot password?
                  </div>
                  <div className="flex flex-col justify-center text-2xl text-center text-indigo-600 whitespace-nowrap">
                    <div className="justify-center px-16 py-5 border-indigo-600 border-solid bg-white bg-opacity-0 border-[3px] rounded-[45px] max-md:px-5">
                      SUBMIT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-start self-end max-w-full text-white w-[1182px]">
                <div className="ml-20 text-6xl font-light max-md:ml-2.5 max-md:text-4xl">
                  CPGRAMS
                </div>
                <div className="self-center mt-16 max-w-full h-0.5 bg-white w-[1030px] max-md:mt-10" />
                <div className="mt-14 ml-20 text-6xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  Centralised Public <br />
                  Grievance And Redress
                  <br />
                  Monitoring System
                </div>
                <div className="mt-8 ml-20 text-4xl font-medium text-white text-opacity-80 max-md:max-w-full">
                  Single window interface
                  <br />
                  for Grievance redressal
                  <br />
                  Officers and Appellate Authorities
                </div>
                <div className="flex flex-col justify-center items-end self-stretch px-16 py-7 mt-72 text-3xl text-center bg-black bg-opacity-70 text-white text-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between mr-12 max-w-full w-[887px] max-md:flex-wrap max-md:mr-2.5">
                    <div className="flex-auto">Disclaimer</div>
                    <div className="flex-auto text-white text-opacity-80">
                      National portal of India
                    </div>
                    <div className="flex-auto">Disclaimer</div>
                  </div>
                </div>
              </div>
              <div className="mt-20 text-xl text-neutral-500 max-md:mt-10 max-md:max-w-full">
                For any technical issue related to CPGRAMS portal, please write
                to us at: cpgrams-darpg@nic.in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


