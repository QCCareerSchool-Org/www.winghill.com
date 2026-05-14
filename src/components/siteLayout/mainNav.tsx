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
    <div className="bg-dark-grey position-relative">
      <div className="container d-none d-xl-flex justify-content-end pt-4">
        <div className="d-lg-none d-xl-block ms-3"><Link href="https://studentcenter.qccareerschool.com/students/" className="btn btn-primary btn-grey">Student Login</Link></div>
        <div className="d-lg-none d-xl-block ms-3"><Link href="https://enroll.winghill.com" className="btn btn-primary ">Enroll Now</Link></div>
      </div>
      <Navbar key={key} expand="xl" collapseOnSelect={true} className={`${styles.mainNav} ${scrollPosition > 1 ? styles.scrolled : undefined} `}>
        <div className="container">
          <div className="d-flex">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <Toggle />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Link className="navbar-brand" href="/" aria-label="Go back to the home page">
              <div
                id="navLogo" className="d-none d-xl-block" style={{
                  position: 'absolute',
                  top: -48,
                  zIndex: 10,
                }}
              >
                <Logo height={170} />
              </div>
            </Link>
            <Nav className="ms-auto">

              <NavDropdown title="Online Writing Courses" className="d-lg-none d-xl-block" id="courses-nav-dropdown">
                {courseCodes.map(c => <Link key={c} href={getCourseUrl(c)} className="dropdown-item footerLink" onClick={handleClick}>{getCourseName(c)}</Link>)}
              </NavDropdown>
              <Link href="/learning-online" className="nav-link d-lg-none d-xl-block footerLink" onClick={handleClick}>Learning Online</Link>
              <Link href="/tutors" className="nav-link d-lg-none d-xl-block footerLink" onClick={handleClick}>Your Tutors</Link>
              <Link href="/faq" className="nav-link d-lg-none d-xl-block footerLink" onClick={handleClick}>FAQ</Link>
              <Link href="/student-resources" className="nav-link d-lg-none d-xl-block footerLink" onClick={handleClick}>Student Resources</Link>
              <NavDropdown title="About" id="about-nav-dropdown" className="d-lg-none d-xl-block text-white">
                <Link href="/about/#bbb" className="dropdown-item footerLink" onClick={handleClick}>BBB Accreditation</Link>
                <Link href="/about/#values" className="dropdown-item footerLink" onClick={handleClick}>Our Core Values</Link>
                <Link href="/about/#guarantee" className="dropdown-item footerLink" onClick={handleClick}>Guarantee</Link>
              </NavDropdown>
              <Link href="/contact-us" className="nav-link d-lg-none d-xl-block footerLink" onClick={handleClick}>Contact</Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};
