import './App.css'

function App() {
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
          <hw>Contact Info</hw>
          <div>
            <div>
              <div>
                <label>Your name</label>:
              </div>
              <input type='text' id='fullname' placeholder='Jean Luc Picard' />
            </div>

            <div>
              <div>
                <label>Email</label>:
              </div>
              <input type='text' id='email' placeholder='abc@email.com' />
            </div>

            <div>
              <div>
                <label>Phone</label>:
              </div>
              <input type='text' id='phone' placeholder='222-222-2222' />
            </div>
          </div>
        </div>

        <div>
          <hw>Shipping Info</hw>
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
