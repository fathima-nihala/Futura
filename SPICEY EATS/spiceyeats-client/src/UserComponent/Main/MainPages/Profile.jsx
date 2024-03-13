import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import './prof.css';

const Profile = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout().then(() => {
            alert('Logout Successfully');
        }).catch((error) => {
            console.log(error);
        });
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="dropdown-container">
                <div className="dropdown">
                    <button tabIndex={0} role="button" className="btn" onClick={toggleDropdown} onMouseEnter={toggleDropdown}>
                        <div className="avatar-container">
                            {/* User photo */}
                            {user.photoURL ? (
                                <img alt="User Avatar" src={user.photoURL} />
                            ) : (
                                <img alt="User Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbirfM3TZm6EotKRPZw9_KwVdja9LTqlO6g&usqp=CAU" />
                            )}
                        </div>
                    </button>
                    <ul className={`dropdown-content ${isOpen ? 'open' : ''}`} onMouseLeave={closeDropdown}>
                        {/* Dropdown menu items */}
                        <li><a href='/update-profile'>Profile</a></li>
                        <li><a href="">View</a></li>
                        <li><a>Order</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
