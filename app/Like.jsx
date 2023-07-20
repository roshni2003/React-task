function Rating({handleVoteUp,handleVoteDown,votes}){
    return (
        <>
        <div className="like">
            <img className="like_icon" src="Like.png"width="32px" height="32px"  onClick={handleVoteUp}></img>
        </div>
        <div className="vote" >
             <span id="Votenum">{votes}</span>
        </div>
        <div className="dislike">
            <img className="dislike_icon" src="No.png"width="32px" height="32px"  onClick={handleVoteDown}></img>

           
        </div>
                          
        </>
    )
}
export default Rating;
