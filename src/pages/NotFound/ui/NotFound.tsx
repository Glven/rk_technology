import {FC} from "react";
import cls from './NotFound.module.sass';
import {useNavigate} from "react-router";
import {MAIN_PAGE} from "@/shared/lib/configs/path.ts";

const NotFound:FC = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate(MAIN_PAGE);

    return (
        <section className={cls.section}>
            <div className={cls.section__wrapper}>
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <button onClick={handleClick}>
                    На главную
                </button>
            </div>
        </section>
    )
}

export default NotFound;