
import React, { Component } from "react";

class Student extends Component {

  constructor(props) {
    super(props);

    this.state = {
      age: 20
    };
  }

  render() {
    return (
      <div>
        <h2>Student Details</h2>

        <p>Name: {this.props.name}</p>

        <p>Course: {this.props.course}</p>

        <p>Age: {this.state.age}</p>

        <button onClick={() =>
          this.setState({ age: this.state.age + 1 })
        }>
          Increase Age
        </button>
      </div>
    );
  }
}

// Default Properties
Student.defaultProps = {
  name: "Rahul",
  course: "BCA"
};

export default Student;
