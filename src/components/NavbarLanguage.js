import utils from "../helpers/utils";

const NavbarLanguage = (props) => {
    return (
        <div>
            <ul>
                {
                    utils.range(0, props.availableLanguages.objectResponse.length - 1).map(
                        object => (
                            <li>
                                {props.availableLanguages.objectResponse[object].languageCode}
                            </li>
                        )
                    )
                }
            </ul>

        </div>
    );
};
export default NavbarLanguage;