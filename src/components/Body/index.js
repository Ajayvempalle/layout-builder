// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavBar, showRightNavBar, showContent} = value

      return (
        <div>
          {showLeftNavBar ? (
            <div>
              <h1>Left NavBar Menu</h1>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div>
              <h1>Content</h1>
              <p>Lorem ipsum</p>
            </div>
          ) : null}
          {showRightNavBar ? (
            <div>
              <h1>Right NavBar</h1>
              <div>
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
