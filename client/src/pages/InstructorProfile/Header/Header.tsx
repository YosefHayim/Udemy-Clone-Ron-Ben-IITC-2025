import instructorImgPlaceholder from "/images/instructor-img-placeholder.png";

const Header = () => {
  return (
    <div>
      <div>
        <h2>INSTRUCTOR</h2>
        <h1>Hussein Nasser</h1>
        <h3>Software Engineer, Author</h3>
      </div>
      <div>
        <div>
          <b>Total Students</b>
          <b>197,695</b>
        </div>
        <div>
          <b>Reviews</b>
          <b>24,516</b>
        </div>
      </div>
      <div>
        <img src={instructorImgPlaceholder} alt="" />
      </div>
    </div>
  );
};

export default Header;
