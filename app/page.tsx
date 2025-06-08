'use client'
import { useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import BotonPrueba from "./Probando/BotonPrueba";

function Alerta() {
  return (
    <div className="flex justify-center">
      <p className="bg-red-500 text-white py-2 px-10">Limite alcanzado</p>
    </div>
  )
}

export default function Home() {  

  return (
    <>
      <Header />
      <Hero />
      <Hero />
      <Hero />
    </>
  );
}
