import React from "react";

const AboutManage = () => {
  return (
    <div>
      <div className="about md:gap-24 grid md:grid-cols-2 w-[100%] max-w-[85%] mx-auto py-32">
        <div className="leftSide text-center sm:text-left">
          <h1 className="text-2xl  sm:text-4xl max-w-[100%] font-bold mb-8 text-DarkBlue">
            What’s different about Manage?
          </h1>
          <p className=" sm:max-w-[60%] mb-8 text-gray-400">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="rightSide">
          <div className="grid grid-flow-row gap-8">
            <div className="gap-8 flex items-start mb-4 ">
              <div className="bg-BrightRed  text-center py-1 px-8 rounded-full">
                01
              </div>
              <div className="">
                <h4 className="font-semibold mb-4 ">
                  Track company-wide progress
                </h4>
                <p className="text-gray-500 text-sm">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>
            <div className="gap-8 flex items-start mb-4">
              <div className="bg-BrightRed  text-center py-1 px-8 rounded-full">
                02
              </div>
              <div className="">
                <h4 className="font-semibold mb-4">
                  Advanced built-in reports
                </h4>
                <p className="text-gray-500 text-sm">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
            <div className="gap-8 flex items-start mb-4">
              <div className="bg-BrightRed  text-center py-1 px-8 rounded-full">
                03
              </div>
              <div className="">
                <h4 className="font-semibold mb-4">
                  Everything you need in one place
                </h4>
                <p className="text-gray-500 text-sm">
                  Everything you need in one place Stop jumping from one service
                  to another to communicate, store files, track tasks and share
                  documents. Manage offers an all-in-one team productivity
                  solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutManage;
