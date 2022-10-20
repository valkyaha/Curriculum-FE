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
import Projects from "./pages/projects";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Navbar availableLanguages={languagesText}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experience" element={<Experiences experienceProp={experienceText}/>}/>
                    <Route path="/about" element={<About aboutMeProp={aboutMeText}/>}/>
                    <Route path="/languages" element={<Languages languageProp={languagesText}/>}/>
                    <Route path="/skills" element={<Skills skillsProps={skillsText}/>}/>
                    <Route path="/projects" element={<Projects projectsProps={projectsText}/>}/>
                    <Route path="/contact" element={<Contact skillsList={skillsText}/>}/>
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
            "language": "Catalan",
            "read": "HIGH",
            "speak": "HIGH",
            "listen": "HIGH",
            "languageCode": "CAT"
        },
        {
            "id": "e4b73810-b984-4e3b-abd4-83a7bbf868ea",
            "language": "English",
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
        "title": "Sobre me",
        "text": "Soy un Back end developer con muchisima curiosidad y ganas de aprender, estoy constantemente buscando retos," +
            "tratando de superarme día a día, tanto a nivel personal como a nivel profesional, también soy muy autodidacta" +
            "tratando de apender cosas nuevas movido por mi mera curiosidad, como ejemplo, mi nivel de expertice se basa" +
            "en java core y java con springboot sin ambargo por mera curiosidad he creado esta página web como curriculum," +
            "incluido el backend y el fronted usados.",
        "mediaId": "",
        "languageCode": "SPA"
    },
    "status": "OK",
    "message": "About me information",
    "error": null
}

const skillsText = {
    "timestamp": "2022-10-18T11:01:15.477529",
    "objectResponse": [
        {
            "id": "24dca42d-60b4-4c12-8844-afb779a63a4c",
            "skillName": "Autodidacta",
            "description": "Awesome skill with some magic lorepi psum just to test how the skill it's being show at the " +
                "time of building the application and see what happens if the text its to long",
            "masteringLevel": "HIGH",
            "languageCode": "SPA"
        },
        {
            "id": "24dca42d-60b4-4c12-8844-afb779a63a4c",
            "skillName": "Java",
            "description": "Awesome skill with some magic lorepipsum just to test how the skill it's being show at the" +
                "time of building the application and see what happends if the text its to long",
            "masteringLevel": "MEDIUM",
            "languageCode": "SPA"
        },
        {
            "id": "24dca42d-60b4-4c12-8844-afb779a63a4c",
            "skillName": "Spring-boot",
            "description": "Awesome skill with some magic lorepi psum just to test how the skill it's being show at the " +
                "time of building the application and see what happens if the text its to long",
            "masteringLevel": "LOW",
            "languageCode": "SPA"
        },
        {
            "id": "24dca42d-60b4-4c12-8844-afb779a63a4c",
            "skillName": "Android",
            "description": "Awesome skill with some magic lorepi psum just to test how the skill it's being show at the " +
                "time of building the application and see what happens if the text its to long",
            "masteringLevel": "MEDIUM",
            "languageCode": "SPA"
        },
        {
            "id": "24dca42d-60b4-4c12-8844-afb779a63a4c",
            "skillName": "React",
            "description": "Awesome skill with some magic lorepi psum just to test how the skill it's being show at " +
                "the time of building the application and see what happens if the text its to long",
            "masteringLevel": "HIGH",
            "languageCode": "SPA"
        }
    ],
    "status": "OK",
    "message": "Skills",
    "error": null
}

