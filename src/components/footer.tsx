import React from "react";

export default function Footer() {
  return (
    <footer className="container py-4 border-t border-slate-50/5 mx-auto">
      <div className="px lg:px-10 flex flex-col sm:flex-row items-center gap-4 justify-between text-gray-50/60">
        <small>&copy; 2024 All Rights reserved. LTmedia</small>
        <small>
          <ul className="flex gap-5">
            <li className="hover:text-gray-50 transition">Privacy Policy</li>
            <li className="hover:text-gray-50 transition">Terms of Service</li>
          </ul>
        </small>
      </div>
    </footer>
  );
}
