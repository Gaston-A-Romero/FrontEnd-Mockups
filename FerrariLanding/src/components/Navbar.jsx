import FerrariLogo from "../assets/ferrariLogo.svg?react"
export default function Navbar(){

    return (
        
        <nav className='bg-neutral-950 w-full flex justify-start items-center gap-10 text-white p-6 fixed
                        uppercase 
                        '>
            <div className="flex flex-start w-[50px] h-[55px]">
                <FerrariLogo className="fill-white" />
            </div>
            <li className="flex flex-wrap gap-10 font-normal text-[0.75rem] font-[Body-Font]">
                <ul className="p-3 border-b-2 border-transparent hover:border-white "><a href="">Racing</a></ul>
                <ul className="p-3 border-b-2 border-transparent hover:border-white "><a href="">Sports Cars</a></ul>
                <ul className="p-3 border-b-2 border-transparent hover:border-white "><a href="">Collections</a></ul>
                <ul className="p-3 border-b-2 border-transparent hover:border-white "><a href="">Experiences</a></ul>
                <ul className="p-3 border-b-2 border-transparent hover:border-white "><a href="">About us</a></ul>                
            </li>
        </nav>
    )
}