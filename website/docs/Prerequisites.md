---
sidebar_position: 2
---

# Prerequisites

- Visual Studio Code version 1.89 or later

- [SAS Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=SAS.sas-lsp) version 1.14.0 or later

- a SAS Viya 4 deployment (2025.05 or later) for SAS Viya Copilot access keys. The deployment can include SAS Viya, SAS Viya Advanced, SAS Viya Enterprise, or SAS Viya Programming.

## Installing the Visual Studio Code Extensions

You must install both the SAS Extension for Visual Studio Code and the SAS Viya Copilot extension for Visual Studio Code.

**Note**: Make sure that you install the official SAS extensions that are published by SAS Institute Inc.

- If you are running Microsoft Visual Studio Code, you can install the extensions from the Extension Marketplace by clicking the Extensions icon in the Activity Bar.

- If you are running an open-source version of Visual Studio Code, follow the instructions for installing extensions for the version that you are running.

## Connecting to your SAS Viya Environment

If you have already set up your SAS Viya environment (SAS Viya 2025.05 or later) in the SAS Extension for Visual Studio Code, you can skip this step.

1. Open the settings for the SAS Extension for Visual Studio Code by right-clicking the SAS extension in the Extensions view. Select **Extension Settings**.

2. Add a SAS Viya connection profile or edit the `settings.json` to add a different profile if you have multiple SAS environments.

For more information, see the [documentation for the SAS Extension for Visual Studio Code](https://sassoftware.github.io/vscode-sas-extension/).

## Enabling the GenAI Gateway Feature

1. Log on to the SAS Viya environment that you set up in the previous section.

2. Click the user button in the SAS application bar and select **Manage Features**.

3. Search for "GenAI Gateway" and toggle the option on. You should be able to use the SAS Viya Copilot extension after approximately 30 seconds.

:::note

Your SAS Viya environment must be configured with SAS Viya Copilot access and authorization settings. If you do not see the GenAI Gateway feature, or the toggle is disabled, please contact your SAS Administrator.

:::
