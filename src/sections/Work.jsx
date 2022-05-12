import React from "react";
import WorkCard from "../components/WorkCard";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import resume from "../assets/Resume.pdf";

function InterestCard(icon, field, body) {
  return (
    <div className="rounded-xl border-2 p-2 flex flex-col lg:flex-row gap-2 items-center bg-sky-900 text-slate-100">
      <div className="flex-none w-32 flex flex-col items-center p-2">
        {icon}
        <p>{field}</p>
      </div>
      <div className="border w-1/2 h-0.5 lg:w-0.5 lg:h-10 border-sky-500 lg:mr-4"></div>
      <p className="p-2">{body}</p>
    </div>
  );
}

export default function Work() {
  const backendBody = (
    <p>
      During my previous internships, I did a lot of work developing
      microservices. I got an understanding of how important it is to carefully
      design and develop scalable services. Having a properly designed API is
      pivotal in having a smooth app experience, allowing for easy scalability
      to meet user demands, and identifying bottlenecks in the codeflow. I would
      love to explore this field further since my knowledge of backend is still
      rather limited.
    </p>
  );

  const mobileBody = (
    <p>
      This one is fairly obvious :) Ain't too many people these days without a
      mobile device. For most people, a smartphone satisfies all their needs and
      for older folks, it's also far quicker to pick up compared to a PC. Now,
      how cool would it be to to design a simple and elegant app that is used by
      thousands?
    </p>
  );

  return (
    <div className="flex justify-center p-4">
      <div className="lg:w-4/5 flex flex-col gap-4">
        <p className="text-5xl text-sky-700 font-black">
          work experiences
        </p>
        <p className="text-xl">
          Check out my
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 hover:text-sky-200"
          >
            &nbsp;resume&nbsp;
          </a>
          for more details!
        </p>
        <div className="p-4 flex flex-col lg:flex-row lg:gap-4">
          <div>
            <WorkCard
              company="Caseware"
              position="software developer"
              time="Jan 2022 - August 2022"
              location="Remote"
              bordercolor="border-sky-500"
            />
          </div>
          <div>
            <WorkCard
              company="Skatescribe"
              position="full stack developer"
              time="May 2021 - August 2021"
              location="Remote"
              bordercolor="border-sky-700"
            />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="lg:w-4/5">
              <p className="text-3xl text-sky-700 font-black mb-4">
                interests
              </p>
              <p className="text-xl">
                My experiences so far have been general software development,
                but in the future there are a couple of fields that I want to go
                more in depth :) The goal is to always learn something new
                wherever I go.
              </p>
            </div>

            <div className="flex flex-col lg:w-4/5 items-center gap-3 text-lg">
              {InterestCard(
                <StorageOutlinedIcon fontSize="large" />,
                "Backend",
                backendBody
              )}
              {InterestCard(
                <PhoneIphoneOutlinedIcon fontSize="large" />,
                "Mobile",
                mobileBody
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
