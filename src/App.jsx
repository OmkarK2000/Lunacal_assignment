import EmptyContainer from "./components/EmptyContainer"
import WidgetContainer from "./components/WidgetContainer"


const App = () => {
  return (
    <div className=" h-screen w-screen [box-shadow:10px_10px_40px_10px_#00000080]  flex justify-between" >
      <EmptyContainer/>
      <WidgetContainer/>
    </div>
  )
}

export default App