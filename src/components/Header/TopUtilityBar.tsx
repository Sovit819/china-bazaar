import React from 'react';

/**
 * The utility header/top bar component, containing login, help, and language links.
 */
const TopUtilityBar: React.FC = () => {

  return (
    <header className="w-full h-[37px] pl-6 pr-[100px] flex items-center justify-end bg-neutral-n50">
      <nav className="flex items-center gap-6">

        <a href="/login" className="text-body-small font-book text-neutral-n700 no-underline">
          Login
        </a>

        <a href="/help" className="text-body-small font-book text-neutral-n700 no-underline">
          Help Center
        </a>

        {/* Language/Locale Selector */}
        <div className="text-body-small font-book text-neutral-n900 cursor-pointer">
          English
        </div>
      </nav>
    </header>
  );
};

export default TopUtilityBar;