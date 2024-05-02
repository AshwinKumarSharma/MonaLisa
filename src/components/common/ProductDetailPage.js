import React, { useContext, useEffect, useState } from "react";
import Layout from "../common/Layout";
import { SidebarHoverContext } from "../Contexts/SidebarHoverContext";
import GenAI from "../utility/GenAI";

import { industriesList, productList } from "../utility/Constants";
import { useGenerativeContext } from "../Contexts/GenerativeDataContext";

const ProductDetailPage = () => {
  const { isHovered, setIsHovered, product, setProduct } =
    useContext(SidebarHoverContext);
  const { genData, setGenData } = useGenerativeContext();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [displayedContent, setDisplayedContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("selectedProduct", selectedProduct, product);
  }, [selectedProduct]);

  const handleLetsGo = async () => {
    setLoading(true);
    const response = await GenAI(
      selectedProduct,
      genData,
      setGenData,
      product,
      selectedIndustry
    );
    console.log("response GEN AI", response);
    let generativeContent =
      response?.response?.candidates[0]?.content?.parts[0]?.text;
    if (generativeContent) {
      // Remove stars from the content
      generativeContent = generativeContent.replace(/\*/g, "");
      setLoading(false);

      // Split the content into an array of lines
      let lines = [];
      try {
        lines = generativeContent.split("\n");
      } catch (error) {
        console.error("Error splitting content into lines:", error);
      }

      // Initialize a variable to keep track of the current displayed content
      let currentContent = "";

      // Loop through each line if lines array is defined
      if (lines) {
        for (let i = 0; i < lines.length; i++) {
          // Split the line into an array of characters
          let characters = [];
          try {
            characters = lines[i].split("");
          } catch (error) {
            console.error("Error splitting line into characters:", error);
          }

          // Loop through each character
          for (let j = 0; j < characters.length; j++) {
            // Append the next character to the current content
            currentContent += characters[j];

            // Update the displayed content
            setDisplayedContent(currentContent);

            // Add a delay between each character
            await new Promise((resolve) => setTimeout(resolve, 20)); // Adjust the delay (50ms = 0.05 seconds)
          }

          // Add a newline character after each line
          currentContent += "\n";
        }
      }
    }
  };

  return (
    <Layout>
      {" "}
      <div className={`product_det ${isHovered ? "Sidenavopen" : ""}`}>
        <div>
          <h1>
            Research <span>The AI Way</span>
          </h1>
        </div>
        <div>
          <ul className="product_list">
            {product && productList[product]
              ? productList[product].map((item, key) => (
                  <li
                    className={selectedProduct === item ? "active" : ""}
                    key={key}
                    onClick={() => setSelectedProduct(item)}
                  >
                    {item}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="search_box">
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            <option>Select Industry for Research</option>
            {industriesList.map((list, i) => (
              <option key={i} value={list}>
                {list}
              </option>
            ))}
          </select>
          <button onClick={handleLetsGo}>Let's Go</button>
        </div>
        <div className="product_img">
          {/* Display generated data */}
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div className="loader-container">
                <div className="loader">
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          ) : (
            <pre>{displayedContent}</pre>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
