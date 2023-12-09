export default function News(){
    return (
        <section className="h-screen bg-white flex justify-center items-center">
            <article className="flex justify-center items-center flex-col  p-2 max-w-[980px] lg:flex-row">
                <img src="../public/charles.avif" alt="Charles Leclerc" className="object-cover p-8"/>
                <div className="font-[Body-Font]">
                    <h2 className="uppercase text-2xl font-bold p-2">Abu dhabi Grand prix - Charles leclerc ends the season with another podium</h2>
                    <p className="p-2 text-xs text-clip">Scuderia Ferrari has ended the 2023 season with its ninth podium of the season. It came 
                        courtesy of Charles Leclerc, whose second place finish today at the Yas Marina circuit was never in doubt
                    </p>
                    <span className="">
                        <button className="p-2">
                            Read More
                        </button>
                    </span>
                </div>              
            </article>

        </section>
        
    )
}