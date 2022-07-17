import Loading from "./Loading";

function FwRow(props: any) {
  const title = props.title;
  const rowData = props.rowData;
  const loading = props.loading;
  return (
    <tr>
      <td>{title}</td>
      <td>
        {rowData.Alis}
        {loading && <Loading />}
      </td>
      <td>
        {rowData.Satis}
        {loading && <Loading />}
      </td>
      <td className="text-end">
        {loading && <Loading />}
        {
          <b
            className={
              rowData.YarinkiBeklentiTahmin.indexOf("Art") > -1
                ? "text-success"
                : rowData.YarinkiBeklentiTahmin.indexOf("Az") > -1
                ? "text-danger"
                : ""
            }
          >
            {rowData.YarinkiBeklentiTahmin}
          </b>
        }
      </td>
    </tr>
  );
}

export default FwRow;
