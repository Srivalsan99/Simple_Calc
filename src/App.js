import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Define the rows of buttons
  const r1 = ['1', '2', '3', '+'];
  const r2 = ['4', '5', '6', '-'];
  const r3 = ['7', '8', '9', '/'];
  const r4 = ['.', '0', '*','='];
  const r5=['Delete']

  // Function to handle button click
  const handleClick = (value) => {
    // Get the input element
    const inputElement = document.getElementById('forme');
    // Append the clicked button value to the input field
    inputElement.value += value;
  };

  return (
    <div>
      {/* Navigation bar */}
      <nav style={{ backgroundColor: 'light-blue', color: 'white'}}>
        <h1 style={{ textAlign: 'center'}}>Simple Calculator</h1>
      </nav>
      <br/>
      {/* Description */}
      <h4 style={{'color':'blue',textAlign:'center'}}>This is a calculator built using React. It performs basic operations like addition, subtraction, multiplication, and division.</h4>
      <br/>
      {/* Input field */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form>
          <input style={{padding:'10px 65px'}} className="form-control" type="text" id="forme" />
        </form>
      </div>
      <br />
      {/* Buttons for row 1 */}
      <div style={{display:'flex',justifyContent:'centre', alignItems: 'center' }}className="button-row">
        {r1.map((item, index) => (
          <button style={{ padding: '26px 30px', marginRight: '10px' }} className="btn btn-primary"  key={index} value={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
      <br />
      {/* Buttons for row 2 */}
      <div style={{display:'flex',justifyContent:'centre', alignItems: 'center' }} className="button-row">
        {r2.map((item, index) => (
          <button style={{padding: '26px 30px', marginRight: '10px' }} className="btn btn-primary" key={index} value={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
      <br />
      {/* Buttons for row 3 */}
      <div style={{display:'flex',justifyContent:'centre', alignItems: 'center' }} className="button-row">
        {r3.map((item, index) => (
          <button style={{padding: '26px 30px', marginRight: '10px' }} className="btn btn-primary" key={index} value={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
      <br />
      {/* Buttons for row 4 */}
      <div style={{display:'flex',justifyContent:'centre', alignItems: 'center' }} className="button-row">
        {r4.map((item, index) => {
          if (item === '=') {
            // Special handling for "=" button to evaluate the expression
            return (
              <button style={{padding: '26px 30px', marginRight: '10px' }} className="btn btn-success" key={index} onClick={() => (document.getElementById('forme').value = eval(document.getElementById('forme').value))}>
                {item}
              </button>
            );
          } else {
            return (
              <button style={{padding: '26px 30px', marginRight: '10px' }} className="btn btn-primary" key={index} value={item} onClick={() => handleClick(item)}>
                {item}
              </button>
            );
          }
        })}
      </div>
      <br/>
      {/* Buttons for row 5 */}
      <div style={{display:'flex',justifyContent:'centre', alignItems: 'center' }} className="button-row">
        {r5.map((item, index) => (
          <button style={{padding: '10px 125px'}} className="btn btn-danger" key={index} value={item} onClick={() => (document.getElementById('forme').value = '')}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
