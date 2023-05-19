import React from 'react'
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <button type="button" className="btn btn-danger">Danger</button>
    <button type="button" className="btn btn-warning">Warning</button>

    <Form></Form>
    </>
  )
}

export default App