import React from 'react';
interface LogoProps {
  className: 'logo-pr' | 'logo-min';
}
function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <h1>EUI</h1>
    </div>
  );
}

export default Logo;
