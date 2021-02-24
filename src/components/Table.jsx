import React, { Component } from 'react'

import {Table as RootTable} from 'react-bootstrap';

class Table extends Component {
    render() {

        let {movies} = this.props;
        return (
            <RootTable striped>
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Rating</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.length > 0 ?
                        movies.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.movie}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.duration}</td>
                            </tr>
                        )):
                        <tr>
                            <td colSpan={3} className='text-center'>
                                <span className='text-info'>
                                    No data found.
                                </span>
                            </td>
                        </tr>
                    }
                </tbody>
            </RootTable>
        )
    }
}

export default Table;