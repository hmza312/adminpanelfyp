
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
     
      "email": "zaib31200@gmail.com",
      "first_name": "Muhammad",
      "last_name": "Suleman",
     
          "message": "Very Good",
          
      
  },
 
  {
      
      "email": "hamzaiftikharpcs@gmail.com",
      "first_name": "Hamza",
      "last_name": "Iftikhar",
   
          "message": "i am facing an issue",
            
  },
  {
  
      "email": "hamzaiftikhar333@yahoo.com",
      "first_name": "Hamza",
      "last_name": "iftikhar",
      
          "message": "what farmer do with crops",
         
      
  },
  {
      
      "email": "hinatajamal123@gmail.com",
      "first_name": "hina",
      "last_name": "Tajamal",
      
          "message": "Where the main office",
         
    
  },
  {
     
      "email": "abc@gmail.com",
      "first_name": "Hina",
      "last_name": "Tajamal",
    
          "message": "not working",
         
  },
  {
      
      "email": "alimuhamad@gmail.com",
      "first_name": "Muhammad",
      "last_name": "Ali",
  
          "message": "no question",
         
      
  },
 ]


class Feedback extends React.Component {
  state = {};
  open=()=>{
    window.location = `/reply`;
  }
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
                  <h3 className=" mb-0">Feedback</h3>
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
        
          <th>Email</th>
          <th >Message</th>
          <th >Reply</th>
          <th >Action</th>
</tr>
                  </thead>
                  <tbody>
                  {data.map((item)=>
                    
                    <tr>
                     
                      <td>{item.first_name}{' '}{item.last_name}</td>
                      
                     
                      
                      <td>{item.email}</td>
                   
                      <td>{item.message}</td>
                      <td>
                        <Button
                          color="blue"
                          size="sm"
                          type="button"
                          onClick={this.open}
                        >
                          Response
                        </Button>
                        </td>
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

export default Feedback;
