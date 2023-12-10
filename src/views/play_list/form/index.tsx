import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import Table from "./Table";
import { useGetSong } from "../../../services/song";
import { useCreatePlaylist } from "../../../services/play-list";

const FormPlaylistPage = () => {
  const songList = useGetSong();
  const create = useCreatePlaylist();
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      table: songList.data?.result?.[0]?.data || [],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songList.data]);

  const onFinish = (e: any) => {
    create.mutate(
      {
        name: e?.name,
        table: e?.table
          ?.filter((item: any) => item?.add)
          ?.map((item: any) => item?.id),
      },
      {
        onSuccess: () => {
          console.log("สร้างสำเร็จ");
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <FormItem name="name" label="Playlist name">
          <Input />
        </FormItem>

        <FormItem name="table" label="Playlist">
          <Table form={form} />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default FormPlaylistPage;
