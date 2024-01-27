import React , { useEffect } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const SaleStatistics = () => {
  useEffect(() => {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-brewmasteremporium-rryto",
    });

    const chart = sdk.createChart({
      chartId: "6597e436-de90-4632-8708-a4cf33e34dbb",
      // Additional options for the chart (if needed)
    });

    chart.render(document.getElementById("chart-sale-container"));

  }, []);

  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale Statistics</h5>
          <div
            id="chart-sale-container"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "350px",
            }}
          />
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
