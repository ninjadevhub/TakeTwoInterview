import { lazy } from "react"
import { IRoutesProps } from "../types"

const HomePage = lazy(() => import("../pages/Home"))
const routes: Array<IRoutesProps> = [
  {
    component: HomePage,
    path: "/",
  },
]
export default routes
