import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Support from "./pages/support";
import AmazonNodeMailer from "./pages/amazonNodeMailer";
import NodeMailer from "./pages/nodeMailer";
import { Link } from "react-router-dom";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const pageBoss = () => {
    window.open("https://t.me/pageboss", "_blank");
  };

  return (
    <BrowserRouter>
      <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b-2 border-blue-600">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link to="/" className="flex items-center">
            <div className="inline-flex self-center text-2xl font-bold text-blue-600 whitespace-nowrap">
              <span>Node Mailer</span>
              <button
                type="button"
                onClick={pageBoss}
                className="inline-flex items-center justify-center px-3 py-0.5 ml-2 text-sm font-medium text-black bg-green-200 rounded-full"
              >
                <span>by PageBoss</span>
              </button>
            </div>
          </Link>
      
          <div className="flex md:order-2">
              <Link
                to="/amazon"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
              >
                Amazon SMTP
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
          </div>
        </div>
      </nav>

      <div
        id="timeline-modal"
        tabIndex="-1"
        aria-hidden={!isModalVisible}
        className={`${
          isModalVisible ? "block" : "hidden"
        } left-0 xl:left-[550px] md:left-56 lg:left-[550px] sm:left-36 top-56 absolute z-50 justify-center items-center w-full max-h-full`}
      >
        <div className="relative w-full max-w-md max-h-full p-4">
          <div className="relative bg-gray-700 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 border-b border-gray-600 rounded-t md:p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Node Mailer
              </h3>
              <button
                onClick={toggleModal}
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-900 bg-transparent rounded-lg ms-auto hover:bg-gray-600 hover:text-gray-900"
                data-modal-toggle="timeline-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <ol className="relative border-s border-gray-600 ms-3.5 mb-4 md:mb-5">
                <li className="mb-10 ms-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3.5 ring-8 ring-gray-700 bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 stroke-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                  </span>
                  <h3 className="flex items-start mb-1 text-base font-semibold text-gray-900">
                    25,000 emails/day{" "}
                    <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-green-200 text-green-800 ms-3">
                      Update
                    </span>
                  </h3>
                  <time className="block mb-3 text-sm font-normal leading-none text-gray-900">
                    Released on Feb 15th, 2024
                  </time>
                </li>
                <li className="mb-10 ms-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3.5 ring-8 ring-gray-700 bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 stroke-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                  </span>
                  <h3 className="mb-1 text-base font-semibold text-gray-900">
                    92% delivery to inbox
                  </h3>
                  <time className="block mb-3 text-sm font-normal leading-none text-gray-900">
                    SSL/TLS secure
                  </time>
                </li>
                <li className="ms-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3.5 ring-8 ring-gray-700 bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 stroke-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                  </span>
                  <h3 className="mb-1 text-base font-semibold text-gray-900">
                    2 SMTPs
                  </h3>
                  <time className="block mb-3 text-sm font-normal leading-none text-gray-900">
                    Business emails
                  </time>
                </li>
              </ol>
              <a
                href="https://commerce.coinbase.com/checkout/c4645b37-0c4b-4f67-a79b-2f4458648548"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 inline-flex w-full justify-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Get it now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<NodeMailer />} />
        <Route path="/amazon" element={<AmazonNodeMailer />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <footer className="m-4 bg-white rounded-lg shadow">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-900 sm:text-center">
            © 2024{" "}
            <a href="https://Node Mailer.web.app/" className="hover:underline">
              Node Mailer
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 sm:mt-0">
            <li>
              <a href="/support" className="text-blue-600 hover:underline">
                Contact Support
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;