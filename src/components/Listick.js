function Listick(props) {

  //const id = props.id;

  const divStyle = {
    top: ''+ props.top + 'px',
    left: ''+ props.left + 'px',
  };

    return (
    <div style={divStyle} className="w-40 h-40 absolute">
        <div className="h-6 flex bg-teal-400">
          <div className="w-10/12 h-6">
          </div>
          <div className="w-2/12 h-6 hover:bg-teal-600 text-center">
            X
          </div>
        </div>
        <textarea className="w-40 h-36 p-1 bg-teal-200 focus:outline-none resize-none overflow-hidden" defaultValue={props.text}>
        </textarea>
    </div>
    );
  }
  
export default Listick;