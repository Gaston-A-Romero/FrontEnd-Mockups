import { Navbar, GreetingSection, VideosSlider, News, ProductsInfo, Footer } from './components';
export default function App() {
  

  return (
    <>      
      <Navbar/>
      <div className='snap-proximity'>      
        <GreetingSection/>
        
        <main className='snap-mandatory snap-y'>        
          <VideosSlider/>
          <News/>
          <ProductsInfo/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

