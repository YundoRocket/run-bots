export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  status: "pending" | "current" | "completed";
  required: boolean;
}

export const PREDICTOOR_WORKFLOW: WorkflowStep[] = [
  {
    id: "install",
    title: "1. Install pdr-backend",
    description: "Clone and setup the pdr-backend repository with Python 3.12",
    status: "pending",
    required: true,
  },
  {
    id: "simulate",
    title: "2. Simulate First",
    description: "Run pdr sim to backtest your strategy before spending real money",
    status: "pending",
    required: true,
  },
  {
    id: "deploy-manager",
    title: "3. Deploy Pred Submitter Manager",
    description: "Deploy the smart contract that manages predictions (one-time setup)",
    status: "pending",
    required: true,
  },
  {
    id: "configure",
    title: "4. Configure Bot",
    description: "Generate validated ppss.yaml with your strategy parameters",
    status: "pending",
    required: true,
  },
  {
    id: "testnet",
    title: "5. Run on Testnet",
    description: "Test your bot with fake tokens to verify everything works",
    status: "pending",
    required: true,
  },
  {
    id: "mainnet",
    title: "6. Run on Mainnet",
    description: "Deploy to production with real OCEAN and ROSE tokens",
    status: "pending",
    required: true,
  },
  {
    id: "monitor",
    title: "7. Monitor Performance",
    description: "Track accuracy, profits, and costs using dashboard and logs",
    status: "pending",
    required: true,
  },
  {
    id: "claim",
    title: "8. Claim Rewards",
    description: "Collect your earned OCEAN tokens from Data Farming",
    status: "pending",
    required: true,
  },
];

export const TRADER_WORKFLOW: WorkflowStep[] = [
  {
    id: "install",
    title: "1. Install pdr-backend",
    description: "Clone and setup the pdr-backend repository",
    status: "pending",
    required: true,
  },
  {
    id: "simulate",
    title: "2. Simulate Trading",
    description: "Backtest your trading strategy with historical data",
    status: "pending",
    required: true,
  },
  {
    id: "configure",
    title: "3. Configure Bot",
    description: "Generate validated trader-ppss.yaml",
    status: "pending",
    required: true,
  },
  {
    id: "testnet",
    title: "4. Run on Testnet",
    description: "Test trading with fake tokens",
    status: "pending",
    required: true,
  },
  {
    id: "mainnet",
    title: "5. Run on Mainnet",
    description: "Trade with real funds",
    status: "pending",
    required: true,
  },
  {
    id: "monitor",
    title: "6. Monitor & Optimize",
    description: "Track performance and refine strategy",
    status: "pending",
    required: true,
  },
];
