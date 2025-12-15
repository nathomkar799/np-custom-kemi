# np-custom-kemi — Run the static page

This project serves a static HTML/CSS/JS page from the `views` folder using Express.

Prerequisites
- Node.js (LTS recommended)

Quick start

1. Open a terminal and change to the project folder.

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run start
# or
node server.js
```

4. Open your browser at:

```
http://localhost:8000
```

What this does
- The server uses `express.static` to serve files from the `views` folder.
- The root route is handled by the router in `routes/staticroute.js`, which serves `views/index.html`.

Troubleshooting
- If `node` is not found: install Node.js and restart your terminal.
- If you see ESM import errors, `package.json` needs `"type": "module"` (this project already has it).
- If the page does not load, check the server terminal for errors and paste them if you need help.

Next steps
- If you only want a static page, no further changes are needed.
- If you want server-side templating (injecting values server-side), consider switching to EJS and converting `views/index.html` to `views/index.ejs`.

Files of interest
- `server.js` — starts the Express server and serves static files.
- `routes/staticroute.js` — router that sends `views/index.html`.


