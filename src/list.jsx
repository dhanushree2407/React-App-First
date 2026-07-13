import Course from './artco';

function List() {
  const courses = [
    { id: 1, name: 'Cartoon', price: 100, rating:'⭐4.5' ,image: '/cartoon.jpg' },
    { id: 2, name: 'Landscape', price: 200, rating: '⭐4.0', image: '/landscape.jpg' },
    { id: 3, name: 'Portrait', price: 150, rating: '⭐4.8', image: '/portrait.jpg' },
    { id: 4, name: 'Figure Drawing', price: 250, rating: '⭐4.2',image: '/figure.jpg' }
  ];

  return (
    <>
      {courses.map((course) => (
        <Course
          key={course.id}
          name={course.name}
          price={course.price}
          rating={course.rating}
          image={course.image}
        />
      ))}
    </>
  );
}

export default List;