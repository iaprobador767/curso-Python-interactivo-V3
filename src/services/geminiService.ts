
// No longer uses @google/genai

export const evaluatePythonCode = async (code: string): Promise<string> => {
  let outputLines: string[] = [];
  const lines = code.split('\n');
  
  // Very basic variable simulation (only for direct assignment and print)
  const variables: Record<string, any> = {};

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine === '' || trimmedLine.startsWith('#')) {
      continue; // Skip empty lines and comments
    }

    // Extremely basic variable assignment: variable = value
    // Handles: name = "String", age = 25, price = 10.5, is_true = True
    const assignmentMatch = trimmedLine.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)$/);
    if (assignmentMatch) {
      const varName = assignmentMatch[1];
      let varValueStr = assignmentMatch[2].trim();
      let varValue: any;

      if ((varValueStr.startsWith('"') && varValueStr.endsWith('"')) || (varValueStr.startsWith("'") && varValueStr.endsWith("'"))) {
        varValue = varValueStr.substring(1, varValueStr.length - 1); // Store as string
      } else if (varValueStr === "True") {
        varValue = true;
      } else if (varValueStr === "False") {
        varValue = false;
      } else if (!isNaN(parseFloat(varValueStr)) && isFinite(varValueStr as any)) {
        if (varValueStr.includes('.')) {
          varValue = parseFloat(varValueStr); // Store as float
        } else {
          varValue = parseInt(varValueStr, 10); // Store as int
        }
      } else {
        // If it's an unquoted string, it might be a variable reference itself,
        // or just a plain string without quotes in an invalid context.
        // For simplicity, we'll treat it as a string if not a known boolean/number.
        // A real interpreter would error or look up another variable.
        varValue = varValueStr; 
      }
      variables[varName] = varValue;
      continue;
    }

    // Basic print simulation
    const printMatch = trimmedLine.match(/^print\((.*)\)$/);
    if (printMatch) {
      let contentToPrint = printMatch[1].trim();
      // Handle case of empty print() -> prints a newline
      if (contentToPrint === "") {
        outputLines.push("");
        continue;
      }
      
      let args: string[] = [];

      // Rudimentary argument splitting (doesn't handle commas inside strings or complex structures)
      // This regex tries to split by comma, but not if the comma is inside quotes.
      // It's not perfect for all edge cases but better than simple split.
      const rawArgsMatches = contentToPrint.match(/f?(?:("([^"]|\\")*")|('([^']|\\')*')|[^,]+)/g);
      const rawArgs = rawArgsMatches ? rawArgsMatches.map(arg => arg.trim()) : [];
      
      for (const rawArg of rawArgs) {
        let currentArg = rawArg;
        // String literal
        if ((currentArg.startsWith('"') && currentArg.endsWith('"')) || (currentArg.startsWith("'") && currentArg.endsWith("'"))) {
          args.push(currentArg.substring(1, currentArg.length - 1).replace(/\\'/g, "'").replace(/\\"/g, '"'));
        } 
        // f-string (very basic replacement)
        else if ((currentArg.startsWith('f"') && currentArg.endsWith('"')) || (currentArg.startsWith("f'") && currentArg.endsWith("'"))) {
          let fStringContent = currentArg.substring(2, currentArg.length - 1);
          // Replace \${variable} or \${variable:.2f}
          fStringContent = fStringContent.replace(/\$\{(.*?)\}/g, (match, expression) => {
            const parts = expression.split(':');
            const varNameOnly = parts[0].trim();
            const formatSpec = parts.length > 1 ? parts[1] : '';

            if (variables.hasOwnProperty(varNameOnly)) {
              let val = variables[varNameOnly];
              if (formatSpec.endsWith('.2f') && typeof val === 'number') {
                return val.toFixed(2);
              }
              return String(val);
            }
            return `\${${expression}}`; // Keep as is if var not found or complex expression
          });
          args.push(fStringContent);
        }
        // Number
        else if (!isNaN(parseFloat(currentArg)) && isFinite(currentArg as any)) {
          args.push(currentArg);
        }
        // Boolean
        else if (currentArg === "True") {
          args.push("True");
        } else if (currentArg === "False") {
          args.push("False");
        }
        // Variable
        else if (variables.hasOwnProperty(currentArg)) {
          args.push(String(variables[currentArg]));
        }
        // Otherwise, treat as a literal string if it's part of a multi-arg print
        // or an unresolvable variable if it's the only arg.
        else {
          // This could be an error in a real interpreter if it's an undefined variable.
          // For a simulator, printing the name might be acceptable or a specific placeholder.
           args.push(`[${currentArg}]`); // Placeholder for unresolved names
        }
      }
      outputLines.push(args.join(' '));
    }
    // Other Python constructs are ignored by this simple simulator.
  }

  if (outputLines.length === 0 && code.trim() !== '') {
     const hasAttemptedPrint = code.split('\n').some(l => l.trim().startsWith('print('));
     if (hasAttemptedPrint && outputLines.length === 0) { // No output but print was attempted
        return "Nota: Se intentó usar 'print()', pero no produjo salida. Verifica la sintaxis de los argumentos de print().";
     }
     return "El código fue procesado (simulado), pero no contenía sentencias 'print()' que produjeran salida.";
  }

  return outputLines.join('\n');
};

// The isApiKeyAvailable function is no longer needed as Gemini API is removed.
// export const isApiKeyAvailable = (): boolean => {
//   return false; // Or true, it doesn't matter now.
// };
