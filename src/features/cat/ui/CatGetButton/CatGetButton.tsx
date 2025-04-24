import {FC} from "react";
import {useCatStore} from "@/entities/cat";
import cls from './CatGetButton.module.sass';
import {useFetchCat} from "@/features/cat";

export const CatGetButton:FC = () => {

    const isCanLoad = useCatStore(state => state.isCanLoad);
    const {fetchCat} = useFetchCat();

    const handleClick = () => {
        if (!isCanLoad) return;

        fetchCat();
    }

    return (
        <button
            className={cls.btn}
            disabled={!isCanLoad}
            onClick={handleClick}
        >
            Get cat
        </button>
    )
}