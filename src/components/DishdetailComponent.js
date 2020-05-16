import React, { Component } from "react";
import {
  Card,
  //CardImgOverlay,
  CardImg,
  CardText,
  // CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  renderDish(dish) {
    
      return (
        <div>
          <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
          </Card>
          <Card>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </Card>
        </div>
      );
    } 
    
  
    renderComments(comments) {
      var commentList = comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.comment}
            <br />
            <br />
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
            <br />
            <br />
          </li>
        );
      });
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {commentList}
            </ul>
        </div>
    );
}
  render() {
    if(this.props.dishes){
    // const me = this.props.dishes.map((Dish) => {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dishes)}
       </div>
      <div className="col-12 col-md-5 m-1">
        {this.renderComments(this.props.dishes.comments)}
      </div>
    </div>
      // <div className="container">
      //   <div className="row">{menu}</div>
        // <div className="row">
        //  {menu}
        // </div>
      // </div>00
    );
  // });
  // return(
  //    <div className="row">
  //   {me}
  //  </div>
  // );
  }
  else{
    return(
    <div> </div>
    );
  }
}
  
}
export default DishDetail;
