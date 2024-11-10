import React, { useState } from 'react'
// import { socket } from '../socket';
import axios from 'axios'
import styles from './MyForm.module.css'

export function MyForm() {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true)
    const object = { data: value }

    // socket.emit('canData', value, () => {
    //     console.log('submit command');
    // });

    axios
      .post('/api/cmd', object)
      .then((response) => {
        setIsLoading(false)
        // setValue('');
        console.log(response.data)
      })
      .catch((error) => {
        setIsLoading(false)
        // setValue('');
        console.log(error.response)
      })
  }

  return (
    <form onSubmit={onSubmit} className={styles.MyForm}>
      <input onChange={(e) => setValue(e.target.value)} placeholder="$" />
      <button type="submit" disabled={isLoading}>
        Enter
      </button>
    </form>
  )
}
