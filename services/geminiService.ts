
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn("API_KEY for Gemini is not configured. AI features will be disabled.");
}

export const evaluatePythonCode = async (code: string): Promise<string> => {
  if (!ai) {
    return Promise.resolve("Error: Gemini API key not configured. Cannot evaluate code.");
  }

  const model = "gemini-2.5-flash-preview-04-17";
  const prompt = `
    You are a Python code execution engine.
    Execute the following Python code snippet.
    Your response should ONLY be the direct output that print() statements would produce in a console.
    If there are multiple print() statements, each output should be on a new line.
    If the code results in a syntax error or a runtime error, your response should be a single line starting with "Error: " followed by a concise error message, for example, "Error:division by zero".
    Do not add any explanations, comments, greetings, or any other text beyond the direct console output or the error message.
    Do not use markdown formatting like \`\`\`python or \`\`\`.

    Code to execute:
    ---
    ${code}
    ---
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.1, // For more deterministic output for code execution
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster, direct execution simulation
      }
    });
    
    // Ensure we get the text directly
    const rawText = response.text;
    
    // Basic cleanup: Sometimes models might add "Output:" or similar, though the prompt tries to prevent it.
    // We are expecting raw output or "Error: ..."
    // No complex parsing needed if the prompt is followed correctly.
    return rawText.trim();

  } catch (error) {
    console.error("Error evaluating Python code with Gemini:", error);
    if (error instanceof Error) {
        return `Error: API call failed - ${error.message}`;
    }
    return "Error: An unknown error occurred while evaluating code.";
  }
};

export const isApiKeyAvailable = (): boolean => {
  return !!API_KEY;
};
