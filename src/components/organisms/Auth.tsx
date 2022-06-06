import Button from "../atoms/Button";
import Input from "../molecules/Input";
import axios from "axios";
import { removeCookies, setCookies } from "cookies-next";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Auth() {
  const [username, setUsername] = useState("maurilio");
  const [password, setPassword] = useState("admin");
  const [submiting, setSubmiting] = useState<boolean>(false);

  function resetForm() {
    setUsername("");
    setPassword("");
  }

  async function handleSubmit(event) {
    // Simulate
    event.preventDefault();
    setSubmiting(true);

    toast.loading("Autenticando...", {
      duration: 3000,
      position: "bottom-center",
    });

    await axios
      .post("/login", { username, password })
      .then((response) => {
        setCookies("token", response.data);
        toast.dismiss();
        toast.success("Autenticado", {
          duration: 3000,
          position: "bottom-center",
        });
        setTimeout(() => (window.location.href = "/dashboard"), 1000);
      })
      .catch((error) => {
        removeCookies("token");
        toast.dismiss();
        toast.error("Credenciais inválidas", {
          duration: 3000,
          position: "bottom-center",
        });
      })
      .finally(() => {
        setSubmiting(false);
        resetForm();
      });
  }

  return (
    <div className="flex items-center justify-center py-12 px-2 lg:px-8 bg-gray-50 rounded-lg shadow-md">
      <div className="max-w-md w-full space-y-8 px-2">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Painel Administrativo
          </h1>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={(event) => handleSubmit(event)}
        >
          <Input
            label="Usuário:"
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
            placeholder="Digite seu usuário"
          />

          <Input
            label="Senha:"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder="Digite sua senha"
          />

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-sky-600 hover:text-sky-500"
              >
                {" "}
                Esqueceu sua senha?{" "}
              </a>
            </div>
          </div>

          <Button
            disabled={username === "" || password === ""}
            text="Entrar"
            loading={submiting}
            icon="lock"
            type="submit"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-200 group-hover:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {submiting ? (
              <div>
                <div
                  style={{ borderTopColor: "transparent" }}
                  className="w-5 h-5 border-4 border-gray-100 border-solid rounded-full animate-spin"
                ></div>
              </div>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
