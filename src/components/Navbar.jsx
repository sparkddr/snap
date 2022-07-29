import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Logo from "../assets/images/logo.svg";

import { MenuIcon } from "@heroicons/react/outline";
import Closemenu from "../assets/images/icon-close-menu.svg";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import NavSubMenu from "./NavSubMenu";

import todoIcon from "../assets/images/icon-todo.svg";
import calendar from "../assets/images/icon-calendar.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";

const Navbar = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  return (
    <nav className="p-4 h-20 flex justify-between items-center max-w-7xl m-auto z-30 relative">
      <div className="flex gap-10 lg:gap-16">
        <img src={Logo} alt="logo" className="object-contain" />
        <ul className="hidden md:flex md:gap-5 lg:gap-10 items-center ">
          <li className=" relative ">
            <span
              className="flex gap-2 hover:text-AlmostBlack transition-colors duration-300"
              onClick={() => {
                setIsFeaturesOpen(!isFeaturesOpen);
              }}
            >
              Features
              <img
                src={ArrowDown}
                alt="Arrow Icon"
                className={
                  "h-2 self-center transition-transform duration-200 " +
                  (isFeaturesOpen && "rotate-180")
                }
              />
            </span>
            {isFeaturesOpen && (
              <NavSubMenu className="top-10 right-0 w-[170px]">
                <li className="grid grid-cols-4  items-center hover:text-AlmostBlack transition-colors duration-300">
                  {" "}
                  <img
                    src={todoIcon}
                    alt="icone"
                    className="h-4 w-fit col-span-1 m-auto"
                  />{" "}
                  <span className="col-span-3 ml-2">Todo List</span>
                </li>
                <li className="grid grid-cols-4  items-center hover:text-AlmostBlack transition-colors duration-300">
                  <img
                    src={calendar}
                    alt="icone"
                    className="h-4 w-fit col-span-1 m-auto"
                  />{" "}
                  <span className="col-span-3 ml-2">Calendar</span>
                </li>
                <li className="grid grid-cols-4 items-center hover:text-AlmostBlack transition-colors duration-300">
                  <img
                    src={reminders}
                    alt="icone"
                    className="h-4 w-fit col-span-1 m-auto"
                  />{" "}
                  <span className="col-span-3 ml-2">Reminders</span>
                </li>
                <li className="grid grid-cols-4 items-center hover:text-AlmostBlack transition-colors duration-300">
                  <img
                    src={planning}
                    alt="icone"
                    className="h-4 w-fit col-span-1 m-auto"
                  />{" "}
                  <span className="col-span-3 ml-2">Planning</span>
                </li>
              </NavSubMenu>
            )}
          </li>
          <li className=" relative ">
            <span
              className="flex gap-2 hover:text-AlmostBlack transition-colors duration-300"
              onClick={() => {
                setIsCompanyOpen(!isCompanyOpen);
              }}
            >
              Company{" "}
              <img
                src={ArrowDown}
                alt="Arrow Icon"
                className={
                  "h-2 self-center transition-transform duration-200 " +
                  (isCompanyOpen && "rotate-180")
                }
              />
            </span>

            {isCompanyOpen && (
              <NavSubMenu className="top-10 left-0 w-[140px] px-6 ">
                <li className="hover:text-AlmostBlack transition-colors duration-300">
                  History
                </li>
                <li className="hover:text-AlmostBlack transition-colors duration-300">
                  Our team
                </li>
                <li className="hover:text-AlmostBlack transition-colors duration-300">
                  Blog
                </li>
              </NavSubMenu>
            )}
          </li>
          <li className="hover:text-AlmostBlack transition-colors duration-300">
            Careers
          </li>
          <li className="hover:text-AlmostBlack transition-colors duration-300">
            About
          </li>
        </ul>
      </div>
      {/* Login Register */}
      <div className="hidden md:flex gap-8 ">
        <button className="hover:text-AlmostBlack transition-colors duration-300">
          Login
        </button>
        <button className="hover:text-AlmostBlack border-2 border-MediumGray hover:border-AlmostBlack px-5 py-2 rounded-2xl transition-colors duration-300">
          Register
        </button>
      </div>
      <div className="md:hidden text-AlmostBlack">
        {!isMainMenuOpen && (
          <MenuIcon
            className="h-10"
            onClick={() => {
              setIsMainMenuOpen(true);
            }}
          />
        )}
      </div>

      {/* Modal */}

      <Transition show={isMainMenuOpen} as={Fragment}>
        <Dialog
          onClose={() => {
            setIsMainMenuOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="absolute right-0 top-0 w-2/3 px-10 h-full bg-AlmostWhite z-30 ">
              <img
                src={Closemenu}
                alt="closing icon"
                onClick={() => {
                  setIsMainMenuOpen(false);
                }}
                className="absolute right-5 top-7"
              />

              <ul className="flex flex-col gap-7 mt-20 text-MediumGray ">
                <li className=" relative ">
                  <span
                    className="flex gap-2 hover:text-AlmostBlack transition-colors duration-300"
                    onClick={() => {
                      setIsFeaturesOpen(!isFeaturesOpen);
                    }}
                  >
                    Features
                    <img
                      src={ArrowDown}
                      alt="Arrow Icon"
                      className={
                        "h-2 self-center transition-transform duration-200 " +
                        (isFeaturesOpen && "rotate-180")
                      }
                    />
                  </span>
                  <Transition
                    show={isFeaturesOpen}
                    enter="transition-all duration-200"
                    enterFrom="opacity-0 -translate-y-6 "
                    enterTo="opacity-100 -translate-y-0 "
                    leave="transition-all duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0 -translate-y-6"
                    className="relative"
                  >
                    <ul className=" flex flex-col gap-3 mt-4 top-10 right-0 w-[170px]">
                      <li className="grid grid-cols-4  items-center hover:text-AlmostBlack transition-colors duration-300">
                        {" "}
                        <img
                          src={todoIcon}
                          alt="icone"
                          className="h-4 w-fit col-span-1 m-auto"
                        />{" "}
                        <span className="col-span-3 ml-2">Todo List</span>
                      </li>
                      <li className="grid grid-cols-4  items-center hover:text-AlmostBlack transition-colors duration-300">
                        <img
                          src={calendar}
                          alt="icone"
                          className="h-4 w-fit col-span-1 m-auto"
                        />{" "}
                        <span className="col-span-3 ml-2">Calendar</span>
                      </li>
                      <li className="grid grid-cols-4 items-center hover:text-AlmostBlack transition-colors duration-300">
                        <img
                          src={reminders}
                          alt="icone"
                          className="h-4 w-fit col-span-1 m-auto"
                        />{" "}
                        <span className="col-span-3 ml-2">Reminders</span>
                      </li>
                      <li className="grid grid-cols-4 items-center hover:text-AlmostBlack transition-colors duration-300">
                        <img
                          src={planning}
                          alt="icone"
                          className="h-4 w-fit col-span-1 m-auto"
                        />{" "}
                        <span className="col-span-3 ml-2">Planning</span>
                      </li>
                    </ul>
                  </Transition>
                </li>
                <li className=" relative ">
                  <span
                    className="flex gap-2 hover:text-AlmostBlack transition-colors duration-300"
                    onClick={() => {
                      setIsCompanyOpen(!isCompanyOpen);
                    }}
                  >
                    Company{" "}
                    <img
                      src={ArrowDown}
                      alt="Arrow Icon"
                      className={
                        "h-2 self-center transition-transform duration-200 " +
                        (isCompanyOpen && "rotate-180")
                      }
                    />
                  </span>

                  <Transition
                    show={isCompanyOpen}
                    enter="transition-all duration-200"
                    enterFrom="opacity-0 -translate-y-6 "
                    enterTo="opacity-100 -translate-y-0 "
                    leave="transition-all duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0 -translate-y-6"
                    className="relative"
                  >
                    <ul className=" flex flex-col gap-3 mt-4 top-10 right-0 w-[170px] px-3">
                      <li className="hover:text-AlmostBlack transition-colors duration-300">
                        History
                      </li>
                      <li className="hover:text-AlmostBlack transition-colors duration-300">
                        Our team
                      </li>
                      <li className="hover:text-AlmostBlack transition-colors duration-300">
                        Blog
                      </li>
                    </ul>
                  </Transition>
                </li>
                <li className="hover:text-AlmostBlack transition-colors duration-300">
                  Careers
                </li>
                <li className="hover:text-AlmostBlack transition-colors duration-300">
                  About
                </li>
              </ul>
              <div className="flex flex-col gap-8 text-MediumGray mt-10 ">
                <button className="hover:text-AlmostBlack transition-colors duration-300">
                  Login
                </button>
                <button className="hover:text-AlmostBlack border-2 border-MediumGray hover:border-AlmostBlack px-5 py-2 rounded-2xl transition-colors duration-300">
                  Register
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </nav>
  );
};

export default Navbar;
