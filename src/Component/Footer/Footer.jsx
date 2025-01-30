const Footer = () => {
  return (
    <div className="bg-black mt-96 pt-36 relative">
      
      <div className="container mx-auto w-11/12  text-white">
      <div className="conteiner w-11/12 mx-auto absolute bottom-80 rounded-lg hidden md:block">
      <div className="bg-[rgb(255,255,255)]">
      <img className="p-1 rounded-3xl" src="https://i.ibb.co.com/KjWbrwy/bg-shadow.png" alt="" />
      </div>
      <div className="bottom-60 left-96 absolute text-black">
        <h1 className="text-2xl font-black mb-2">Subscribe to our Newsletter</h1>
        <p className="text-base mb-2">Get the latest updates and news right in your inbox!</p>
        <div>
               <input className="rounded-md pl-5 py-2 mb-2 mr-3" type="email" placeholder="Enter your email" />
                <button className="bg-red-500 px-8 py-2 rounded-lg text-base font-medium">
                Submite
              </button>
               </div>
      </div>
      </div>
        <div className="flex items-center justify-center mb-10"> 
          <img className="w-36" src="https://i.ibb.co.com/Fws4BZn/logo-footer.png" alt="" /></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-24" >
            
          <div className="mb-6 text-center">
            <p className="text-xl font-bold mb-5">About Us</p>
            <p className="text-sm font-normal w-52 mx-auto">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="mb-6 text-center">
            <p className="text-xl font-bold mb-5">Quick Links</p>
            <ul className="text-sm font-normal">
              <li>
                <a className="" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="" href="">
                  Picture
                </a>
              </li>
              <li>
                <a className="" href="">
                  Teams
                </a>
              </li>
              <li>
                <a className="" href="">
                  Schedules
                </a>
              </li>
            </ul>

          </div>
          <div className="mb-6 text-center">
          <p className="text-xl font-bold mb-5">Subscribe</p>
            <p className="text-sm font-normal mb-2">Subscribe to our newsletter for the latest updates.</p>
            <div>
              
               <div>
               <input className="rounded-md pl-5 py-2 mb-2 mr-3" type="email" placeholder="Enter your email" />
                <button className="bg-red-500 px-8 py-2 rounded-lg text-base font-medium">
                Submite
              </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
