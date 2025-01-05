"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import logo from "../../../public/amphitheater.png";
import { proximaBold } from "../../lib/fonts";

function AccountNavigation() {
  const onAccountClick = () => {
    console.log("Account dropdown option is clicked");
  };

  const onLogoutClick = () => {
    console.log("Logout dropdown option is clicked");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          johndoe@example.com
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem style={{ width: 190 }} onClick={onAccountClick}>
          Account
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogoutClick}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  return (
    <div className="flex p-8 justify-between bg-white flex-wrap">
      <div className="flex">
        <Image src={logo} alt={`Epidaurus logo`} width={75} height={75} />
        <div
          className={`${proximaBold.className} text-3xl text-cyan-900 mt-7 ml-2`}
        >
          Amphitheater
        </div>
      </div>
      <div className="mt-7">
        <AccountNavigation />
      </div>
    </div>
  );
}
