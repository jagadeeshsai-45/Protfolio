import "../intro/intro.css"
import Typer from "../intro/Typer" 

const intro = () => {
  return (
    <div className='main'>
      <div className='profile-name'>
        <h1>
          Jagadeesh
          <span className='name'> SAI </span>
        </h1>
      </div>
      <div className='typer'>
        <Typer /> 
      </div>
    </div>
    
  );
}

export default intro;
