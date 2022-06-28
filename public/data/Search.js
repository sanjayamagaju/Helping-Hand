import React, { Component } from 'react';
import axios from 'axios';
import Post from './blocks/Post';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(this.props.location.search)
        const key = urlParams.get('s') != null ? urlParams.get('s') : ''
        axios.get(`http://localhost:5000/articles?q=${key}`)
            .then(res => {
                this.setState({
                    results: res.data
                })
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    <section className="column">
                        {this.state.results.map(item => (
                            <Post key={item.id} info={item} />
                        ))}
                    </section>
                </div>
            </>
        )
    }

}

export default Search;