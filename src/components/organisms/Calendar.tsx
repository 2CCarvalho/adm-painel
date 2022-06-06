import React, { useState } from "react";
import Input from "../molecules/Input";
import Chating from "./Chating";

export default function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="flex flex-row flex-wrap justify-around ">
      <div className="flex flex-col w-full md:w-1/5  gap-y-5">
        <Input
          label="Selecione a data inicial"
          labelColor="text-gray-100"
          id="calendar"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          label="Selecione a data final"
          labelColor="text-gray-100"
          id="calendar"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <p className="text-gray-100 mt-6">Inicio: {startDate}</p>
        <p className="text-gray-100 mb-8">Final: {endDate}</p>
      </div>
      <Chating
        textButton="Enviar Evento"
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}
