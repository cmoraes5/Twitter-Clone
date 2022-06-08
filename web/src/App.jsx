const Title = ({ title, children }) => {
  return (
    <h1>{title} {children}</h1>
  )
}

export const App = () => {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
        <div>
            <img src="./src/assets/svg/Mask group.svg" />
        </div>
        <div>
            <div>
                <span>Elon Musk</span>
                <span>@elonmusk</span>
            </div>
            
            <p>
                Let's make twitter maximum fun!
            </p>
            
        </div>
    </div>
  )
}

export default App