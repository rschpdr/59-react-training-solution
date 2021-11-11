import './FaceBookCard.css';

function FaceBookCard(props) {
  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className="border border-dark m-3 border-2"
    >
      <div className="row">
        <div className="col-3">
          <img
            className="img-fluid profile-picture"
            src={props.img}
            alt={`${props.firstName} ${props.lastName}`}
          />
        </div>
        <div className="col-9 d-flex align-items-center">
          <ul className="list-unstyled">
            <li>
              <strong>First Name: </strong>
              {props.firstName}
            </li>
            <li>
              <strong>Last Name: </strong>
              {props.lastName}
            </li>
            <li>
              <strong>Country: </strong>
              {props.country}
            </li>
            <li>
              <strong>Type: </strong>
              {props.isStudent ? 'Student' : 'Teacher'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FaceBookCard;
