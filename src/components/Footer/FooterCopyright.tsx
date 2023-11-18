const FooterCopyright = () => (
  <div className="footer-copyright font-sans py-2 h-16 2xl:h-20 flex flex-row justify-between text-white items-center text-sm ">
    <div className="left flex flex-row divide-x">
      <p className="pr-2">Privacy Policy</p>
      <p className="px-2">Terms & Conditions</p>
    </div>
    <div className="right flex flex-row divide-x">
      <p className="pr-2">© Copyright {new Date().getFullYear()}</p>
      <p className="px-2">ADMAZE</p>
      <p className="px-2">All Rights Reserved</p>
    </div>
  </div>
);

export { FooterCopyright };
