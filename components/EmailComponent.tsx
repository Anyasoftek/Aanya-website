"use client"
import React, { useState, FormEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import MagicButton from './MagicButton';


interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

export const EmailComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4">Sign up for updates</h2>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 rounded-l-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <MagicButton
          title="Subscribe"
          icon={<FaArrowRight />}
          position="right"
          
          
        />
      </form>
    </div>
  );
};