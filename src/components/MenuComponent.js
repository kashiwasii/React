import React from "react";
//import DishDetail from './DishdetailComponent';
import {
  Card,
  CardImgOverlay,
  CardImg,
  //CardText,
  // CardBody,
  CardTitle,
} from "reactstrap";


 function RenderMenuItem({dish,onClick}){
   return(
    <Card >
      <CardImg width="100%" object src={dish.image} alt={dish.name} />

      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
   );
 }
  
  // onDishSelect(dish) {
  //   this.setState({ selectedDish: dish });
  // }
  // renderDish(dish) {
  //   if (dish != null) {
  //     return (
  //       <div>
  //       <Card>
  //         <CardImg width="100%" object src={dish.image} alt={dish.name} />
  //       </Card>
  //       <Card>
  //       <CardTitle>{dish.name}</CardTitle>
  //         <CardText>{dish.description}</CardText>
  //       </Card>
  //       </div>
  //     );
  //   } else {
  //     return <div></div>;
  //   }
  // }
  // renderComments(dish) {
  //   if (dish != null) {
  //     return (
  //       <div>
  //         <h4>Comments</h4>
  //         {dish.comments[0].comment}
  //           <br/>- - {dish.comments[0].author} , {dish.comments[0].date}<br/>
  //           {dish.comments[1].comment}
  //           <br />- - {dish.comments[2].author} , {dish.comments[1].date}<br/>
  //           {dish.comments[2].comment}
  //           <br />- - {dish.comments[2].author} , {dish.comments[2].date}<br/>
  //           {dish.comments[3].comment}
  //           <br />- - {dish.comments[3].author} , {dish.comments[3].date}<br/>
  //           {dish.comments[4].comment}
  //           <br />- - {dish.comments[4].author} , {dish.comments[4].date}
  //       </div>
  //     );
  //     }
  //   }
  const Menu=(props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} onClick={props.onClick} />
          {/* <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card> */}
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/* <div className="row">
           <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.state.selectedDish)}
          </div> 
           <DishDetail dishes={this.state.selectedDish} />
        </div> */}
      </div>
    );
    
  }
    // const menu = this.props.dishes.map((dish) => {
    //   return (
    //     <div key={dish.id} className="col-12 col-md-5 m-1">
    //       {/* <Card onClick={() => this.props.onClick(dish.id)}>
    //         <CardImg width="100%" object src={dish.image} alt={dish.name} />

    //         <CardImgOverlay>
    //           <CardTitle>{dish.name}</CardTitle>
    //         </CardImgOverlay>
    //       </Card> */}
    //     </div>
    //   );
    // });

    // return (
    //   <div className="container">
    //     <div className="row">{menu}</div>
    //     {/* <div className="row">
    //        <div className="col-12 col-md-5 m-1">
    //         {this.renderDish(this.state.selectedDish)}
    //       </div>
    //       <div className="col-12 col-md-5 m-1">
    //         {this.renderComments(this.state.selectedDish)}
    //       </div> 
    //        <DishDetail dishes={this.state.selectedDish} />
    //     </div> */}
    //   </div>
    // );
 

export default Menu;
