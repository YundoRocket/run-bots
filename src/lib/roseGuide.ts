export const ROSE_GUIDE = {
  title: "ROSE Gas Guide (Sapphire Network)",
  description:
    "The Ocean Protocol Predictoor system runs on the Oasis Sapphire network, which requires ROSE tokens for transaction fees (gas).",
  sections: [
    {
      title: "Why ROSE?",
      content:
        "Sapphire is a privacy-preserving EVM-compatible network built on Oasis. All transactions on Sapphire require ROSE to pay for gas fees, similar to how Ethereum requires ETH.",
    },
    {
      title: "How much ROSE do I need?",
      content:
        "For testing: 1-5 ROSE should be enough for hundreds of predictions. For production: Budget 10-50 ROSE depending on your prediction frequency.",
    },
    {
      title: "Getting ROSE (Testnet)",
      links: [
        {
          label: "Oasis Testnet Faucet",
          url: "https://faucet.testnet.oasis.dev/",
        },
        {
          label: "Ocean Protocol Docs - Sapphire",
          url: "https://docs.oceanprotocol.com/concepts/sapphire",
        },
      ],
    },
    {
      title: "Getting ROSE (Mainnet)",
      links: [
        {
          label: "Oasis Protocol Website",
          url: "https://oasisprotocol.org/",
        },
        {
          label: "Buy on exchanges",
          url: "https://coinmarketcap.com/currencies/oasis-network/markets/",
        },
      ],
    },
  ],
  alert: "⚠️ Always keep some ROSE in your wallet for transactions. Running out of ROSE will prevent your bot from making predictions.",
};

export const NETWORK_INFO = {
  testnet: {
    name: "Sapphire Testnet",
    rpc: "https://testnet.sapphire.oasis.dev",
    chainId: 0x5aff,
    currency: "TEST",
    explorer: "https://testnet.explorer.sapphire.oasis.dev",
  },
  mainnet: {
    name: "Sapphire Mainnet",
    rpc: "https://sapphire.oasis.io",
    chainId: 0x5afe,
    currency: "ROSE",
    explorer: "https://explorer.sapphire.oasis.io",
  },
};
