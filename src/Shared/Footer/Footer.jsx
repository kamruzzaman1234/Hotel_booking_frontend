const Footer = ()=>{
    return(
        <div className="bg-[#00001a]">
            <div className="container">
                <footer className="footer sm:footer-horizontal  text-base-content p-10">

    <form className="">
    <h6 className="text-[18px] uppercase mb-3 text-white font-bold">Newsletter</h6>
    <fieldset className="w-80">
      <label className="text-[17px] text-white font-medium">Enter your email address</label>
      <div className="join mt-4">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item " />
        <button className="btn bg-black text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
      <nav className="space-y-1">
       <h6 className="text-[14px] md:text-[16px] lg:text-[18px] uppercase mb-3 text-white font-bold">Services</h6>
       <a className="link text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Branding</a>
       <a className="link text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Design</a>
       <a className="link text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Marketing</a>
       <a className="link text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Advertisement</a>
   </nav>
  <nav className="space-y-1">
    <h6 className="text-[14px] md:text-[16px] lg:text-[18px] uppercase mb-3 text-white font-bold">Company</h6>
    <a className="link text-[14x] md:text-[15px] lg:text-[16px] font-normal text-white  link-hover">About us</a>
    <a className="link text-[14x] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Contact</a>
    <a className="link text-[14x] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Jobs</a>
    <a className="link text-[14x] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Press kit</a>
  </nav>
  <nav className="space-y-1">
    <h6 className="text-[14px] md:text-[16px] lg:text-[18px] uppercase mb-3 text-white font-bold">Legal</h6>
    <a className="link text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Terms of use</a>
    <a className="link text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Privacy policy</a>
    <a className="link text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white link-hover">Cookie policy</a>
  </nav>
  
</footer>
            </div>
        </div>
    )
}
export default Footer;