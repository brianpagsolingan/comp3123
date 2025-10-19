import PropTypes from 'prop-types';
function Student(props) {
  return (
    <div>
        <h3>This is the Student Component</h3>
        {/* <p>{JSON.stringify(props)}</p> */}
        <h3>Student ID: {props.sid}</h3>
        <h3>Name      : {props.name}</h3>
        <h3>Age       : {props.age}</h3>
        <h3>Course    : {props.course}</h3>
        
    </div>
      
  );
}



Student.propTypes = {
    sid: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    course: PropTypes.string.isRequired
};  

Student.defaultProps = {
    sid: 0,
    name: "No name",
    age: 0,
    course: "No course"
};
export default Student;