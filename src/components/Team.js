import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

class Team extends React.Component {
    state = {};
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }
    render() {
      return (
        <>
          <DemoNavbar />
          <main ref="main">
            <div className="position-relative">
              {/* shape Hero */}
              <section className="section section-lg section-shaped pb-250" style={{maxHeight:"500px", marginBottom:"0px", paddingTop:"6rem", paddingBottom:"0px"}}>
                <div className="shape shape-style-1 bg-gradient-default" style={ {maxHeight:"500px"}} >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <Container className="py-lg-md d-flex" >
                  <div className="col px-0">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white">
                          Team @ Semicolon
                        </h1>
                        <p className="lead text-white">
                          The secret to truly successful work isn’t just about technology; it’s about working with the right people.  
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </section>
            </div>
            <section className="section section-lg">
              <Container>
                <Row className="justify-content-center text-center mb-lg">
                  <Col lg="8">
                    <h3 className="display-3">PRESIDENT & MANAGING DIRECTORS</h3>
                  </Col>
                </Row>
                <Row>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                <Card className="card-lift--hover shadow border-1" style={{ paddingTop:"10px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Tabish Mir</span>
                        <small className="h6 text-muted">President</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                <Card className="card-lift--hover shadow border-1" style={{ paddingTop:"10px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Apurv Thakur</span>
                        <small className="h6 text-muted">Managing Director</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Padma Lhamo</span>
                        <small className="h6 text-muted">Managing Director</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                  </Card>
                </Col>
                </Row>
                <Row className="justify-content-center text-center mb-lg">
                  <Col lg="8">
                    <h3 className="display-3" style={{marginTop:"100px"}}>HEADS</h3>
                  </Col>
                </Row>
                <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <Card className="card-lift--hover shadow border" style={{ paddingTop:"20px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Vipasha Sharma</span>
                        <small className="h6 text-muted">Creative Head</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <Card className="card-lift--hover shadow border" style={{ paddingTop:"20px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Rohit Kumar</span>
                        <small className="h6 text-muted">Operations Head</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Kanak Garg</span>
                        <small className="h6 text-muted">Communication Head</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Rahul</span>
                        <small className="h6 text-muted">Coding Lead</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <br/>
                <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ankur Goswami</span>
                        <small className="h6 text-muted">Project Head</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <br/>
                <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Vikas</span>
                        <small className="h6 text-muted">Project Head</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                    <br/>
                  </div>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h3 className="display-3" style={{marginTop:"100px"}}>EXECUTIVES</h3>
                </Col>
              </Row>
              <Row>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
              <br/>
              <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ankur Goswami</span>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-github" />
                      </Button>
                    </div>
                  </div>
                  <br/>
                </div>
                </Card>
              </Col>
            </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h3 className="display-3" style={{marginTop:"100px"}}>ALUMUNI & PANEL MEMBERS </h3>
                </Col>
              </Row>
              <Row>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border-1" style={{margin:"10px" , paddingTop:"20px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Varun Dev</span>
                          <small className="h6 text-muted">Founder & Alumuni</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Zaki Akmal</span>
                          <small className="h6 text-muted">Founder & Alumuni</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Ashish Kumar</span>
                          <small className="h6 text-muted">Founder & Mentor</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Shivang Khajuria</span>
                          <small className="h6 text-muted">Founder & Mentor</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Saurabh Jain</span>
                          <small className="h6 text-muted">Chair to Panel</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Raisa Arief</span>
                          <small className="h6 text-muted">Panel Member</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Ananta Brajesh</span>
                          <small className="h6 text-muted">Panel Member</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Kshitij Raj</span>
                          <small className="h6 text-muted">Panel Member</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Shivang Khajuria</span>
                          <small className="h6 text-muted">Founder & Mentor</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Shivang Khajuria</span>
                          <small className="h6 text-muted">Founder & Mentor</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <Card className="card-lift--hover shadow border" style={{ paddingTop:"10px"}}>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-0 img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Shivang Khajuria</span>
                          <small className="h6 text-muted">Founder & Mentor</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-github" />
                          </Button>
                        </div>
                      </div>
                      <br/>
                    </div>
                    </Card>
                    <br/>
                  </Col>
                  </Row>
                </Container>
              </section>
        </main>
        <CardsFooter />
        </>
      );
    }
}

export default Team;