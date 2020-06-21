import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { connect } from 'react-redux';
import {baseUrl} from './baseUrl.js';

function RenderCard({item, failed}) {

    if(failed)
        return(<h4>{failed}</h4>);

    return(
        <Card>
            <CardImg src={baseUrl+item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    {props.isDishLoading?<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>:<RenderCard item={props.dish} failed={props.isDishFailed} />}
                </div>
                <div className="col-12 col-md m-1">
                    {props.isPromotionLoading?<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>:<RenderCard item={props.promotion} failed={props.isPromotionFailed} />}
                </div>
                <div className="col-12 col-md m-1">
                    {props.isLeadersLoading?<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>:<RenderCard item={props.leader} failed={props.isLeaderFailed} />}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        isDishLoading: state.dishes.isLoading,
        isDishFailed: state.dishes.errMess,
        dish: state.dishes.dishes.filter((dish) => dish.featured)[0],
        isPromotionLoading: state.promotions.isLoading,
        isPromotionFailed: state.promotions.errMess,
        promotion: state.promotions.promotions.filter((promo) => promo.featured)[0],
        isLeadersLoading: state.leaders.isLoading,
        isLeaderFailed: state.leaders.errMess,
        leader: state.leaders.leaders.filter((leader) => leader.featured)[0]

    };
}

export default connect(mapStateToProps)(Home);