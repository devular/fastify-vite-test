import React, { Suspense, Fragment } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StaticRouter } from "react-router";
import routes from "@app/routes.js";
import { ThemeProvider } from "@theme-ui/theme-provider";
import { theme } from "./src/theme.js";

export function createApp(context) {
  return {
    App,
    routes,
    router: import.meta.env.SSR ? StaticRouter : BrowserRouter,
    context,
  };
}

function App(routes, props) {
  return (
    <>
      <Helmet>
        <title>fastify-vite-react examples</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        {import.meta.env.SSR ? (
          <Fragment>
            <Switch>
              {routes.map(({ path, component: RouteComp }) => {
                return (
                  <Route key={path} path={path}>
                    <RouteComp {...props} />
                  </Route>
                );
              })}
            </Switch>
          </Fragment>
        ) : (
          <Suspense fallback={<div />}>
            <Switch>
              {routes.map(({ path, component: RouteComp }) => {
                return (
                  <Route key={path} path={path}>
                    <RouteComp {...props} />
                  </Route>
                );
              })}
            </Switch>
          </Suspense>
        )}
      </ThemeProvider>
    </>
  );
}
