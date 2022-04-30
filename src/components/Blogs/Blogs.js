import React from 'react';
import { Card, Table } from 'react-bootstrap';
import '../Blogs/Blogs.css';

const Blogs = () => {
    return (
        <div className='container '>
            <Card className='mt-4 mx-3 '>
                <Card.Body className='blogs-container'>
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

            <Card className='mt-4 mx-3'>
                <Card.Body className='blogs-container'>
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
                <Card.Body className='blogs-container'>
                    <Card.Title className='text-danger pt-1 mt-1 '>When should you use nodejs and when should you use mongodb</Card.Title>
                    <hr />
                    <p className='p-3'>
                        <strong>Mostly Node js is maily open source ,</strong>server environment where javascript on the server to develop application,besides mongoDB helps to connect backed to execute the fullstack code.Maninly Node js a single threated language which process the code asynchronously where the requests asynchronously blcking I/O tasks to the internal thread pool to handle any intensive operation.specially its works asygnchoronously executbe the program.
                 <br />
                        Besides MongoDb facilitate to store database nin json this is best path for sotre data where stored more collections of Node js path.So,i think that mongoDB is the best method to store data in MongoDB json.
            </p>
                </Card.Body>
            </Card>


            <Card className='mt-4 blogs-container'>
                <Card.Body className='blogs-container'>
                    <Card.Title className='text-danger pt-1 mt-1 '>What is the purpose of jwt and how does it work</Card.Title>
                    <hr />
                    <p className='p-3'>
                        <strong>JWT means JSON web Token</strong>which is mainly used for security purpose where its try to make safe your data,if anyone can try to access your data,its will be impossible for him because JWt,which is the best path to make safe your data as anyone can not access your data for token issured which make secure your from the third party.
            </p>
                </Card.Body>
            </Card>


            <Card className='mt-4 blogs-container'>
                <Card.Body className='blogs-container'>
                    <Card.Title className='text-danger pt-1 mt-1 '>stack overflow qustion?</Card.Title>
                    <hr />
                    <p className='p-3'>
                        <strong>Question: <a href="https://stackoverflow.com/questions/72070945/website-scrolls-to-top-on-reload-in-swift-webview-html-css/72071280#72071280" className='text-decoration-none'> Clik Here</a></strong> <br />
                        <strong>Answer: <a href="https://stackoverflow.com/users/18429851/md-nabiul-bashar" className='text-decoration-none'>Click Here</a></strong> <br />
                    </p>
                </Card.Body>
            </Card>




        </div>
    );
};

export default Blogs;