import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Menu from "../components/menu";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <div className="content">
        <p className="subheading">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="title">SPACE</h1>
        <p className="text-content">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <Link href="/destinations">
          <div className="explore">EXPLORE</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
