export type Question = {
  input: string;
  output: string;
};

// BINDER
export const questions: Question[][] = [
  [
    { input: "1\n2\n1", output: "-1.0 -1.0\n" },
    { input: "3\n-1\n-2", output: "1.0 -0.6666666666666666\n" },
  ],
];
// BINDER
