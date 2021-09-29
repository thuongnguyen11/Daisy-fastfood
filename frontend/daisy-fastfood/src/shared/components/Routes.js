import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import { Menu } from "../../pages/Menu";

function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Menu" component={Menu} />
            {/* <Route path="/Counter" component={Counter} />
            <Route path="/Menu/:dishId" component={DishDetail} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Cart" component={Cart} />
            <Route component={NotFound} /> */}
        </Switch>
    );
}

export default Routes;