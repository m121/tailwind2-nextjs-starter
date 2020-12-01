import Link from 'next/link'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from 'next/router'
import React from "react";

export default function Header(props) {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="sticky top-0">
      <nav
        className={
          (props.transparent
            ? " top-0 absolute z-50 w-full"
            : "relative shadow-sm bg-white") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={
                (props.transparent ? "text-purple-500" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              href="/"
            >
              WEB
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" /><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" /><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" /></svg>
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id=""
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto"></ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
            {router.pathname !== '/' ? <Link href="/#funciona"><a className={
                    "text-purple-500 sm:text-black md:text-black lg:text-purple-500 xl:text-purple-500 hover:text-gray-600" +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
                  }>How it works?</a></Link> :
                <AnchorLink
                  className={
                    "text-purple-500 sm:text-black md:text-black lg:text-purple-500 xl:text-purple-500 hover:text-gray-600" +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
                  }
                  href="#funciona"
                >
                  How it works?
                </AnchorLink>
}
              </li>
              <li className="flex items-center">
            {router.pathname !== '/' ? <Link href="/#planes"><a className={
                    "text-purple-500 sm:text-black md:text-black lg:text-purple-500 xl:text-purple-500 hover:text-gray-600" +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
                  }>Pricing</a></Link> :
                <AnchorLink
                  className={
                    "text-purple-500 sm:text-black md:text-black lg:text-purple-500 xl:text-purple-500 hover:text-gray-600" +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
                  }
                  href="#planes"
                >
                  Pricing
                </AnchorLink>
}
              </li>
            
             
              
            
              <li className="flex items-center">
              {router.pathname !== '/' ? <Link href="/#preguntas"><a className={
                    "text-purple-500 sm:text-black md:text-black lg:text-purple-500 xl:text-purple-500 hover:text-gray-600" +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
                  }>Features</a></Link> :
                <AnchorLink
                  className={
                    "text-purple-500 sm:text-black md:text-black lg:text-purple-500 xl:text-purple-500 hover:text-gray-600" +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
                  }
                  href="#preguntas"
                >
                  Features
                </AnchorLink>
}
              </li>
              <li className="flex items-center">
                <Link href="/inicio"><a
                  className={
                    "text-black sm:text-black md:text-black lg:text-purple-500 xl:text-purple-500 hover:text-gray-600" +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  
                >
                  Sign in
                  </a></Link>
              </li>
              <li className="flex items-center ml-2 lg:ml-0 mb-2 lg:mb-0">
              <Link href="#"><button style={{'backgroundColor': '#893bcc'}} class="inline-flex rounded-md text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg">Sign up</button></Link>
                </li>
           

             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}