
const StarDetail = ({stars}) => {
  let starLength = Math.round(stars)
  console.log(starLength,'recibido');
    return (
      <div>
        {[...Array(Math.round(starLength))].map((_, index) => {
          index += 1;
          return(<span key ={index}>&#9733;</span>)
        })}
      </div>
    );
  };

export default StarDetail