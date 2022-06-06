import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "../atoms/Icons";
import Avatar from "../molecules/Avatar";
import { removeCookies } from "cookies-next";
import toast from "react-hot-toast";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  const Menus = [
    { title: "dashboard", icon: "home", url: "/dashboard" },
    { title: "usuarios", icon: "users", url: "/dashboard/usuarios" },
    { title: "agendador", icon: "calendary", url: "/dashboard/agendador" },
    { title: "chat", icon: "chat", url: "/dashboard/chat" },
    { title: "configurações", icon: "settings", url: "#" },
    { title: "sair", icon: "logout", url: "#", gap: true },
  ];

  async function logout(type: string) {
    if (type !== "sair") return;
    removeCookies("token");
    toast.loading("Saindo...", {
      duration: 3000,
      position: "bottom-center",
    });
    await new Promise((resolve) =>
      setTimeout(() => (window.location.href = "/"), 1000)
    );
  }

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full h-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-3xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <Icon iconName="menu" />
          </button>
          <Link href="/dashboard">
            <a className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
              Painel Administrativo
            </a>
          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <Avatar />
            </li>
          </ul>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/dashboard">
                    <a className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                      Painel Administrativo
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <Icon iconName="close" />
                  </button>
                </div>
              </div>
            </div>

            <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Navegação
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {Menus.map((menu, index) => (
                <li
                  key={index}
                  className={`items-center ${menu.gap ? "mt-8" : "mt-0"}`}
                  onClick={() => logout(menu.title)}
                >
                  <Link href={`${menu.url}`}>
                    <a
                      className={
                        "text-xs uppercase py-3 font-bold flex items-center gap-x-2 " +
                        (router.pathname === menu.url
                          ? "text-sky-500 hover:text-sky-600"
                          : "text-gray-700 hover:text-gray-500")
                      }
                    >
                      <Icon iconName={menu.icon} />
                      {menu.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
