import Image from "next/image"

export default function Hero() {
    return (
        <>
            <div className="hero min-h-96 w-full">
                <section className="h-full w-full flex flex-col md:flex-row justify-center items-center gap-10 text-center md:text-left p-20">
                    <div>
                        <h1 className="text-7xl font-rickMorty text-toxic">Morty Data Verse</h1>
                        <p className="text-xl text-white/80 mt-4 max-w-xl">
                            Explora el multiverso de datos de Rick and Morty: personajes, dimensiones y más.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-toxic text-black font-bold rounded-full hover:bg-toxic-purple transition">
                            Explorar Personajes
                        </button>
                    </div>
                    <Image src="/hero_rick.png" alt="Rick and Morty Hero" width={300} height={500} priority={true}/>
                </section>
            </div>

        </>
    )
}