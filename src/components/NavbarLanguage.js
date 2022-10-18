const NavbarLanguage = (props) => (
    <a href="http://localhost:3000/"
       className="right"
       style={
           {
               backgroundColor: props.activeLang === props.languageCode ? "blue" : ""
           }
       }
    >{props.languageCode}</a>
);

export default NavbarLanguage;