import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Languages from "./pages/languages";
import SignUp from "./pages/signup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./pages/skills";
import Experiences from "./pages/experiences";

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experience" element={<Experiences experienceProp={experienceText}/>}/>
                    <Route path="/about" element={<About aboutMeProp={aboutMeText}/>}/>
                    <Route path="/languages" element={<Languages languageProp={languagesText}/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

const languagesText = {
    "timestamp": "2022-10-11T11:43:47.523635",
    "objectResponse": [
        {
            "id": "e4b73810-b984-4e3b-abd4-83a7bbf868ea",
            "language": "Spanish",
            "read": "HIGH",
            "speak": "HIGH",
            "listen": "HIGH",
            "languageCode": "SPA"
        },
        {
            "id": "e4b73810-b984-4e3b-abd4-83a7bbf868ea",
            "language": "Spanish",
            "read": "HIGH",
            "speak": "HIGH",
            "listen": "HIGH",
            "languageCode": "CAT"
        },
        {
            "id": "e4b73810-b984-4e3b-abd4-83a7bbf868ea",
            "language": "Spanish",
            "read": "HIGH",
            "speak": "HIGH",
            "listen": "HIGH",
            "languageCode": "ENG"
        },
    ],
    "status": "OK",
    "message": "Language",
    "error": null
}

const aboutMeText = {
    "timestamp": "2022-10-11T15:46:43.411876",
    "objectResponse": {
        "id": "c2c5a7ec-a2b0-48f7-86e4-27172bb18d37",
        "title": "Test",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit eu, " +
            "iaculis velit sem mollis nullam mus platea, montes ac nunc venenatis posuere purus nisi. " +
            "Sed ac phasellus id ad fames bibendum neque cubilia, aptent congue primis mus erat massa dictumst, " +
            "mi eros cum aenean augue magna ultrices. Congue a litora tortor cubilia curae pellentesque, nascetur " +
            "non nostra ornare fames cras, risus nisl lobortis cum faucibus.",
        "mediaId": "",
        "languageCode": "SPA"
    },
    "status": "OK",
    "message": "About me information",
    "error": null
}

const experienceText = {
    "timestamp": "2022-10-18T08:39:18.969314",
    "objectResponse": [
        {
            "id": "b4258caa-680e-41cc-854a-181dac688859",
            "companyName": "Company",
            "started": "2018-07-14T17:45:55.948",
            "ended": "2022-10-18T06:29:36.522",
            "actual": false,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta imperdiet erat, " +
                "nec viverra sem eleifend in. Praesent ullamcorper euismod ante et tincidunt. Mauris in eros feugiat, " +
                "feugiat arcu dictum, tincidunt arcu. Etiam tempor nisi eget purus convallis faucibus. Nullam bibendum, " +
                "eros vitae maximus molestie, eros est sodales ipsum, eget rutrum neque neque nec sem. Sed in ultrices tellus, " +
                "vel facilisis tortor. Aenean consequat placerat ultrices. Curabitur lectus justo, ultricies in dolor id, pretium fringilla nibh.",
            "technologies": [
                {
                    "id": null,
                    "description": "Test2",
                    "technologyName": "AD",
                    "mastering": "HIGH",
                    "languageCode": "SPA"
                }
            ],
            "languageCode": "SPA"
        },
        {
            "id": "b4258caa-680e-41cc-854a-181dac688859",
            "companyName": "Company 2",
            "started": "2018-07-14T17:45:55.948",
            "ended": "2022-10-18T06:29:36.522",
            "actual": false,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta imperdiet erat, " +
                "nec viverra sem eleifend in. Praesent ullamcorper euismod ante et tincidunt. Mauris in eros feugiat, " +
                "feugiat arcu dictum, tincidunt arcu. Etiam tempor nisi eget purus convallis faucibus. Nullam bibendum, " +
                "eros vitae maximus molestie, eros est sodales ipsum, eget rutrum neque neque nec sem. Sed in ultrices tellus, " +
                "vel facilisis tortor. Aenean consequat placerat ultrices. Curabitur lectus justo, ultricies in dolor id, pretium fringilla nibh.",
            "technologies": [
                {
                    "id": null,
                    "description": "Test2",
                    "technologyName": "AD",
                    "mastering": "HIGH",
                    "languageCode": "SPA"
                }
            ],
            "languageCode": "SPA"
        }
    ],
    "status": "OK",
    "message": "About me information",
    "error": null
}

export default App;