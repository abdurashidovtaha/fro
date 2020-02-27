import React from 'react';
import { MESSAGE_STATUS_FAIL, MESSAGE_STATUS_SENT } from '../../constants';
import { messageDelete } from '../../actions/actionCreators';

// Переиспользуемый компонент, не должен лазить в state
export default function Message({ item, onEdit, onResend, onDelete }) {
    const handleEdit = () => {
        onEdit(item);
    };

    const handleResend = () => {
        onResend(item);
    };

    const handleDelete = () => {
        onDelete(item.id);
    }

    return (
        <div>
            {item.status === MESSAGE_STATUS_SENT && <button onClick={handleEdit}>✎</button>}
            {item.status === MESSAGE_STATUS_FAIL && <button onClick={handleResend}>🗘</button>}
            <button onClick={handleDelete}>delete</button>
            <p>
                {!item.removed && item.content}
            </p>
            <p>
                {!item.removed && item.id}
            </p>
            <p>
                {!item.removed && item.status}
            </p>
        </div>
    )
}
