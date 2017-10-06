// import Component feature from react
import React, { Component } from 'react';
// import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }




    search() {
        console.log("searching: ", this.state.query);
    }

    render() {
        return (
            <div>
                <h2>Book explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        {/* searchfilld */}
                        <FormControl
                            type="text"
                            placeholder="Search for a Book"
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={()=> this.search()}>
                            <Glyphicon className="searchButton" glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}


export default Global;
