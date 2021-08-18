import './App.css'
import TextField from './ui/text-field'
import { useState } from 'react'

function App() {
  const [values, setValues] = useState({
    name: '',
    email: '',
  })
  const { name, email } = values
  return (
    <div className='App'>
      <form>
        <div></div>
        <div></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div>
          <h2>Contact Info</h2>
          <div>
            <TextField
              type='text'
              label='Your full name$$'
              placeholder='Jean Luc Picard'
              onChange={(name) =>
                setValues((prev) => ({
                  ...prev,
                  name,
                }))
              }
              value={name}
            />

            <TextField
              type='text'
              label='Email'
              placeholder='jean@StarTrek.com'
              onChange={(email) =>
                setValues((prev) => ({
                  ...prev,
                  email,
                }))
              }
              value={email}
            />

            <div>
              <div>
                <label>Phone</label>:
              </div>
              <input type='text' id='phone' placeholder='222-222-2222' />
            </div>
          </div>
        </div>

        <div>
          <h2>Shipping Info</h2>
          <div>
            <div>
              <div>
                <label>Label</label>:
              </div>
              <input type='text' id='home' placeholder='Home' />
            </div>

            <div>
              <div>
                <label>Address</label>:
              </div>
              <input type='text' id='address' placeholder='8000 Sunset Blvd' />
            </div>

            <div>
              <div>
                <label>Unit</label>:
              </div>
              <input type='text' id='unit' placeholder='#21' />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
