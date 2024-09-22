import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaUserShield } from 'react-icons/fa'; // Icons for social media and admin

const MemberCard = ({ member }) => {
  const { name, department, domain, year, socialMedia, expertIn, isAdmin, profileImage } = member;

  return (
    <div className=" bg-white shadow-md rounded-lg p-4 max-w-xs mx-auto flex flex-col items-center">
      {/* Profile Image */}
      <img
        className="w-24 h-24 rounded-full object-cover mb-4"
        src={profileImage}
        alt={`${name}'s profile`}
      />

      {/* Name and Admin Badge */}
      <div className="flex items-center justify-center mb-2">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        {isAdmin && (
          <FaUserShield className="text-yellow-500 ml-2" title="Admin" size={20} />
        )}
      </div>

      {/* Member Information */}
      <p className="text-sm text-gray-600">Department: {department}</p>
      <p className="text-sm text-gray-600">Domain: {domain}</p>
      <p className="text-sm text-gray-600 mb-2">Year: {year}</p>

      {/* Expertise */}
      <p className="text-sm text-gray-800 font-semibold mb-4">Expert in: {expertIn.join(', ')}</p>

      {/* Social Media Links */}
      <div className="flex space-x-3">
        {socialMedia.linkedin && (
          <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700" size={20} />
          </a>
        )}
        {socialMedia.twitter && (
          <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400" size={20} />
          </a>
        )}
        {socialMedia.github && (
          <a href={socialMedia.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-900" size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
