import {FC} from "react";
import cls from './CatCard.module.sass';
import {CatCheckboxes, CatGetButton} from "@/features/cat";
import {CatImg} from "@/entities/cat";

export const CatCard:FC = () => {
    return (
        <div className={cls.card}>
            <CatCheckboxes/>
            <CatGetButton/>
            <CatImg className={cls.card__img}/>
        </div>
    )
}