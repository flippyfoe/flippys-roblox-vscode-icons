# Flippy's Roblox Studio Icon Theme for VSCode

A custom VS Code file icon theme.

## Usage

1. Press **F5** in VS Code to launch the Extension Development Host
2. Go to **File → Preferences → File Icon Theme → My Icon Theme**

## Customizing

- Add SVGs to the `icons/` folder
- Map filenames or extensions in `icon-theme.json` under `fileNames` or `fileExtensions`
- Reload the window to see changes

## Publishing

```bash
npm install -g @vscode/vsce
vsce package
vsce publish
```
