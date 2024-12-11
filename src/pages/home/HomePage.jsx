import { AboutUs } from "./components/aboutUs/AboutUs"
import { MainPage } from "./components/main/Main"


const HomePage = () => {
    return (
        <div className="space-y-10 w-full bg-black">
            <MainPage />
            <AboutUs/>
        </div>
    )
}

export default HomePage