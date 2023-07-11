import home from './assets/Rectangle.jpg'
import play from './assets/Group 1.jpg'
import pointer from './assets/address.jpg'
import phone from './assets/phone.jpg'
import lock from './assets/lock.jpg'
import estate from './assets/Rectangle 3.jpg'
import tick from './assets/vector.jpg'
import places from './assets/Rectangle04.jpg'
import Estate from './assets/Rectangle 4 (1).jpg'
import Build from './assets/Rectangle5.jpg'
import './App.css'




function App() {
 

  return (
    <>
    
      <div className='md:flex py-5   items-center justify-evenly '>
        <div className='flex justify-between'>
        <div > 
        <h2 className="text-xl font-oleo font-bold pe-6"> Dee's Estate </h2>

        </div>

        {/* links go here */}

        <div className='px-4 cursor-pointer md:hidden ' id='menu'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        </div>
        </div>

        {/*links go here */}
        <div className='font-serif' >
           <h2><a href='/'>Home</a></h2>  
        </div>

        <div>
          <h2><a href='/'>Rent</a></h2>
        </div>
       
        <div>
          <h2><a href='/'>Agent</a></h2>
        </div>

        <div  >
          <h2><a href='/'>Contact Us</a></h2>
        </div>

        <div className='mt-2'>
          <a className='btn bg-blue-600 text-white px-3 py-2  justify-end rounded font-oleo border-none font-bold text-center' href ='/'>Get Started</a>    
        </div>

        </div>
        <hr className='' />
        

        {/*hero-section */}

        <div className='flex grid md:grid-cols-2 px-14 pt-10 font-sans  mt-6'>

          <div className='md:col-span-1'>
            <h1 className="text-6xl text-light text-blue-900 leading-tight">
              Helping you find the <br /> property of your <br /> dreams.
            </h1>
            <h3 className="text-black-300 text-3xl stretched py-3">
              Creating quality urban lifestyles,building <br />stronger communities
            </h3>
            <div className='flex mt-6 gap-10'>
          <a className='btn bg-blue-900 text-white rounded py-2 px-4  border-none font-bold text-center' href ='/'>Learn More</a>    
            <img src={play} alt="play" className='w-10'   />
             </div>

          </div>

          <div className='pt-5' >
            <img src={home} alt="home" className=' rounded-bl-3xl rounded-tr-3xl md:col-span-2'/>
          </div>
       

          
        </div>

        {/*drop-down goes here */}

        <div className="md:flex bg-white-700  justify-evenly items-center rounded-3xl px-5 mx-36 mt-10 h-32 mb-36 font-oleo font-bold   shadow-2xl md:block">

          
           <div className='pb-4'>
          <select className="text-blue-900" >
            <option value="Lekki">Location</option>
            <option value="Lekki">Lekki</option>
            <option value="Lekki">Ajah</option>
            <option value="Lekki">Ikoyi</option>
            
          </select>
          <h3 className="text-gray-400">Lekki</h3>
          </div>

          <div className='pb-4'>

          <select  className="text-blue-900 capitalize">
            <option >Property Type</option>
            <option value="">Duplex</option>
            <option value="">Bungalow</option>
            <option value="">Galvanised</option>
          </select>
          <h3 className="text-gray-400">Duplex</h3>
          </div>

          <div className='pb-4'>
          <select className="text-blue-900">
            <option >Max Price</option>
            <option value="">$10,000</option>
            <option value="">$80,000</option>
          </select>
          <h3 className="text-gray-400">$10,000</h3>
          </div>

          
            <a className='btn flex bg-blue-700 text-white rounded py-2 px-4  border-none font-bold text-center' href ='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <span className='pl-2'>Search</span></a>    
           </div>

        {/* works section */}

        <div className="text-center font-play mb-10 mt-10">
          <h1 className='text-blue-900 text-4xl font-oleo font-bold pb-1'>How it works.</h1>
          <h3 className='text-grey-400 text-2xl tracking-wide'>This is how our products works</h3>
        </div>

        {/* cards goes here */}

        <div className="md:flex text-center font-oleo items-center justify-center mb-64 mx-20 px-20 ">

          <div >
            <img src={pointer} alt="pointer"  className='m-auto w-1/2 '/>
            <h3 className='text-black text-3xl  '>Find Home</h3>
            <h3 className=" text-black">
              our properties are located at <br />
              prime areas where by there <br /> 
              won't be problem with <br /> 
              transportation
      
            </h3>
          </div>

          <div>
          <img src={phone} alt="phone"  className='m-auto w-1/2 '/>
            <h3 className='text-3xl ' >Make payments </h3>
            <h3 className='text-black'>
              our estate comes with  <br />
              good network,portable <br /> 
              water,24hrs light and round <br /> 
              the clock and security
      
            </h3>
          </div>

          
          <div>
          <img src={lock} alt="lock"  className='m-auto w-1/2  '/>
            <h3 className='text-3xl'>Make it Official</h3>
            <h3 className=" text-black-300">
              We have been in business for <br />
              over 32 years,for client <br /> 
              outside the country you can <br /> 
              trust us to deliver well
      
            </h3>
          </div>
        </div>

        {/*choose section */}

        <div className='md:flex px-10 m-auto justify-evenly items-center mb-48 '>
        
            <img src={estate} alt="estate" className=' rounded-bl-3xl rounded-tr-3xl w-1/2 mx-10  '/>

          <div className=''>
            <h3 className="text-blue-900 font-bold font-oleo text-4xl pb-3">
              Why you should choose us.
            </h3 >
            <h3 className="pb-2 text-lg font-Nunito tracking-wide">Creating quality urban lifestyles, building stronger <br />communities</h3>

            <div className='flex  pb-4'>

              <div className='flex '>
              <img src={tick} alt="tick" />
              <h3 className="text-black text-sm font-bold pl-2"> World class </h3>
              </div>

              <div className='flex ml-52'>
                <img src={tick} alt="tick" />
                <h3 className="text-black text-sm font-bold pl-2 capitalize"> Affordable </h3>
              </div>

            </div>

            <div className='flex justify-between'>

                <div className='flex '>
                <img src={tick} alt="tick" />
                <h3 className="text-black text-sm font-bold pl-2"> Trusted </h3>
                </div>

                <div className='flex '>
                <img src={tick} alt="tick" />
                <h3 className="text-black text-sm font-bold pl-2 capitalize"> Amenities </h3>
                </div>

                </div>
          </div>
        </div>


        {/*featured properties */}

        <div className="text-center pb-3">

          <h3 className="text-blue-900 font-oleo text-3xl font-bold pb-2 capitalize">
            Our Featured Properties.
          </h3>

          <h3 className="tracking-wide font-Nunito text-xl">
            One of our biggest product to be featured and that has sold <br /> out of the most
          </h3>
        </div>

        <div className="flex justify-end">
          <a href='/' className='btn bg-blue-900 text-white font-oleo border-none px-10 mb-4 py-2 rounded-lg me-24'>View more</a>
        </div>

       <div className="md:flex justify-evenly px-24 pt-5 rounded-bl-3xl rounded-tr-3xl pb-5  ">

        <div className='md:w-1/4  '>

          <div>
          <img src={places} alt="places" className='rounded-bl-3xl rounded-tr-3xl'  />
          </div>

          <div className="flex justify-between items-center pb-2" >
            <h3 className="text-bold text-black font-bold text-2xl"> The palace </h3>
            <h3 className="text-black text-sm">Duplex</h3>
          </div>
          <div className="flex justify-between" >
            <h3 className="text-sm "> Lekki,phase 2 </h3>
            <h3 className='text-blue-900 font-bold text-sm'>$2,000</h3>
          </div>

        </div>

        <div className='md:w-1/4'>

          <div>
          <img src={Estate} alt="Estate" className='rounded-bl-3xl rounded-tr-3xl' />
          </div>

          <div className="flex justify-between pb-2 items-center" >
            <h3 className="font-bold text-2xl text-black"> IVY RORY </h3>
            <h3 className="text-black text-sm">Duplex</h3>
          </div>
          <div className="flex justify-between" >
            <h3 className="text-sm "> Lekki,phase 2 </h3>
            <h3 className="text-blue-900 font-bold text-sm">$2,000</h3>
          </div>

        </div>
                    <div className='md:w-1/4'>

            <div>
            <img src={Build} alt="Build" className='rounded-bl-3xl rounded-tr-3xl' />
            </div>

            <div className="flex justify-between pb-2 items-center" >
              <h3 className="font-bold text-2xl text-black"> REXONA </h3>
              <h3 className="text-black text-sm">Duplex</h3>
            </div>
            <div className="flex justify-between" >
              <h3 className="text-sm "> Lekki,phase 2 </h3>
              <h3 className="text-blue-900 font-bold text-sm">$2,000</h3>
            </div>

            </div>

       </div>

       {/*testimonials*/}

       <h3 className="text-center text-blue-900 font-oleo font-bold mt-48 text-3xl">Testimonials</h3>
       <h3 className="text-black text-2xl font-Nunito text-center">This is what our client are saying</h3>

       <div className='md:flex md:justify-end me-20 pb-2 sm:flex pl-48 pt-2'>

        <a href="/" className='btn bg-blue-900 border-none font-oleo rounded text-white px-6 py-2'>View more</a>

       </div>

       <div className="md:flex justify-evenly gap-1 px-20 mb-10 rounded border-none">

        <div className="md:w-auto bg-white shadow-xl rounded-bl-3xl rounded-tr-3xl py-2 px-4 mb-5" >

          <h3 className='text-2xl font-bold'> Alex Godwin</h3>
          <h3 className='font-bold pb-3 capitalize'>south africa</h3>

          <h3 className='tracking-wider text-black'>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. Fames ut <br />dictumst urna, lorem nibh. Pretium leo <br />hendrerit interdum netus</h3>

        </div>

        
                <div className="md:w-auto bg-white shadow-xl rounded-bl-3xl rounded-tr-3xl py-2 px-4 mb-5" >

        <h3 className='text-2xl font-bold'> Alex Godwin</h3>
        <h3 className='font-bold pb-3 capitalize'>south africa</h3>

        <h3 className='tracking-wider text-black'>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. Fames ut <br />dictumst urna, lorem nibh. Pretium leo <br />hendrerit interdum netus</h3>

        </div>
        
        <div className="md:w-auto bg-white shadow-xl rounded-bl-3xl rounded-tr-3xl py-2 px-4 mb-5" >

          <h3 className='text-2xl font-bold'> Alex Godwin</h3>
          <h3 className='font-bold pb-3 capitalize'>south africa</h3>

          <h3 className='tracking-wider text-black'>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. Fames ut <br />dictumst urna, lorem nibh. Pretium leo <br />hendrerit interdum netus</h3>

        </div>

        </div>

        <div className="md:flex h-1/2 w-100 px-28 justify-between pt-12 pb-20 items-center bg-blue-900 text-white sm:block mb-3">

          <div className='pb-6'>
            <h1 className='capitalize font-bold font-oleo text-2xl pb-5'>dee's estate</h1>
            <h3>Solution for easy and flexible <br />house hunting.You can trust <br />us anywhere through this <br />platform</h3>
          </div>

          <div className='leading-8 capitalize pb-6'>
            <h2 className='font-bold text-2xl' >Property</h2>
            <h2 className='font-light'>Learning Modules </h2>
            <h3 className='font-light'>Partnership</h3>
            <h3 className='font-light'>Watch demo</h3>
            <h1 className='font-light'>Event</h1>
          </div>

          <div className='leading-8 capitalize pb-6'>
            <h2 className='capitalize font-bold text-2xl'>about</h2>
            <h2 className='font-light'>our company </h2>
            <h3 className='font-light'>career</h3>
            <h3 className='font-light'>investors relations</h3>
            <h1 className='font-light'>social impact</h1>
          </div>
          <div className='leading-8 capitalize pb-6'>
            <h2 className=' font-bold text-2xl'>resources</h2>
            <h2 className='font-light'>Contact </h2>
            <h3 className='font-light'>Give feedback</h3>
            <h3 className='font-light'>system status</h3>
            <h1 className='font-light'>privacy policy</h1>
          </div>






        </div>


      




        
        
        
        

        
      
    </>
  )
}

export default App
