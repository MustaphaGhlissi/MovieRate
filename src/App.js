import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import Table from './components/Table';
import Search from './components/Search';
import _ from 'lodash';

function App() {

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [movie, setMovie] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');

  const saveMovie = (e) => {

    e.preventDefault();

    if(movie.trim() === '' || rating === '' || duration === '') {
      alert('Please fillin all the required fields.');
      return false;
    }
    else {
      let index = movies.findIndex(el => el.movie === movie)
      
      if(index !== -1) {
        movies[index] = {
          movie,
          rating,
          duration
        };
        setMovies(movies);
      }
      else {
        setMovies([
          {
            movie,
            rating,
            duration
          },
          ...movies
        ])
      }
    }
    
  

    setMovie('');
    setRating('');
    setDuration('');
  }

  const searchMovie = (e) => {
    let filtered = movies.filter(el => _.toLower(el.movie).startsWith(_.toLower(e.target.value)));
    setFilteredMovies(filtered);
  }

  return (
    <main>
      <Container>
        <Row>
          <Col>
            <h2>Rate your favorite movies</h2>  
            <Form method='post' onSubmit={saveMovie}>
              <FormGroup>
                <FormLabel htmlFor='movie'>Movie</FormLabel>
                <FormControl 
                  id='movie'
                  name='movie'
                  required
                  value={movie}
                  onChange={e => setMovie(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor='rating'>Rating</FormLabel>
                <FormControl 
                  id='rating'
                  name='rating'
                  placeholder='1.5'
                  min={0}
                  value={rating}
                  pattern='[0-9]{1,2}.[0-9]{1,2}'
                  required
                  onChange={e => setRating(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor='duration'>Duration</FormLabel>
                <FormControl 
                  id='duration'
                  name='duration'
                  placeholder='01:32'
                  value={duration}
                  pattern='[0-9]{1,2}:[0-9]{1,2}'
                  required
                  onChange={e => setDuration(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Button type='submit'>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Search searchMovie={searchMovie} disabled={movies.length === 0} />
            <Table movies={filteredMovies ?? movies} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
