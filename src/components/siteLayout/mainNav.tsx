'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './mainNav.module.css';
import Toggle from './toggle.svg';
import { Logo } from '@/components/logo';
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
    <div className="bg-white">
      <div className="container d-none d-lg-flex justify-content-end mt-4">
        <div className="d-lg-none d-xl-block ms-3"><Link href="https://studentcenter.qccareerschool.com/students/" className="btn btn-primary">Student Login</Link></div>
        <div className="d-lg-none d-xl-block ms-3"><Link href="https://enroll.winghill.com" className="btn btn-primary">Enroll Now</Link></div>
      </div>
      <Navbar key={key} expand="lg" collapseOnSelect={true} className={`${styles.mainNav} ${scrollPosition > 1 ? styles.scrolled : undefined} `}>
        <div className="container">
          <Link className="navbar-brand" href="/" aria-label="Go back to the home page">
            <div id="navLogo" className="d-none d-sm-block">
              <Logo height={22} />
            </div>
            <div className="d-sm-none">
              <Logo height={17} />
            </div>
          </Link>
          <div className="d-flex">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <Toggle />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Online Writing Courses" className="d-lg-none d-xl-block" id="courses-nav-dropdown">
                {courseCodes.map(c => <Link key={c} href={getCourseUrl(c)} className="dropdown-item" onClick={handleClick}>{getCourseName(c)}</Link>)}
                <li><hr className="dropdown-divider" /></li>
                <Link href="/online-writing-courses" className="dropdown-item" onClick={handleClick}>View All Courses</Link>
              </NavDropdown>
              <Link href="/learning-online" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>Learning Online</Link>
              <Link href="/tutors" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>Your Tutors</Link>
              <Link href="/faq" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>FAQ</Link>
              <NavDropdown title="About" id="about-nav-dropdown" className="d-lg-none d-xl-block">
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
