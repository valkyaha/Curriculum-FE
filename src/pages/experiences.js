import utils from "../helpers/utils";
const Experiences = (props) => {
    return (
        <div>
            <h1>Experience</h1>
            {
                utils.range(0, props.experienceProp.objectResponse.length - 1).map(
                    objects => (
                        <div key={objects.toString()}>
                            <h1>
                                {props.experienceProp.objectResponse[objects].companyName}
                            </h1>
                            <p>
                                {props.experienceProp.objectResponse[objects].description}
                            </p>
                            <p>
                                {props.experienceProp.objectResponse[objects].started}
                            </p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Experiences;