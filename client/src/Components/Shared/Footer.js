
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className=" bg-[#1E1F1E] bottom-0 left-0 right-0 ">
    <div className="px-2 pt-16 text-white ">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 md:w-[95%] m-auto ">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/home"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
           
          <span className="ml-2 text-2xl font-bold tracking-wide text-white uppercase">
              Doodle
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm ml-2">
            <p className="text-sm text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-white">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-bold tracking-wide text-white">
              Category
            </p>
            <ul className="mt-2 space-y-2">
              <li> <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
                  News
                </a>
              </li>
              <li> <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
                  World
                </a>
              </li>
              <li> <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" >
                  Games
                </a>
              </li>
              <li><a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
                  References
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold tracking-wide text-white">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Web </a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > E-commerce </a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Business</a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"> Entertainment</a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Portfolio </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold tracking-wide text-white">Apples</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Media </a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Brochure </a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"> Nonprofit</a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"> Educational </a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Projects </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold tracking-wide text-white">Cherry</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Infopreneur</a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Personal</a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" > Wiki</a>
              </li>
              <li>
                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"> Forum</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t-2 border-white md:w-[95%] m-auto sm:flex-row">
        <div>
        <p className="text-sm text-white">
         Copyright © 2020 Lorem Inc. All rights reserved.
        </p>
        <p className="text-sm text-white flex">Developed and Desing by <Icon icon="bxs:heart" className="mt-[3px] mx-1 text-blue-500"  width="17px" /> <a href="/" className="hover:text-blue-600">Mehedi Hasan</a></p>
        </div>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <Icon icon="skill-icons:twitter" width="25px"/>
          </a>
          <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <Icon icon="skill-icons:instagram" width="25px"/>
          </a>
          <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <Icon icon="logos:facebook" width="25px"/>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
