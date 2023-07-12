function Row(){
    return(
        <>
          <div className="movie">
            <div className="movie1">
                <div className="empty"></div>
                <div className="watch"><text className="watch_text">Watch</text></div>
                <div className="empty1"></div>
                <div className="movie_info">
                    <img src="movie_one.png" width="200px"/>
                    <div className="info_box">
                        <div className="movie_name"></div>
                        <div className="movie_name1"></div>
                        <div className="icons">
                            <div className="like"><img className="like_icon" src="Like.png"width="32px" height="32px"></img></div>
                            <div className="vote"></div>
                            <div className="dislike"><img className="dislike_icon" src="No.png"width="32px" height="32px"></img></div>
                            <div className="delete"><img className="Delete_icon" src="fluent_delete-32-regular@2x.png"width="26px" height="29px"></img></div>
                        </div>
                    </div>
                </div>
            </div>    
          </div>  
        </>
    )
}
export default Row;
