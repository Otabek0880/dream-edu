import { EmailIcon } from "../../assets/emailcon";
import { LocationIcon } from "../../assets/location";
import { PhoneIcon } from "../../assets/phoneIcon";

const NavInfo = () => {
  return (
    <div className="w-full h-auto md:h-[110px] bg-blue-950">
      <div className="flex flex-col md:flex-row h-full items-center justify-around py-4 md:py-0 gap-6 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex gap-3 items-center text-center md:text-left">
            <PhoneIcon />
            <div>
              <p className="text-white font-medium">(+998) 93-685-43-21</p>
              <p className="text-gray-300 font-medium">Bizga qo'ng'iroq qiling</p>
            </div>
          </div>
          <div className="flex gap-3 items-center text-center md:text-left">
            <EmailIcon />
            <div>
              <p className="text-white font-medium">dream.edu@mail.ru</p>
              <p className="text-gray-300 font-medium">Bizga xabar yuboring</p>
            </div>
          </div>
          <div className="flex gap-3 items-center text-center md:text-left">
            <LocationIcon />
            <div>
              <p className="text-white font-medium">
              I.Mo'minov ko'chasi, 9/1 
              Buxoro savdo majmuasi ro'parasida
              </p>
              <p className="text-gray-300 font-medium">Bizning manzil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavInfo;
