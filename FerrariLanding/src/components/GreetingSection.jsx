export default function GreetingSection() {
    return (
      <article className="bg-lights h-screen w-full flex justify-center items-end">
        {/*<img 
            src="../public/greetingImage.avif"
            alt="Ferrari Light Show"
            className="object-cover w-full max-h-screen "
        />  */}    
        
        
        <div className=" z-2 text-white pb-[100px]">
          <h1 className="font-[Body-Font-M] uppercase text-3xl m-2">a light-filled show</h1>
          <div className="flex flex-row gap-4 pb-8">
            <span className="font-[Body-Font] uppercase text-sm">discover more</span>
          </div>
        </div>
      </article>
    );
  }
  