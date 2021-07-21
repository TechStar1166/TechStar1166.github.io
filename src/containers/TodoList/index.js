import React from 'react'
import TodoItem from './components/TodoItem'
import FormInput from './components/FormInput'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PrimaryTextColor, SecondaryTextColor, ExtraTextColor, Ldescription } from './styles'
import { SButton } from '../Home/styles'
import { Centered } from '../Home/styles'

// const todos = ["Go driving", "Eat lunch", "Do homework", "Read a book"]

export const TodoList = () => {

  const [items, setItems] = useState(["Add your items to the list below! If you wish to get rid of this text/item press 'Done!' => " ])
  const [newItem, setNewItem] = useState("")

  const addItem = () => {
    const newItems = items.slice()
    newItems.push(newItem)
    setItems(newItems)
  }

  return (
    <div>
      <ExtraTextColor>
        Welcome to make a list! <br/> 
      </ExtraTextColor>
      <Ldescription>
        Below it will tell you how many items are currently on the list and the first item on the list at the moment is a description on how to use the list!
      </Ldescription>
      <SecondaryTextColor>
        { items.length == 1 ? <p> 1 item left</p> : <p>{items.length}  items left</p> }
      </SecondaryTextColor>
      <PrimaryTextColor>
        { items.map((item, idx) => <TodoItem idx={idx} key={idx} text={item} items={items} setItems={setItems}/>) }
      </PrimaryTextColor>
      <FormInput
        type="text"
        placeholder="Type item here"
        value={newItem}
        setValue={setNewItem}
      />
      <button onClick={addItem}>Add</button>
      <Centered>
        <SButton>
          <Link to="/" style={{color: "white"}}>Back to Home</Link>
        </SButton>
      </Centered>
    </div>
  )
}