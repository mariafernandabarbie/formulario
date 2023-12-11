import React from 'react';
import Link from 'next/link';

export default async function ListUsers({ users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users?.map((user, index) => (
        <div key={index} className="bg-white shadow-md rounded p-4 text-center">
          <Link href={`/pages/dashboard/alter/${user.id}`}>
          <div className="mb-2">
        
          </div>
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}