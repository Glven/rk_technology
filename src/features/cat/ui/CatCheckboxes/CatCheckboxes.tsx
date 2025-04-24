import {FC} from "react";
import cls from './CatCheckboxes.module.sass';
import {EnableCheckbox} from './EnableCheckbox.tsx';
import {AutoRefreshCheckbox} from './AutoRefreshCheckbox.tsx';

export const CatCheckboxes:FC = () => {
    return (
        <div className={cls.checkboxes}>
            <EnableCheckbox/>
            <AutoRefreshCheckbox/>
        </div>
    )
}