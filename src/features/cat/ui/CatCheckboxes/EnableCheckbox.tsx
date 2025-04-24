import {FC} from "react";
import cls from './CatCheckboxes.module.sass';
import {useCatStore} from "@/entities/cat";

export const EnableCheckbox:FC = () => {

    const isEnabled = useCatStore(state => state.isCanLoad);
    const setIsEnabled = useCatStore(state => state.setIsCanLoad);

    return (
        <div className={cls.checkboxes__item}>
            <input
                type={"checkbox"}
                id={"enabled"}
                checked={isEnabled}
                onChange={e => setIsEnabled(e.target.checked)}
            />
            <label htmlFor="enabled">
                Enabled
            </label>
        </div>
    )
}