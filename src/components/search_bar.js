/**
 * Created by jerry on 02/04/2017.
 */
import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event =>  this.onChange(event.target.value)}/>
                <br/>
            </div>
        );
    }

    onChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;