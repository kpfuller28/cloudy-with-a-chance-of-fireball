"use client"

import { useState } from "react"
import AddModal from "./AddModal"
import { Button } from "antd"



export default function AddButton({type, world={}}) {
  function openModal() {
    setOpen(true)
  }

  const [open, setOpen] = useState(false)
  const snippet = world.name ? ` to ${world.name}` : ''
  return (
   <div>
    <Button onClick={() => {openModal()}}>Add a {type}{snippet}</Button>
    <AddModal open={open} setOpen={setOpen} type={type} worldId={world.id}/>
   </div>
  )
}