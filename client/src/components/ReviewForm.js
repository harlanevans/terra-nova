import React from 'react';
import axios from 'axios';
import { withRouter, NavLink} from 'react-router-dom';
import { Form, Rating, Container, Button } from 'semantic-ui-react';
import { SubHeaderTwo } from '../styles/AppStyles';

class ReviewForm extends React.Component {
    state = {  title: "", body: "", rating: 0, name: "", location: "",  };
    // can we get the user name from the user_id??

    handleSubmit = (e) => {
        e.preventDefault();
        const review = {...this.state};
        axios.post('/api/reviews', review)
            .then(res => this.props.history.push('/reviews'))
    };//end of handleSubmit

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };//end of handleChange

    handleRating = (e, { rating }) => {
        this.setState({ rating });
    };//end of handleRating

    render() {
        const { title, body, rating, name, location, } = this.state;
        return (
            <Container>
                <Form style={styles.text}
                    onSubmit={this.handleSubmit}>
                    <div style={styles.top}>

                    <SubHeaderTwo style={styles.header}>Leave a Review</SubHeaderTwo>
                    <NavLink to="/reviews">
                        <Button style={styles.button}>Back to Reviews</Button>
                    </NavLink>
                    </div>
                    <Form.Group style={styles.topForm}>

                    <Form.Input
                        name="name"
                        label="Name"
                        placeholder="Name"
                        autofocus
                        required
                        value={name}
                        width='4'
                        onChange={this.handleChange}
                        /> 
                    <Form.Input
                        name="location"
                        label="Location"
                        placeholder="City & State"
                        required
                        value={location}
                        width='4'
                        onChange={this.handleChange}
                        /> 
                        </Form.Group>
                    <div style={styles.rating}>
                    <Form.Input
                        name="title"
                        label="Title"
                        placeholder="Title"
                        required
                        value={title}
                        width='5'
                        onChange={this.handleChange}
                        /> 
                        <div style={styles.stars}>
                        <Rating
                            name="rating"
                            maxRating={5}
                            rating={rating}
                            onRate={this.handleRating}
                            size="huge"
                            clearable
                            />
                            </div>
                            </div>
                    <Form.Input
                        name="body"
                        label="Body"
                        placeholder="Body"
                        required
                        control='textArea'
                        value={body}
                        onChange={this.handleChange}
                    />
                    <Form.Button style={styles.button}>Submit</Form.Button>
                </Form>
            </Container>
        )
    }
};

export default withRouter(ReviewForm);

const styles = {
    text: {
        fontFamily: "'Playfair Display', serif",
    },
    button: {
        backgroundColor: '#555555',
        border: '2px solid #f8f8ff',
        color: 'white',
        padding: '10px 40px',
        textAlign: "center",
        textDecoration: 'none',
        display: 'flex',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        marginTop: '10px',
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    stars: {
        marginLeft: '30px',
    },
    header: {
        marginRight: '500px',
        paddingBottom: '10px',
        borderBottom: '1px solid black',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'center',
    }
}