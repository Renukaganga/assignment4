'use client';
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "./components/Layout";
import logo from "./logo.jpg";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "./Navbar.css";

export default function Navbar() {
  return (
    <Layout>
      <NavigationMenu className="navbar">
        <div className="logo">
          <Image src={logo} alt="College Logo" width={1100} height={100} />
        </div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" passHref legacyBehavior>
              <NavigationMenuLink className="nav-link">Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <NavigationMenuTrigger className="about-trigger">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="dropdown-content">
                <li>
                  <Link href="/about/aboutcollege" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">History</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/about/accreditations" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Accreditations</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/about/governance" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Governance</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/about/vision" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Vision</NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" passHref legacyBehavior>
              <NavigationMenuLink className="nav-link">Contact Us</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="about-trigger" >
              Departments
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="dropdown-content">
                <li>
                  <Link href="/departments/CSE" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Computer Science And Engineering(CSE)</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/departments/IT" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Information Technology(IT)</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/departments/CSE(AIandML)" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">CSE(Machine Learning)</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/departments/CSE(AIandDS)" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">CSE(Data Science)</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/departments/MECHANICAL" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Mechanical Engineering(ME)</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/departments/ECE" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Electrical, Communication and Electronics Engineering(ECE)</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/departments/EEE" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Electrical and Electronics Engineering(EEE)</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/departments/CIVIL" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">Civil Engineering</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/departments/CSE(Cyber)" passHref legacyBehavior>
                    <NavigationMenuLink className="dropdown-link">CSE(Cyber Security)</NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/branches" passHref legacyBehavior>
              <NavigationMenuLink className="nav-link">Branches</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/login" passHref legacyBehavior>
              <NavigationMenuLink className="nav-link">Login</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/signup" passHref legacyBehavior>
              <NavigationMenuLink className="nav-link">Sign Up</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/students" passHref legacyBehavior>
              <NavigationMenuLink className="nav-link">Students</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </Layout>
  );
}