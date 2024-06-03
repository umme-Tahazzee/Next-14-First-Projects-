"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Navigationtest = () => {
    // CLIENT SIDE NAVIGATION 
    
    const router = useRouter();
    const pathName = usePathname(); 
    const setParams = useSearchParams();


    const q = setParams.get("q")
    console.log(q);
    
    const handleClick = () =>{
         router.forward()
    }

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here
      </Link>
      <button  onClick={handleClick}>Write and redirect</button>
    </div>
  );
};

export default Navigationtest;