const projectsText = {
    "timestamp": "2022-10-18T11:34:08.805983",
    "objectResponse": [
        {
            "id": "4abdbe6a-b0fa-46e6-ac48-17558c9f377c",
            "projectName": "Project Blossom",
            "description": "Project Blossom es un videojuego que estoy desarrollando por mi cuenta, usando Unity como " +
                "motor gráfico y C# como lenguaje de programación, con un estilo 2D y tomando prestada como inspiración" +
                "y partes de la historia de Final Fantasy 7",
            "url": "N/A",
            "started": "2022-10-18T11:01:15.477",
            "ended": "2022-10-18T11:01:15.477",
            "currentlyWorking": true,
            "languageCode": "SPA"
        },
        {
            "id": "4abdbe6a-b0fa-46e6-ac48-17558c9f377c",
            "projectName": "CurriculumMonolith",
            "description": "Proyecto back end de esta misma página web, actualmente es un monolito sim embargo en algun punto" +
                "se degranará en microservicios, está basado en Java 17 usando las ultimas versiones de springboot",
            "url": "github.com/valkyaha/CurriculumMonolith",
            "started": "2022-10-18T11:01:15.477",
            "ended": "2022-10-18T11:01:15.477",
            "currentlyWorking": true,
            "languageCode": "SPA"
        },
        {
            "id": "4abdbe6a-b0fa-46e6-ac48-17558c9f377c",
            "projectName": "Curriculum FE",
            "description": "Proyecto front end basado en React 18, basícamente es la web que se está viendo ahora mismo",
            "url": "github.com/valkyaha/curriculum-fe",
            "started": "2022-10-18T11:01:15.477",
            "ended": "2022-10-18T11:01:15.477",
            "currentlyWorking": false,
            "languageCode": "SPA"
        },
    ],
    "status": "OK",
    "message": "Proyectos WIP",
    "error": null
}

const experienceText = {
    "timestamp": "2022-10-18T14:56:17.762947",
    "objectResponse": [
        {
            "id": "b4258caa-680e-41cc-854a-181dac688859",
            "companyName": "X",
            "started": "2018-07-14T17:45:55.948",
            "ended": "2022-10-18T06:29:36.522",
            "actual": true,
            "description": "X es una consultora",
            "technologies": [
                {
                    "id": null,
                    "description": "Java es un lenguage de programación",
                    "technologyName": "Java",
                    "mastering": "HIGH",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": "React es un lenguage de programación",
                    "technologyName": "React",
                    "mastering": "LOW",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": "Jenkins un orquestrador de pipelines",
                    "technologyName": "Jenkins",
                    "mastering": "Medium",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": ".NET es un lenguage de programación",
                    "technologyName": ".NET",
                    "mastering": "HIGH",
                    "languageCode": "SPA"
                }
            ],
            "languageCode": "SPA"
        },
        {
            "id": "b4258caa-680e-41cc-854a-181dac688859",
            "companyName": "Y",
            "started": "2018-07-14T17:45:55.948",
            "ended": "2022-10-18T06:29:36.522",
            "actual": false,
            "description": "Y es una consultora",
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
            "companyName": "L",
            "started": "2018-07-14T17:45:55.948",
            "ended": "2022-10-18T06:29:36.522",
            "actual": true,
            "description": "L es una consultora",
            "technologies": [
                {
                    "id": null,
                    "description": "Java es un lenguage de programación",
                    "technologyName": "Java",
                    "mastering": "HIGH",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": "React es un lenguage de programación",
                    "technologyName": "React",
                    "mastering": "LOW",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": "Jenkins un orquestrador de pipelines",
                    "technologyName": "Jenkins",
                    "mastering": "Medium",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": ".NET es un lenguage de programación",
                    "technologyName": ".NET",
                    "mastering": "HIGH",
                    "languageCode": "SPA"
                }
            ],
            "languageCode": "SPA"
        },
        {
            "id": "b4258caa-680e-41cc-854a-181dac688859",
            "companyName": "x 2,0",
            "started": "2018-07-14T17:45:55.948",
            "ended": "2022-10-18T06:29:36.522",
            "actual": true,
            "description": "x 2,0 es una consultora",
            "technologies": [
                {
                    "id": null,
                    "description": "Java es un lenguage de programación",
                    "technologyName": "Java",
                    "mastering": "HIGH",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": "React es un lenguage de programación",
                    "technologyName": "React",
                    "mastering": "LOW",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": "Jenkins un orquestador de pipelines",
                    "technologyName": "Jenkins",
                    "mastering": "Medium",
                    "languageCode": "SPA"
                },
                {
                    "id": null,
                    "description": ".NET es un lenguage de programación",
                    "technologyName": ".NET",
                    "mastering": "HIGH",
                    "languageCode": "SPA"
                }
            ],
            "languageCode": "SPA"
        },
    ],
    "status": "OK",
    "message": "About me information",
    "error": null
}

export default App;