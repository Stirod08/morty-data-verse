import Hero from "./ux/principal/Hero";
import Header from "./ux/components/Header";
import Parallax from "./ux/components/Parallax";


export default function Home() {  
 
  return (
    
    <>
      <div>
        <Header />
        <Parallax name="heroParallax">
          <Hero />     
        </Parallax>
        
      </div>
      
      
    </>
  );
}
