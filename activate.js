const vscode = require('vscode');

function activate(context) {
  const config = vscode.workspace.getConfiguration();
  const current = config.get('workbench.iconTheme');
  if (current !== 'flippys-roblox-vscode-icons') {
    config.update('workbench.iconTheme', 'flippys-roblox-vscode-icons', vscode.ConfigurationTarget.Global);
  }
}

function deactivate() {}

module.exports = { activate, deactivate };