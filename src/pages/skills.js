import {Card, Col, Row} from "react-bootstrap";

const Skills = (props) => {
    const borderSkill = (index) => {
        if (props.skillsProps.objectResponse[index].masteringLevel === 'HIGH') {
            return 'primary'
        }

        if (props.skillsProps.objectResponse[index].masteringLevel === 'MEDIUM') {
            return 'success'
        }

        if (props.skillsProps.objectResponse[index].masteringLevel === 'LOW') {
            return 'warning'
        }
    }

    return (
        <>
            <Row xs={1} md={4} className="g-4" style={{margin: '5px'}}>
                {Array.from({length: props.skillsProps.objectResponse.length}).map((_, idx) => (
                    <Col>
                        <Card key={idx.toString()} border={borderSkill(idx)}>
                            <Card.Header>Skill
                                level {props.skillsProps.objectResponse[idx].masteringLevel}</Card.Header>
                            <Card.Body>
                                <Card.Title>{props.skillsProps.objectResponse[idx].skillName}</Card.Title>
                                <Card.Text>
                                    {props.skillsProps.objectResponse[idx].description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

// const cardHighlightValues = [
//     'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
// ]
export default Skills;