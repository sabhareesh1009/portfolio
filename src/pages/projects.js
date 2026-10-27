import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import boxOfficeImg from "../../public/images/projects/box-office.png";
import portfolioImg from "../../public/images/projects/portfolio-img.png";
import linkedInImg from "../../public/images/projects/linkedIn-img.png";
import crazyShopImg from "../../public/images/projects/crazy-shop-img.png";
import gmailImg from "../../public/images/projects/gmail-img.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const CaseStudyCard = ({ badge, title, impact, summary, stack }) => {
  return (
    <article className="w-full h-full flex flex-col justify-between rounded-3xl border border-solid border-dark bg-light p-8 shadow-xl dark:bg-dark dark:border-light relative xs:p-5">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:w-full" />
      <div>
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primaryDark">
            {badge}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-dark text-light dark:bg-light dark:text-dark">
            {impact}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-dark dark:text-light mb-3 sm:text-xl">
          {title}
        </h3>
        <p className="text-sm font-medium text-dark/80 dark:text-light/80 leading-relaxed mb-4">
          {summary}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 pt-3 border-t border-solid border-dark/15 dark:border-light/15">
        {stack.map((item, idx) => (
          <span
            key={idx}
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-dark/5 dark:bg-light/10 text-dark dark:text-light"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github, tags }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2 my-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-2.5 py-1 rounded bg-dark/10 dark:bg-light/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type = "", title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        {summary && (
          <p className="mb-3 text-sm font-medium text-dark/80 dark:text-light/80">
            {summary}
          </p>
        )}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>
          Sabhareesh Kandikonda | Enterprise Architecture & AI Projects
        </title>
        <meta
          name="description"
          content="Enterprise Architecture Case Studies, AI Agents, RAG Pipelines, Micro-Frontends, and Web Applications by Sabhareesh Kandikonda."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Architecture, AI Workflows & Production Engineering."
            className="mb-16 !text-6xl lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl"
          />

          {/* Enterprise Architecture & AI Case Studies Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-left md:text-2xl">
              Enterprise Production Case Studies
            </h2>
            <div className="grid grid-cols-12 gap-10 lg:gap-8 sm:gap-y-10">
              <div className="col-span-6 lg:col-span-12">
                <CaseStudyCard
                  badge="AI Engineering • Agentic Workflows"
                  title="Autonomous AI Agents, RAG & GenAI CX Engine"
                  impact="60–80% Faster Workflows"
                  summary="Designed and integrated conversational AI Agents, Retrieval-Augmented Generation (RAG) knowledge lookups, and streaming LLM interfaces into enterprise CX workspaces, paired with AI-assisted Figma-to-React code generation."
                  stack={[
                    "AI Agents",
                    "RAG Pipelines",
                    "GenAI Workflows",
                    "Next.js / React",
                    "TypeScript",
                    "Claude & Cursor",
                  ]}
                />
              </div>

              <div className="col-span-6 lg:col-span-12">
                <CaseStudyCard
                  badge="Micro-Frontends • Gupshup Converse CX"
                  title="Webpack 5 Module Federation & Runtime S3 Shell"
                  impact="2,000+ Enterprise Clients"
                  summary="Architected the host container from scratch with dynamic runtime remoteEntry.js resolution from AWS S3, SemVer isolation, async React Error Boundaries, and strict singletons—cutting bundle duplication by 35% and boosting Lighthouse from 45 to 90+."
                  stack={[
                    "Webpack 5 Module Federation",
                    "Next.js",
                    "Zustand Singletons",
                    "AWS S3 / CloudFront",
                    "React Error Boundaries",
                    "Datadog",
                  ]}
                />
              </div>

              <div className="col-span-6 lg:col-span-12">
                <CaseStudyCard
                  badge="FinTech & Billing • Nextiva NCX Admin"
                  title="Nx Monorepo Billing & PCI-Compliant Payment Engine"
                  impact="100% Schema-Crash Prevention"
                  summary="Built enterprise license provisioning, seat quotas, and PCI-masked payment flows (React Hook Form, Zod, inline Luhn checks) inside an Nx/Turborepo monorepo with Apollo Client custom typePolicies, TanStack Query, and LaunchDarkly kill-switches."
                  stack={[
                    "Nx / Turborepo",
                    "Apollo Client (GraphQL)",
                    "TanStack Query",
                    "React Hook Form & Zod",
                    "LaunchDarkly",
                    "New Relic",
                  ]}
                />
              </div>

              <div className="col-span-6 lg:col-span-12">
                <CaseStudyCard
                  badge="Full-Stack • Part Analytics"
                  title="Event-Driven Node.js BOM APIs & BullMQ Sync Engine"
                  impact="Scaled 2 ➔ 30 B2B Clients"
                  summary="Engineered high-throughput Express.js REST microservices on AWS and asynchronous BullMQ/Redis message queues executing pub/sub sequential upserts across PostgreSQL databases to power real-time multi-tenant spend analytics."
                  stack={[
                    "Node.js & Express",
                    "BullMQ & Redis",
                    "PostgreSQL",
                    "React & Redux",
                    "Chart.js",
                    "AWS",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Open-Source & Interactive Web Showcases */}
          <h2 className="text-3xl font-bold mb-10 text-left md:text-2xl">
            Open-Source & Interactive Web Showcases
          </h2>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Box Office Discovery Platform"
                link="https://box-office-5e075.web.app/"
                type="Featured Interactive Web Application"
                summary="A fast, offline-capable entertainment discovery progressive web app built with React.js, custom state persistence hooks, dynamic API caching, and responsive Styled Components."
                tags={["React.js", "Custom Hooks", "REST APIs", "Styled Components", "PWA"]}
                img={boxOfficeImg}
                github="https://github.com/sabhareesh1009/Box-Office-App"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Real-Time Workspace UI"
                title="Gmail Enterprise Client Clone"
                summary="Real-time email client architecture featuring Redux state management, Firebase authentication, and instant thread updates."
                link="https://clone-ff40a.web.app/"
                img={gmailImg}
                github="https://github.com/sabhareesh1009/gmail-app"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Social Feed & State Architecture"
                title="LinkedIn Professional Network UI"
                summary="Full-featured social feed application built with React, Redux, and real-time cloud firestore synchronization."
                link="https://linkedin-clone-91491.web.app/"
                img={linkedInImg}
                github="https://github.com/sabhareesh1009/linkedin-app"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Next.js & Framer Motion"
                title="Developer Architecture Portfolio"
                summary="High-performance personal brand and case study platform engineered with Next.js, Tailwind CSS, and Framer Motion."
                link="/"
                img={portfolioImg}
                github="https://github.com/sabhareesh1009/portfolio"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="E-Commerce Checkout & Cart State"
                title="Crazy Shop E-Commerce Storefront"
                summary="Modern e-commerce storefront featuring dynamic product filtering, cart state management, and responsive checkout flows."
                link="https://crazy-shop-51b5f.web.app/"
                img={crazyShopImg}
                github="https://github.com/sabhareesh1009/crazy-shop"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;