import React from "react";
import Image from "next/image";

interface QuestionProps {
  title: string;
  problem: string;
  input: string;
  output: string;
  imageUrl: string;
}

const titleClassname = "font-bold text-xl";

const Question: React.FC<QuestionProps> = ({
  title,
  problem,
  input,
  output,
  imageUrl,
}) => {
  return (
    <div className="mx-6">
      <section className="my-8">
        <h2 className={`${titleClassname} mb-8`}>{title}</h2>
        <p className="font-light text-lg text-justify">{problem}</p>
      </section>
      <section className="md:flex md:justify-between md:items-center">
        <div className="md:w-full md:mr-8">
          <div>
            <h3 className={titleClassname}>Exemplo de input</h3>
            <h4 className="font-light text-xl bg-slate-900 text-white p-2  mb-8 mt-6 rounded">
              {input}
            </h4>
          </div>
          <div>
            <h1 className={titleClassname}>Exemplo output</h1>
            <h4 className="font-light text-xl bg-slate-900 text-white p-2 mt-6 rounded">
              {output}
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 md:max-w-fit">
          <Image
            className="rounded-3xl"
            src={`${imageUrl}`}
            alt="important woman"
            width={225}
            height={275}
          />
        </div>
      </section>
    </div>
  );
};

export default React.memo(Question);
