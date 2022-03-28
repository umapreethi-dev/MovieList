import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function Counter(){
    const [like,setLike] = useState(0);
   
    const [dislike, setDislike] = useState(0); 
    return(
        <div>
            
            
                <IconButton 
                aria-label="like movie"
                onClick={() => setLike(prevValue => prevValue + 1)}
                color="primary"
                >
                    <Badge badgeContent={like} color="primary">
                    👍
                    </Badge>
                </IconButton>
            
           
                <IconButton 
                aria-label="dislike movie"
                onClick={() => setDislike(prevValue => prevValue + 1)}
                color="error"
                >
                    <Badge badgeContent={dislike} color="error">
                    👎 
                    </Badge>
                </IconButton>
           
           
        </div>
    )
}