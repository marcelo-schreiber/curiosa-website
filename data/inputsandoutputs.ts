export type Question = {
  input: string;
  output: string;
};

// BINDER
export const inputsAndOutputs: Question[][] = [
  [
    {input: "Mamaco", output: "Mamaco\n"},
    {input: "Macankey", output: "Macankey\n"}
  ],
  [
    {input: "5\n8\n9", output: "360\n"},
    {input: "7\n1\n1", output: "7\n"},
    {input: "40\n2\n3", output: "240\n"}
  ],
  [
    {input: "1", output: "IMPAR\n"},
    {input: "2", output: "PAR\n"},
    {input: "40", output: "PAR\n"},
    {input: "24", output: "PAR\n"},
    {input: "23", output: "IMPAR\n"}
  ],
  [
    {input: "2", output: "DISHONOR\n"},
    {input: "3", output: "HUZZAH\n"},
    {input: "9", output: "HUZZAH\n"},
    {input: "5", output: "DISHONOR\n"}
  ],
  [
    { input: "1\n2\n1", output: "-1.0 -1.0\n" },
    { input: "3\n-1\n-2", output: "1.0 -0.6666666666666666\n" },
  ],
];
// BINDER
