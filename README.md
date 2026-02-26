# coach-gpt
Interface with LLMs that tracks your workout history & goals, and gives you personalized workout recommendations

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)

### Web App

```bash
cd packages/web
npm install
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### SST (Infrastructure)

```bash
npm install
npm run dev
```

This starts the SST dev server which deploys infrastructure to AWS and proxies requests to your local Next.js server.
