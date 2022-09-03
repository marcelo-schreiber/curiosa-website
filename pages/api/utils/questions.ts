import axios from "axios";
import qs from "qs";
import type { Question } from "./inputsandoutputs";

type IO = {
  input: string;
  expectedOutput: string;
  output: string;
};

export type AnswerSheet = {
  answers: IO[];
  isCorrect: boolean;
};

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
