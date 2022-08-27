// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NodeVM } from "vm2";
import capcon from "capture-console";

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

    if (!code) return res.status(400).json({ message: "Input inválido" });

    const vm = new NodeVM({
      console: "inherit",
      timeout: 1000,
      allowAsync: false,
      sandbox: {},
      wrapper: "none",
    });

    const stdout = capcon.captureStdout(() => vm.run(code));

    const finalResult = stdout.replace(/[\r\n]/gm, "");

    return res.status(201).json({ message: finalResult });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
