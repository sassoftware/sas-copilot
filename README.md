# Overview 

The SAS Viya Copilot Extension for Visual Studio Code is a great tool to enhance your productivity as you program in SAS. SAS Viya Copilot uses Generative Artificial Intelligence (GenAI) to add comments to a block of SAS code, write an explanation of a block of SAS code, and generate SAS code based on a block of comments in a SAS program.

We are presently undergoing internal testing. If you encounter any bugs or have suggestions, please report as [issues](https://github.com/sassoftware/sas-copilot/issues/new/choose)

please contact jon.leirer@sas.com if you have any questions.

# SAS Coverage

## Covered Procs

The support set of covered procedure can be found [here]().

# Frequently Asked Questions

## Installation
To install the SAS Viya Copilot extension:
1.	Open the Extensions view by clicking the Extensions icon in the Activity Bar on the left side of the Visual Studio Code window. 
2.	Search for the SAS Copilot extension and click Install. 

For the richest experience, including syntax highlighting, code completion, and many other features, use this extension along with the [official SAS Extension](https://marketplace.visualstudio.com/items?itemName=SAS.sas-lsp)

## Specifying the API Key 
An API key is required to use this extension. Please contact jon.leirer@sas.com if you are having trouble finding your API key.

When you run any of the commands (Add comments, Explain, or Generate code) for the first time, you are prompted to enter your API key.

Note: After you enter your API key the first time, the key is saved and used for additional commands until you explicitly clear the key. To clear the API key, press Ctrl (or Command for Mac users) + Shift + P, and run the SAS Copilot: Clear API key command.

## Running the SAS Viya Copilot Extension
The SAS Viya Copilot extension includes commands to add comments, explain code, and generate code.

### Generate Code
To generate SAS code:
1.	Open a SAS program file, or create a new file using SAS language mode.
2.	Position the cursor in a SAS comment statement or select a comment block. SAS comments start with /* and end with */.  
3.	Click Generate code. 
The generated code is inserted in your program after the selected comment. 

### Add Comments
To add comments to an existing block of SAS code:
1.	Open a SAS program file, or create a new file using SAS language mode.
2.	Select a block of SAS code and click Add comments. The selected code block is replaced with a block of commented code.

### Explain Code
To generate an explanation of a block of SAS code:
1.	Open a SAS program file, or create a new file using SAS language mode.
2.	Select a block of SAS code and click Explain.
The explanation of the code block is displayed in the SAS Viya Copilot conversation pane on the left side of the application window. 

## Alternative Ways to Run Commands
### Context Menu
You can run any of the SAS Viya Copilot commands by right-clicking a selected block of code or comments and selecting a command from the context menu. 

### Visual Studio Code Command Palette
To run SAS Viya Copilot commands with the Command Palette: 
1.	Select a block of code or comments.
2.	Select View > Command Palette or press Ctrl (or Command for Mac users) + Shift + P to open the Command Palette. 
3.	Enter SAS Copilot in the search box to display the available commands and click the command that you want to use. 

## Usage questions

###

