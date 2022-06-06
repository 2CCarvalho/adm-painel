import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../atoms/Button";
import Icon from "../atoms/Icons";

interface Props {
  head: string[];
  body: any[];
}

export default function Table({ head, body }: Props) {
  const [userSelected, setUserSelected] = useState("");

  function toggleModal(user?) {
    document.getElementById("modal").classList.toggle("hidden");
    if (user) setUserSelected(user);
  }

  async function deleteUser() {
    toast.loading("Excluindo...", {
      duration: 3000,
      position: "bottom-center",
    });
    const text = `O user ${userSelected} foi deletado`;
    await axios
      .post(`/sendmessage`, { text })
      .then((response) => {
        toast.dismiss();
        toast.success("Excluído!", {
          duration: 3000,
          position: "bottom-center",
        });
      })
      .catch(() => {
        toast.dismiss();
        toast.error("Erro ao excluir este usuário", {
          duration: 3000,
          position: "bottom-center",
        });
      })
      .finally(() => {
        toggleModal();
      });
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white mt-20 w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-gray-700">
                Usuários
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto bg-white">
          <table className="items-center w-full bg-transparent border-collapse text-black ">
            <thead className="thead-light">
              <tr>
                {head?.map((item, index) => (
                  <th
                    className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    key={index}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body?.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex-1">
                    {item.name.first}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex-1">
                    {item.cell}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex-1">
                    {item.email}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex-1">
                    {item.location.country}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex-1 flex flex-row gap-x-6">
                    <button
                      type="button"
                      onClick={() => toggleModal(item.name.first)}
                    >
                      <Icon iconName="edit" classDiv="cursor-pointer" />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleModal(item.name.first)}
                    >
                      <Icon iconName="close" classDiv="cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="flex flex-col justify-center items-start my-8 gap-y-6 px-8">
              <div className="flex flex-row gap-x-4">
                <Icon iconName="exclamation" classDiv="w-10 h-10" />
                <div className="flex flex-col">
                  <p className="font-medium text-xl">
                    Você tem certeza que desejar excluir este usuário?
                  </p>
                  <small className="block text-red-900 mt-3">
                    Atenção: Ao excluir este usuário, será enviada uma mensagem
                    desta ação para o grupo no telegram
                  </small>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right flex flex-row gap-x-5">
              <Button
                text="Não, cancelar"
                bg="gray"
                loading={false}
                onClick={() => toggleModal()}
              />

              <Button
                text="Sim, excluir"
                bg="red"
                loading={false}
                onClick={() => deleteUser()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
