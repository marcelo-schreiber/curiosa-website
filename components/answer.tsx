import React from "react";
import { AnswerSheet } from "../pages/api/utils/questions";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const Answer = (props: AnswerSheet) => {
  return (
    <ul className="flex flex-wrap items-center w-full px-6 mt-8 gap-6 justify-center sm:justify-between sm:gap-y-6 sm:gap-x-0">
      {props.answers.map((io, idx) => {
        return (
          <ul
            className="font-light text-lg leading-relaxed tracking-wide"
            key={`${idx}+${io.input}`}
          >
            <li>
              Input proposto: <span className="font-semibold">{io.input}</span>
            </li>
            <li>
              Output esperado:{" "}
              <span className="font-semibold">{io.expectedOutput}</span>
            </li>
            <li>
              Output recebido:{" "}
              <span className="font-semibold">{io.output}</span>
            </li>
            <li>
              {io.output === io.expectedOutput ? (
                <FaCheckCircle color="rgb(34, 197, 94)" />
              ) : (
                <FaTimesCircle color="rgb(239 68 68)" />
              )}
            </li>
          </ul>
        );
      })}
    </ul>
  );
};

export default Answer;
