import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://thegold${
  new Date().getDate() > 17 ? new Date().getDate() - 17 : new Date().getDate()
}.herokuapp.com/`;

function FwAltin() {
  const [data, setData] = useState({
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
  });
  useEffect(() => {
    const fetchGramData = async () => {
      const result = await axios.get(BASE_URL + "fw/altin/gram");
      setData((d) => ({ ...d, gram: result.data }));
    };
    const fetchCeyrekData = async () => {
      const result = await axios.get(BASE_URL + "fw/altin/ceyrek");
      setData((d) => ({ ...d, ceyrek: result.data }));
    };
    const fetchYarimData = async () => {
      const result = await axios.get(BASE_URL + "fw/altin/yarim");
      setData((d) => ({ ...d, yarim: result.data }));
    };
    const fetchTamData = async () => {
      const result = await axios.get(BASE_URL + "fw/altin/tam");
      setData((d) => ({ ...d, tam: result.data }));
    };
    fetchGramData().catch(console.error);
    fetchCeyrekData().catch(console.error);
    fetchYarimData().catch(console.error);
    fetchTamData().catch(console.error);
  }, []);

  return (
    <div className="card mb-2 bg-dark text-light">
      <div className="card-header bg-dark">Altın Fiyatları</div>
      <div className="card-body p-0 bg-dark">
        <table className="table table-dark text-white">
          <tbody>
            <tr>
              <td></td>
              <td>Alış</td>
              <td>Satış</td>
              <td className="text-end">Tahmin</td>
            </tr>
            <tr>
              <td>Gram</td>
              <td>{data.gram.Alis}</td>
              <td>{data.gram.Satis}</td>
              <td className="text-end">
                {
                  <b
                    className={
                      data.gram.YarinkiBeklentiTahmin.indexOf("Art") > -1
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {data.gram.YarinkiBeklentiTahmin}
                  </b>
                }
              </td>
            </tr>
            <tr>
              <td>Çeyrek</td>
              <td>{data.ceyrek.Alis}</td>
              <td>{data.ceyrek.Satis}</td>
              <td className="text-end">
                {
                  <b
                    className={
                      data.ceyrek.YarinkiBeklentiTahmin.indexOf("Art") > -1
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {data.ceyrek.YarinkiBeklentiTahmin}
                  </b>
                }
              </td>
            </tr>
            <tr>
              <td>Yarım</td>
              <td>{data.yarim.Alis}</td>
              <td>{data.yarim.Satis}</td>
              <td className="text-end">
                {
                  <b
                    className={
                      data.yarim.YarinkiBeklentiTahmin.indexOf("Art") > -1
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {data.yarim.YarinkiBeklentiTahmin}
                  </b>
                }
              </td>
            </tr>
            <tr>
              <td>Tam</td>
              <td>{data.tam.Alis}</td>
              <td>{data.tam.Satis}</td>
              <td className="text-end">
                {
                  <b
                    className={
                      data.tam.YarinkiBeklentiTahmin.indexOf("Art") > -1
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {data.tam.YarinkiBeklentiTahmin}
                  </b>
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FwAltin;
