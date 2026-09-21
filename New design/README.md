# Shane Tendo portfolio source

This package contains the static source currently deployed through ChatGPT Sites.

## Files

- `dist/index.html` — page content and structure
- `dist/styles.css` — colors, typography, layout, and responsive styling
- `dist/script.js` — the scroll indicator and current-year behavior
- `.openai/hosting.json` — links this project to the existing ChatGPT Site

## Preview locally

From this folder on Windows, run:

```powershell
py -m http.server 8000 --directory dist
```

Then open <http://localhost:8000> in your browser.

## Edit

Open the folder in VS Code and edit the files under `dist/`. Keep
`.openai/hosting.json` if you want ChatGPT Sites to recognize the existing
hosted project. Do not publish a revision until you have reviewed it locally.
