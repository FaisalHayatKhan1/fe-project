import { Box } from "@mui/material";
import { CustomizedSteppers, DeterminePotential } from "components";
import React, { useEffect, useState } from "react";
import { AccountPotential } from "components";
import { useSearchParams } from "react-router-dom";
import Scroll from "react-scroll";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState("a");
  const step = searchParams.get("step");
  const subStep = searchParams.get("substep");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const aOffset = document?.getElementById("a")?.offsetTop;
    if (aOffset && scrollPosition <= aOffset) {
      setActiveSection("a");
    } else {
      setActiveSection("b");
    }
  };

  useEffect(() => {
    if (subStep) {
      const scroll = Scroll.animateScroll;
      const targetElement = document.getElementById(subStep);
      if (targetElement) {
        scroll.scrollTo(targetElement.offsetTop, {
          duration: 800,
          smooth: "easeInOutCubic",
        });
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [subStep]);
  return (
    <Box sx={{ px: "8rem", py: "1rem" }}>
      <CustomizedSteppers activeSection={activeSection}>
        {step === "3" ? (
          <DeterminePotential step={step} />
        ) : (
          <AccountPotential step={step ? step : ""} />
        )}
      </CustomizedSteppers>
    </Box>
  );
};
