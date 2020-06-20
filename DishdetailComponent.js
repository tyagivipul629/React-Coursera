import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import {baseUrl} from './baseUrl.js';

const required = (val) => val&&val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit1=this.handleSubmit1.bind(this);
    }
    handleSubmit1(values){
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render(){
        return(
            <>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} cssModule={{'modal-title': 'w-100 text-center'}}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit1(values)}>
                            <Row className="form-group">
                                <Label htmlFor="Rating" md={2}>Rating</Label>
                                <Col md={{size: 10}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={3}>Your Name</Label>
                                <Col md={9}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                     Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>

                <Button onClick={this.toggleModal} className="btn btn-outline-secondary"><i className="fa fa-pencil"></i> Submit Comment</Button>
            </>
        );
    }
}

    function RenderDish({dish}){
        return(
            <Card key={dish.id}>
            <CardImg top src={baseUrl+dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    function RenderComments({comments, dishId, addComment}){
        if(comments==null)
            return <div />;
        else{
            const comms=comments.map((comment)=>{
                return (
                <ul key={comment.id} className="list-unstyled">
                    <li className="mb-2">{comment.comment}</li>
                <li> --{comment.author}{" "}{comment.date}</li>
                </ul>);
            });

            return(
                <>
                <div>{comms}</div>
                <CommentForm dishId={dishId} addComment={addComment}/>
                </>
            );
        }
    }
    const DishdetailComponent=(props)=>{
        return(
            <>
            <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.isDishLoading?<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>:props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.isDishLoading?<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>:props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {props.isDishLoading?<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>:<RenderDish dish={props.dish} />}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {props.isCommentsLoading?<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>:<RenderComments comments={props.comments} dishId={props.dish.id} addComment={props.addComment}/>}
                    </div>
                </div>
            
        </>
        );
        }
    
const mapStateToProps=(state)=>{
    return{
        isDishLoading: state.dishes.isLoading,
        isCommentsLoading: state.comments.isLoading
    };
}

export default connect(mapStateToProps)(DishdetailComponent);
