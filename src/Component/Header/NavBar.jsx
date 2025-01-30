import './Nav.css';

const NavBar = ({ biddingPrice, handelClaim, claim }) => {
  return (
    <header>
      <nav className="flex mb-6 items-center justify-between container w-11/12 mx-auto sticky top-0 z-40
      border-buttom pb-1
      ">
        <div>
          <a href=""><img src="https://i.ibb.co.com/PCxBsKX/logo.png" alt="" /></a>
        </div>
        <div className=''>
          <ul className="flex">
            <li><a className="mr-10 text-base text-color hidden md:block" href="">Picture</a></li>
            <li><a className="mr-10 text-base text-color hidden md:block" href="">Teams</a></li>
            <li><a className="mr-10 text-base text-color hidden md:block" href="">Schedules</a></li>
            <button className='flex items-center border border-[rgba(19,19,19,0.1)] px-3 rounded-md'>
              {claim}
              <span className='ml-1'>Coin</span>
              <img className='w-5 ml-2' src="https://i.ibb.co.com/dp9k1Vk/dollar-1.png" alt="" />
            </button>
          </ul>
        </div>
      </nav>
      <div style={{background: 'url(https://i.ibb.co.com/KjWbrwy/bg-shadow.png), #131313', backgroundSize: "cover"}}
           className="mt-12 border container w-11/12 mx-auto mb-20 rounded-lg h-[537px] flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img src="https://i.ibb.co.com/4TR9F9G/banner-main.png" alt="" />
        </div>
        <div className='text-white text-center mb-20'>
          <h1 className='mt-6 text-4xl font-bold mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='text-2xl font-medium text-[#FFFFFFB3]'>Beyond Boundaries Beyond Limits</p>
          <div>
            <button 
              className='text-base font-bold text-[#131313] bg-[#E7FE29] px-5 py-2 mt-5 rounded-md'
              onClick={handelClaim}
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
