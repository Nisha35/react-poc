import React from "react";
import "./Tab.css";
import { useEffect } from "react";
import { useState } from "react";
import Chart from "./Chart";

function Tab() {
  const tabs = [
    {
      id: 1,
      title: "Line Chart"
    },
    {
      id: 2,
      title: "Bar Chart"
    },
    {
      id: 3,
      title: "Pie Chart"
    }
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div>
      <div className="tabs">
        <div className="titles">
          {tabs.map(tab => {
            return (
              <div
                className={`title ${
                  tab.id === selectedTab.id ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedTab(tab);
                }}
              >
                {tab.title}
              </div>
            );
          })}
        </div>
        <div className="contents">
          {tabs.map((tab, id) => {
            if (tab.id === selectedTab.id) {
              return (
                <div
                  className={`content ${
                    tab.id === selectedTab.id ? "selected" : ""
                  }`}
                >
                  <h3>{tab.title}</h3>
                  <Chart tabNumber={tab.id} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Tab;
