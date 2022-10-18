import utils from "../helpers/utils";

const Languages = (props) => {
    return (
        <div>
            <h1>Languages</h1>
            {
                utils.range(0, props.languageProp.objectResponse.length -1).map(
                    object => (
                        <div key={object.toString()}>
                            <h1>{props.languageProp.objectResponse[object].language}</h1>
                            <p>{props.languageProp.objectResponse[object].read}</p>
                            <p>{props.languageProp.objectResponse[object].speak}</p>
                            <p>{props.languageProp.objectResponse[object].listen}</p>
                            <p>{props.languageProp.objectResponse[object].languageCode}</p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Languages;