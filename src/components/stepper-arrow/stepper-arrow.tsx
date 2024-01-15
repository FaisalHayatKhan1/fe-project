import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function StepperIcon(props: IconProps): JSX.Element {
  const { width = "99px", height = "8px", sx = {} } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="99"
        height="8"
        viewBox="0 0 99 8"
        fill="none"
      >
        <path
          d="M0 0H95.1923L99 4L95.1923 8H0L3.80769 4L0 0Z"
          fill="currentColor"
        ></path>
      </svg>
    </SvgIcon>
  );
}
