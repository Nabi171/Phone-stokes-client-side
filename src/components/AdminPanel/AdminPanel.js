import React, { useEffect, useState } from 'react';
import ShowAdmin from '../ShowAdmin/ShowAdmin';

const AdminPanel = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('panel.json').then(res => res.json()).then(data => setMembers(data))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {
                    members.map(member => <ShowAdmin key={member.id} member={member}></ShowAdmin>)
                }
            </div>
        </div>
    );
};
export default AdminPanel;