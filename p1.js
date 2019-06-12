import react ,{component} from 'react';
import './p1.css';
import './p1.html';
import nav from './nav';
import header from './slider/header/header';
import logo from './images/2.jpg'
import Slider_box from './slider/slider.css';
class app extends component{
    render (){
        return (
            <div className ="app">
            <header />
            <nav />
            <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <p>
                Edit <code>src/app.js</code> and save to reload .
            </p>
            <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            learning react asghar
            </a>
            
              </header>
            </div>
        );
    }
}
export default app;