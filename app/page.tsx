import Hero from "./ux/principal/Hero";
import Header from "./ux/components/Header";

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
