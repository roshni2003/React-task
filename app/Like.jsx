"use client"
import React, { useState } from 'react';
function Rating(myDelete){
    const [votes, setVotes] = useState(0);

    const handleVoteUp = () => {
        setVotes(votes + 1);
    };
    const handleVoteDown = () => {
        setVotes(votes - 1);
    };



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
