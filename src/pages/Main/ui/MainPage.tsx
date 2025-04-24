import {FC} from "react";
import cls from './MainPage.module.sass';
import {CatCard} from "@/widgets/cat";

const MainPage:FC = () => {


    return (
        <section className={cls.container}>
            <CatCard/>
        </section>
    )
}

export default MainPage;