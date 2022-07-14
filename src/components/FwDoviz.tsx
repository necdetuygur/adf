import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://thegold${
  new Date().getDate() > 17 ? new Date().getDate() - 17 : new Date().getDate()
}.herokuapp.com/`;

function FwDoviz() {
  const [data, setData] = useState({
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
  });
  useEffect(() => {
    const fetchUsdData = async () => {
      const result = await axios.get(BASE_URL + "fw/doviz/usd");
      setData((d) => ({ ...d, usd: result.data }));
    };
    const fetchEurData = async () => {
      const result = await axios.get(BASE_URL + "fw/doviz/eur");
      setData((d) => ({ ...d, eur: result.data }));
    };
    const fetchGbpData = async () => {
      const result = await axios.get(BASE_URL + "fw/doviz/gbp");
      setData((d) => ({ ...d, gbp: result.data }));
    };
    fetchUsdData().catch(console.error);
    fetchEurData().catch(console.error);
    fetchGbpData().catch(console.error);
  }, []);

  return (
        <table className="table table-dark text-white table-sm">
          <tbody>
        <tr>
          <td colSpan={9}>
            <b>Döviz Fiyatları</b>
          </td>
        </tr>
            <tr>
              <td></td>
              <td>Alış</td>
              <td>Satış</td>
              <td className="text-end">Tahmin</td>
            </tr>
            <tr>
              <td>Dolar (USD)</td>
              <td>{data.usd.Alis}</td>
              <td>{data.usd.Satis}</td>
              <td className="text-end">
                {
                  <b
                    className={
                      data.usd.YarinkiBeklentiTahmin.indexOf("Art") > -1
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {data.usd.YarinkiBeklentiTahmin}
                  </b>
                }
              </td>
            </tr>
            <tr>
              <td>Euro (EUR)</td>
              <td>{data.eur.Alis}</td>
              <td>{data.eur.Satis}</td>
              <td className="text-end">
                {
                  <b
                    className={
                      data.eur.YarinkiBeklentiTahmin.indexOf("Art") > -1
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {data.eur.YarinkiBeklentiTahmin}
                  </b>
                }
              </td>
            </tr>
            <tr>
              <td>Sterlin (GBP)</td>
              <td>{data.gbp.Alis}</td>
              <td>{data.gbp.Satis}</td>
              <td className="text-end">
                {
                  <b
                    className={
                      data.gbp.YarinkiBeklentiTahmin.indexOf("Art") > -1
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {data.gbp.YarinkiBeklentiTahmin}
                  </b>
                }
              </td>
            </tr>
          </tbody>
        </table>
  );
}

export default FwDoviz;
