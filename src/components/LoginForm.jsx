import { userState } from 'react';
import axios from 'axios';
import { useState } from 'react';

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error,SetError]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': "d24c7e66-338b-4299-b178-54db6ea5d789" , 'User-Name':username, 'User-Secret':password}

        try {
            // username / password => chatengine -> give messages
          await axios.get('https://api.chatengine.io/chats', {headers: authObject }) 
          //works out-> successfully logged in
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();

        } catch (error) {
            
            //error -> try with new username
            SetError('Oops, wrong credentials.')
        }
    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="input" placeholder='Username' required  />
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" placeholder='Password' required  />
                    <div align="center">
                        <button type="submit" className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;