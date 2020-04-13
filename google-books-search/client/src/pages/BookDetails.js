import React from "react";
import API from "../utils/API"
class BookDetails extends React.Component {
    // state = {
    //     id: this.props.id,
    //     title: this.props.volumeInfo.title,
    //     authors: this.props.volumeInfo.authors[0],
    //     synopsis: this.props.volumeInfo.discription
    // }
    saveBook = () => {
        var records = {
            id: this.props.booksinfo.id,
            title: this.props.booksinfo.volumeInfo.title,
            author: this.props.booksinfo.volumeInfo.authors[0],
            synopsis: this.props.booksinfo.volumeInfo.description,
            imageURL: this.props.booksinfo.volumeInfo.imageLinks.smallThumbnail    
        }
        API.saveBook(records).then((response) => {
            console.log(response)
        });
    }
    render() {
        console.log(this.props)
        return (<div className="cards">
            <h1>Title: {this.props.title}</h1>
            <h1>Authors: {this.props.authors}</h1>
            <h1>Synopsis: {this.props.synopsis}</h1>
           
            {/* <img src={this.props.image} /> */}
            <button onClick={this.saveBook}>Save Book</button>
        </div>)
    }
}


export default BookDetails;