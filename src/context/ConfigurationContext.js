import React from 'react'

const ConfigurationContext = React.createContext({
  showLeftNavBar: true,
  showRightNavBar: true,
  showContent: true,
  onToggleShowRightNavBar: () => {},
  onToggleShowLeftNavBar: () => {},
  onToggleShowContent: () => {},
})

export default ConfigurationContext
