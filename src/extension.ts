// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let previewUpCommand = vscode.commands.registerCommand('extension.preview.up', function () {
        vscode.commands.executeCommand('list.focusUp')
            .then(() => vscode.commands.executeCommand('list.select'))
            .then(() => vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer'));
    });

    let previewDownCommand = vscode.commands.registerCommand('extension.preview.down', function () {
        vscode.commands.executeCommand('list.focusDown')
            .then(() => vscode.commands.executeCommand('list.select'))
            .then(() => vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer'));;
    });

    let collapseFolder = vscode.commands.registerCommand('extension.collapse.folder', function () {
        vscode.commands.executeCommand('list.collapse');
    });

    let focusEditorCommand = vscode.commands.registerCommand('extension.focusEditor', function () {
        vscode.commands.executeCommand('list.select')
            .then(() => vscode.commands.executeCommand('workbench.action.closeSidebar'));
    });

    context.subscriptions.push(previewUpCommand);
    context.subscriptions.push(previewDownCommand);
    context.subscriptions.push(collapseFolder);
    context.subscriptions.push(focusEditorCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
