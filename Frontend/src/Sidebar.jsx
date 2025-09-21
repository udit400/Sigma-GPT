import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">

      <button>
        <img src="src/assets/blacklogo.png" alt="gpt logo" className="logo"></img>
        <span><i className="fa-solid fa-pen-to-square"></i></span>
      </button>


      <ul className="history">
        <li>Chat 1</li>
        <li>Chat 2</li>
        <li>Chat 3</li>
      </ul>

      <div className="sign">
        <p>By Udit</p>
      </div>
    </section>
  )
}

export default Sidebar; 