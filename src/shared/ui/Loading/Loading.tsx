import cls from './Loading.module.sass';
import {FC} from "react";
import {clsx} from "clsx";

type Props = {
    mini?: boolean
}

export const Loading:FC<Props> = ({mini}) => {
    return (
        <div className={clsx([
            cls.wrapper, {
                [cls.wrapper__mini]: mini
            }
        ])}>
            <h1>Loading...</h1>
        </div>
    )
}