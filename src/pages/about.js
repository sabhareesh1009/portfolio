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
        <title>Sabhareesh Kandikonda | About page</title>
        <meta name="sabhareesh kandikonda" content="about page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText text="explore, learn and hustle!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About me
              </h2>
              <p className="font-medium">
                Hello, I'm Sabhareesh Kandikonda, a Software Engineer and
                Frontend/Fullstack developer with over 5 years of experience.
              </p>
              <p className="my-4 font-medium">
                My expertise lies in Javascript, React.js, and Next.js. I've had
                the privilege of spearheading numerous projects from inception,
                ensuring exceptional user experiences and optimizing
                performance.
              </p>
              <p className="my-4 font-medium">
                I'm dedicated to crafting efficient, user-friendly software
                while constantly seeking new challenges to further develop my
                skills and knowledge. Let's create something exceptional
                together.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="sabhareesh"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col h-[75%] items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={4} />+
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
