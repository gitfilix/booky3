// import Component feature from react
import React, { Component } from 'react';
// import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
// import Component Gallery
import Gallery from './Gallery';


// google book api v1
// https://developers.google.com/books/docs/v1/using
// https://www.googleapis.com/books/v1/volumes?q
// c & H
// https://i.pinimg.com/236x/e9/5c/8e/e95c8eed5b3ab9f79b29f76090ae3c2d.jpg


class Global extends Component {
    constructor(props) {
        // use this on state
        super(props);
        // state obj is current query
        this.state = {
            query: '',
            items: []
        }
    }



    // template string `
    search() {
        // query a book on google apii
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        // fecht with a promise
        fetch( `${BASE_URL}${this.state.query}`, { method: 'GET' })
            .then(response => response.json())
            // .then(json => console.log("log response.json", json))
            .then(json => {
                let { items } = json;
                // destructuring assignment items to this.state
                this.setState({items})
                console.log('items:', items);;
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
                                    console.log("Event.Enter.key");
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={()=> this.search()}>
                            <Glyphicon className="searchButton" glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery  items={this.state.items}/>
            </div>
        )
    }
}


export default Global;
