import Rating from './Like';
import DeleteBtn from './Delete';
const Movie_row=({props,onDelete})=>{
    return(
        <>
          <div className="movie">
            <div className="movie1">
                <div className="empty"></div>
                <div className="empty1"></div>
                <div className="movie_info">
                    <img className="movie_img" src={props.image} width="200px"/>
                    <div className="info_box">
                        <div className="movie_name">
                            <h1 className="movie_head">{props.name}</h1>
                            <p className="time_type">{props.year}</p>
                        </div>
                        <div className="movie_name1">
                            <h3 className="description">Description</h3>
                            <p className="movie_des">{props.description}</p>
                        </div>
                        <div className="icons"></div>
                    </div>
                </div>
            </div>    
            </div>
            <Rating/>  
            
            <DeleteBtn  onDelete={onDelete}/>
           
        </>
    )
    
};
export default Movie_row;

