import React, { useState } from "react";

function Tabs2({ children }) {
  return (
    <div data-reach-tabs>
      {children}
    </div>
  );
}

function TabList({ children }) {
  return (
  <div data-reach-tab-list>
    {children}
  </div>
  )
}

function Tab({ children, disabled }) {
  const index = 0 // TODO
  const activeIndex = 0 // TODO
  const setActiveIndex = () => {} // TODO
  const isActive = index === activeIndex
  return (
    <div
      data-reach-tab
      className={isActive ? "active" : ""}
      onClick={disabled ? undefined : () => setActiveIndex(index)}
    >
      {children}
    </div>
  )
}

function TabPanels({ children }) {
  const activeIndex = 0 // TODO
  return (<div data-reach-tab-panels>
    {children[activeIndex]}
  </div>)
}

function TabPanel({children}) {
  return children
}

function Tabs({ data, tabsPosition = "top", disabled = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = (
    <div data-reach-tab-list>
      {data.map((tab, index) => {
        const isActive = index === activeIndex;
        const isDisabled = disabled.includes(index);
        return (
          <div
            data-reach-tab
            key={index}
            className={isActive ? "active" : ""}
            onClick={isDisabled ? undefined : () => setActiveIndex(index)}
          >
            {tab.label}
          </div>
        );
      })}
    </div>
  );
  const panels = <div data-reach-tab-panels>{data[activeIndex].content}</div>;

  return (
    <div data-reach-tabs>
      {/* Note: we can use array to render JSX */}
      {tabsPosition === "bottom" ? [panels, tabs] : [tabs, panels]}
    </div>
  );
}

export default function TabsComponent() {
  const tabData = [
    {
      label: "Login",
      content: <div>Login Form data</div>,
    },
    {
      label: "Signup",
      content: <div>Signup Form data</div>,
    },
  ];
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
