import axios from "axios";
import qs from "qs";

type Question = {
  input: string;
  output: string;
};

type IO = {
  input: string;
  expectedOutput: string;
  output: string;
};

type AnswerSheet = {
  answers: IO[];
  isCorrect: boolean;
};

// BINDER
export const questions: Question[][] = [
  [{ input: "1\n2\n1", output: "-1.0 -1.0\n" }],
];
// BINDER

export const getResult = async (
  questions: Question[],
  code: string
): Promise<AnswerSheet> => {
  let answerSheet: AnswerSheet = { answers: [], isCorrect: true };

  for (let i = 0; i < questions.length; i++) {
    // loop through every question and see output
    let { input, output: expectedOutput } = questions[i];

    const data = qs.stringify({
      code: code,
      language: "py",
      input,
    });

    const config = {
      method: "post",
      url: "https://codex-api.herokuapp.com/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    const result = await axios(config);
    const output = result.data?.output;

    answerSheet.answers.push({
      input,
      output,
      expectedOutput,
    });

    if (output !== expectedOutput) answerSheet.isCorrect = false;
  }

  return answerSheet;
};
