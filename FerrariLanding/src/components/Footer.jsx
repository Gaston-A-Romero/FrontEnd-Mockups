import Arrow from '../assets/plus.svg?react'
export default function Footer(){
    return (
        <section className="flex flex-col flex-nowrap justify-center items-center">
            <article className="w-full  flex justify-center items-center">
                <span className="p-4 bg-zinc-700 uppercase text-white text-center font-light font-[Body-Font] w-full">                    
                        SUBSCRIBE TO THE FERRARI NEWSLETTER
                </span>
            </article>
            <article className="flex flex-col justify-start w-full text-white uppercase font-[Body-Font] text-xs font-extralight
                    md:flex-row md:justify-around md:items-center">
                    <div className="flex justify-between  m-4">
                        <h3 className="p-2">racing</h3>
                        <button>
                            <Arrow className='fill-white click:rotate-45'/>    
                        </button>
                        <div className="hidden">

                        </div>
                    </div>
                    <div className="flex justify-between  m-4">
                        <h3 className="p-2">sports cars</h3>
                        <button className="">
                            <Arrow className='fill-white click:rotate-45'/>
                        </button>
                    </div>
                    <div className="flex justify-between  m-4">
                        <h3 className="p-2">collections</h3>
                        <button>
                            <Arrow className='fill-white click:rotate-45'/>    
                        </button>
                    </div>
                    <div className="flex justify-between  m-4">
                        <h3 className="p-2">experiences</h3>
                        <button>
                            <Arrow className='fill-white click:rotate-45'/>    
                        </button>
                    </div>
                    <div className="flex justify-between  m-4">
                        <h3 className="p-2">about us</h3>
                        <button>
                            <Arrow className='fill-white click:rotate-45'/>    
                        </button>
                    </div>
                    
            </article>
            <article className="social">

            </article>
            <article className="copyright p-4 font-[Body-Font] font-extralight text-[0.5rem] max-w-[600px]">
                <div className='p-2 text-zinc-600'>
                    <p className=''>
                        Ferrari N.V. - Holding company - A company under Dutch law, having its official seat in Amsterdam, the Netherlands and its corporate address at Via Abetone Inferiore No. 4, I-41053 Maranello (MO), Italy, registered with the Dutch trade register under number 64060977
                    </p>
                </div>
                <div>
                    <p className='p-2 text-zinc-600'>
                        Ferrari S.p.A. - A company under Italian law, having its registered office at Via Emilia Est No. 1163, Modena, Italy, Companies’ Register of Modena, VAT and Tax number 00159560366 and share capital of Euro 20,260,000
                    </p>
                </div>
            </article>
            <article className="legal">

            </article>
            <article className="flex justify-center items-center w-full h-[48px] p-[10px]">
                <img src="../public/shell.avif" alt="Shell" className="object-cover h-[34px] w-[35px]"/>
            </article>
        </section>
    )
}