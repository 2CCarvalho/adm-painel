import axios from "axios";
import { useState } from "react";
import Button from "../atoms/Button";
import Table from "../molecules/Table";
import toast from "react-hot-toast";

export default function UsuariosComp() {
  interface Props {
    perPage?: 5 | 10 | 15 | 20;
    page?: number;
    maxUsers?: 10 | 20 | 30 | 40 | 50;
  }

  const head = ["Nome", "Celular", "Email", "País", "Ação"];
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getUsers({ perPage = 10, page = 1, maxUsers = 10 }: Props) {
    setLoading(true);
    toast.loading("Buscando...", {
      duration: 3000,
      position: "bottom-center",
    });
    await axios
      .get(`https://randomuser.me/api/?page=${page}&results=${maxUsers}`)
      .then((response) => {
        setUsers([...response.data.results]);
        toast.dismiss();
        toast.success("Buscado com sucesso!", {
          duration: 3000,
          position: "bottom-center",
        });
      })
      .catch(() => {
        toast.dismiss();
        toast.error("Houve um erro", {
          duration: 3000,
          position: "bottom-center",
        });
      })
      .finally(() => {
        setLoading(false);
      });
    return users;
  }

  return (
    <div>
      <div className="max-w-xs">
        <Button
          text="Buscar"
          loading={loading}
          icon="search"
          onClick={() => getUsers({})}
        >
          Buscar
        </Button>
      </div>
      <Table head={head} body={users} />
    </div>
  );
}
