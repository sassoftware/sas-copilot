<p style="font-size: 1rem;"> Please note that this extension may be downloaded but it will only operate fully for participants in the SAS private preview who have a signed agreement with SAS and have a Viya 4 license. </p>

# Overview

The SAS Viya Copilot extension for Visual Studio Code is a tool that enhances your productivity as you program in SAS. SAS Viya Copilot uses Generative Artificial Intelligence (GenAI) to add comments to SAS code, write an explanation for existing SAS code, and generate SAS code based on instructions in comments in a SAS program.

We are presently running a Private Preview program to use SAS Viya Copilot. If you encounter any bugs or have suggestions, please report as [issues](https://github.com/sassoftware/sas-copilot/issues/new/choose).

Please contact ViyaCopilotTeam@sas.com if you have any questions.

# Prerequisites

- VSCode version ≥ 1.89
- [official SAS Extension](https://marketplace.visualstudio.com/items?itemName=SAS.sas-lsp) version ≥ 1.14.0
- a SAS Viya 4 deployment (25.05 or later) for Copilot access keys - SAS Viya, SAS Viya Advanced, SAS Viya Enterprise, SAS Viya Programming

## Connecting to your Viya environment

<b> If you have already set up your Viya environment (for Viya 25.05 or later) in the official SAS Extension, you may skip this step. </b>

1. Go to your official SAS Extension settings (right click the extension, select "Settings")
2. Add a Connection Profile for your Viya environment (or edit the settings.json to add a different profile if you have multiple SAS environments).

For more information on this process, please refer to the [official SAS Extension's documentation](https://sassoftware.github.io/vscode-sas-extension/)

## Enabling the GenAI Gateway Feature

1. Login to your Viya environment (the same one enabled in the previous step)
2. Click the user icon in the top right and select "Manage Features"
3. Search "GenAI Gateway" and toggle the option on.
4. Wait ~30 seconds for the changes to propagate

Congratulations! You should be able to use the SAS Viya Copilot extension now.

**Note**: Your Viya environment must be configured with Copilot access and authorization settings. If you do not see the GenAI Gateway feature, or the toggle is greyed out, please contact your SAS Administrator.

# Running the SAS Viya Copilot Extension

The SAS Viya Copilot extension includes commands to generate code, add comments, and explain code.

### Generate Code

To generate SAS code:

1. Open a SAS program file, or create a new file using SAS language mode.
2. Position the cursor in a SAS comment statement or select a comment block. SAS comments start with `/*` and end with `*/`.
3. Click Generate code.
   The available generated code options will be displayed as gray inline code. Users will need to choose and select the desired code from these options.

<img src="https://github.com/sassoftware/sas-copilot/raw/HEAD/doc/images/CodeGen-SASLight-Cropped.png" alt="Single Line Generate Code Example with two options" width="700"/>

Note: To generate code from a longer, multi-line prompt, highlight entire prompt and then select "Generate Code"

<img src="https://github.com/sassoftware/sas-copilot/raw/HEAD/doc/images/CodeGen-MultiLine-SASLight-Cropped.png" alt="Multi-Line Generate Code Example" width="700"/>

### Add Comments

To add comments to an existing block of SAS code:

1. Open a SAS program file, or create a new file using SAS language mode.
2. Select a block of SAS code and click Add comments. The selected code block is replaced with a block of commented code.

<img src="https://github.com/sassoftware/sas-copilot/raw/HEAD/doc/images/Comments-SASLight-Cropped.png" alt="Add Comments Example" width="600"/>

### Explain Code

To generate an explanation of a block of SAS code:

1. Open a SAS program file, or create a new file using SAS language mode.
2. Select a block of SAS code and click Explain.

<img src="https://github.com/sassoftware/sas-copilot/raw/HEAD/doc/images/Explain-SASLight-Cropped.png" alt="Explain Code Example" width="400"/>

The explanation of the code block is displayed in the SAS Viya Copilot conversation pane on the left side of the application window.

<img src="https://github.com/sassoftware/sas-copilot/raw/HEAD/doc/images/ExplainChatWindow-SASLight-Cropped.png" alt="Code Explanation in Chat Window" width="400"/>

## Alternative Ways to Run Commands

### Context Menu

You can run any of the SAS Viya Copilot commands by right-clicking a selected block of code or comments and selecting a command from the context menu.

<img src="https://github.com/sassoftware/sas-copilot/raw/HEAD/doc/images/ContextMenu-SASLight-Cropped.png" alt="Context Menu Options" width="400"/>

### Visual Studio Code Command Palette

To run SAS Viya Copilot commands with the Command Palette:

1. Select a block of code or comments.
2. Select View > Command Palette or press Ctrl (or Command for Mac users) + Shift + P to open the Command Palette.
3. Enter SAS Copilot in the search box to display the available commands and click the command that you want to use.
