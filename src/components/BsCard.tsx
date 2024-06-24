import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface CardProps {
  imgUrl: string;
  title: string;
  userLink: string;
  userId: number;
  onClickHandler: () => void;
}

function BsCard({
  imgUrl,
  title,
  userLink,
  userId,
  onClickHandler,
}: CardProps) {
  return (
    <Card className="h-100" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          By User: <Link to={userLink}>{userId}</Link>
        </Card.Text>
        <Button  variant="primary" onClick={onClickHandler}>
          Remove From Favorite
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BsCard;
