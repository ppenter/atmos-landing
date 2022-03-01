import { Transition } from "@headlessui/react";
import { Button, Link, Spacer, useTheme } from "@nextui-org/react";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <nav
      className=" fixed w-full"
      style={{
        flexDirection: "column",
        alignItems: "center",
        zIndex: 10000,
        backgroundColor: isOpen
          ? theme.colors.background.value
          : theme.colors.background.value,
      }}
    >
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div
            className="flex items-center justify-between w-full"
            style={{ marginLeft: "7%", marginRight: "7%" }}
          >
            <div className="flex justify-center items-center flex-shrink-0 ">
              <h1
                className=" font-bold cursor-pointer"
                style={{ fontSize: 30, verticalAlign: "middle", margin: 0 }}
              >
                ATMOS
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link block color="text" href="#">
                  Ecosystem
                </Link>
                <Link block color="text" href="#">
                  Docs&#8599;
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden" style={{ marginRight: "7%" }}>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              auto
              style={{ backgroundColor: "transparent" }}
              icon={!isOpen ? <FaBars /> : <FaTimes />}
            ></Button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        style={{ position: "fixed", width: "100vw", height: "100vh" }}
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              style={{
                backgroundColor: theme.colors.background.value,
                width: "100vw",
                height: "100vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <Link block color="text" href="#">
                  Ecosystem
                </Link>
                <Spacer y={1} />
                <Link block color="text" href="#">
                  Docs&#8599;
                </Link>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
