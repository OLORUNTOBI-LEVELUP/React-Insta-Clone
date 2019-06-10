import React from "react"
import "./SearchBar.css"
import logo from "./instagram-logo.png"
import { Container, Row, Col } from "reactstrap"
import discover from "./discover.png"
import notifications from "./notifications.png"
import profile from "./profile.png"

const SearchBar = ({ handleChange }) => (
  <div className="nav">
    <Container>
      <Row>
        <Col className="logo">
          <div>
            <img src={logo} alt="Instagram Logo" />
          </div>
        </Col>
        <Col className="search">
          <div className="search-input">
            <i className="fa fa-search search-icon" />
            <input
              type="text"
              placeholder="Search"
              onChange={event => handleChange(event.target.value)}
            />
          </div>
        </Col>
        <Col className="nav-icons">
          <img src={discover} alt="" />
          <img src={notifications} alt="" />
          <img src={profile} alt="" />
        </Col>
      </Row>
    </Container>
  </div>
)

export default SearchBar