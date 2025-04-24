import {FC} from "react";
import cls from './CatImg.module.sass';
import {useCatStore} from "@/entities/cat";
import {clsx} from "clsx";
import {Loading} from "@/shared/ui";

type Props = {
    className?: string;
}

export const CatImg:FC<Props> = ({className}) => {

    const catImg = useCatStore(state => state.catImg);
    const isLoading = useCatStore(state => state.isImgLoading);

    if (!catImg) return <></>

    return (
        <div className={clsx([
            cls.wrapper,
            className && {[className]: true}
        ])}>

            {isLoading ?
                <Loading mini/> :
                <img
                    src={catImg}
                    alt="cat"
                />
            }

        </div>
    )
}