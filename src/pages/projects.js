import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import projectImage1 from "../../public/images/projects/linkedIn-img.png";
import boxOfficeImg from "../../public/images/projects/box-office.png";
import portfolioImg from "../../public/images/projects/portfolio-img.png";
import linkedInImg from "../../public/images/projects/linkedIn-img.png";
import crazyShopImg from "../../public/images/projects/crazy-shop-img.png";
import gmailImg from "../../public/images/projects/gmail-img.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light  p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" /> */}
      <Link
        href={link}
        tabIndex="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        tabIndex="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
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
        <title>Sabhareesh Kandikonda | Projects page</title>
        <meta name="sabhareesh kandikonda" content="projects page" />
      </Head>
      <main className="w-full">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Box Office App"
                link={"https://box-office-5e075.web.app/"}
                type="Featured Project"
                img={boxOfficeImg}
                github="https://github.com/sabhareesh1009/Box-Office-App"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Gmail App Clone"
                link={"https://clone-ff40a.web.app/"}
                img={gmailImg}
                github="https://github.com/sabhareesh1009/gmail-app"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="LinkedIn App clone"
                link={"https://linkedin-clone-91491.web.app/"}
                img={linkedInImg}
                github="https://github.com/sabhareesh1009/linkedin-app"
              />
            </div>

            <div className="col-span-6">
              {""}
              <Project
                title="Porfolio"
                link={"/"}
                img={portfolioImg}
                github="https://github.com/sabhareesh1009/portfolio"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Crazy shop"
                link={"https://crazy-shop-51b5f.web.app/"}
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
