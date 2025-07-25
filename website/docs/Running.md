---
sidebar_position: 3
---

# Running the SAS Viya Copilot Extension

The SAS Viya Copilot extension includes commands to generate code from a comment, add comments to existing code, and explain code.

## Generating Code

To generate SAS code from a comment:

1. Open a SAS program file, or create a new file using SAS language mode.

2. Position the cursor in a SAS comment statement or select a comment block. SAS comments start with `/*` and end with `*/`.

3. Click **Generate code**. The available generated code options will be displayed as gray inline code. Select the code that you want to use from the options.

![Generate code](/images/CodeGen-SASLight-Cropped.png)

**Note**: To generate code from a longer, multi-line comment, select the entire comment and then select **Generate code**.

![Generate code multiline](/images/CodeGen-MultiLine-SASLight-Cropped.png)

## Adding Comments

To add comments to an existing block of SAS code:

1. Open a SAS program file, or create a new file using SAS language mode.

2. Select a block of SAS code and click **Add comments**. The selected code block is replaced with a block of commented code.

![Add comments](/images/Comments-SASLight-Cropped.png)

## Explaining Code

To generate an explanation of a block of SAS code:

1. Open a SAS program file, or create a new file using SAS language mode.

2. Select a block of SAS code and click **Explain**.

![Explain](/images/Explain-SASLight-Cropped.png)

The explanation of the code block is displayed in the SAS Viya Copilot conversation pane on the left side of the application window.

![Explain Chat Window](/images/ExplainChatWindow-SASLight-Cropped.png)
