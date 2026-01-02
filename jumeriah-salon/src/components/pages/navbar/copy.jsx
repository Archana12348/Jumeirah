<header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled ? "bg-black" : "bg-transparent translate-y-2"
  }`}
>
  {/* TOP BAR */}
  {/* TOP BAR */}
  <div
    className={`w-full flex justify-between items-center  px-20 transition-all duration-500 ${
      isScrolled ? "py-2 text-[#d6b56b]" : "py-5 text-white"
    }`}
  >
    {/* LEFT — NAVBAR */}
    <nav>
      <ul
        className={`flex gap-6 text-sm font-medium uppercase tracking-wide transition ${
          isScrolled
            ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
            : "text-white"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer relative group transition ${
              isScrolled
                ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                : "bg-transparent"
            }`}
          >
            {/* Services → Dropdown */}
            {item.name === "Services" ? (
              <li
                key={item.name}
                className={`cursor-pointer relative group transition ${
                  isScrolled
                    ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                    : "bg-transparent"
                }`}
                onMouseEnter={() => {
                  clearTimeout(hoverTimer.current);
                  hoverTimer.current = setTimeout(() => {
                    setServiceOpen(true);
                  }, 150); // ⏳ 150ms delay (increase if needed)
                }}
                onMouseLeave={() => {
                  clearTimeout(hoverTimer.current);
                  hoverTimer.current = setTimeout(() => {
                    setServiceOpen(false);
                  }, 200); // ⏳ dropdown close delay
                }}
              >
                <span className="block py-1 duration-300">{item.name}</span>

                {serviceOpen && (
                  <div className="absolute left-0 top-full mt-2 z-50">
                    <DropdownMenu />
                  </div>
                )}

                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-yellow-600" : "bg-white"
                  }`}
                ></span>
              </li>
            ) : (
              <li
                key={item.name}
                className={`cursor-pointer relative group transition ${
                  isScrolled
                    ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                    : "bg-transparent"
                }`}
              >
                <Link to={item.path} className="block py-1 duration-300">
                  {item.name}
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-yellow-600" : "bg-white"
                  }`}
                ></span>
              </li>
            )}

            {/* underline */}
            <span
              className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                isScrolled ? "bg-yellow-600" : "bg-white"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>

    {/* CENTER LOGO */}
    <img
      src="/logo/logo.png"
      alt="Logo"
      className={`mx-auto transition-all duration-500 ml-20 ${
        isScrolled ? "h-16" : "h-20"
      }`}
    />

    {/* RIGHT — BOOK, ACCOUNT, WISHLIST, CART, WALLET */}
    {/* RIGHT — BOOK, ACCOUNT, WISHLIST, CART, WALLET */}
    <div className="flex items-center gap-6 relative" ref={dropdownRef}>
      {/* ACCOUNT ICON */}
      <div
        onClick={handleUserClick}
        className="flex items-center gap-1 cursor-pointer group relative"
      >
        <User
          className={`w-5 h-5 transition ${
            isScrolled ? "text-yellow-600" : "text-white"
          }`}
        />
        {isLoggedIn && (
          <span
            className={`flex gap-6 text-sm font-medium uppercase tracking-wide transition ${
              isScrolled
                ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                : "text-white"
            }`}
          >
            {userName}
          </span>
        )}
      </div>

      {/* ✅ ACCOUNT DROPDOWN FIXED */}
      {dropdownOpen && isLoggedIn && (
        <div
          className="absolute top-14 left-1/4 -translate-x-1/2 bg-[#E0F7F8] 
    rounded-2xl p-2 w-48 z-50 shadow-[0_4px_15px_rgba(0,0,0,0.15)] 
    transition-all duration-300 ease-in-out"
        >
          {[
            {
              label: "Dashboard",
              action: () => navigate("/dashboard"),
            },
            { label: "Orders", action: () => navigate("/orders") },
            {
              label: "Logout",
              action: () => setIsLoggedIn(false),
              red: true,
            },
          ].map((item, index) => (
            <p
              key={index}
              onClick={item.action}
              className={`py-2 px-4 my-1 text-center cursor-pointer rounded-lg text-sm font-medium
        transition-all duration-300 
        hover:bg-[#00CED1] hover:text-white
        ${item.red ? "text-red-600" : "text-black"}`}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}

      {/* WISHLIST */}
      <div className="relative">
        <Heart
          className={`w-5 h-5 cursor-pointer transition ${
            isScrolled ? "text-yellow-600" : "text-white"
          }`}
        />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
          {wishlistCount}
        </span>
      </div>

      {/* Book Appointment */}
      <Button
        className={`text-sm font-medium bg-transparent transition-all animate-pulse ${
          isScrolled ? "text-[#d6b56b]" : "text-white"
        }`}
      >
        Book An Appointment
      </Button>

      <LoginDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  </div>

  {/* NAVIGATION */}
  {/* <nav
            className={`w-full transition-all duration-500 ${
              isScrolled ? "bg-black" : "bg-transparent translate-y-2"
            }`}
          >
            <ul
              className={`flex justify-center gap-10 py-3 font-medium text-xs uppercase tracking-wide transition ${
                isScrolled
                  ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                  : "text-white"
              }`}
            >
              {[
                "Home",
                "About Us",
                "Services",
                "Products",
                "Gallery",
                "Contact Us",
              ].map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer relative group transition  ${
                    isScrolled
                      ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                      : "bg-transparent"
                  }`}
                >
                  {item}

                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-yellow-600" : "bg-white"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </nav> */}
