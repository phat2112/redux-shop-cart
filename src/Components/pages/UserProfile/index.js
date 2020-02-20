import React from 'react';
import PropTypes from 'prop-types';

const userProfile = () => {
    return (
        <div className='admin-profile-container'>
            <div className="admin-profile-contaienr">
                <div className="admin-profile">
                    <p>Name:</p>
                    <p>admin</p>
                </div>    
                <div className="admin-profile">
                    <p>Age:</p>
                    <p>21</p>
                </div>    
               
            </div>      
        </div>
    );
};
 userProfile.propTypes = {
    
};

export default userProfile;