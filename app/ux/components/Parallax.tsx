import { ReactNode } from "react";

type parallaxProps = {
    name:string
    children?: ReactNode;
}

export default function Parallax({name, children }:parallaxProps) {
    //console.log(name)
    return (
        <>
            <div style={{backgroundImage: `url(/${name}.jpg)`}} className={`bg-local md:bg-fixed h-[500px] w-full bg-no-repeat bg-cover flex flex-col justify-center items-center text-white relative`}>
            <div className="h-full w-full bg-black/80 absolute"></div>
            <div className="absolute">{children}</div>
            </div>
        </>
    )
}