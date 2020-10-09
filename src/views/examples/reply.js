
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
  } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
class SendReply extends React.Component {
    state = {};
    open=()=>{
          window.location = `${process.env.PUBLIC_URL}/`;
    }
    render() {
      return (
        <>
        <Header />
        <br/>
        <Row>
            <Col lg="3"></Col>
        <Col lg="6" md="8">
        <FormGroup>
                  <InputGroup className="input-group-alternative">
                  
                    <Input placeholder="Your Response" type="textarea"  rows={5}
          cols={5} />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button">
                   Send Response
                  </Button>
                </div>
         </Col>
         </Row>
</>
      );
    }}
    export default SendReply;