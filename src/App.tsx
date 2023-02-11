import Item from "./components/Item"

const App = () => {
  return (
    <main className="flex justify-center">
      <div className="container mt-5 gap-5 grid grid-cols-4">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </main>
  )
}

export default App