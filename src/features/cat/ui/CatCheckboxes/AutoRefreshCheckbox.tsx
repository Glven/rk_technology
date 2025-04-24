import {FC} from "react";
import cls from './CatCheckboxes.module.sass';
import {useCatStore} from "@/entities/cat";

export const AutoRefreshCheckbox:FC = () => {

    const isAutoRefresh = useCatStore(state => state.isAutoRefresh)
    const setIsAutoRefresh = useCatStore(state => state.setIsAutoRefresh);

    return (
        <div className={cls.checkboxes__item}>
            <input
                type={'checkbox'}
                checked={isAutoRefresh}
                onChange={e => setIsAutoRefresh(e.target.checked)}
                id={'auto-refresh'}
            />
            <label htmlFor={'auto-refresh'}>
                Auto-refresh every 5 seconds
            </label>
        </div>
    )
}