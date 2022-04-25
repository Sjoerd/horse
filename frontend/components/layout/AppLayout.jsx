import { useState } from "react";

export default function AppLayout({ children }) {

  const [menuOpen, toggleMenu] = useState(0);
  
  return (
    <div>
      { children }
     
    </div>
  )
}