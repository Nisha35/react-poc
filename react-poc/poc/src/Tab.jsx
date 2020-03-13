import React from "react";
import "./Tab.css";

function Tab() {
  console.log("hello");
  const tabs = ["first", "second"];
 
  return (
    <div>
      <div className="tabs">
        <div className="titles">
          {tabs.map(tab => {
            return (
              <div className="title selected" onClick={()=>{
                  console.log("tab",tab)
              }}>
                {tab}
              </div>
            );
          })}
          {/* <div class="title selected">Tab 1</div>
          <div class="title">Tab 2</div>
          <div class="title">Tab 3</div> */}
        </div>
        <div className="contents">
          <div className="content selected">
            <div>hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
