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

const about = () => {
  return (
    <>
      <Head>
        <title>Sabhareesh Kandikonda | About page</title>
        <meta name="sabhareesh kandikonda" content="about page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText text="explore, learn and hustle!" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About me
              </h2>
              <p className="font-medium">
                Hi, I'm Sabhareesh Kandikonda, a Software Engineer and
                Frontend/Fullstack developer. I am passionate about coding and
                have a knack for problem-solving. Over the course of my career,
                I have had the opportunity to work on a range of interesting and
                innovative products.
              </p>
              <p className="my-4 font-medium">
                As a frontend engineer, I believe that the user experience is
                key. I specialize in creating responsive, accessible, and
                visually appealing interfaces that not only look great but are
                also intuitive and easy to use.
              </p>
              <p className="my-4 font-medium">
                In addition to my frontend expertise, I have experience working
                on both the client and server sides of applications, and am
                proficient in backend technologies such as Node.js and Express.
              </p>
              <p className="font-medium">
                But what truly sets me apart is my passion for coding. I am
                always eager to learn and grow, and am constantly seeking out
                new challenges and opportunities to improve my skills and
                knowledge. I am dedicated to creating high-quality software that
                is efficient, effective, and user-friendly.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="sabhareesh"
                className="w-full h-auto rounded-2xl"
              />
            </div>  
            <div className="col-span-2 flex flex-col h-[75%] items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  {" "}
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  {" "}
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
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