</header>;

// only gradient text

<header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled ? "bg-black" : "bg-transparent translate-y-2"
  }`}
>
  {/* TOP BAR */}
  <div
    className={`w-full flex justify-between items-center px-20 transition-all duration-500 ${
      isScrolled ? "py-2" : "py-5"
    }`}
  >
    {/* LEFT — NAVBAR */}
    <nav>
      <ul
        className={`flex gap-6 text-sm font-medium uppercase tracking-wide transition 
          bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text
        `}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            className="cursor-pointer relative group transition"
          >
            {/* Services → Dropdown */}
            {item.name === "Services" ? (
              <li
                key={item.name}
                className="cursor-pointer relative group transition 
                bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                onMouseEnter={() => {
                  clearTimeout(hoverTimer.current);
                  hoverTimer.current = setTimeout(() => {
                    setServiceOpen(true);
                  }, 150);
                }}
                onMouseLeave={() => {
                  clearTimeout(hoverTimer.current);
                  hoverTimer.current = setTimeout(() => {
                    setServiceOpen(false);
                  }, 200);
                }}
              >
                <span className="block py-1 duration-300">{item.name}</span>

                {serviceOpen && (
                  <div className="absolute left-0 top-full mt-2 z-50">
                    <DropdownMenu />
                  </div>
                )}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full 
                    ${isScrolled ? "bg-yellow-600" : "bg-yellow-600"}
                  `}
                ></span>
              </li>
            ) : (
              <li
                key={item.name}
                className="cursor-pointer relative group transition 
                bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
              >
                <Link to={item.path} className="block py-1 duration-300">
                  {item.name}
                </Link>

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full 
                    ${isScrolled ? "bg-yellow-600" : "bg-yellow-600"}
                  `}
                ></span>
              </li>
            )}
          </li>
        ))}
      </ul>
    </nav>

    {/* CENTER LOGO */}
    <img
      src="/logo/logo.png"
      alt="Logo"
      className={`mx-auto transition-all duration-500 ml-20 ${
        isScrolled ? "h-16" : "h-20"
      }`}
    />

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-6 relative" ref={dropdownRef}>
      {/* ACCOUNT ICON */}
      <div
        onClick={handleUserClick}
        className="flex items-center gap-1 cursor-pointer group relative"
      >
        <User
          className={`w-5 h-5 transition ${
            isScrolled ? "text-yellow-600" : "text-yellow-600"
          }`}
        />

        {isLoggedIn && (
          <span
            className={`flex gap-6 text-sm font-medium uppercase tracking-wide transition 
              bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text
            `}
          >
            {userName}
          </span>
        )}
      </div>

      {/* ACCOUNT DROPDOWN */}
      {dropdownOpen && isLoggedIn && (
        <div
          className="absolute top-14 left-1/4 -translate-x-1/2 bg-[#E0F7F8] 
        rounded-2xl p-2 w-48 z-50 shadow-[0_4px_15px_rgba(0,0,0,0.15)] 
        transition-all duration-300 ease-in-out"
        >
          {[
            {
              label: "Dashboard",
              action: () => navigate("/dashboard"),
            },
            { label: "Orders", action: () => navigate("/orders") },
            {
              label: "Logout",
              action: () => setIsLoggedIn(false),
              red: true,
            },
          ].map((item, index) => (
            <p
              key={index}
              onClick={item.action}
              className={`py-2 px-4 my-1 text-center cursor-pointer rounded-lg text-sm font-medium
               transition-all duration-300 
               hover:bg-[#00CED1] hover:text-white
               ${item.red ? "text-red-600" : "text-black"}`}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}

      {/* WISHLIST */}
      <div className="relative">
        <Heart
          className={`w-5 h-5 cursor-pointer transition ${
            isScrolled ? "text-yellow-600" : "text-yellow-600"
          }`}
        />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
          {wishlistCount}
        </span>
      </div>

      {/* BOOK APPOINTMENT */}
      <Button
        className={`text-sm font-medium bg-transparent transition-all animate-pulse 
          bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text
        `}
      >
        Book An Appointment
      </Button>

      <LoginDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  </div>
</header>;

// only black text

<header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled ? "bg-black" : "bg-transparent translate-y-2"
  }`}
>
  {/* TOP BAR */}
  {/* TOP BAR */}
  <div
    className={`w-full flex justify-between items-center  px-20 transition-all duration-500 ${
      isScrolled ? "py-2 text-[#d6b56b]" : "py-5 text-black"
    }`}
  >
    {/* LEFT — NAVBAR */}
    <nav>
      <ul
        className={`flex gap-6 text-sm font-medium uppercase tracking-wide transition ${
          isScrolled
            ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
            : "text-black"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer relative group transition ${
              isScrolled
                ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                : "bg-transparent"
            }`}
          >
            {/* Services → Dropdown */}
            {item.name === "Services" ? (
              <li
                key={item.name}
                className={`cursor-pointer relative group transition ${
                  isScrolled
                    ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                    : "bg-transparent"
                }`}
                onMouseEnter={() => {
                  clearTimeout(hoverTimer.current);
                  hoverTimer.current = setTimeout(() => {
                    setServiceOpen(true);
                  }, 150); // ⏳ 150ms delay (increase if needed)
                }}
                onMouseLeave={() => {
                  clearTimeout(hoverTimer.current);
                  hoverTimer.current = setTimeout(() => {
                    setServiceOpen(false);
                  }, 200); // ⏳ dropdown close delay
                }}
              >
                <span className="block py-1 duration-300">{item.name}</span>

                {serviceOpen && (
                  <div className="absolute left-0 top-full mt-2 z-50">
                    <DropdownMenu />
                  </div>
                )}

                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-yellow-600" : "bg-white"
                  }`}
                ></span>
              </li>
            ) : (
              <li
                key={item.name}
                className={`cursor-pointer relative group transition ${
                  isScrolled
                    ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                    : "bg-transparent"
                }`}
              >
                <Link to={item.path} className="block py-1 duration-300">
                  {item.name}
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-yellow-600" : "bg-white"
                  }`}
                ></span>
              </li>
            )}

            {/* underline */}
            <span
              className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                isScrolled ? "bg-yellow-600" : "bg-white"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>

    {/* CENTER LOGO */}
    <img
      src="/logo/logo.png"
      alt="Logo"
      className={`mx-auto transition-all duration-500 ml-20 ${
        isScrolled ? "h-16" : "h-20"
      }`}
    />

    {/* RIGHT — BOOK, ACCOUNT, WISHLIST, CART, WALLET */}
    {/* RIGHT — BOOK, ACCOUNT, WISHLIST, CART, WALLET */}
    <div className="flex items-center gap-6 relative" ref={dropdownRef}>
      {/* ACCOUNT ICON */}
      <div
        onClick={handleUserClick}
        className="flex items-center gap-1 cursor-pointer group relative"
      >
        <User
          className={`w-5 h-5 transition ${
            isScrolled ? "text-yellow-600" : "text-black"
          }`}
        />
        {isLoggedIn && (
          <span
            className={`flex gap-6 text-sm font-medium uppercase tracking-wide transition ${
              isScrolled
                ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                : "text-black"
            }`}
          >
            {userName}
          </span>
        )}
      </div>

      {/* ✅ ACCOUNT DROPDOWN FIXED */}
      {dropdownOpen && isLoggedIn && (
        <div
          className="absolute top-14 left-1/4 -translate-x-1/2 bg-[#E0F7F8] 
                 rounded-2xl p-2 w-48 z-50 shadow-[0_4px_15px_rgba(0,0,0,0.15)] 
                 transition-all duration-300 ease-in-out"
        >
          {[
            {
              label: "Dashboard",
              action: () => navigate("/dashboard"),
            },
            { label: "Orders", action: () => navigate("/orders") },
            {
              label: "Logout",
              action: () => setIsLoggedIn(false),
              red: true,
            },
          ].map((item, index) => (
            <p
              key={index}
              onClick={item.action}
              className={`py-2 px-4 my-1 text-center cursor-pointer rounded-lg text-sm font-medium
                      transition-all duration-300 
                      hover:bg-[#00CED1] hover:text-white
                      ${item.red ? "text-red-600" : "text-black"}`}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}

      {/* WISHLIST */}
      <div className="relative">
        <Heart
          className={`w-5 h-5 cursor-pointer transition ${
            isScrolled ? "text-yellow-600" : "text-black"
          }`}
        />
        <span className="absolute -top-2 -right-2 bg-[#00CED2] text-black text-[10px] px-1.5 py-0.5 rounded-full">
          {wishlistCount}
        </span>
      </div>

      {/* Book Appointment */}
      <Button
        className={`text-sm font-medium bg-transparent transition-all animate-pulse ${
          isScrolled ? "text-[#d6b56b]" : "text-white"
        }`}
      >
        Book An Appointment
      </Button>

      <LoginDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  </div>

  {/* NAVIGATION */}
  {/* <nav
            className={`w-full transition-all duration-500 ${
              isScrolled ? "bg-black" : "bg-transparent translate-y-2"
            }`}
          >
            <ul
              className={`flex justify-center gap-10 py-3 font-medium text-xs uppercase tracking-wide transition ${
                isScrolled
                  ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                  : "text-white"
              }`}
            >
              {[
                "Home",
                "About Us",
                "Services",
                "Products",
                "Gallery",
                "Contact Us",
              ].map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer relative group transition  ${
                    isScrolled
                      ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                      : "bg-transparent"
                  }`}
                >
                  {item}

                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-yellow-600" : "bg-white"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </nav> */}
</header>;
