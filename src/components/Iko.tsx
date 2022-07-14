import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://thegold${
  new Date().getDate() > 17 ? new Date().getDate() - 17 : new Date().getDate()
}.herokuapp.com/`;

function Iko() {
  const [data, setData] = useState({
    Tarih: "...",
    Gram: "...",
    Ceyrek: "...",
    Yarim: "...",
    Tam: "...",
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(BASE_URL + "ikd");
      setData(result.data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <table className="mt-1 mb-1 table table-dark text-white table-sm">
      <tbody>
        <tr>
          <td colSpan={9}>
            <b>İzmir Kuyumcular Odası Fiyatları</b>
          </td>
        </tr>
        <tr>
          <td>Gram</td>
          <td className="text-end">{data.Gram}</td>
        </tr>
        <tr>
          <td>Çeyrek</td>
          <td className="text-end">{data.Ceyrek}</td>
        </tr>
        <tr>
          <td>Yarım</td>
          <td className="text-end">{data.Yarim}</td>
        </tr>
        <tr>
          <td>Tam</td>
          <td className="text-end">{data.Tam}</td>
        </tr>
        <tr>
          <td>Son Güncellenme Tarihi</td>
          <td className="text-end">{data.Tarih.replace(/-/gi, ".")}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Iko;
