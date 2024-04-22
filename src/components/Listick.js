function Listick(props) {

  //const id = props.id;

  const divStyle = {
    top: ''+ props.top + 'px',
    left: ''+ props.left + 'px',
  };

    return (
    <div style={divStyle} class="w-40 h-40 absolute">
        <div class="h-6 flex bg-teal-400">
          <div class="w-10/12 h-6">
          </div>
          <div class="w-2/12 h-6 hover:bg-teal-600 text-center">
            X
          </div>
        </div>
        <textarea class="w-40 h-36 p-1 bg-teal-200 focus:outline-none resize-none overflow-hidden">
        {props.text}
        </textarea>
    </div>
    );
  }
  
export default Listick;