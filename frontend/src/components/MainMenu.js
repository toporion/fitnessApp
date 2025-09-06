// MainMenu.jsx
import React, { useState, useEffect } from "react";
import { Menu as LucideMenu, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaShoppingCart } from "react-icons/fa";

const MainMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className=" flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-white">MyLogo</div>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8 text-white font-medium">
            {["Home", "About", "Courses", "Blog", "Events", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-red-500 transition-colors"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-4 text-white">
            <Search className="w-5 h-5 cursor-pointer" />
            <button
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <LucideMenu className="w-6 h-6" />
            </button>
            <FaShoppingCart className="text-xl" />
            <button className="flex items-center gap-2 rounded px-4 py-2 border border-white/20 font-semibold hover:bg-red-700 transition">
              <FaPlus className="bg-red-500 p-1 text-xl rounded-sm" />
              Join class now
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 p-6"
            >
              <button
                className="mb-6 w-full text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>

              <ul className="flex flex-col gap-6 text-lg">
                {["Home", "About", "Courses", "Blog", "Events", "Contact"].map(
                  (item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:text-red-500 transition-colors"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainMenu;
