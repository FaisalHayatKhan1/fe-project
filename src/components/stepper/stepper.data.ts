import { DownloadIcon, FileIcon, MessageIcon } from "assets";

export interface IStepper {
  id: number;
  stepName: string;
  active: boolean;
  completed: boolean;
  name: string;
  subSteps: { id: string; label: string }[];
}
export const stepperData: IStepper[] = [
  {
    id: 1,
    stepName: "Step 1",
    name: "Project Overview",
    active: false,
    completed: false,
    subSteps: [
      { id: "a", label: "1a. Lorem Ipsum Dolor Sit Amet" },
      { id: "b", label: "1b. Lorem Ipsum Dolor Sit Amet" },
    ],
  },
  {
    id: 2,
    stepName: "Step 2",
    name: "Enrich the Data",
    active: false,
    completed: false,
    subSteps: [
      { id: "a", label: "1a. Lorem Ipsum Dolor Sit Amet" },
      { id: "b", label: "1b. Lorem Ipsum Dolor Sit Amet" },
    ],
  },
  {
    id: 3,
    stepName: "Step 3",
    name: "Determine Account Potential",
    active: false,
    completed: false,
    subSteps: [
      { id: "a", label: "1a. Lorem Ipsum Dolor Sit Amet" },
      { id: "b", label: "1b. Lorem Ipsum Dolor Sit Amet" },
    ],
  },
  {
    id: 4,
    stepName: "Step 4",
    name: "Build the ICP",
    active: false,
    completed: false,
    subSteps: [
      { id: "a", label: "1a. Lorem Ipsum Dolor Sit Amet" },
      { id: "b", label: "1b. Lorem Ipsum Dolor Sit Amet" },
    ],
  },
  {
    id: 5,
    stepName: "Step 5",
    name: "Score Accounts",
    active: false,
    completed: false,
    subSteps: [
      { id: "a", label: "1a. Lorem Ipsum Dolor Sit Amet" },
      { id: "b", label: "1b. Lorem Ipsum Dolor Sit Amet" },
    ],
  },
  {
    id: 6,
    stepName: "Step 6",
    name: "Define Segments",
    active: false,
    completed: false,
    subSteps: [
      { id: "a", label: "1a. Lorem Ipsum Dolor Sit Amet" },
      { id: "b", label: "1b. Lorem Ipsum Dolor Sit Amet" },
    ],
  },
  {
    id: 7,
    stepName: "Step 7",
    name: "Activate Account Segmentation",
    active: false,
    completed: false,
    subSteps: [
      { id: "a", label: "1a. Lorem Ipsum Dolor Sit Amet" },
      { id: "b", label: "1b. Lorem Ipsum Dolor Sit Amet" },
    ],
  },
];
export const CardData = [
  { id: 1, name: "Guide PDF Download", icon: DownloadIcon },
  { id: 2, name: "All Guide Resources", icon: FileIcon },
  { id: 3, name: "Need help? Ask Advisor", icon: MessageIcon },
];
