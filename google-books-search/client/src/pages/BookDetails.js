import React from "react";
import API from "../utils/API"
class BookDetails extends React.Component {
    state = {
        saved: this.props.saved
    }
    saveBook = () => {
        var records = {
            id: this.props.id,
            title: this.props.title,
            author: this.props.authors,
            synopsis: this.props.synopsis,
            // imageURL: this.props.image    
        }
        API.saveBook(records).then((response) => {
            console.log(response)
            this.setState({ saved: true })
        }).catch((error) => {
           console.log("Error",error);
           this.setState({
               saved: true
           })
        })
    }
    render() {
        // console.log(this.props.rec.volumeInfo.imageLinks.thumbnail)
        return (<div className="cards">
            <h3>Title: {this.props.title}</h3>
            <h6>Authors: {this.props.authors}</h6>
            <p>Synopsis: {this.props.synopsis}</p>

            {/* <img src={this.props.image} /> */}
            {this.state.saved ? <h5>Book already Saved</h5> : <button onClick={this.saveBook}>Save Book</button>}
        </div>)
    }
}


export default BookDetails;