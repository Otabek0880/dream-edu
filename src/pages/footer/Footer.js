import { FacebookIcon } from "../../assets/facebookIcon";
import { GoogleIcon } from "../../assets/googleIcon";
import { InstagramIcon } from "../../assets/instagramIcon";
import { TwitterIcon } from "../../assets/twitter";
import NavInfo from "./FooterInfo";

const Footer = () => {
  return (
    <div>
      <footer
        id="contact"
        className="flex flex-col md:flex-row justify-center gap-10 w-full bg-blue-950 py-8 px-4 md:px-0"
      >
        <div className="space-y-6 text-center md:text-left">
          {/* <h1 className="text-3xl md:text-4xl text-yellow-500 font-bold">
            Dream Edu
          </h1> */}
          <img style={{borderRadius:'50%'}} width={100} height={100} src="/images/logo-black.png" alt=""/>
          <p className="text-white font-normal text-lg md:text-xl">
            Chet elda tahsil olishni orzu qilganlar uchun. <br /> DreamEdu! Biz
            Bilan Chet Elda O'qing
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="text-2xl md:text-3xl text-white font-bold">
            Foydali Havolalar
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
            <div className="space-y-3 md:space-y-5">
              <p className="text-white font-normal text-base md:text-lg hover:text-yellow-500 cursor-pointer">
                Biz Haqimizda
              </p>
              <p className="text-white font-normal text-base md:text-lg hover:text-yellow-500 cursor-pointer">
                Bizning Tariximiz
              </p>
              <p className="text-white font-normal text-base md:text-lg hover:text-yellow-500 cursor-pointer">
                O'quv dasturlari
              </p>
              <p className="text-white font-normal text-base md:text-lg hover:text-yellow-500 cursor-pointer">
                Aloqa
              </p>
            </div>
            <div className="space-y-3 md:space-y-5">
              <p className="text-white font-normal text-base md:text-lg hover:text-yellow-500 cursor-pointer">
                Bizning Vazifamiz
              </p>
              <p className="text-white font-normal text-base md:text-lg hover:text-yellow-500 cursor-pointer">
                Oliygohlar
              </p>
              <p className="text-white font-normal text-base md:text-lg hover:text-yellow-500 cursor-pointer">
                Galeriya
              </p>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-2xl md:text-3xl text-white font-bold">
            Ijtimoiy Tarmoqlarda Kuzating
          </p>
          <div className="mt-4 md:mt-8 flex justify-center md:justify-start items-center gap-5">
            <div className="cursor-pointer hover:bg-blue-700 p-3 bg-purple-800 rounded-full">
              <a href="#">
              <FacebookIcon />
              </a>
            </div>
            <div className="cursor-pointer hover:bg-blue-700 p-3 bg-purple-800 rounded-full">
              <a href="#">
              <TwitterIcon />
                 </a>
            </div>
            <div className="cursor-pointer hover:bg-blue-700 p-3 bg-purple-800 rounded-full">
              <a href="#">
              <GoogleIcon />
               </a>
            </div>
            <div className="cursor-pointer hover:bg-blue-700 p-3 bg-purple-800 rounded-full">
              <a href="https://www.instagram.com/akmal.teacher/">
              <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <NavInfo />
    </div>
  );
};

export default Footer;
