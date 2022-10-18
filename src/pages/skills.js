import utils from "../helpers/utils";

const Skills = (props) => {
    return (
        <div>
            <h1>Skills</h1>
            {
                utils.range(0, props.skillsProps.objectResponse.length - 1).map(object => (
                        <div key={object.toString()}>
                            <h1>
                                {props.skillsProps.objectResponse[object].skillName}
                            </h1>
                            <p>
                                {props.skillsProps.objectResponse[object].description}
                            </p>
                            <p>
                                {props.skillsProps.objectResponse[object].masteringLevel}
                            </p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Skills;