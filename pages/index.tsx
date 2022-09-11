import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FaAngleRight, FaGithubSquare } from "react-icons/fa";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Curiosa | Home</title>
      </Head>
      <Header />
      <main className="mx-3 mt-6 xl:flex justify-evenly xl:mt-14">
        <div className="flex flex-col xl:max-w-xl">
          <h2 className="text-center font-semibold text-4xl mb-6 text-slate-900">
            Começar a jornada
          </h2>
          <p className="text-center leading-relaxed text-lg">
            Explore essa ferramenta para aprender sobre lógica de programação na linguagem <span className="font-semibold">PYTHON</span> e,
            ao mesmo tempo, entenda a importância das mulheres no cenário da
            computação.
          </p>
          <div className="ml-auto mb-12">
            <Link href="/problems">
              <a className="flex items-center underline text-lg">
                Explorar <FaAngleRight />
              </a>
            </Link>
          </div>
          <Image
            src="/SampleUsageGirl.svg"
            width={420}
            height={252}
            alt="garota programando no computador"
            priority={true}
          />
        </div>
        <div className="flex flex-col mt-6 xl:max-w-xl xl:mt-0">
          <h2 className="text-center font-semibold text-4xl mb-6 text-slate-900">
            Uma nova maneira de aprender
          </h2>
          <p className="text-center leading-relaxed text-lg">
            Curiosa é uma proposta para reiterar a importante participação
            feminina na computação, por meio de resolução de exercícios nessa
            temática.
          </p>
          <TypeAnimation
            className="text-center font-light text-lg mb-6 text-white bg-slate-900 mt-6 rounded py-2 "
            sequence={[
              "Aprenda sobre mulheres na computação",
              2000,
              "Aprenda lógica de programação",
              2000,
              "Aprenda python",
              2000,
            ]}
            speed={60}
            wrapper="h3"
            repeat={Infinity}
          />
        </div>
        <div className="absolute bottom-5 right-5">
          <a
            href="https://github.com/marcelo-schreiber/curiosa-website"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={48} color="#0F172A" />
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
