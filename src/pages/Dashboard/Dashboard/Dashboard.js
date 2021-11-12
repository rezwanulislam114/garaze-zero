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
import Orders from '../Orders/Orders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddReview from '../AddReview/AddReview';

const Dashboard = () => {
    const { admin } = useAuth();
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
                        {
                            admin && <>
                                <ul>
                                    <li><NavLink activeStyle={activeStyle} to={`${url}/add-product`}>Add Product</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeStyle={activeStyle} to={`${url}/manage-products`}>Manage All Products</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink activeStyle={activeStyle} to={`${url}/make-admin`}>Make Admin</NavLink></li>
                                </ul>
                            </>
                        }
                    </div>
                </Col>
                <Col xs={12} sm={10} className="my-5">
                    <Switch>

                        {/* dashboard for all user  */}
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/my-orders`}>
                            <Orders></Orders>
                        </Route>
                        <Route path={`${path}/add-review`}>
                            <AddReview></AddReview>
                        </Route>

                        {/* dashboard for admin  */}
                        <AdminRoute path={`${path}/add-product`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-products`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;