import {FC} from "react";
import {useNavigate} from "react-router";
import {MAIN_PAGE} from "@/shared/lib/configs/path.ts";
import cls from './ErrorFallback.module.sass';

export const ErrorFallback:FC = () => {

    const navigate = useNavigate()

    const handleClick = () => navigate(MAIN_PAGE)

    return (
        <section className={cls.error}>
            <div className={cls.error__wrapper}>
                <h1>Oops...</h1>
                <h2>Произошла ошибка. Перезагрузите приложение</h2>
                <button
                    onClick={handleClick}
                >
                    Перезагрузить
                </button>
            </div>
        </section>
    )
}