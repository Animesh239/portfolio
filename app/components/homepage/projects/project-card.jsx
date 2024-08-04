// @flow strict
"use client";

import { Button, styled } from "@mui/material";
import * as React from "react";

function ProjectCard({ project }) {
  const ShimmerButton = styled(Button)(({ theme }) => ({
    height: "38px",
    borderRadius: "8px",
    border: `2px solid #0d9488`,
    boxShadow: `0 0 10px #0d9488`,
    background: "linear-gradient(110deg,#000103 45%,#1e2631 55%,#000103)",
    backgroundSize: "200% 100%",
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    color: "#9CA3AF",
    fontWeight: "500",
    textTransform: "none",
    animation: "shimmer 2s infinite",
    transition: "color 0.3s",
    "&:hover": {
      color: "#FFFFFF",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 4px rgba(148, 163, 184, 0.6)",
    },
    "@keyframes shimmer": {
      "0%": { backgroundPosition: "200% 0" },
      "100%": { backgroundPosition: "-200% 0" },
    },
  }));

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex justify-between items-center px-4 lg:px-8 py-3 lg:py-5">
        <div className="flex space-x-1 lg:space-x-2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
        <ShimmerButton>
          <a
            href={project.link}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            see the project
          </a>
        </ShimmerButton>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{" " + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
