import type { NextApiRequest, NextApiResponse } from "next";

import { getResult } from "./utils/questions";
import type { AnswerSheet } from "./utils/questions";
import { inputsAndOutputs } from "../../data/inputsandoutputs";

type ResProps = {
  message: AnswerSheet | string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResProps>
) {
  try {
    const body = JSON.parse(req.body);
    const code = body?.code;
    const questionNumber = body?.questionNumber - 1;

    if (!code) return res.status(400).json({ message: "Input inválido" });

    const question = inputsAndOutputs[questionNumber];

    const isCorrect: AnswerSheet =
      process.env.NODE_ENV !== "production"
        ? await getResult(question, code)
        : {
            answers: [{ expectedOutput: "dev", input: "dev", output: "dev" }],
            isCorrect: true,
          };

    return res.status(200).json({ message: isCorrect });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
