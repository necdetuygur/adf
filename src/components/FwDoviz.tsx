import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://thegold${
  new Date().getDate() > 17 ? new Date().getDate() - 17 : new Date().getDate()
}.herokuapp.com/`;

function FwDoviz() {
  const initialData = JSON.parse("" + localStorage.getItem("FwDoviz")) || {
    usd: {
      Alis: "...",
      Satis: "...",
      YarinkiBeklentiTahmin: "...",
    },
    eur: {
      Alis: "...",
      Satis: "...",
      YarinkiBeklentiTahmin: "...",
    },
    gbp: {
      Alis: "...",
      Satis: "...",
      YarinkiBeklentiTahmin: "...",
    },
  };

  const [data, setData] = useState(initialData);
  const [loadingUsd, setLoadingUsd] = useState(false);
  const [loadingEur, setLoadingEur] = useState(false);
  const [loadingGbp, setLoadingGbp] = useState(false);
  useEffect(() => {
    const fetchUsdData = async () => {
      setLoadingUsd(true);
      const result = await axios.get(BASE_URL + "fw/doviz/usd");
      setData((d: any) => ({ ...d, usd: result.data }));
      setLoadingUsd(false);
    };
    const fetchEurData = async () => {
      setLoadingEur(true);
      const result = await axios.get(BASE_URL + "fw/doviz/eur");
      setData((d: any) => ({ ...d, eur: result.data }));
      setLoadingEur(false);
    };
    const fetchGbpData = async () => {
      setLoadingGbp(true);
      const result = await axios.get(BASE_URL + "fw/doviz/gbp");
      setData((d: any) => ({ ...d, gbp: result.data }));
      setLoadingGbp(false);
    };
    fetchUsdData().catch(console.error);
    fetchEurData().catch(console.error);
    fetchGbpData().catch(console.error);
  }, []);

  useEffect(() => {
    localStorage.setItem("FwDoviz", JSON.stringify(data));
  }, [data]);

  return (
    <table className="mt-1 mb-1 table table-dark text-white table-sm">
      <tbody>
        <tr>
          <td colSpan={9}>
            <b>Döviz Fiyatları</b>
          </td>
        </tr>
        <tr>
          <td className="w-25"></td>
          <td className="w-25">Alış</td>
          <td className="w-25">Satış</td>
          <td className="w-25 text-end">Tahmin</td>
        </tr>
        <FwRow title="Dolar (USD)" rowData={data.usd} loading={loadingUsd} />
        <FwRow title="Euro (EUR)" rowData={data.eur} loading={loadingEur} />
        <FwRow title="Sterlin (GBP)" rowData={data.gbp} loading={loadingGbp} />
      </tbody>
    </table>
  );
}

function FwRow(props: any) {
  const title = props.title;
  const rowData = props.rowData;
  const loading = props.loading;
  return (
    <tr>
      <td>{title}</td>
      <td>
        {rowData.Alis}
        {loading && <b> ☁️ </b>}
      </td>
      <td>
        {rowData.Satis}
        {loading && <b> ☁️ </b>}
      </td>
      <td className="text-end">
        {loading && <b> ☁️ </b>}
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

export default FwDoviz;
