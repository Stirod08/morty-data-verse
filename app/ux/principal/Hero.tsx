import Image from "next/image"

export default function Hero() {
    return (
        <>
            <section className="flex flex-col md:flex-row justify-center items-center gap-10 text-center md:text-left p-20">
                <div>
                    <h1 className="text-7xl font-rickMorty text-toxic">Morty Data Verse</h1>
                    <h2 className="text-xl text-toxic mt-4 max-w-xl">
                        ¡Explora el Multiverso de Rick and Morty!
                    </h2>
                    <p className="text-xl text-white/90 mt-4 max-w-xl">Tu puerta de acceso oficial para descubrir personajes, episodios y universos de la serie que cambió la animación para siempre.</p>
                </div>
            </section>
        </>
    )
}