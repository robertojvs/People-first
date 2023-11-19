import Logo from "./Logo";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            {/* <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" /> */}
            <Logo />

            <span className="whitespace-nowrap inline-flex items-center px-3 py-2 text-sm font-medium text-green rounded-xl bg-green-soft">
              {" "}
              # The Green Charity Transparency Platform{" "}
            </span>
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Join us in making a difference. Every donation, no matter how
              small, can make a lasting impact.
            </p>

            
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Organization
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/about"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="/causes"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Causes{" "}
                </Link>
              </li>



              <li>
                <Link
                  href="/community"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Community{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="https://linktr.ee/people_first_"
                  target="_blank"
                  rel="noreferrer"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Add Your Charity{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-green rounded-md shadow-sm hover:bg-opacity-90 focus:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright {year}, All Rights Reserved by{" "}
          <span className="text-green">People First</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
