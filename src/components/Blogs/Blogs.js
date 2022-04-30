import React from 'react';
import { Card, Table } from 'react-bootstrap';
import '../Blogs/Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <Card className='mt-4 mx-3 blogs-container'>
                <Card.Body>
                    <Card.Title className='text-danger pt-1 mt-1'>Difference between javascript and nodejs</Card.Title>
                    <hr />
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>javascript</th>
                                <th>Node Js</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>JavaScript is a objected-oriented scripting which is used for making dynamic Html page </td>
                                <td>Node js is open source runtime program which enable javascript on the server to execute the code and ontime reload data.</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>javascript is a browsers interpreted language which is publised in 1995</td>
                                <td>Node js runtime open source program which run on the server which is developed and created by Ryan Dahl in 2009.
                                </td>                              </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>3</td>
                                <td>javascript is scripting language which is comonly used in game development,web application and mobile app development. </td>
                                <td>Node js is basically used for web creation which runs on windows,Linux,Mac OS,etc.</td>
                            </tr>
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>

            <Card className='mt-4 mx-3 blogs-container'>
                <Card.Body>
                    <Card.Title className='text-danger pt-1 mt-1'>3 Differences between sql and nosql databases.</Card.Title> <hr />
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Sql</th>
                                <th>No Sql</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sql is a stured query language which have a predefined schema </td>
                                <td>NoSql program dtabases have dynamic shemas for unstructured data.</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>SQL are vertically scable are table based program.</td>
                                <td>No SQL are horizontally scable are document ,key value,grap or wide stories.
                                </td>                              </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>3</td>
                                <td>SQL are make better permonce for multi-row transactions. </td>
                                <td>NO SQL is better fort unstructured data like documents or JSON.</td>
                            </tr>
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>


            <Card className='mt-4 blogs-container'>
                <Card.Title className='text-danger pt-1 mt-1'>What other services does firebase provide other than authentication?</Card.Title>
                <hr />
                <p className='p-3'>
                    <strong>Mostly we used firebase for authentication,</strong>where users identity manintain the users data in the site used firebase authentication besides it provides more service like backend progam services,use SDKs and made UI libraries also to authenticate users your site.
                    By using firebase it is easy to implement authentication and authorization system ,it is a third party app to control the authorization.So it has more security than custom authentication and authorization system,thats why its more reliable.
Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.

            </p>


            </Card>


        </div>
    );
};

export default Blogs;