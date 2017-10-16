import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let alternate = "https://cdn3.iconfinder.com/data/icons/faticons/32/picture-01-128.png";
        return (
            <div>
                <h3>Gallery Component - displaying results</h3>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a key={index}
                               className="book"
                               href={infoLink}
                               target="_blank"
                               >
                                <img
                                    src={imageLinks !== undefined ? imageLinks.thumbnail: alternate}
                                    alt="book image"
                                    className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;
