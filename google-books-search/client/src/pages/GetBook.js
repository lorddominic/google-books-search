import React from "react"
import API from "../utils/API";

class GetBook extends React.Component {
    state = {
        googleSearch: ""
    }
    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, ()=>console.log(this.state));

    }
    search = () => {
        API.google(this.state.userinput).then(x=>{
        this.setState({
            googleSearch: x.data
        })
     })
    }
    render() {
        return (
            <div>
                <input name="userinput" onChange={this.handleInput} />
                <button name="googleSearch" onClick={this.search}>Search google books</button>
                {this.state.googleSearch && this.state.googleSearch.map(book=>(
                        <h1>{book.volumeInfo.title}</h1>
                ))}
            </div>
        )
    }

}

export default GetBook