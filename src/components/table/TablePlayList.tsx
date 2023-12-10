import Table, { ColumnsType } from "antd/es/table";
import {
  CalendarOutlined,
  CheckOutlined,
  FieldTimeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

type Props = {
  data: any[];
  onClickTable?: (e: any) => void;
};

const TablePlayList: FC<Props> = ({ data, onClickTable }) => {
  const columns: ColumnsType<any> = [
    {
      title: "",
      dataIndex: "key",
      align: "center",
      render: (_, row) => {
        if (row?.add) {
          return (
            <Button
              onClick={() => {
                onClickTable && onClickTable(row);
              }}
            >
              <CheckOutlined />
            </Button>
          );
        } else
          return (
            <Button
              onClick={() => {
                onClickTable && onClickTable(row);
              }}
            >
              <PlusOutlined />
            </Button>
          );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      render: (text) => {
        return <div>{text}</div>;
      },
    },
    {
      title: "Artist",
      dataIndex: "artist",
    },
    {
      title: "Album",
      dataIndex: "album",
    },
    {
      title: <CalendarOutlined />,
      dataIndex: "date",
    },
    {
      title: <FieldTimeOutlined />,
      dataIndex: "time",
    },
  ];
  return (
    <div className="pt20">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default TablePlayList;
