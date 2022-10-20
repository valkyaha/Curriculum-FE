import {Card, Row} from "react-bootstrap";
import utils from "../helpers/utils";

const Contact = (props) => {
    const borderSkill = (index) => {
        if (props.skillsList.objectResponse[index].masteringLevel === 'HIGH') {
            return 'primary'
        }

        if (props.skillsList.objectResponse[index].masteringLevel === 'MEDIUM') {
            return 'success'
        }

        if (props.skillsList.objectResponse[index].masteringLevel === 'LOW') {
            return 'warning'
        }
    }

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {utils.range(0, props.skillsList.objectResponse.length - 1).map(
                    value => (
                        <Card key={value.toString()}
                              border={borderSkill(value)}
                              style={{width: '18rem', margin: '1rem'}}
                              variant="top">
                            <Card.Header>Skill level {props.skillsList.objectResponse[value].masteringLevel}</Card.Header>
                            <Card.Body>
                                <Card.Title>{props.skillsList.objectResponse[value].skillName}</Card.Title>
                                <Card.Text>
                                    {props.skillsList.objectResponse[value].description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                )}
            </Row>
        </>
    );
};

export default Contact;

