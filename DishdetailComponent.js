import React from 'react';
import Card from 'reactstrap';
import CardImg from 'reactstrap';
import CardText from 'reactstrap';
import CardBody from 'reactstrap';
import CardTitle from 'reactstrap';


    function RenderDish({dish}){
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
    function RenderComments({comments}){
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
    const DishdetailComponent=(props)=>{
        if(props.dish==null)
            return (<div></div>);
        else{
        return(
            <div className="row">
            <div className="col-12 col-md-4 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-6 m-1"><h2>Comments</h2><RenderComments comments={props.dish.comments} /></div>
        </div>
        );
        }
    }
    


export default DishdetailComponent;
