import * as React from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { BpCheckedIcon, BpIcon } from "./custom-checkbox.style";

export const CustomCheckBox=( props: CheckboxProps)=> {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

