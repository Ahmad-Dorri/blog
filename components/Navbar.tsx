import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          AhmadDorri
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <a
            href="https://www.linkedin.com/in/ahmad-dorri-6a9b1a1b7"
            target="_blank">
            <FaLinkedin className="object-contain" size={30} />
          </a>
        </button>
        <button className="btn btn-square btn-ghost">
          <a href="https://github.com/Ahmad-Dorri">
            <FaGithub className="object-contain" size={30} />
          </a>
        </button>
      </div>
    </nav>
  );
}
