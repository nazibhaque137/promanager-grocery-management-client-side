import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://young-eyrie-17132.herokuapp.com/my-item?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getMyItems();

    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your myItems: {myItems.length}</h2>
            {
                myItems.map(myItem => <div key={myItem._id}>
                    <p>{myItem.email} : {myItem.service}</p>
                </div>)
            }
        </div>
    );
};

export default MyItem;