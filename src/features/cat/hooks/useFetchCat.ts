import axios from 'axios';
import {API_URL} from "@/shared/constants/endPoints.ts";
import {useCatStore} from "@/entities/cat";
import {useEffect} from "react";

export const useFetchCat = () => {

    const setCatImg = useCatStore(state => state.setCatImg);
    const setIsLoading = useCatStore(state => state.setIsImgLoading);
    const isCanLoad = useCatStore(state => state.isCanLoad);
    const isAutoRefresh = useCatStore(state => state.isAutoRefresh);

    const fetchCat = async () => {

        setIsLoading(true);

        try {
            const {data} = await axios.get(`${API_URL}/v1/images/search`, {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": 'live_aqQShGHvXVFDMESEs8Dx3DlFMKuk1TBjOfjm21NTlHfyzIA9FEdi1kIaXdRT4kSn'
                },
                params: {
                    size: "med",
                    mime_types: "jpg",
                    format: "json",
                    has_breeds: true,
                    order: "RANDOM",
                    page: 0,
                    limit: 1
                }
            })

            if (data && data[0] && data[0].url) {
                setCatImg(data[0].url);
            }
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            } else {
                throw new Error('Unknown error');
            }
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {

        if ( (isCanLoad && !isAutoRefresh) || (!isCanLoad && isAutoRefresh)) return;

        const intervalId = setInterval(fetchCat, 5000)

        return () => clearInterval(intervalId)
    }, [isCanLoad, isAutoRefresh]);

    return {fetchCat}

}