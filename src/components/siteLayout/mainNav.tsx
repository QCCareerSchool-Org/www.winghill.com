'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './mainNav.module.css';
import Toggle from './toggle.svg';
import MobileLogoImage from './winghill-mobile-logo.png';
import { Logo } from '../logo';
import { courseCodes, getCourseName, getCourseUrl } from '@/domain/courseCode';
import { useScrollPositionContext } from '@/hooks/useScrollPositionContext';

export const MainNav: FC = () => {
  const scrollPosition = useScrollPositionContext() ?? 0;
  const [ key, setKey ] = useState(0);

  const handleClick = (): void => {
    setTimeout(() => {
      setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
    }, 0);
  };

  return (
    <div className="bg-dark-grey position-relative">
      <div className="container d-none d-lg-flex justify-content-end pt-4 gap-3">
        <div><Link href="https://studentcenter.qccareerschool.com/students/" className="btn btn-primary btn-grey">Student Login</Link></div>
        <div><Link href="https://enroll.winghill.com" className="btn btn-primary">Enroll Now</Link></div>
      </div>
      <Navbar key={key} expand="lg" collapseOnSelect={true} className={`${styles.mainNav} ${scrollPosition > 1 ? styles.scrolled : undefined} `}>
        <div className="container">
          <Link className="navbar-brand d-lg-none" href="/" aria-label="Go back to the home page">
            <Image src={MobileLogoImage} alt="Winghill Writing School" priority className="img-fluid d-lg-none" style={{ height: 48, width: 'auto' }} />
          </Link>
          <div className="d-flex">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <Toggle />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Link className="navbar-brand d-none d-lg-block" href="/" aria-label="Go back to the home page">
              <div id="navLogo" style={{ position: 'absolute', top: -48, zIndex: 10 }}>
                <Logo height={170} />
              </div>
            </Link>
            <Nav className="ms-auto">
              <NavDropdown title="Courses" className="" id="courses-nav-dropdown">
                {courseCodes.map(c => <Link key={c} href={getCourseUrl(c)} className="dropdown-item" onClick={handleClick}>{getCourseName(c)}</Link>)}
              </NavDropdown>
              <Link href="/learning-online" className="nav-link" onClick={handleClick}>Learning Online</Link>
              <Link href="/tutors" className="nav-link" onClick={handleClick}>Your Tutors</Link>
              <Link href="/faq" className="nav-link" onClick={handleClick}>FAQ</Link>
              <Link href="/student-resources" className="nav-link" onClick={handleClick}>Student Resources</Link>
              <NavDropdown title="About" id="about-nav-dropdown" className=" text-white">
                <Link href="/about/#bbb" className="dropdown-item" onClick={handleClick}>BBB Accreditation</Link>
                <Link href="/about/#values" className="dropdown-item" onClick={handleClick}>Our Core Values</Link>
                <Link href="/about/#guarantee" className="dropdown-item" onClick={handleClick}>Guarantee</Link>
              </NavDropdown>
              <Link href="/contact-us" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>Contact</Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};
