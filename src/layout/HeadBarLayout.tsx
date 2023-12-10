import { Button, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeadBarLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Row
        gutter={[14, 14]}
        align="middle"
        justify="space-between"
        className="row-header"
      >
        <Col>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              navigate("/play-list/manage");
            }}
          >
            create playlist
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HeadBarLayout;
