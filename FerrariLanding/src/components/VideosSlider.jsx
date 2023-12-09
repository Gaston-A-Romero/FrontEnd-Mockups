import {ReactPlayer} from 'react-player'
export default function VideosSlider(){
    return (
        <section className="bg-transparent w-full h-screen object-cover relative top-0 left-0 ">
        <div>
            <video autoPlay={true} loop={true} muted={true} className='w-full h-full object-cover z-1 absolute'>
                <source src="../public/f1video.webm" type="video/webm" />
            </video>
        </div>
        
        <article className='absolute z-20 text-white font-[Body-Font] uppercase bottom-0 w-full text-center pb-[150px]
            flex justify-center items-center flex-col gap-5'>
                <h3 className='text-lg'>racing</h3>
                <h2 className='text-xl'>Scuderia Ferrari</h2>
                <button>Discover More</button>
        </article>
                

      
           
        </section>
    )
}