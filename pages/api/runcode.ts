// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NodeVM } from "vm2";

type ResProps = {
  message: string | boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResProps>
) {
  try {
    const body = JSON.parse(req.body);
    const code = body?.code;
    let isCorrect = false;

    if (!code) return res.status(400).json({ message: "Input inválido" });

    const vm = new NodeVM({
      console: "off",
      timeout: 1000,
      allowAsync: false,
      sandbox: {},
      wrapper: "none",
    });

    if (vm.run(code) === "hello, world") isCorrect = true;

    return res.status(201).json({ message: isCorrect });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
