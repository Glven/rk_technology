import {RouterProvider} from "react-router-dom";
import {routerConfig} from './routerConfig.tsx';

export const AppRouter = () => <RouterProvider router={routerConfig()}/>