import PropTypes from 'prop-types'

function Student(props)
{
    return(
        <div className="student">
        <p>name:{props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "yes": "no"}</p>
        </div>
    );
} 

Student.propType={
    name:PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,


}
export default Student