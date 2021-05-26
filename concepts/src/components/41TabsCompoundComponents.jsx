import React, { useState, useContext, createContext, children } from "react";

// Create context object
// a communication channel - for tabs to communicate with children
const TabsContext = createContext(); // comm channel

function Tabs2({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div data-reach-tabs>{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div data-reach-tab-list>{children}</div>;
}

function Tab({ children, disabled }) {
  const index = 0; // TODO
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = index === activeIndex;
  return (
    <div
      data-reach-tab
      className={isActive ? "active" : ""}
      onClick={disabled ? undefined : () => setActiveIndex(index)}
    >
      {children}
    </div>
  );
}

function TabPanels({ children }) {
  const activeIndex = useContext(TabsContext);
  return <div data-reach-tab-panels>{children[activeIndex]}</div>;
}

function TabPanel({ children }) {
  return children;
}

export default function TabsComponent() {
  return (
    <div>
      <h3>Tab at top</h3>
      <Tabs2>
        <TabList>
          <Tab>Login</Tab>
          <Tab disabled>Signup</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div>Login Form data</div>
          </TabPanel>
          <TabPanel>
            <div>Signup Form data</div>
          </TabPanel>
        </TabPanels>
      </Tabs2>
    </div>
  );
}
