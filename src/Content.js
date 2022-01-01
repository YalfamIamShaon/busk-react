
import ItemList from './ItemList';


const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <>
      {items.length ? (
          <ItemList 
           items={items}
           handleCheck={handleCheck}
           handleDelete={handleDelete}
          />

      ): (
        <p style={{ marginTop: '2rem' }}>Fill this List</p>
      )
      }
    </> //fragments can be empty in React
  )
}

export default Content
