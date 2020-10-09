/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Button,
  Table,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
const data=[
  {
      "url": "http://192.168.18.24:8000/api/users/8/",
      "username": "sulesuleman",
      "email": "zaib31200@gmail.com",
      "first_name": "Muhammad",
      "last_name": "Suleman",
     
          "Category": "Farmer",
          "Contact": "03235333140",
          "Address": "House No.68, St No.5, PTV Colony, Simlidam Road, Barakahu, Islamabad",
          "location": "Islamabad",
          "Delivery": "no",
          "photo": "http://192.168.18.24:8000/media/uploads/IMG_7242_19sXUS5.JPG"
      
  },
 
  {
      "url": "http://192.168.18.24:8000/api/users/10/",
      "username": "hmza312",
      "email": "hamzaiftikharpcs@gmail.com",
      "first_name": "Hamza",
      "last_name": "Iftikhar",
   
          "Category": "Customer",
          "Contact": "03319343219",
          "Address": "1/1-c,galino60 ,G-7/2, Islamabad",
          "location": "Lahore",
          "Delivery": "yes",
          "photo": "http://192.168.18.24:8000/media/uploads/hamza.jpg"
      
  },
  {
      "url": "http://192.168.18.24:8000/api/users/11/",
      "username": "hmza34",
      "email": "hamzaiftikhar333@yahoo.com",
      "first_name": "Hamza",
      "last_name": "iftikhar",
      
          "Category": "Farmer",
          "Contact": "135688",
          "Address": "ghjj",
          "location": "Gujrat",
          "Delivery": "yes",
          "photo": null
      
  },
  {
      "url": "http://192.168.18.24:8000/api/users/12/",
      "username": "hina123",
      "email": "hinatajamal123@gmail.com",
      "first_name": "hina",
      "last_name": "Tajamal",
      
          "Category": "Vendor",
          "Contact": "123455",
          "Address": "Kashmir",
          "location": "Kashmir",
          "Delivery": "yes",
        "photo": null
    
  },
  {
      "url": "http://192.168.18.24:8000/api/users/13/",
      "username": "hinataj12",
      "email": "abc@gmail.com",
      "first_name": "Hina",
      "last_name": "Tajamal",
    
          "Category": "Vendor",
          "Contact": "03225674987",
          "Address": "silcon velley",
          "location": "Karachi",
          "Delivery": "yes",
          "photo": "http://192.168.18.24:8000/media/uploads/hina.jpeg"
      
  },
  {
      "url": "http://192.168.18.24:8000/api/users/14/",
      "username": "ali12",
      "email": "alimuhamad@gmail.com",
      "first_name": "Muhammad",
      "last_name": "Ali",
  
          "Category": "Farmer",
          "Contact": "123456789",
          "Address": "xyz",
          "location": "Islamabad",
          "Delivery": "yes",
          "photo": null
      
  },
 ]


class Icons extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                <Row className="align-items-center">
                <Col className="mb-5 mb-xl-0" xl="8">
                  <h3 className=" mb-0">Users</h3>
                 </Col>
                 <Col className="mb-5 mb-xl-0" xl="4">
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                    </Col>
                  </Row>
              
                </CardHeader>
             
           
              
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
           
           <th>Full Name</th>
        
          <th>Username</th>
          <th >Category</th>
          <th>Email</th>
          <th>Location</th>
          <th>Contact</th>
          <th >Action</th>
</tr>
                  </thead>
                  <tbody>
                  {data.map((item)=>
                    
                    <tr>
                     
                      <td>{item.first_name}{' '}{item.last_name}</td>
                      
                      <td>{item.username}</td>
                      <td>{item.Category}</td>
                      <td>{item.email}</td>
                      <td>{item.location}</td>
                      <td>{item.Contact}</td>
                      <td>
                        <Button
                          color="danger"
                          size="sm"
                          type="button"
                        >
                          Delete
                        </Button>
          
                       
                       
                      </td>
                    </tr>
                  )}
                                  </tbody>
                </Table>
         
            
               
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
