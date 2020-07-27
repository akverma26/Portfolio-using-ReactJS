import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import Header from "./components/Header";
import HeadIntro from "./components/HeadIntro";
import FeaturedProject from "./components/FeaturedProject";
import SkillsSet from "./components/SkillsSet";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <div className="mainContainer">
            <HeadIntro />
            <FeaturedProject />
            <SkillsSet />
            <ContactForm />
        </div>
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.register();
