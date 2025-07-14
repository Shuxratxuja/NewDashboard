import { Edit2, Trash } from 'lucide-react';
import React from 'react'

interface SocialCardProps {
    name: string;
    link: string;
    onEdit: () => void;
    onDelete: () => void;
}

const SocialCard = ({name, link, onDelete, onEdit}:SocialCardProps) => {
  return (
    <div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold'>{name}</h3>
            <p className='text-gray-600'>{link}</p>
            <div className='flex justify-end mt-2'>
            <button onClick={onEdit} className='text-blue-500 hover:underline mr-2'><Edit2/></button>
            <button onClick={onDelete} className='text-red-500 hover:underline'><Trash/></button>
            </div>
        </div>
    </div>
  )
}

export default SocialCard