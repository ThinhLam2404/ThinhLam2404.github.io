# Lam Duc Thinh — Professional Engineering Portfolio

A high-performance, responsive portfolio website crafted for **Lam Duc Thinh** (Backend-oriented Fullstack Developer).

Built strictly based on the CV at `/mnt/Data/Thinh/LamDucThinh_CV.pdf`.

---

## Highlights of this Portfolio

1. **Exact Alignment with Latest CV (`LamDucThinh_CV.pdf`)**:
   - **Role**: Fullstack Developer (Backend-oriented software engineer with 1 year combined experience).
   - **CT Group (April 2026 — Oct 2026)**: Backend NestJS/Node.js/TypeScript APIs, PostgreSQL, Redis, ReactJS frontend integration, AI-assisted development with Codex and OpenCode.
   - **UTA Solution (Aug 2024 — Dec 2024)**: Fullstack Developer internship in Agile/Scrum.
   - **Education**: FPT University (Sep 2021 — Oct 2025), GPA 8.46 / 10.
2. **Prominent 100K Benchmark Metric Box**:
   - ⚡ **-95.15%** deep-pagination median latency (cursor-based pagination & composite indexes).
   - ⚡ **-95.90%** seat price update queries (grouped updates & batch operations).
   - ⚡ **-79.17%** bulk scheduling database operations reduction.
3. **Dedicated Full-Width Project Showcases**:
   - **Ticket Booking Platform**: Redis TTL Mutex, Postgres Transactions, SePay QR reconciliation, Live Demo at [CineGo (cine-go.tech)](https://www.cine-go.tech).
   - **Einvoice Microservice Engine**: Nx Monorepo, gRPC auth contract, TCP core messaging, Kafka async event pipeline, Keycloak, Stripe, Live Demo at [einvoice-fe.vercel.app](https://einvoice-fe.vercel.app).
   - **Textenger Real-Time Chat**: WebSocket gateway cluster, Mongoose schemas, Cache-Manager, Google OAuth, Live Demo at [textenger.me](https://www.textenger.me).
4. **High-Visibility Contact Cards**:
   - **Direct Phone & Zalo**: `0969 125 574` (Large 32px font, 1-click copy & direct calling).
   - **Primary Email**: `thinhld.dev@gmail.com` (Large 32px font, 1-click copy & mailto).
   - Direct CV download linked to `assets/LamDucThinh_CV.pdf`.
5. **Zero External Build Dependencies**:
   - Pure semantic HTML5, modern CSS3 (Grid & Flexbox), and Vanilla JavaScript. Runs anywhere without `npm install` or build steps.

---

## Local Preview

You can open `index.html` directly in any web browser, or run a lightweight local server:

```bash
cd /mnt/Data/Workspace/portfolio
python3 -m http.server 8080
```

Then visit: **http://localhost:8080**

---

## File Structure

```
/mnt/Data/Workspace/portfolio/
├── index.html               # Main semantic markup
├── styles.css               # Warm editorial & clean architecture stylesheet
├── script.js                # Mobile navigation, 1-click copy, dynamic UI elements
├── README.md                # Documentation & deployment guide
└── assets/
    └── LamDucThinh_CV.pdf   # Source CV file from /mnt/Data/Thinh/LamDucThinh_CV.pdf
```

---

## Deployment Instructions

### Deploy to Vercel (Recommended)
```bash
cd /mnt/Data/Workspace/portfolio
npx vercel --prod
```

### Deploy to GitHub Pages
1. Create a repository on GitHub (e.g., `portfolio`).
2. Run in terminal:
   ```bash
   cd /mnt/Data/Workspace/portfolio
   git init
   git add .
   git commit -m "feat: release new portfolio"
   git branch -M main
   git remote add origin https://github.com/ThinhLam2404/portfolio.git
   git push -u origin main
   ```
3. In GitHub Repository **Settings** > **Pages**, set source to `main` branch `/ (root)`.
