 
 import Image from "next/image";
 import { Button } from "./ui/button"

 
 
 export default function DontMiss(){
return(
    <section className="my-20 max-w-screen-2xl mx-14">
    <h1 className="font-semibold text-xl mb-3 ml-2">Don&apos;t Miss</h1>
    <Image src={"/images/dontmiss.png"} alt={"flight"}width={1344} height={700} className="items-center"/>
    <div className="flex flex-col justify-center items-center space-y-5 pt-10">
        <h1 className="font-semibold text-2xl md:text-4xl">FLIGHT ESSENTIALS</h1>
        <h2 className="text-[9px] md:text-sm">Your built-to-last,all-week wears—but with style only Jordan Brand can deliver.</h2>
        <Button className="rounded-full">Shop</Button>
    </div>
</section>
  )
}