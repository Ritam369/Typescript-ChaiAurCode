# TypeScript Setup with Bun

## 🚀 Getting Started

### Initialize a TypeScript Project

```bash
bun init
```

Running `bun init` without any arguments creates a complete TypeScript project structure with default configuration.

## ✨ Why Bun?

**Advantages over traditional npm/Node.js setup:**

- ✅ **No TypeScript compiler installation needed** - No `tsc` or `ts-node` required
- ✅ **Direct TypeScript execution** - Run `.ts` files without compilation step
- ✅ **Built-in TypeScript support** - Everything works out of the box

### Traditional npm Workflow (Not needed with Bun)
```bash
npx tsc              # Compile TypeScript
node dist/index.js   # Run compiled JavaScript
# OR
npm install ts-node  # Install ts-node
npx ts-node index.ts # Run TypeScript directly
```

## 📦 Building for Production

### Generate JavaScript Output

```bash
bun build ./index.ts --outdir ../dist
```

**What this command does:**
- `bun build` - Bun's bundler that transpiles TypeScript to JavaScript
- `./index.ts` - Source TypeScript file to compile staying in the src folder
- `--outdir ../dist` - Output directory for the generated JavaScript file

**Folder Structure:**
```
├── src/
│   └── index.ts    # Your TypeScript source
└── dist/
    └── index.js    # Generated JavaScript
```

### Run the Compiled JavaScript

```bash
node dist/index.js
```

---

**Note:** This setup allows you to develop in TypeScript with Bun's fast runtime while still producing standard JavaScript files compatible with any Node.js environment. 