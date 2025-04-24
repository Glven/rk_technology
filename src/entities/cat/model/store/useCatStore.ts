import {create} from "zustand/react";

type UseCatStore = {
    catImg: string|null
    setCatImg: (catImg: string|null) => void
    isCanLoad: boolean
    setIsCanLoad: (isCanLoad: boolean) => void
    isAutoRefresh: boolean
    setIsAutoRefresh: (isAutoRefresh: boolean) => void
    isImgLoading: boolean
    setIsImgLoading: (isImgLoading: boolean) => void
}

export const useCatStore = create<UseCatStore>(set => ({
    catImg: null,
    setCatImg: (catImg: string|null) => set({catImg}),
    isCanLoad: true,
    setIsCanLoad: (isCanLoad: boolean) => set({isCanLoad}),
    isAutoRefresh: false,
    setIsAutoRefresh: (isAutoRefresh: boolean) => set({isAutoRefresh}),
    isImgLoading: false,
    setIsImgLoading: (isImgLoading: boolean) => set({isImgLoading}),
}))