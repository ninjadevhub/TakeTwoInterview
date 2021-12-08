import React, { ReactElement, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import history from "../utils/history"
import routes from "./routes"
import { MainLayout } from "../layouts"

export default function RouteWrapper(): ReactElement {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {routes.map((route, idx) => {
              return <Route {...route} key={idx} />
            })}
          </Switch>
        </Suspense>
      </MainLayout>
    </Router>
  )
}
