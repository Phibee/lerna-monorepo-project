import React, { useState } from "react";
// import logo from "./logo.svg";

import "./App.css";
import "@fastraxglobal/shared/lib/assets/global.css";
import { Button, DuoTone } from "@fastraxglobal/shared";

const { Coding, Layout } = DuoTone;

const { Cod001 } = Coding;
const { Lay001 } = Layout;

function App() {
      const userTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
      ).matches;

      const [theme, setTheme] = useState("Dark");

      const themeCheck = React.useCallback(() => {
            if (userTheme === "dark" || (!userTheme && systemTheme)) {
                  document.documentElement.classList.add("dark");
            }
      }, [userTheme, systemTheme]);

      const themeSwitch = React.useCallback(() => {
            if (document.documentElement.classList.contains("dark")) {
                  document.documentElement.classList.remove("dark");
                  localStorage.setItem("theme", "light");
            } else {
                  document.documentElement.classList.add("dark");
                  localStorage.setItem("theme", "dark");
            }
      }, [userTheme, systemTheme]);

      React.useEffect(() => {
            themeCheck();
      }, []);

      return (
            <div id="app" className="dark:bg-slate-900">
                  <div className="w-full min-h-screen font-sans flex">
                        <aside className="w-72 ">
                              <ul className="flex flex-col gap-y-4 pt-20 py-6">
                                    <li>
                                          <a className="flex gap-x-2 items-center px-8 py-3 text-gray-400 hover:text-yellow-500">
                                                <Lay001
                                                      width={22}
                                                      height={22}
                                                />
                                                <span>Overview</span>
                                          </a>
                                    </li>
                                    <li>
                                          <a className="flex gap-x-2 items-center px-8 py-3 text-gray-400 hover:text-yellow-500">
                                                <Cod001
                                                      width={22}
                                                      height={22}
                                                />
                                                <span>Identity Management</span>
                                          </a>

                                          <ul>
                                                <li>
                                                      <a className="flex gap-x-2 items-center px-8 py-3 text-gray-400 hover:text-yellow-500">
                                                            <Lay001
                                                                  width={20}
                                                                  height={20}
                                                            />
                                                            <span>Clients</span>
                                                      </a>
                                                </li>
                                                <li>
                                                      <a className="flex gap-x-2 items-center px-8 py-3 text-gray-400 hover:text-yellow-500">
                                                            <Lay001
                                                                  width={20}
                                                                  height={20}
                                                            />
                                                            <span>Roles</span>
                                                      </a>
                                                </li>
                                                <li>
                                                      <a className="flex gap-x-2 items-center px-8 py-3 text-gray-400 hover:text-yellow-500">
                                                            <Lay001
                                                                  width={20}
                                                                  height={20}
                                                            />
                                                            <span>
                                                                  Projects
                                                            </span>
                                                      </a>
                                                </li>
                                                <li>
                                                      <a className="flex gap-x-2 items-center px-8 py-3 text-gray-400 hover:text-yellow-500">
                                                            <Lay001
                                                                  width={20}
                                                                  height={20}
                                                            />
                                                            <span>Users</span>
                                                      </a>
                                                </li>
                                          </ul>
                                    </li>
                                    <li>
                                          <a className="flex gap-x-2 items-center px-8 py-3 text-gray-400 hover:text-yellow-500">
                                                <Lay001
                                                      width={22}
                                                      height={22}
                                                />
                                                <span>Settings</span>
                                          </a>
                                    </li>
                              </ul>
                        </aside>
                        <main className="flex-1 py-6 px-8">
                              <Button onClick={themeSwitch}>Test</Button>
                        </main>
                  </div>
            </div>
      );
}

export default App;
