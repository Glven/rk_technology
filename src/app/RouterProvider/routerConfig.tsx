import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "@/widgets/layout";
import {ErrorFallback} from "@/widgets/ErrorFallback";
import {MAIN_PAGE} from "@/shared/lib/configs/path.ts";
import {Suspense} from "react";
import {Loading} from "@/shared/ui";
import {MainPageAsync} from "@/pages/Main";
import {NotFoundAsync} from "@/pages/NotFound";

export function routerConfig () {
    return createBrowserRouter([
        {
            element: <MainLayout/>,
            errorElement: <ErrorFallback/>,
            children: [
                {
                    path: MAIN_PAGE,
                    element: (
                        <Suspense fallback={<Loading/>}>
                            <MainPageAsync/>
                        </Suspense>
                    )
                },
                {
                    path: '*',
                    element: (
                        <Suspense fallback={<Loading/>}>
                            <NotFoundAsync/>
                        </Suspense>
                    )
                }
            ]
        }
    ], {
        basename: '/rk_technology'
    })
}