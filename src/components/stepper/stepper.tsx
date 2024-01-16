import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  Grid,
  Stack,
  StepContent,
  StepIconProps,
  StepLabel,
} from "@mui/material";
import { CardData, IStepper, stepperData } from "./stepper.data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomCheckBox } from "components/custom-checkbox/custom-checkbox";
import { IStepperProps } from "./stepper.types";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { StepperIcon } from "components/stepper-arrow/stepper-arrow";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export function CustomizedSteppers({ activeSection, children }: IStepperProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeStep, setActiveStep] = React.useState<IStepper | null>(
    stepperData[0]
  );
  const [stepsData, setStepsData] = React.useState(stepperData);
  const [onMouseEnter, setOnMousEnter] = React.useState<null | string | number>(
    null
  );
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("step", `${activeStep?.id}`);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  }, [activeStep, navigate, location.search, location.pathname]);

  const handleStep = (step: IStepper, subStep?: string) => () => {
    setActiveStep(step);
    if (subStep !== undefined) {
      setActiveStep(step);
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("substep", `${subStep}`);
      navigate(`${location.pathname}?${queryParams.toString()}`);
    } else {
      setActiveStep(step);
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("step", `${step?.id}`);
      navigate(`${location.pathname}?${queryParams.toString()}`);
    }
  };

  const handleNext = () => {
    const nextStep = stepsData?.find(
      (item) => item.id === Number(activeStep?.id) + 1
    );
    setActiveStep(nextStep ?? activeStep);
  };

  const handleBack = () => {
    const previousStep = stepsData?.find(
      (item) => item.id === Number(activeStep?.id) - 1
    );
    setActiveStep(previousStep ?? activeStep);
  };
  const onStepComplete = (val: IStepper) => {
    const index = stepsData?.findIndex((step) => step?.id === val?.id);
    const data = [...stepsData];
    data[index] = { ...data[index], completed: !data[index]?.completed };
    setStepsData(data);
    const nextStep = stepsData?.find(
      (item) => item.id === Number(activeStep?.id) + 1
    );
    setActiveStep(nextStep ?? activeStep);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8.5}>
          <Stack direction={"row"} spacing={2} mb="2rem">
            {stepsData.map((item) => (
              <Box onClick={handleStep(item)} sx={{ cursor: "pointer" }}>
                <StepperIcon
                  sx={{
                    color:
                      activeStep?.id === item.id
                        ? "#032CFC"
                        : activeStep && activeStep?.id > item.id
                        ? "#95D3F3"
                        : "#D3DFE6",
                  }}
                />
              </Box>
            ))}
          </Stack>
          <Box>{children}</Box>
          <Box mt="4rem">
            <hr />
          </Box>
          <Box
            mt="5rem"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              {activeStep?.id !== 1 && (
                <Button
                  onClick={handleBack}
                  sx={{
                    mr: 1,
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    color: "#53667C",
                  }}
                >
                  <ArrowBackIcon sx={{ mr: 1 }} />
                  Previous Step
                </Button>
              )}
            </Box>

            <Button
              onClick={() => (activeStep ? onStepComplete(activeStep) : null)}
              sx={{ color: "#001F33", fontSize: "1.125rem" }}
            >
              <Checkbox
                checked={activeStep?.completed}
                sx={{
                  color: "#032CFC ",
                }}
              />
              Complete this Step
            </Button>
            <Box>
              {activeStep?.id !== 7 && (
                <Button
                  onClick={handleNext}
                  sx={{
                    fontSize: "1rem",
                    mr: 1,
                    display: "flex",
                    alignItems: "center",
                    color: "#53667C",
                    textTransform: "none",
                  }}
                >
                  Next Step
                  <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3.5}>
          <Box
            sx={{
              position: "sticky",
              top: "2rem", // Adjust as needed
              
              overflowY: "scroll",
            }}
          >
            <Stepper
              orientation="vertical"
              nonLinear
              activeStep={activeStep ? activeStep?.id - 1 : 0}
              sx={{
                "& .MuiStep-root": {
                  zIndex: "1000",
                },
                "& .MuiStepConnector-root": {
                  marginLeft: "17px",
                  my: "-40px",
                },
                "& .MuiStepConnector-line": {
                  minHeight: "80px",
                },
                "& .MuiStepContent-root": {
                  marginLeft: "17px",
                },
              }}
            >
              {stepsData.map((stepData, index) => (
                <Step key={stepData?.id} completed={activeStep?.completed}>
                  <StepLabel
                    sx={{
                      background:
                        activeStep && activeStep.id === stepData?.id
                          ? "#032CFC"
                          : "",
                      minHeight: "3.43rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      "&:hover": {
                        background: "#032CFC",
                      },
                      fontSize: "1rem",
                      "& .MuiStepLabel-label": {
                        fontWeight: 600,
                        color: onMouseEnter === index ? "white" : "#8998A4",
                      },
                      "& .MuiStepLabel-label.Mui-active": {
                        color: "white",
                      },
                    }}
                    onClick={handleStep(stepData, "a")}
                    StepIconComponent={() => (
                      <CustomCheckBox
                        sx={{
                          "& .css-vi4e0k": {
                            backgroundColor:
                              activeStep && activeStep.id === stepData?.id
                                ? "#0004D4"
                                : "",
                          },
                        }}
                        onClick={() => onStepComplete(stepData)}
                        checked={stepData?.completed}
                      />
                    )}
                    onMouseEnter={() => setOnMousEnter(index)}
                    onMouseLeave={() => setOnMousEnter(null)}
                  >
                    {stepData?.stepName}
                    <Typography
                      color={
                        activeStep?.id === stepData?.id
                          ? "#fff"
                          : onMouseEnter === index
                          ? "#fff"
                          : "#000"
                      }
                      fontWeight={600}
                    >
                      {stepData?.name}
                    </Typography>
                  </StepLabel>

                  <StepContent sx={{ textAlign: "start", mt: 1 }}>
                    {stepData?.subSteps?.map((item, i) => (
                      <Button
                        variant="text"
                        sx={{
                          p: 0,
                          textTransform: "none",
                          px: 1,
                          background:
                            activeSection === item?.id ? "#032CFC" : "",
                          color:
                            activeSection === item?.id
                              ? "white"
                              : i === 1
                              ? "#6F7F92"
                              : "#000",
                          "&:hover": {
                            background: "#032CFC",
                            color: "white",
                          },
                        }}
                        key={i}
                        onClick={handleStep(stepData, item?.id)}
                      >
                        {item?.label}
                      </Button>
                    ))}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            <Stack
              mt={4}
              spacing={1}
              sx={{
                border: "1px solid #D3DFE5",
                borderRadius: "0.5rem",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                justifyContent: "center",
                p: "0.875rem 1.75rem",
              }}
            >
              {CardData?.map(({ id, name, icon }) => (
                <Box key={id} sx={{ display: "flex", alignItems: "center" }}>
                  <img src={icon} alt="" />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#53667C",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
