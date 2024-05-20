'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card' // Import the Card components
import './usercard.css'
export default function UserCard() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-container">
      {users.map((user: any) => (
        <div className="user-card" key={user.id}>
          <Card>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription><strong>Username:</strong> {user.username}</CardDescription>
              <CardDescription><strong>Email:</strong> {user.email}</CardDescription>
              <div className="address">
                <h4>Address</h4>
                <CardDescription><strong>Street:</strong> {user.address.street}</CardDescription>
                <CardDescription><strong>Suite:</strong> {user.address.suite}</CardDescription>
                <CardDescription><strong>City:</strong> {user.address.city}</CardDescription>
                <CardDescription><strong>Zipcode:</strong> {user.address.zipcode}</CardDescription>
              </div>
              <CardDescription><strong>Phone:</strong> {user.phone}</CardDescription>
              <CardDescription><strong>Website:</strong> {user.website}</CardDescription>
              <div className="company">
                <h4>Company</h4>
                <CardDescription><strong>Name:</strong> {user.company.name}</CardDescription>
                <CardDescription><strong>Catch Phrase:</strong> {user.company.catchPhrase}</CardDescription>
                <CardDescription><strong>BS:</strong> {user.company.bs}</CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};