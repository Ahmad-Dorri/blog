import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInbox } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl hover:text-white ">
          Ahmad Dorri
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Link href="#">
            <FaGithub />
          </Link>
        </button>

        <button className="btn btn-square btn-ghost">
          <Link href="#">
            <FaLinkedin />
          </Link>
        </button>
        <button className="btn btn-square btn-ghost">
          <Link href="#">
            <FaInbox />
          </Link>
        </button>
      </div>
    </div>
  );
}
