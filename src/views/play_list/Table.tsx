import TablePlayList from "../../components/table/TablePlayList";
import { useGetSong } from "../../services/song";
import { FC } from "react";

type Props = {
  search: string;
};

const Table: FC<Props> = ({ search }) => {
  const songList = useGetSong(search);

  return <TablePlayList data={songList.data?.result?.[0]?.data || []} />;
};

export default Table;
