import { RecoImage1, RecoImage2, RecoImage3, RecoImage4, RecoImage5, RecoImage6 } from "assets";

export const kpiData = [
  {
    KPI: "Win Rate",
    Description:
      "Improved segmentation allows sales reps to better target ideal prospects, yielding higher win rates vs prospects with a lower propensity to buy.",
    PotentialImpact: "20% increase in closed/won opportunities",
  },
  {
    KPI: "Average Sales Cycle",
    Description:
      "Improved segmentation allows sales reps to better target ideal prospects, yielding higher win rates vs prospects with a lower propensity to buy.",
    PotentialImpact: "20% increase in closed/won opportunities",
  },
  {
    KPI: "Return on Marketing Investment (ROMI)",
    Description:
      "Improved segmentation allows sales reps to better target ideal prospects, yielding higher win rates vs prospects with a lower propensity to buy.",
    PotentialImpact: "20% increase in closed/won opportunities",
  },
  {
    KPI: "MOL Conversion Rate",
    Description:
      "Improved segmentation allows sales reps to better target ideal prospects, yielding higher win rates vs prospects with a lower propensity to buy.",
    PotentialImpact: "20% increase in closed/won opportunities",
  },
  {
    KPI: "Lifetime Value to Customer Acquisition Cost Ratio (LTV:CAC)",
    Description:
      "Improved segmentation allows sales reps to better target ideal prospects, yielding higher win rates vs prospects with a lower propensity to buy.",
    PotentialImpact: "20% increase in closed/won opportunities",
  },
];

export const teamRolesData = [
  {
    Role: "Executive Sponsor",
    Responsibilities: [
      "Set objectives and success metrics",
      "Manage business conversations with functional leaders",
      "Drive organizational change management",
    ],
    LevelOfInvolvement: "Weekly updates & key decisions",
    CommonGTMTitles: ["Head of Sales", "CFO"],
  },
  {
    Role: "Day-to-Day Leader (Project Manager)",
    Responsibilities: [
      "Oversee the completion of the exercise",
      "Ensure business context is included into work product",
      "Deliver quick wins to functional leaders to demonstrate value",
    ],
    LevelOfInvolvement: "Daily guidance",
    CommonGTMTitles: ["Head of Sales", "Operations", "Data Analysts"],
  },
  {
    Role: "Investment (ROMI)",
    Responsibilities: [
      "Build the segmentation model and conduct analyses",
      "Aggregate and manage data inputs and third-party vendors",
      "Surface findings and insights from the data",
      "Implement segmentation in CRM with a replicable process to refresh the model",
    ],
    LevelOfInvolvement: "Heavy involvement day-to-day",
    CommonGTMTitles: [
      "Sales Operations Managers",
      "Analytics Managers",
      "Data Scientists",
    ],
  },
  {
    Role: "Supporting Members",
    Responsibilities: [
      "SFDC/CRM manager to support technical components",
      "IT to provide data pulls",
      "Finance to validate data",
      "Functional leaders for input and feedback",
    ],
    LevelOfInvolvement: "Weekly updates & key decisions",
    CommonGTMTitles: ["Head of Sales", "CFO"],
  },
];

const segmentationStepsData = [
  {
    id: 1,
    heading: "Account Segmentation Primer",
    detail:
      "Understand where account segmentation fits into the overall GTM picture, learn best practices and the SBI methodology for doing account segmentation right.",
    image: RecoImage1,
  },
  {
    id: 2,
    heading: "Example Account Segmentation Output",
    detail:
      "View example output from actual Account Segmentation Projects to understand best practices for visualizing and presenting segmentation strategy.",
    image: RecoImage2,
  },
  {
    id: 3,
    heading: "Discovery Questions for Account Segmentation",
    detail:
      "Prepare probing questions for data analysis, interviews, and expert panels to uncover useful insight for your segmentation strategy.",
    image: RecoImage3,
  },
  {
    id: 4,
    heading: "How to Create the Account Score Algorithm (Step 1)",
    detail:
      "Select the right Propensity to Buy (PtB) factors for your business and use them to describe your ideal customer.",
    image: RecoImage4,
  },
  {
    id: 5,
    heading: "How to Create the Account Score Algorithm (Step 2)",
    detail:
      "Select the right Propensity to Buy (PtB) factors for your business and use them to describe your ideal customer.",
    image: RecoImage5,
  },
  {
    id: 6,
    heading: "How to Create the Account Score Algorithm (Step 3)",
    detail:
      "Select the right Propensity to Buy (PtB) factors for your business and use them to describe your ideal customer.",
    image: RecoImage6,
  },
];

export default segmentationStepsData;
