// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import qs from "qs";

type ResProps = {
  message: string | boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResProps>
) {
  try {
    const body = JSON.parse(req.body);
    const code = body?.code;

    if (!code) return res.status(400).json({ message: "Input inválido" });

    const data = qs.stringify({
      code: code,
      language: "js",
      input: "1\n 2\n 1",
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

    return res.status(201).json({ message: result.data?.output });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
