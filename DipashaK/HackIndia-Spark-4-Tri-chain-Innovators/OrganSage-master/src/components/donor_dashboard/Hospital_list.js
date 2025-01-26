import React, { Component } from 'react';
import axios from 'axios';
import { Card, Segment, Header, Divider, Grid, Form, Button } from 'semantic-ui-react';
import Top2 from '../Navbar/Top2';

class HospitalList extends Component {
    state = {
        hospitals: [],
        city: '',
    }

    oncheck = (event) => {
        event.preventDefault(); // Prevent default form submission
        axios.get(`http://localhost:5002/api/hospitals/${this.state.city}`)
            .then(res => {
                const hospitals = res.data.map(hospital => ({
                    address: `Address: ${hospital.address}`,
                    city: hospital.city,
                    name: hospital.username,
                    img: `../../images/${hospital.img}` // Ensure the path is correct
                }));
                console.log("Fetched hospitals:", hospitals); // Log fetched hospitals
                this.setState({ hospitals }); // Update the state with fetched hospitals
            })
            .catch(err => console.log("Error:", err));
    }

    renderHospitals() {
        if (this.state.hospitals.length === 0) {
            return <p>No hospitals found for the selected city.</p>;
        }

        const hospitals = this.state.hospitals.map(hospital => ({
            image: hospital.img,
            header: hospital.name,
            meta: hospital.contact, // Ensure you have a contact field
            description: hospital.address
        }));

        return <Card.Group items={hospitals} centered />;
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <>
                <Top2 />
                <Grid centered columns={2} style={{ marginTop: '60px' }}>
                    <Grid.Column width={12}>
                        <Segment>
                            <Header as="h3" color="grey" style={{ textAlign: "center" }}>
                                Please visit any one hospital from the given list to get yourself approved! Select a city to view the hospitals.
                            </Header>
                            <Form onSubmit={this.oncheck}>
                                <Form.Group width={1}>
                                    <Form.Field
                                        value={this.state.city}
                                        onChange={this.onChange}
                                        name="city"
                                        label='City'
                                        control='select'
                                        required
                                    >
                                        <option value='Gwalior'>Gwalior</option>
                                        <option value='New Delhi'>New Delhi</option>
                                        <option value='Pune'>Pune</option>
                                    </Form.Field>
                                </Form.Group>
                                <Button positive type='submit'>Check</Button>
                            </Form>
                            <Divider />
                            {this.renderHospitals()} {/* Render the hospitals */}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

export default HospitalList;
