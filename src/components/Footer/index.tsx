import Facebook from "@/asstes/icon/Facebook";
import FooterLogo from "@/asstes/icon/FooterLogo";
import Global from "@/asstes/icon/Global";
import LinkedIn from "@/asstes/icon/LinkedIn";
import Logo from "@/asstes/icon/Logo";
import Twitter from "@/asstes/icon/Twitter";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#111D5E] flex items-center justify-center">
      <div className="py-[69px]">
        <div className="flex justify-center">
          <FooterLogo />
        </div>
        <div>
          <div>
            <div className="flex gap-8 pt-[78px] justify-center">
              <Twitter />
              <LinkedIn />
              <Facebook />
              <Global />
            </div>
            <p className="text-white text-base pt-6">© 2023 Lemonhive. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
