import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import './home.css';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> 
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x500/?dumbell,gym"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x500/?indoor,gym"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x500/?indoor,gym"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        

              <h3 className="head1">We can give you <br/><span className="head2">Much More Than Others</span></h3>
              <div className="headimage">
              <img src="https://image.flaticon.com/icons/png/512/69/69840.png" alt="gymimage" className="imgimage" />
              </div>

              <div className="text-center">
              <h3 className="my-3">Logged Exercises</h3>
              <table className="table table-bordered table-dark table-striped tablex ">
                <thead className="thead-light">
                  <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.exerciseList()}
                </tbody>
              </table>
              </div>
            </>
    )
  }
}