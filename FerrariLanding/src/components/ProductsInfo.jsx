export default function ProductsInfo(){
    return (
        <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 h-full ">
            <article className="bg-red-800 overflow-hidden">
                <img src="../public/bag.avif" alt="" className="hover:scale-125  duration-[5000ms]" />
            </article>
            <article className="bg-red-800 overflow-hidden w-full h-full">
                <div>
                    <img src="../public/ferrariMagazine.avif" alt=""  className="hover:scale-125  duration-[5000ms]"/>
                </div>
                <div className="absolute">
                    <h2></h2>
                </div>
                
            </article>
            <article className="bg-red-800 overflow-hidden w-full h-full">
                <img src="../public/preOwned.avif" alt=""  className="hover:scale-125 ease-in-out  duration-[5000ms]"/>
            </article>
            <article className="bg-red-800 overflow-hidden w-full h-full">
                <img src="../public/oldies.avif" alt=""  className="hover:scale-125 ease-in-out  duration-[5000ms]"/>
            </article>
            <article className="bg-red-800 overflow-hidden w-full h-full">
                <img src="../public/finali.avif" alt=""  className="hover:scale-125 ease-in-out  duration-[5000ms]"/>
            </article>
            <article className="bg-red-800 overflow-hidden w-full h-full">
                <img src="../public/ogModels.avif" alt=""  className="hover:scale-125 ease-in-out  duration-[5000ms]"/>
            </article>
            
        </section>
    )
}