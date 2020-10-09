
import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import { Card, Container, Row ,CardHeader,Col,Table,Button} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
// mapTypeId={google.maps.MapTypeId.ROADMAP}

const table = [
  {
   "id": 2412,
   "key": "1",
   "date": "2014/06/13",
   "customer": "Damon",
   "total": 56,
   "tax": 5.6,
   "shipping": 10,
   "quantity": 85,
   "status": "Processing"
 }, {
   "id": 3234,
   "key": "2",
   "date": "2013/09/27",
   "customer": "Miracle",
   "total": 63.40,
   "tax": 6.34,
   "shipping": 0,
   "quantity": 263,
   "status": "Complete"
 }, {
   "id": 7821,
   "key": "3",
   "date": "2013/06/28",
   "customer": "Torrey",
   "total": 452,
   "tax": 45.2,
   "shipping": 10,
   "quantity": 136,
   "status": "Complete"
 }, {
   "id": 2412,
   "key": "4",
   "date": "2013/05/28",
   "customer": "Hubert",
   "total": 62,
   "tax": 6.2,
   "shipping": 34,
   "quantity": 362,
   "status": "Processing"
 }, {
   "id": 2412,
   "key": "5",
   "date": "2014/06/13",
   "customer": "Damon",
   "total": 56,
   "tax": 5.6,
   "shipping": 10,
   "quantity": 85,
   "status": "Processing"
 }, {
   "id": 3234,
   "key": "6",
   "date": "2013/09/27",
   "customer": "Miracle",
   "total": 63.40,
   "tax": 6.34,
   "shipping": 0,
   "quantity": 263,
   "status": "Complete"
 }, {
   "id": 7821,
   "key": "7",
   "date": "2013/06/28",
   "customer": "Torrey",
   "total": 452,
   "tax": 45.2,
   "shipping": 10,
   "quantity": 136,
   "status": "Complete"
 }, {
   "id": 2412,
   "key": "8",
   "date": "2013/05/28",
   "customer": "Hubert",
   "total": 62,
   "tax": 6.2,
   "shipping": 34,
   "quantity": 362,
   "status": "Processing"
 }, {
   "id": 2412,
   "key": "9",
   "date": "2014/06/13",
   "customer": "Damon",
   "total": 56,
   "tax": 5.6,
   "shipping": 10,
   "quantity": 85,
   "status": "Processing"
 }, {
   "id": 3234,
   "key": "10",
   "date": "2013/09/27",
   "customer": "Miracle",
   "total": 63.40,
   "tax": 6.34,
   "shipping": 0,
   "quantity": 263,
   "status": "Complete"
 }, {
   "id": 7821,
   "key": "11",
   "date": "2013/06/28",
   "customer": "Torrey",
   "total": 452,
   "tax": 45.2,
   "shipping": 10,
   "quantity": 136,
   "status": "Complete"
 }, {
   "id": 2412,
   "key": "12",
   "date": "2013/05/28",
   "customer": "Hubert",
   "total": 62,
   "tax": 6.2,
   "shipping": 34,
   "quantity": 362,
   "status": "Processing"
 }
]
class Maps extends React.Component {
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
                <h3 className=" mb-0">Orders</h3>
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
                        <th>Id</th>   
                        <th>Date</th>
                        <th>Customer</th>
                        <th >Total</th>
                        <th>Tax</th>
                        <th>Shipping</th>
                        <th>Quantity</th>
                        <th >Status</th>
                        <th >Action</th>
                      </tr>
                </thead>
                <tbody>
                {table.map((item)=>
                    
                    <tr>
       <td className=" text-center">{item.id}</td>
         
  
          <td>{item.date}</td>
          <td>{item.customer}</td>
          <td>{item.total}</td>
          <td>{item.tax}</td>
          <td>{item.shipping}</td>
          <td>{item.quantity}</td>
          <td>{item.status}</td>
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

export default Maps;
