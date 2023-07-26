/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getListInsights } from '../actions/Actions'

function Footer(props) {
  const dispatch = useDispatch()
  const insightList = useSelector(state => state.insightList)
  const { success, loading, insights } = insightList
  const { servers } = insights

  console.log(insightList)

  useEffect(() => {
    dispatch(getListInsights())

  },[])

  return (
    
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <Row>
          <div className="credits ml-auto">
            <div className="copyright">
              &copy; {1900 + new Date().getYear()}, made with{" "}
              <i className="fa fa-heart heart" /> 
              { success ? servers.map((insight) => (
                            <div className="user">{insight.name}</div>
                  )) : <p> No Funciono</p> }
              by Creative Tim
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
