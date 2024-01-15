import { DownloadIcon, FileIcon, MessageIcon } from "assets";

interface IStepper {
  id: number;
  stepName: string;
  name: string;
  subSteps: string[];
}
export const stepperData: IStepper[] = [
  {
    id: 1,
    stepName: "Step 1",
    name: "Project Overview",
    subSteps: [
      "1a. Lorem Ipsum Dolor Sit Amet",
      "1a. Lorem Ipsum Dolor Sit Amet",
    ],
  },
  {
    id: 2,
    stepName: "Step 2",
    name: "Enrich the Data",
    subSteps: [
      "1a. Lorem Ipsum Dolor Sit Amet",
      "1a. Lorem Ipsum Dolor Sit Amet",
    ],
  },
  {
    id: 3,
    stepName: "Step 3",
    name: "Determine Account Potential",
    subSteps: [
      "1a. Lorem Ipsum Dolor Sit Amet",
      "1a. Lorem Ipsum Dolor Sit Amet",
    ],
  },
  {
    id: 4,
    stepName: "Step 4",
    name: "Build the ICP",
    subSteps: [
      "1a. Lorem Ipsum Dolor Sit Amet",
      "1a. Lorem Ipsum Dolor Sit Amet",
    ],
  },
  {
    id: 5,
    stepName: "Step 5",
    name: "Score Accounts",
    subSteps: [
      "1a. Lorem Ipsum Dolor Sit Amet",
      "1a. Lorem Ipsum Dolor Sit Amet",
    ],
  },
  {
    id: 6,
    stepName: "Step 6",
    name: "Define Segments",
    subSteps: [
      "1a. Lorem Ipsum Dolor Sit Amet",
      "1a. Lorem Ipsum Dolor Sit Amet",
    ],
  },
  {
    id: 7,
    stepName: "Step 7",
    name: "Activate Account Segmentation",
    subSteps: [
      "1a. Lorem Ipsum Dolor Sit Amet",
      "1a. Lorem Ipsum Dolor Sit Amet",
    ],
  },
];
export const CardData = [
  { id: 1, name: "Guide PDF Download", icon: DownloadIcon },
  { id: 2, name: "All Guide Resources", icon: FileIcon },
  { id: 3, name: "Need help? Ask Advisor", icon: MessageIcon },
];
