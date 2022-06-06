import Button from "../../components/atoms/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface Props {
  textButton: string;
  startDate?: string;
  endDate?: string;
}

export default function Chating({
  textButton,
  startDate = "",
  endDate = "",
}: Props) {
  const [textareaValue, setTextareaValue] = useState("");
  const [submiting, setSubmiting] = useState<boolean>(false);

  function resetForm() {
    setTextareaValue("");
  }

  async function handleSubmit(event) {
    // Simulate
    event.preventDefault();
    setSubmiting(true);

    toast.loading("Enviando mensagem...", {
      duration: 3000,
      position: "bottom-center",
    });

    let scheduleText = textareaValue;

    if (startDate !== "" && endDate !== "")
      scheduleText = `Data inicial: ${startDate} - Data final: ${endDate} - ${textareaValue}`;

    await axios
      .post(`/sendmessage`, { text: scheduleText })
      .then((response) => {
        toast.dismiss();
        toast.success("Mensagem enviada!", {
          duration: 3000,
          position: "bottom-center",
        });
      })
      .catch(() => {
        toast.dismiss();
        toast.error("Error ao enviar mensagem", {
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
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="lg:max-w-md mb-14">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-full">
            <label
              htmlFor="message"
              className="form-label inline-block mb-4 text-gray-100 "
            >
              Digite uma mensagem para enviarmos ao grupo do painel através do
              nosso bot do telegram:
            </label>
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        mb-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="message"
              rows={5}
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              placeholder="Sua mensagem"
            ></textarea>
          </div>
        </div>
        <Button
          disabled={textareaValue === ""}
          text={textButton}
          loading={submiting}
          icon="chat"
          type="submit"
        />
      </div>
    </form>
  );
}
