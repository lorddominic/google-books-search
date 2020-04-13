import React from "react"
import API from "../utils/API";
import BookDetails from "./BookDetails";

class GetBook extends React.Component {
    state = {
        googleSearch: [] 
    }
    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, ()=>console.log(this.state));

    }
    search = () => {
        API.google(this.state.userinput).then(x=>{
            console.log(x);
        this.setState({
            googleSearch: x.data
        })
     })
    }
    render() {
        var bookslist = this.state.googleSearch
        return (
            <div>
                <input name="userinput" onChange={this.handleInput} />
                <button name="googleSearch" onClick={this.search}>Search google books</button>
                {bookslist.map((book,key)=>(
                        <BookDetails 
                            title = {book.volumeInfo.title}
                            subtitle = {book.volumeInfo.subtitle}
                            authors= {book.volumeInfo.authors.join(",")}
                            synopsis={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            
                           key = {book.id} />
                ))}
            </div>
        )
    }

}

export default GetBook