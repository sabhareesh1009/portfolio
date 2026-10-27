import AnimatedNumbers from "@/components/AnimatedNumbers";
import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/developer_pic_2.png";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Sabhareesh Kandikonda | About & Architecture</title>
        <meta
          name="description"
          content="About Sabhareesh Kandikonda — Senior Frontend, Full-Stack & AI Engineer with 7.4+ years of experience across Nextiva, Gupshup, Part Analytics, and Infosys."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Systems Thinking. Full-Stack Scale. AI Velocity."
            className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Hello! I’m <strong>Sabhareesh Kandikonda</strong>, a Senior
                Software Engineer (Frontend, Full-Stack & AI) with{" "}
                <strong>7.4+ years of experience</strong> spearheading the
                architecture of high-growth B2B SaaS, real-time conversational
                CX, and enterprise billing platforms across{" "}
                <strong>Nextiva, Gupshup, Part Analytics, and Infosys</strong>.
              </p>
              <p className="my-4 font-medium">
                On the frontend, I specialize in{" "}
                <strong>React.js, Next.js, and TypeScript</strong>, architecting
                fault-isolated micro-frontends using{" "}
                <strong>Webpack 5 Module Federation</strong> and{" "}
                <strong>Nx/Turborepo monorepos</strong>, dual-layer state
                engines (<strong>Apollo Client GraphQL + TanStack Query</strong>),
                and Storybook design systems—catapulting Lighthouse scores from{" "}
                <strong>45 to 90+</strong> and slashing load times by{" "}
                <strong>2.5s</strong>.
              </p>
              <p className="my-4 font-medium">
                Beyond the browser, I engineer scalable{" "}
                <strong>Node.js and Express.js microservices</strong> on AWS,
                orchestrating asynchronous data pipelines with{" "}
                <strong>BullMQ, Redis, and PostgreSQL</strong>. In the AI era, I
                build and integrate{" "}
                <strong>
                  autonomous AI Agents, RAG pipelines, and GenAI workflows
                </strong>{" "}
                into live enterprise applications—boosting workflow efficiency by{" "}
                <strong>60–80%</strong>.
              </p>
              <p className="font-medium">
                Whether you are hiring a <strong>Senior/Staff Engineer</strong>{" "}
                or seeking a <strong>dedicated B2B Contractor</strong> to
                deliver mission-critical architecture from concept to production,
                let’s build something exceptional together.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Sabhareesh Kandikonda"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col h-[75%] items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2000} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  enterprise clients scaled
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={90} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  lighthouse performance
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;