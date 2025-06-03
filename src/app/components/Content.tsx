import { Button } from "@/components/ui/button";

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
        </header>
    )
}