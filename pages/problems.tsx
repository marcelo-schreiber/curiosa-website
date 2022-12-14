import React, { useState } from "react";
import Header from "../components/header";
import Question from "../components/question";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";
import Head from "next/head";

import { questions } from "../data/questions";
import { AnswerSheet } from "./api/utils/questions";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FaAngleRight } from "react-icons/fa";
import Answer from "../components/answer";

const Problems = () => {
  const [code, setCode] = useState(`# print("hello, world") imprime hello world
# a = input() recebe o input do usuário na variável 'a'
# int('2') transforma o texto '2' no número 2
# escreva seu código aqui`);

  const [isLoading, setIsLoading] = useState(false);
  const { questionNumber, setQuestionNumber } = useLocalStorage("q", 1);
  const [canGoToNextQuestion, setCanGoToNextQuestion] = useState(false);

  const { input, output, imageUrl, problem, title } =
    questions[questionNumber - 1];

  const [questionAnswer, setQuestionAnswer] = useState<null | AnswerSheet>(
    null
  );

  const handleNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    setQuestionAnswer(null);
    setCanGoToNextQuestion(false);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    fetch("/api/runcode", {
      method: "POST",
      body: JSON.stringify({
        code: code,
        questionNumber,
      }),
    })
      .then((x) => x.json())
      .then(({ message }: { message: AnswerSheet }) => {
        setIsLoading(false);
        setQuestionAnswer(message);

        if (message.isCorrect && questionNumber < questions.length) {
          setCanGoToNextQuestion(true);
        }

        if (message.isCorrect && questionNumber === questions.length) {
          alert("Fim!");
        }
      });
  };

  return (
    <>
      <Head>
        <title>Curiosa | Questões</title>
      </Head>
      <main>
        <Header />

        <div className="flex flex-col h-full md:flex-row">
          <div className="md:w-1/2">
            <Question
              input={input}
              output={output}
              title={title}
              imageUrl={imageUrl}
              problem={problem}
            />
            {questionAnswer && (
              <Answer
                answers={questionAnswer?.answers}
                isCorrect={questionAnswer?.isCorrect}
              />
            )}
          </div>
          <div className="mx-6 mt-8 h-96 border-4 rounded md:w-1/2">
            <Editor
              className="h-96"
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, languages.python, "python")}
              tabSize={4}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
              }}
            />
            <div className="flex justify-between items-center">
              <button
                type="button"
                className={`font-bold py-2 px-4 rounded bg-slate-900 text-white my-6 hover:bg-slate-800 ${
                  isLoading ? "cursor-not-allowed" : "cursor-pointer"
                } shadow-slate-900 shadow`}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-400"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                    </svg>
                    <span>Testando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Testar <FaAngleRight />
                  </div>
                )}
              </button>
              {canGoToNextQuestion && (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center justify-center font-bold py-2 px-4 rounded bg-slate-900 text-white my-6 hover:bg-slate-800 shadow-slate-900 shadow"
                >
                  Próxima questão
                  <FaAngleRight />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Problems;
