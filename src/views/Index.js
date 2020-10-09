
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar,Pie,Radar,Doughnut } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

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

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
  
  render() {
    const dataPie = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
      {
          data: [300, 50, 100, 40, 120, 24, 52],
          backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
      }
      ]
  }
  const dataBar = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
    {
        label: '#1',
        data: [12, 39, 3, 50, 2, 32, 84],
        backgroundColor: 'rgba(245, 74, 85, 0.5)',
        borderWidth: 1
    }, {
        label: '#2',
        data: [56, 24, 5, 16, 45, 24, 8],
        backgroundColor: 'rgba(90, 173, 246, 0.5)',
        borderWidth: 1
    }, {
        label: '#3',
        data: [12, 25, 54, 3, 15, 44, 3],
        backgroundColor: 'rgba(245, 192, 50, 0.5)',
        borderWidth: 1
    }
    ]
};

const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    xAxes: [{
        barPercentage: 1,
        gridLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
        }
    }],
    yAxes: [{
        gridLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
        beginAtZero: true
        }
    }]
    }
}
const dataLine = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65000, 59000, 80000, 81000, 56000, 55000, 40000]
    }
  ]
};

const dataRadar = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
      {
        label: '#1',
        backgroundColor: 'rgba(245, 74, 85, 0.5)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: '#2',
        backgroundColor: 'rgba(90, 173, 246, 0.5)',
        data: [12, 42, 121, 56, 24, 12, 2]
      },
      {
        label: '#3',
        backgroundColor: 'rgba(245, 192, 50, 0.5)',
        data: [2, 123, 154, 76, 54, 23, 5]
      }
    ]
};

const dataDoughnut = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [{
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
  }]
};
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Monthly and Weekly Sales</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Week</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Monthly Orders</h2>
                    </div>
                  </Row>

                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                  <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Monthly Sales</h2>
                    </div>
                    
                    
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                  <Bar data={dataBar} height={500} options={barChartOptions} />
                       
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Monthly orders</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                  <Pie data={dataPie} height={300} options={{responsive: true}} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="5">
              <Card >
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Sales value</h2>
                    </div>
                    
                    
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                  <Line data={dataLine} options={{responsive: true }} />
                       
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
            <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Monthly orders</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                  <Radar data={dataRadar}  height={300} options={{responsive: true }} />
                     </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3">
              <Card >
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Monthly orders</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                  <Doughnut data={dataDoughnut}  height={300} options={{responsive: true }} />
                     </div>
                </CardBody>
              </Card>

            </Col>

          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Users</h3>
                    </div>
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
            </Col>
           
          </Row>
         
        </Container>
      </>
    );
  }
}

export default Index;
