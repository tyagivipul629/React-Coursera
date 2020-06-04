import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishdetailComponent extends React.Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
        return(
            <Card key={dish.id}>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    renderComments(comments){
        if(comments==null)
            return <div />;
        else{
            return comments.map((comment)=>{
                return (
                <ul key={comment.id} className="list-unstyled">
                    <li className="mb-2">{comment.comment}</li>
                <li> --{comment.author}{" "}{comment.date}</li>
                </ul>);
            });
        }
    }
    render(){
        if(this.props.selectedDish==null)
            return (<div></div>);
        else{
        return(
            <div className="row">
            <div className="col-12 col-md-4 m-1">
            {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-6 m-1"><h2>Comments</h2>{this.renderComments(this.props.selectedDish.comments)}</div>
        </div>
        );
        }
    }
}

export default DishdetailComponent;
