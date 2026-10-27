import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer_pic_1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sabhareesh Kandikonda | Senior Frontend, Full-Stack & AI Engineer
        </title>
        <meta
          name="description"
          content="Portfolio of Sabhareesh Kandikonda — Senior Software Engineer (7.4+ years) specializing in React, Next.js, Micro-Frontends, Node.js, AI Agents, RAG, and GenAI Workflows."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Sabhareesh Kandikonda"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <div className="self-start lg:self-center mb-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-solid border-dark/20 dark:border-light/20 bg-dark/5 dark:bg-light/5">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                Available for Senior Roles & Global B2B Contracts
              </div>

              <AnimatedText
                text="Engineering AI Workflows, Micro-Frontends & Scalable Web Platforms."
                className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs text-left lg:text-center">
                I’m <strong>Sabhareesh Kandikonda</strong>, a Senior Frontend &
                Full-Stack Engineer with <strong>7.4+ years of experience</strong>{" "}
                building high-scale B2B SaaS, conversational CX, and compliant
                payment ecosystems. Specializing in{" "}
                <strong>React.js, Next.js, TypeScript, and Node.js</strong>, I
                architect fault-tolerant{" "}
                <strong>Micro-Frontends (Module Federation, Nx Monorepos)</strong>{" "}
                and integrate <strong>AI Agents, RAG pipelines, and GenAI workflows</strong>{" "}
                that power 2,000+ enterprise clients with 90+ Lighthouse
                performance.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1EqFY0N1QMDjiZ1OMNNPXwWPtX5kGjcvx/view"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:sabhareeshkandikonda1109@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  target="_blank"
                >
                  Book a Call / Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Sabhareesh Kandikonda"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}