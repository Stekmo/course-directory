import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header/>

            <Switch> {/*By default all routes matching the url will be rendered. Wrapping the Routes in Switch makes sure only one Route is matched.*/}
                <Route exact path="/" component={Home} />
                <Route path="/about" render={ () => <About title="About"/> } />
                <Route exact path="/teachers" component={Teachers} />
                <Route path="/teachers/:topic/:name" component={Featured} />
                <Route path="/courses" component={Courses} />
                <Route component={NotFound} /> {/* Routes without path will by default always be rendered, beucase it's in a Switch, it works like a catch-all, if no r*/}
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;