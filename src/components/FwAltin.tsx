import { useEffect, useState } from "react";
import axios from "axios";
import FwRow from "./shared/FwRow";

const BASE_URL = `https://thegold${
  new Date().getDate() > 17 ? new Date().getDate() - 17 : new Date().getDate()
}.herokuapp.com/`;

function FwAltin() {
  const initialData = JSON.parse("" + localStorage.getItem("FwAltin")) || {
    gram: {
      Alis: "...",
      Satis: "...",
      YarinkiBeklentiTahmin: "...",
    },
    ceyrek: {
      Alis: "...",
      Satis: "...",
      YarinkiBeklentiTahmin: "...",
    },
    yarim: {
      Alis: "...",
      Satis: "...",
      YarinkiBeklentiTahmin: "...",
    },
    tam: {
      Alis: "...",
      Satis: "...",
      YarinkiBeklentiTahmin: "...",
    },
  };

  const [data, setData] = useState(initialData);
  const [loadingGram, setLoadingGram] = useState(false);
  const [loadingCeyrek, setLoadingCeyrek] = useState(false);
  const [loadingYarim, setLoadingYarim] = useState(false);
  const [loadingTam, setLoadingTam] = useState(false);
  useEffect(() => {
    const fetchGramData = async () => {
      setLoadingGram(true);
      const result = await axios.get(BASE_URL + "fw/altin/gram");
      setData((d: any) => ({ ...d, gram: result.data }));
      setLoadingGram(false);
    };
    const fetchCeyrekData = async () => {
      setLoadingCeyrek(true);
      const result = await axios.get(BASE_URL + "fw/altin/ceyrek");
      setData((d: any) => ({ ...d, ceyrek: result.data }));
      setLoadingCeyrek(false);
    };
    const fetchYarimData = async () => {
      setLoadingYarim(true);
      const result = await axios.get(BASE_URL + "fw/altin/yarim");
      setData((d: any) => ({ ...d, yarim: result.data }));
      setLoadingYarim(false);
    };
    const fetchTamData = async () => {
      setLoadingTam(true);
      const result = await axios.get(BASE_URL + "fw/altin/tam");
      setData((d: any) => ({ ...d, tam: result.data }));
      setLoadingTam(false);
    };
    fetchGramData().catch(console.error);
    fetchCeyrekData().catch(console.error);
    fetchYarimData().catch(console.error);
    fetchTamData().catch(console.error);
  }, []);

  useEffect(() => {
    localStorage.setItem("FwAltin", JSON.stringify(data));
  }, [data]);

  return (
    <table className="mt-1 mb-1 table table-dark text-white table-sm">
      <tbody>
        <tr>
          <td colSpan={9}>
            <b>Altın Fiyatları</b>
          </td>
        </tr>
        <tr>
          <td style={{ width: "26%" }}></td>
          <td style={{ width: "22%" }}>Alış</td>
          <td style={{ width: "22%" }}>Satış</td>
          <td style={{ width: "30%" }} className="text-end">
            Tahmin
          </td>
        </tr>
        <FwRow title="Gram" rowData={data.gram} loading={loadingGram} />
        <FwRow title="Çeyrek" rowData={data.ceyrek} loading={loadingCeyrek} />
        <FwRow title="Yarım" rowData={data.yarim} loading={loadingYarim} />
        <FwRow title="Tam" rowData={data.tam} loading={loadingTam} />
      </tbody>
    </table>
  );
}

export default FwAltin;
