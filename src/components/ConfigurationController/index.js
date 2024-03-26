// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurtionController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showLeftNavBar,
        showRightNavBar,
        showContent,
        onToggleShowContent,
        onToggleShowRightNavBar,
        onToggleShowLeftNavBar,
      } = value
      const onChangeLeftNavBar = () => {
        onToggleShowLeftNavBar()
      }

      const onChangeRightNavBar = () => {
        onToggleShowRightNavBar()
      }

      const onChangeBody = () => {
        onToggleShowContent()
      }

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              onChange={onChangeBody}
              id="content"
              checked={showContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              checked={showLeftNavBar}
              type="checkbox"
              onChange={onChangeLeftNavBar}
              id="leftNavBar"
            />
            <label htmlFor="leftNavBar">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={onChangeRightNavBar}
              id="rightNavBar"
              checked={showRightNavBar}
            />
            <label htmlFor="rightNavBar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurtionController
