import { useState } from "react";
import RegisterModalComponent from "../../../../components/RegisteredModal";

export function MainPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      id="main"
      className="font-inter w-full flex flex-col lg:flex-row justify-between items-center bg-black p-4 lg:p-8"
    >
      <div className="w-full lg:w-[50%] p-4 lg:p-5 space-y-4 lg:space-y-8">
        <p className="text-xl lg:text-3xl text-white font-bold">
          Millennium O'quv Markazi 2000-yilda Jurayev Murodillo tomonidan
          tashkil etilgan. 24 yillik tajribaga ega bo'lgan markaz, shu vaqtgacha
          1000 dan ortiq talabaga IELTS imtihonidan yuqori ball olishda yordam
          berdi. Markazning ikkinchi filiali Akhmedjanov Branch 2023-yilda
          ochildi. Asoschilar: • Jurayev Murodillo – 24 yillik tajribaga ega
          o'qituvchi va metodist. • Akmal Akhmedjanov – IELTS imtihonidan 9 ball
          olgan, tajribali Head Teacher.
        </p>
        <p className="text-white font-medium text-base lg:text-lg">
          Markazning asosiy maqsadi: Talabalarga sifatli ta'lim berish va IELTS
          hamda CEFR testlaridan yuqori natijalarga erishishga yordam berishdir
        </p>
        <button
          onClick={handleOpen}
          className="text-white py-2 px-4 lg:py-4 lg:px-8 rounded-xl lg:rounded-2xl text-base lg:text-lg font-medium bg-yellow-600 hover:bg-yellow-500 hover:text-gray-800 transition-all duration-300"
        >
          Sinov darslariga yoziling
        </button>
        <RegisterModalComponent open={open} handleClose={handleClose} />
      </div>
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-4 lg:mt-0">
        <img
          alt=""
          className="w-[300px] h-[300px] lg:w-[550px] lg:h-[550px] rounded-full object-cover"
          src="/images/manager.JPG"
        />
      </div>
    </div>
  );
}
