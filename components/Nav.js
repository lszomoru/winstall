import React from "react";
import { useRouter } from "next/router";
import Router from "next/router";

import Link from "next/link";
import styles from "../styles/nav.module.scss";
import {
  FiMoon,
  FiSun,
  FiCoffee,
  FiHelpCircle,
  FiPackage,
} from "react-icons/fi";

import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function Nav() {
    const router = useRouter();

    let switchTheme = () => {
        let body = document.querySelector("body");

        if(body.classList.contains("light")){
            localStorage.setItem("wiTheme", "dark")
            body.classList.replace("light", "dark")
        } else{
            localStorage.setItem("wiTheme", "light")
            body.classList.replace("dark", "light")
        }
    }

    const handleExplainer = () => {
      if(router.pathname === "/eli5"){
        router.push("/");
      } else{
        router.push("/eli5");
      }
    }

    return (
      <header className="container">
        <div className={styles.brand}>
          <Link href="/">
            <a>winstall</a>
          </Link>
          {/* <span className="preview">&nbsp;(preview)</span> */}
        </div>

        <div className={styles.nav}>
          <Link href="/apps">
            <a>
              <FiPackage />
              <p>Apps</p>
            </a>
          </Link>
          <a
            href="https://ko-fi.com/mehedi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiCoffee />
            <p>Donate</p>
          </a>
          <span onClick={handleExplainer}>
            <FiHelpCircle />
          </span>
          <span onClick={switchTheme}>
            <FiMoon className="moon" />
            <FiSun className="sun" />
          </span>
        </div>
      </header>
    );
}

export default Nav;