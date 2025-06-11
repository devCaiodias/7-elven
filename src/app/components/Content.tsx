import { Button } from "@/components/ui/button";
import Image from "next/image";
import rewards from "../../../public/7rewards.png";

export default function Content() {
    return (
        <header>
            <div className="bg-[url('/banner.jpeg')] bg-center bg-cover w-full h-[550px] flex items-center justify-items-start px-4">
                <div className="text-white flex flex-col gap-2 ml-7">
                    <h1 className="text-4xl font-extrabold">$4 Meal Deal</h1>
                    <p className="w-72">Don’t wait ‘til hunger turns into hanger.
                    Grab 2 slices and a Big Gulp® drink for
                    $4.† Only with 7REWARDS®.</p>
                    
                    <Button className="bg-white text-black hover:bg-black hover:text-white w-28 rounded-4xl">Find a Store</Button>
                </div>
            </div>

            <div className="grid grid-cols-6 bg-gray-200 border-y border-gray-200">
                <button className="text-center py-14 font-bold border-l border-gray-400  hover:bg-gray-300 first:border-l-0">Hot Foods</button>
                <button className="text-center py-14 font-bold border-l border-gray-400  hover:bg-gray-300">Fresh & Chilled</button>
                <button className="text-center py-14 font-bold border-l border-gray-400  hover:bg-gray-300">Snack Food</button>
                <button className="text-center py-14 font-bold border-l border-gray-400  hover:bg-gray-300">Coffee</button>
                <button className="text-center py-14 font-bold border-l border-gray-400  hover:bg-gray-300">Cold Pressed Juices</button>
                <button className="text-center py-14 font-bold border-l border-gray-400  hover:bg-gray-300">Merch</button>
            </div>

            <div className="flex items-center justify-between my-14 px-4 py-6">
                <div className="text-center">
                    <Image src={rewards} alt="banner rewards" width={483} height={181} className="mb-2.5"/>
                    <h1 className="text-4xl font-extrabold mb-2">How to Play</h1>
                    <p className="mb-4">Use 7REWARDS® when you shop at 7-Eleven® to earn <br /> gameplays. Then, play the Make My Day With $5K</p>
                    <p className="mb-4">in-app game for a chance* to win $5,000.</p>
                    <Button className="px-8 py-5 bg-[#147350] hover:bg-[#438F72] rounded-4xl text-white">Learn More</Button>
                </div>
            </div>
        </header>
    )
}