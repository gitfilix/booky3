// import Component feature from react
import React, { Component } from 'react';
// import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
// import Component Gallery
import Gallery from './Gallery.js';


// google book api v1
// https://developers.google.com/books/docs/v1/using
// https://www.googleapis.com/books/v1/volumes?q




class Global extends Component {
    constructor(props) {
        super(props);
        // state obj is current query
        this.state = {
            query: '',
            items: []
        }
    }




    search() {
        // query a book on google apii
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        // fecht with a promise
        fetch( `${BASE_URL}${this.state.query}`, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                let { items } = json;
                this.setState({items});
            }
        );


        console.log("searching: ", this.state.query);
    }

    render() {
        return (
            <div className="global">
                <h2 className="title">Filix Book store</h2>
                <FormGroup>
                    <InputGroup className="searchbar">
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
                <Gallery />
            </div>
        )
    }
}


export default Global;
