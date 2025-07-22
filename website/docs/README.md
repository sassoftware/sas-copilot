# SAS Viya Copilot Extension for Visual Studio Code

## Overview

The SAS Viya Copilot extension for Visual Studio Code is a tool that enhances your productivity as you program in SAS. SAS Viya Copilot uses Generative Artificial Intelligence (GenAI) to add comments to SAS code, write an explanation for existing SAS code, and generate SAS code based on instructions in comments in a SAS program.

:::note

Although SAS offers multiple coding environments, such as SAS Studio and SAS Enterprise Guide, SAS Viya Copilot is currently available only as an extension for Visual Studio Code to complement the SAS Extension for Visual Studio Code.

:::

The SAS Viya Copilot is provided as a service for SAS Viya 4 environments (release 2025.05 and later). Although the Copilot service is not provided by the SAS Viya deployment itself, the SAS Viya 4 environment provides the subscription secrets that allow access to the service.

## Prerequisites

- Visual Studio Code version 1.89 or later

- [SAS Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=SAS.sas-lsp) version 1.14.0 or later

- a SAS Viya 4 deployment (2025.05 or later) for SAS Viya Copilot access keys. The deployment can include SAS Viya, SAS Viya Advanced, SAS Viya Enterprise, or SAS Viya Programming.

### Installing the Visual Studio Code Extensions

You must install both the SAS Extension for Visual Studio Code and the SAS Viya Copilot extension for Visual Studio Code.

**Note**: Make sure that you install the official SAS extensions that are published by SAS Institute Inc.

- If you are running Microsoft Visual Studio Code, you can install the extensions from the Extension Marketplace by clicking the Extensions icon in the Activity Bar.

- If you are running an open-source version of Visual Studio Code, follow the instructions for installing extensions for the version that you are running.

### Connecting to your SAS Viya Environment

If you have already set up your SAS Viya environment (SAS Viya 2025.05 or later) in the SAS Extension for Visual Studio Code, you can skip this step.

1. Open the settings for the SAS Extension for Visual Studio Code by right-clicking the SAS extension in the Extensions view. Select **Extension Settings**.

2. Add a SAS Viya connection profile or edit the `settings.json` to add a different profile if you have multiple SAS environments.

For more information, see the [documentation for the SAS Extension for Visual Studio Code](https://sassoftware.github.io/vscode-sas-extension/).

### Enabling the GenAI Gateway Feature

1. Log on to the SAS Viya environment that you set up in the previous section.

2. Click the user button in the SAS application bar and select **Manage Features**.

3. Search for "GenAI Gateway" and toggle the option on. You should be able to use the SAS Viya Copilot extension after approximately 30 seconds.

:::note

Your SAS Viya environment must be configured with SAS Viya Copilot access and authorization settings. If you do not see the GenAI Gateway feature, or the toggle is disabled, please contact your SAS Administrator.

:::

## Running the SAS Viya Copilot Extension

The SAS Viya Copilot extension includes commands to generate code from a comment, add comments to existing code, and explain code.

### Generating Code

To generate SAS code from a comment:

1. Open a SAS program file, or create a new file using SAS language mode.

2. Position the cursor in a SAS comment statement or select a comment block. SAS comments start with `/*` and end with `*/`.

3. Click **Generate code**. The available generated code options will be displayed as gray inline code. Select the code that you want to use from the options.

![Generate code](/images/CodeGen-SASLight-Cropped.png)

**Note**: To generate code from a longer, multi-line comment, select the entire comment and then select **Generate code**.

![Generate code multiline](/images/CodeGen-MultiLine-SASLight-Cropped.png)

### Adding Comments

To add comments to an existing block of SAS code:

1. Open a SAS program file, or create a new file using SAS language mode.

2. Select a block of SAS code and click **Add comments**. The selected code block is replaced with a block of commented code.

![Add comments](/images/Comments-SASLight-Cropped.png)

### Explaining Code

To generate an explanation of a block of SAS code:

1. Open a SAS program file, or create a new file using SAS language mode.

2. Select a block of SAS code and click **Explain**.

![Explain](/images/Explain-SASLight-Cropped.png)

The explanation of the code block is displayed in the SAS Viya Copilot conversation pane on the left side of the application window.

![Explain Chat Window](/images/ExplainChatWindow-SASLight-Cropped.png)

## Alternative Ways to Run Commands

### Context Menu

You can run any of the SAS Viya Copilot commands by right-clicking a selected block of code or comments and selecting a command from the context menu.

![ContextMenu](/images/ContextMenu-SASLight-Cropped.png)

### Visual Studio Code Command Palette

To run SAS Viya Copilot commands with the Command Palette:

1. Select a block of code or comments.

2. Select **View > Command Palette**.

**Note**: Microsoft Windows users can also press Ctrl + Shift + P to open the Command Palette. Apple OS X users can press Command + Shift + P to open the Command Palette.

3. Enter “SAS Copilot” in the search box to display the available commands and click the command that you want to use.
