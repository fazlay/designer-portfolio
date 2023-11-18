const FooterCopyright = () => (
  <div className="footer-copyright font-sans pt-5  flex flex-row justify-center text-black items-center text-sm ">
    <div className="right flex flex-row divide-x">
      <p className="pr-2">© Copyright {new Date().getFullYear()}</p>
      <p className="px-2">Pocket Studio</p>
      <p className="px-2">All Rights Reserved</p>
    </div>
  </div>
);

export { FooterCopyright };
