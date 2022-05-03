import React from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className='chat'>
        <div className='chat_header'>
        <Avatar />
        <div className='chat_headerInfo'>
            <h3> Prats </h3>
            <p>Last seen at...</p>
        </div>
            <div className='chat_headerRight'>
            <IconButton>
                <SearchOutlinedIcon />
            </IconButton>
            {/* <IconButton>
                <AttachFileIcon />
            </IconButton> */}
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
        </div>

        <div className='chat_body'>
            <p className='chat_message'> 
                <span className='chat_name'>Prats</span>
            Hiii wassup
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>

            <p className='chat_message'> 
                <span className='chat_name'>Prats</span>
            today valo when
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>

            <p className='chat_message'> 
                <span className='chat_name'>Prats</span>
            8:30?
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>
            <p className='chat_message chat_receiver'> 
                <span className='chat_name'>Prats</span>
            okie
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>
            <p className='chat_message chat_receiver'> 
                <span className='chat_name'>Prats</span>
            okie
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>
            <p className='chat_message chat_receiver'> 
                <span className='chat_name'>Prats</span>
            okie
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>
            <p className='chat_message chat_receiver'> 
                <span className='chat_name'>Prats</span>
            okie
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>
            <p className='chat_message chat_receiver'> 
                <span className='chat_name'>Prats</span>
            okie
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>
            <p className='chat_message chat_receiver'> 
                <span className='chat_name'>Prats</span>
            okie
            <span className='chat_timestamp'>{new 
            Date().toUTCString()}
                </span>
            </p>
        </div>

        <div className='chat_footer'>
            <IconButton>
            <InsertEmoticonIcon />
            </IconButton>
            <IconButton>
                <AttachFileIcon />
            </IconButton>
            <form>
                <input placeholder='Type a message' type='text'/>
                <button type='submit'>Send a message</button>
            </form>
            <IconButton>
            <MicIcon />
            </IconButton>
            </div>
    </div>
  )
}

export default Chat