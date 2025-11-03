# 🌊 Predictoor Bot Runner UI — Ocean Protocol Community Tool

> **Version 1.4** — Complete workflow for Predictoor & Trader bots
> _Setup → Deploy → Run → Monitor → Claim_
> 🌐 Demo: https://run-predictoor-bots.vercel.app  

---

## 💡 Overview

**Predictoor Bot Runner UI** is a community-built, open-source web interface that makes it easy for anyone — even non-technical users — to run **Predictoor** and **Trader** bots on the **Ocean Protocol** network.

Instead of following long Markdown tutorials, you can now:
- Configure your bot visually 🧩
- Generate valid `ppss.yaml` and `docker-compose.yml` files 🧾
- Copy-paste the exact CLI/Docker commands 🚀
- Deploy, monitor, and claim rewards — all with clear step-by-step guidance.

Built with **Next.js 15**, **TypeScript**, **TailwindCSS**, and **shadcn/ui**.
Everything runs 100% **client-side**, and **no private key** is ever handled by the app.

---

## 🎯 Features

### ✅ Version 1.4 — Complete Workflow
| Category | Description |
|-----------|-------------|
| 🧩 **Configuration** | Create & validate `ppss.yaml` for Predictoor & Trader bots (Zod validation + presets) |
| 🐋 **Docker Support** | Generate `docker-compose.yml` with correct volume mapping |
| 🧠 **Network Info** | Testnet/Mainnet toggle with RPC & contract data |
| 🔧 **Deploy Manager** | Full guide for deploying the `Pred Submitter Manager` contract |
| 💰 **Claim Rewards** | Step-by-step payout instructions (mainnet only) |
| 🧮 **Simulation** | Why & how to run `pdr sim` and visualize results |
| 📊 **Monitoring** | Links & docs for `pdr sim_plots` and dashboards |
| 🌿 **ROSE Guide** | Everything you need for Sapphire gas & faucets |
| 🌐 **Data Farming (DF)** | How to join the weekly reward program |
| ⚙️ **Advanced Mode** | Extended YAML editor for `aimodel_ss`, `sim_ss`, `trader_ss`, etc. |

---

## 🧰 Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS + shadcn/ui**
- **Zod** (validation)
- **YAML** (serialization)
- **Lucide-react** (icons)

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

### 2️⃣ Generate your configuration
- Go to **Predictoor → Create**
- Choose asset, timeframe, stake, and network
- Validate → Download `ppss.yaml`
- (Optional) Download `docker-compose.yml`

### 3️⃣ Deploy your Pred Submitter Manager
- Page: **Predictoor → Deploy**
- Run the shown command:
```bash
pdr deploy_pred_submitter_mgr my_ppss.yaml sapphire-testnet
```
- Copy the contract address and paste it in the field
→ it will be inserted into your YAML automatically.

### 4️⃣ Run the bot
**CLI:**
```bash
pdr predictoor my_ppss.yaml sapphire-testnet
```

**Or Docker:**
```bash
docker run --rm -it \
  -e PRIVATE_KEY=$PRIVATE_KEY \
  -v $(pwd):/work \
  ghcr.io/oceanprotocol/pdr-backend:latest \
  pdr predictoor /work/ppss.yaml sapphire-testnet
```

### 5️⃣ Claim your rewards
- Go to **Claim** page → follow payout steps.
- Requires your bot to have earned and submitted valid predictions on mainnet.

---

## 📊 Full Workflow
| Step | Description |
|------|-------------|
| 1️⃣ **Setup** | Install pdr-backend, get tokens (ROSE & OCEAN) |
| 2️⃣ **Simulate** | Run `pdr sim my_ppss.yaml` and `pdr sim_plots` |
| 3️⃣ **Deploy** | `pdr deploy_pred_submitter_mgr` then update YAML |
| 4️⃣ **Run** | `pdr predictoor ...` or Docker equivalent |
| 5️⃣ **Monitor** | Dashboard / subgraph / logs |
| 6️⃣ **Claim** | Retrieve rewards from smart contracts |

---

## 🧭 Folder Structure
```
src/
  app/
    about/
    claim/
    df/
    monitor/
    predictoor/
      create/
      deploy/
      run/
      sim/
    trader/
      create/
      run/
    workflow/
  components/
    ui/
    CopyButton.tsx
    FormCard.tsx
    YamlPreview.tsx
    Toaster.tsx
    ValidationAlert.tsx
  lib/
    validators.ts
    presets.ts
    dockerCompose.ts
    yaml.ts
```

---

## 🧑‍💻 Developer Notes
- `@/` paths map to `/src` (see `tsconfig.json`).
- Tailwind scans `./src/**/*.{ts,tsx}`.
- No backend or serverless function — all static, client-side only.
- `ppss.yaml` and `docker-compose.yml` generation handled fully in-browser.

---

## 🔒 Security Note
- **This app never handles private keys.**
- Always export them manually in your console before running commands:
```bash
export PRIVATE_KEY=0xYOUR_KEY
```
- Do not store your key in YAML or Compose files.

---

## 🌐 Related Docs
- [Predictoor README](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md)
- [Trader README](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/trader.md)
- [Ocean Protocol Docs](https://docs.oceanprotocol.com)
- [Predictoor Docs](https://docs.oceanprotocol.com/predictoor)
- [Oasis Sapphire Docs](https://docs.oasis.io/dapp/sapphire/)

---

## 🤝 Contributing
Contributions, feedback, and pull requests are welcome!
If you'd like to help extend the app (monitoring, dashboard integration, multi-bot manager…), open an issue or PR.

---

## ⚖️ License
MIT License
