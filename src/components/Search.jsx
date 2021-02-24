import React from 'react'
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';


const Search = ({searchMovie, disabled}) => {
    return (
        <Form method='get'>
            <FormGroup>
                <FormLabel htmlFor='search'>
                    Search
                </FormLabel>
                <FormControl
                    type='search'
                    id='search'
                    name='search'
                    onChange={searchMovie}
                    disabled={disabled}
                />
            </FormGroup>
        </Form>
    )
}

export default Search;