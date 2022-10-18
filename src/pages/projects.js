import utils from "../helpers/utils";

const Projects = (props) => {
    return (
        <div>
            <h1>Projects</h1>
            {
                utils.range(0, props.projectsProps.objectResponse.length -1).map(
                    object => (
                        <div key={object.toString()}>
                            <h1>{props.projectsProps.objectResponse[object].projectName}</h1>
                            <p>{props.projectsProps.objectResponse[object].description}</p>
                            <p>{props.projectsProps.objectResponse[object].url}</p>
                            <p>{props.projectsProps.objectResponse[object].started}</p>
                            <p>{props.projectsProps.objectResponse[object].ended}</p>
                            <p>{props.projectsProps.objectResponse[object].currentlyWorking}</p>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default Projects;