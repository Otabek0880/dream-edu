import { useState } from "react";
import { ContractIcon } from "../../../../assets/contractIcon";
import { EmployeeIcon } from "../../../../assets/employeeIcon";
import { GraphIcon } from "../../../../assets/graphIcon";
import RegisterModalComponent from "../../../../components/RegisteredModal";
import { Button, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import api from "../../../../api"; // Assuming you have an API utility for handling requests

export function AboutUs() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Ism familiya talab qilinadi"),
    phone: Yup.string().required("Telefon raqam talab qilinadi"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      phone: "",
      application_answer: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        const response = await api.post(
          selectedOption == "option1"
            ? "/leads/forms/answer/663f3ac7-15d9-407c-8cbf-9142b988cfa0/"
            : "/leads/forms/answer/878e24e3-0375-4d56-b453-4bc3d5c6cdb9/",
          {
            ...values,
            phone:values.phone.replace(/\s+/g, ""),
            application_answer: "",
          }
        );

        if (response.status === 201) {
          toast.success("Muvaffaqiyatli yuborildi!", {
            position: "top-center",
          });
          resetForm();
          handleClose();
        }
      } catch (error) {
        if (error.response) {
          formik.setErrors(error.response.data);
          toast.error("Xatolik yuz berdi: " + error.response.data.message);
        } else {
          toast.error("Tarmoq xatoligi: " + error.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full font-inter pb-9 bg-black" id="about-us">
      <p className="text-2xl md:text-4xl font-bold text-white text-center">
        Biz haqimizda
      </p>
      <div className="space-y-8 md:space-y-10">
      <iframe width="100%" height="1015" className="p-10" src="https://www.youtube.com/embed/M9zBAl-gi1w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="space-y-8 md:space-y-10 py-6 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <img
              alt=""
              className="w-[90%] md:w-[500px] bg-cover rounded-xl h-[250px] md:h-[500px]"
              src="/images/study-center.jpg"
            />
            <p className="w-[90%] md:w-[50%] text-white font-bold text-lg md:text-2xl">
              Ta'lim intensiv kurslar orqali olib boriladi, va o'quvchilar
              to'liq shaxsiy yondashuvni ta'minlaydigan metodologiya asosida
              o'qitiladi. • Taklif qilinayotgan kurslar: o IELTS (International
              English Language Testing System) o CEFR (Common European Framework
              of Reference for Languages) • Kurslar qanday usulda olib boriladi?
              Faoliyat faqat offline tarzda olib boriladi, chunki markazimiz
              sifatni kafolatlash va o'quvchilar bilan yuzma-yuz ishlashga katta
              e'tibor qaratadi.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p className="w-[90%] md:w-[50%] text-white font-bold text-lg md:text-2xl">
              • Ta'minlanadigan materiallar va resurslar: 24 yillik metodikaga
              asoslangan maxsus darsliklar to'plamiga ega bo'lib, talabalar
              uchun turli testlar, video darslar, va interaktiv mashqlar mavjud.
              • O'qituvchilar: Markazda faqat IELTS imtihonidan kamida 7.5-8-9
              ball olgan, o'zlarining tajribalarini muvaffaqiyatli talabalarga
              yetkazadigan o'qituvchilar ishlaydi
            </p>
            <img
              alt=""
              className="w-[90%] md:w-[560px] bg-cover rounded-xl h-[250px] md:h-[500px]"
              src="/images/v1.jpg"
            />
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0">
          <div className="flex flex-col items-center text-center">
            <EmployeeIcon />
            <p className="text-xl md:text-2xl font-bold text-white">
              Malakali Hodimlar
            </p>
            <p className="text-gray-400 font-normal text-sm md:text-lg">
              We have a culturally diverse, forward-thinking team.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <GraphIcon />
            <p className="text-xl md:text-2xl font-bold text-white">
              Proffesional O'qituvchilar
            </p>
            <p className="text-gray-400 font-normal text-sm md:text-lg">
              Business strategy is the means by which it sets.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ContractIcon />
            <p className="text-xl md:text-2xl font-bold text-white">
              Qonuniy Shartnoma
            </p>
            <p className="text-gray-400 font-normal text-sm md:text-lg">
              Make your dream come true, have ideas, goals.
            </p>
          </div>
        </div>

        {/* Large Image Section */}
        <div className="rounded-lg font-inter bg-white m-10 flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-10">
          <img
            className="w-full  md:w-[40%] h-[250px] md:h-[750px] object-cover rounded-lg"
            alt=""
            src="/images/logo.png"
          />
          <div className="w-full md:w-[50%] p-6 md:p-10 space-y-6 md:space-y-10 rounded-xl bg-white">
            <h1 className="text-2xl md:text-3xl font-bold">5 yillik tajriba</h1>
            <p className="text-base md:text-lg text-gray-500 font-normal">
              Markazning yutuqlari va muvaffaqiyatlari: • IELTS
              muvaffaqiyatlari: 500 dan ortiq talabalar IELTS imtihonini
              muvaffaqiyatli topshirishdi. Bu talabalarning 80% 7+ ballga
              erishishgan. • Muvaffaqiyatli talabalar: Talabalarimiz Koreya,
              Londonning eng yaxshi universitetlariga hamda O'zbekistonning top
              universitetlariga kirishgan.
              <br />
              <span>
                Boshqa markazlardan ajratib turadigan xususiyatlar:
                <br />
                o Yuqori malakali o'qituvchilar.
                <br />
                o Maxsus metodika.
                <br />
                o Talabalar uchun individual yondashuv.
                <br />
              </span>
            </p>
          </div>
        </div>

        {/* Mock Exams Registration Section */}
        <div className="bg-white flex flex-col md:flex-row gap-6 md:gap-10 m-10 rounded-lg p-4 md:p-10">
          <img
            className="w-full md:w-[50%] h-[250px] md:h-[750px] object-cover rounded-lg"
            alt=""
            src="/images/mock-exams.jpg"
          />
          <div className="w-full md:w-[50%] p-6 md:p-10 space-y-6 md:space-y-10 rounded-xl bg-white">
            <h1 className="text-2xl md:text-3xl font-bold">
              Mockda ishtirok etish uchun ro'yxatdan o'ting
            </h1>

            <form className="space-y-5" onSubmit={formik.handleSubmit}>
              <MuiTelInput
                fullWidth
                value={formik.values.phone}
                onChange={(newValue) => formik.setFieldValue("phone", newValue)}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Ism familiya"
                variant="outlined"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
              />

              <FormControl style={{ display: "block" }} component="fieldset">
                <FormLabel component="legend">
                  Qaysi payitdagi mock uchun
                </FormLabel>
                <RadioGroup
                  aria-label="options"
                  name="options"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <FormControlLabel
                    value="option1"
                    control={<Radio />}
                    label="oyning 2-haftasiga"
                  />
                  <FormControlLabel
                    value="option2"
                    control={<Radio />}
                    label="oyning 4-haftasiga"
                  />
                </RadioGroup>
              </FormControl>
              <Button variant="contained" type="submit" disabled={isLoading}>
                {isLoading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
              </Button>
            </form>
          </div>
        </div>

        {/* Call-to-action Section */}
        <div className="w-full flex items-center justify-center p-4 md:p-0">
          <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center justify-around h-auto md:h-[200px] bg-blue-950 rounded-xl p-4 md:p-0">
            <div className="w-full md:w-[50%] space-y-3 md:space-y-5 text-center md:text-left">
              <p className="text-white font-bold text-2xl md:text-3xl">
                Kutmang
              </p>
              <p className="text-white font-medium text-sm md:text-lg">
                Biz sizga eng yaxshi natijalarga erishishingizga yordam berish
                uchun doim siz bilanmiz. Eng yuqori maqsadni qo'ying - hoziroq
                bepul sinov darsiga yoziling.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={handleOpen}
                className="text-white py-2 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl text-base md:text-lg font-medium bg-yellow-600 hover:bg-yellow-500 hover:text-gray-800 transition-all duration-300"
              >
                Sinov darslariga yoziling
              </button>
              <RegisterModalComponent open={open} handleClose={handleClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
