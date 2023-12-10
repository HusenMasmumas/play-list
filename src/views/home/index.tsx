import { Card, Col, Row } from "antd";
import "./index.css";
import React from "react";
import { useGetPlaylist } from "../../services/play-list";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data } = useGetPlaylist();
  const navigate = useNavigate();

  return (
    <div>
      <div>PlayList</div>
      {data?.result?.[0]?.data?.length ? (
        <Row gutter={[14, 14]}>
          {data?.result?.[0]?.data?.map((item: any, index: number) => {
            return (
              <Col key={index} span={4}>
                <Card
                  className="card"
                  onClick={() => {
                    navigate(`play-list/${item?.id}`);
                  }}
                >
                  {item?.name || ""}
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <div>ไม่พบข้อมูล</div>
      )}
    </div>
  );
};

export default HomePage;
