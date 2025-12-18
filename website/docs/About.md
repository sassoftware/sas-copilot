---
sidebar_position: 5
---

# About the SAS Viya Copilot Extension

## Summary of Training Content

To view the public summary of the training content for the SAS Viya Copilot Extension for Visual Studio Code, see [here](https://github.com/sassoftware/sas-copilot/blob/kibpat-docs/Code%20Gen%20Training%20Summary.pdf).

## Model Information for Third Party Models

### Model Overview

**Legal name for model provider that SAS leverages:** SAS Institute Inc.

**Model name:**
- CodeSAS v 2025.10.0 is used to generate code
- GPT 4.1 is used to explain/comment on the code

**Link to model documentation:** [Azure AI Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure?view=foundry-classic&pivots=azure-openai&tabs=global-standard-aoai%2Cstandard-chat-completions%2Cglobal-standard)

### Input and Output

**Input modalities and size limit for each modality as used by SAS:** Text; 128,000 tokens

**Output modalities and size limit for each modality as used by SAS:** Text; 128,000 tokens

### Use and Limitations

#### Prerequisites

SAS Viya 4

#### Acceptable Use Policy

[http://www.sas.com/acceptableuse](http://www.sas.com/acceptableuse)

#### Intended Use

SAS Viya Copilot uses Generative Artificial Intelligence (GenAI) to add comments to SAS code, write an explanation for existing SAS code, and generate SAS code based on instructions in comments in a SAS program.

#### Context for Deployment

This model supports features in SAS software in a specific context but cannot be more broadly incorporated into customer AI systems.

#### Best Practices

- For explanations or comments, customers can submit their questions and receive answers based on SAS product documentation, providing clarification or commentary on the code.
- For code generation, the intended use is to produce SAS code in response to a user's query, which will then be reviewed by a human.
- Be as clear and specific as possible in your prompt.
- Be intentional with the tone of your prompt because the AI-generated suggestions often match the tone of the original prompt.
- Ensure that your prompts are safe and respectful.
- Enter your prompts in natural language English.
- Avoid words or phrases in your prompt that are culturally specific, such as slang or idioms that are not easily understood by others.
- If you are not getting good results, try rephrasing your prompt.
- If you need more specific information, ask follow-up questions.

#### Known Issues or Limitations

- The system may occasionally produce errors in its responses or generated code, including incorrect syntax, incomplete logic, or misinterpretation of the user's intent.
- Additionally, certain aspects of the SAS language—particularly specialized procedures, advanced macro programming, or less commonly used options—may not be fully or consistently supported.
- As a result, output should be carefully reviewed by a knowledgeable user to ensure accuracy and alignment with SAS best practices.
