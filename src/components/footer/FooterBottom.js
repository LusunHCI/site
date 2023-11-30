import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full py-3">
        <p className="text-center text-gray-500 text-base">
           © {new Date().getFullYear()}. Lu Sun
        </p>
    </div>
  );
}

export default FooterBottom