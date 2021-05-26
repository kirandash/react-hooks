import React, { useState } from 'react'


function Tabs({ data, tabsPosition = "top" }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const tabs = (<div data-reach-tab-list>
    {data.map((tab, index) =>  {
      const isActive = index === activeIndex
      return (
        <div 
          data-reach-tab 
          key={index} 
          className={isActive ? "active" : ""} 
          onClick={() => setActiveIndex(index)}>
            {tab.label}
        </div>
      )
    })}
  </div>);
  const panels = (<div data-reach-tab-panels>
    {data[activeIndex].content}
  </div>);

  return (
    <div data-reach-tabs>
      {/* Note: we can use array to render JSX */}
      {tabsPosition === 'bottom' ? [panels,tabs] : [tabs, panels]}
    </div>
  )
}

export default function TabsComponent() {
  const tabData = [
    {
      label: "Login",
      content: <div>Login Form data</div>
    },
    {
      label: "Signup",
      content: <div>Signup Form data</div>
    }
  ]
  return (<div>
    <h3>Tab at top</h3>
    {/* Default tab positions: top */}
    <Tabs data={tabData} />
    <h3>Tab at bottom</h3>
    {/* Default tab positions: bottom */}
    <Tabs data={tabData} tabsPosition="bottom" />
  </div>)
}
