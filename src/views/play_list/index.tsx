import { Button, Col, Form, Image, Input, Row, Switch } from "antd";
import React, { useState } from "react";
import "./index.css";
import detail from "../../assets/icons/detail.png";
import TablePlayList from "./Table";

const PlayListPage = () => {
  const [search, setSearch] = useState("");
  const FormItem = Form.Item;
  return (
    <div>
      <Row align="bottom" gutter={[14, 14]}>
        <Col>
          <div>
            <span>
              <Image width={150} height={150} preview={false} />
            </span>
            <span>
              <Image width={150} height={150} preview={false} />
            </span>
          </div>
          <div>
            <span>
              <Image width={150} height={150} preview={false} />
            </span>
            <span>
              <Image width={150} height={150} preview={false} />
            </span>
          </div>
        </Col>
        <Col>
          <div>PLAYLIST</div>
          <div>Driving</div>
          <div>Created By: Ari Veniderstine . 28 songs, 1hr 38 min</div>
          <Row align="middle" gutter={[14, 14]}>
            <Col>
              <Button>PLAY</Button>
            </Col>
            <Col>
              <Image src={detail} width={30} height={30} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="pt10" align="middle" justify="space-between">
        <Col>
          <Form
            layout="inline"
            onFinish={(e) => {
              setSearch(e?.filter);
            }}
          >
            <FormItem name="filter">
              <Input placeholder="Filter" allowClear={true} />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </FormItem>
          </Form>
        </Col>
        <Col>
          <Row gutter={[12, 13]} align="middle">
            <Col>Download</Col>
            <Col>
              <Switch defaultChecked value={false} />
            </Col>
          </Row>
        </Col>
      </Row>

      <TablePlayList search={search} />
    </div>
  );
};

export default PlayListPage;
