import React from "react"
import API from "../utils/API";
import BookDetails from "./BookDetails";

class GetBook extends React.Component {
    state = {
        googleSearch: [],
        databasebooks:[]
    }
    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => console.log(this.state));

    }
    search = () => {
        API.google(this.state.userinput).then(x => {
            console.log(x.data);

            this.setState({
                googleSearch: x.data
            })
        })
    }
    getdatabasebooks = () => {
        API.getBooks().then(allbooks => {
            console.log(allbooks);
            this.setState({
                databasebooks: allbooks.data
            })
        })
    }
    render() {
        var bookslist = this.state.googleSearch
        var allbooks = this.state.databasebooks
        return (
            <div>
                <div className="jumbotron">
                    <h1>Google Books API Search</h1>
                    <h6>By Dominic</h6>
                </div>
                <input name="userinput" onChange={this.handleInput} />
                <button name="googleSearch" className="btn btn-success" onClick={this.search}>Search google books</button>
                <button name="savedbooks" className="btn btn-warning" onClick={this.getdatabasebooks}>Get Saved Books</button>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>API Search Results</h1>
                            {bookslist.map((book, key) => (
                                <BookDetails
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    synopsis={book.volumeInfo.description}
                                    // image={book.volumeInfo.imageLinks.thumbnail|| ""}
                                    id={book.id}
                                    rec={book}
                                    saved={false}
                                    key={book.id} />
                            ))}
                        </div>
                        <div className="col-md-6">
                            <h1>Books already in database</h1>
                            {allbooks.map((book, key) => (
                                <BookDetails
                                    title={book.title}
                                    authors={book.authors}
                                    synopsis={book.description}
                                    // image={book.volumeInfo.imageLinks.thumbnail|| ""}
                                    id={book.id}
                                    saved={true}
                                    rec={book}
                                    key={book.id} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default GetBook;