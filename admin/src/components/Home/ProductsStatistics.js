import React, { useEffect } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const ProductsStatistics = () => {
  useEffect(() => {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-brewmasteremporium-rryto",
    });

    const chart = sdk.createChart({
      chartId: "6597ea74-9125-4ead-892a-b9b904465644",
      // Additional options for the chart (if needed)
    });

    chart.render(document.getElementById("chart-product-container"));

   
  }, []);

  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products Statistics</h5>
          <div
            id="chart-product-container"
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

export default ProductsStatistics;
