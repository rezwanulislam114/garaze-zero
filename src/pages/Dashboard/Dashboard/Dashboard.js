import React from 'react';
import './Dashboard.css'
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../AddProduct/AddProduct';
import Payment from '../Payment/Payment';
import ManageProducts from '../ManageProducts/ManageProducts';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const activeStyle = {
        textDecoration: 'underline',
        color: '#de0000'
    }
    return (
        <Container>
            <Row className="p-0">
                <Col xs={12} sm={2} className="dashboard-navigation">
                    <div className="navigation">
                        <ul>
                            <li><NavLink activeStyle={activeStyle} exact to='/dashboard'>Dashboard</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink activeStyle={activeStyle} to={`${url}/my-orders`}>My Orders</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink activeStyle={activeStyle} to={`${url}/add-review`}>Add Review</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink activeStyle={activeStyle} to={`${url}/payment`}>Payment</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink activeStyle={activeStyle} to={`${url}/add-product`}>Add Product</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink activeStyle={activeStyle} to={`${url}/manage-products`}>Manage All Products</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink activeStyle={activeStyle} to={`${url}/make-admin`}>Make Admin</NavLink></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={10} className="my-5">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/add-product`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/manage-products`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;