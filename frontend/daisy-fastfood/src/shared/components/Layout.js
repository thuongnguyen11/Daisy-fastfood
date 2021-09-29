import { BrowserRouter, Route } from "react-router-dom";
import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "./Routes";

function Layout(props) {
    return (
        <BrowserRouter>
          <Route
            render={(props) => (
              <Fragment>
                <Header {...props} />
                <div className="min-h-screen bg-white">
                  <div className="py-8">
                    <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                      <Routes />
                    </main>
                  </div>
                </div>
                <Footer {...props}/>
              </Fragment>
            )}
          />
        </BrowserRouter>
      );
}
export default Layout;