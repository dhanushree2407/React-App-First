import PropTypes from 'prop-types';

function Course(props) {
  const getCourse = () => {
    console.log(props.name, 'Courses purchased!');
  };

  return (
    props.name && (
      <div className="course">
        <h2>{props.name}</h2>
        {props.image && <img src={props.image} alt={props.name} style={{ width: '100%', height: '120px', objectFit: 'cover', marginBottom: '8px', borderRadius: '4px',image: 'cover' }} />}
        <span>{props.rating}</span>
        <p>${props.price}</p>
        <button onClick={getCourse}>Buy Now</button>
      </div>
    )
  );
}

Course.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  image: PropTypes.string
};

export default Course;