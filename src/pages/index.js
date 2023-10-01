import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer_pic_1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Sabhareesh Kandikonda | Home</title>
        <meta name="Porfolio" content="sabhareesh portfoilo home page" />
        
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="sabhareesh"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="https://drive.google.com/file/d/1ZpmIBi3t48TzU6n60nFitZom1yhuK0AY/view?usp=drive_link"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:sabhareeshkandikonda1109@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                  target="_blank"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="sabhareesh" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
