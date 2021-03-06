import { useEffect, useState } from "react";
import axios from "axios";
import FwRow from "./shared/FwRow";

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
          <td style={{ width: "28%" }}></td>
          <td style={{ width: "21%" }}>Alış</td>
          <td style={{ width: "21%" }}>Satış</td>
          <td style={{ width: "30%" }} className="text-end">
            Tahmin
          </td>
        </tr>
        <FwRow title="Dolar (USD)" rowData={data.usd} loading={loadingUsd} />
        <FwRow title="Euro (EUR)" rowData={data.eur} loading={loadingEur} />
        <FwRow title="Sterlin (GBP)" rowData={data.gbp} loading={loadingGbp} />
      </tbody>
    </table>
  );
}

export default FwDoviz;
