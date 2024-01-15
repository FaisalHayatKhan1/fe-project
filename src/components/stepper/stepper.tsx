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
import { CardData, stepperData } from "./stepper.data";
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

export function CustomizedSteppers({ children }: IStepperProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const [onMouseEnter, setOnMousEnter] = React.useState<null | string | number>(
    null
  );
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("step", `${activeStep + 1}`);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  }, [activeStep, navigate, location.search, location.pathname]);

  const handleStep = (step: number, subStep?: number) => () => {
    if (subStep !== undefined) {
      setActiveStep(step);
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("substep", `${subStep + 1}`);
      navigate(`${location.pathname}?${queryParams.toString()}`);
    } else {
      setActiveStep(step);
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("step", `${step + 1}`);
      navigate(`${location.pathname}?${queryParams.toString()}`);
    }
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const handleNext = () => {
    const newActiveStep = isLastStep()
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <div className={className}>
        <CustomCheckBox />
      </div>
    );
  }
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8.5}>
          <Stack direction={"row"} spacing={2} mb="2rem">
            {[0, 1, 2, 3, 4, 5, 6].map((item) => (
              <Box sx={{ cursor: "pointer" }}>
                <StepperIcon
                  sx={{
                    color:
                      activeStep === item
                        ? "#032CFC"
                        : activeStep > item
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
            <Button
              disabled={activeStep === 0}
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
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant="caption" sx={{ display: "inline-block" }}>
                  Step {activeStep + 1} already completed
                </Typography>
              ) : (
                <Button
                  onClick={handleComplete}
                  sx={{ color: "#001F33", fontSize: "1.125rem" }}
                >
                  <Checkbox
                    sx={{
                      color: "#032CFC ",
                    }}
                  />
                  Complete this Step
                </Button>
              ))}
            <Button
              disabled={activeStep === 0}
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
          </Box>
        </Grid>
        <Grid item xs={12} lg={3.5}>
          <Stepper orientation="vertical" nonLinear activeStep={activeStep}>
            {stepperData.map(({ id, stepName, name, subSteps }, index) => (
              <Step key={id} completed={completed[index]}>
                <StepLabel
                  sx={{
                    background: activeStep === index ? "#032CFC" : "",
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
                  onClick={handleStep(index)}
                  StepIconComponent={ColorlibStepIcon}
                  onMouseEnter={() => setOnMousEnter(index)}
                  onMouseLeave={() => setOnMousEnter(null)}
                >
                  {stepName}
                  <Typography
                    color={
                      activeStep === index
                        ? "#fff"
                        : onMouseEnter === index
                        ? "#fff"
                        : "#000"
                    }
                    fontWeight={600}
                  >
                    {name}
                  </Typography>
                </StepLabel>

                <StepContent sx={{ textAlign: "start", mt: 1 }}>
                  {subSteps?.map((item, i) => (
                    <Button
                      variant="text"
                      sx={{
                        p: 0,
                        color: i === 1 ? "#6F7F92" : "#000",
                        textTransform: "none",
                        px: 1,
                        "&:hover": {
                          background: "#032CFC",
                          color: "white",
                        },
                      }}
                      key={i}
                      onClick={handleStep(index, i)}
                    >
                      {item}
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
        </Grid>
      </Grid>
    </Box>
  );
}
