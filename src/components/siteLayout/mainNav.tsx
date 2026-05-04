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
import { useScrollPositionContext } from '@/hooks/useScrollPositionContext';
import { courseCodes, getCourseName, getCourseUrl } from '@/domain/courseCode';

export const MainNav: FC = () => {
  const scrollPosition = useScrollPositionContext() ?? 0;
  const [key, setKey] = useState(0);

  const handleClick = (): void => {
    setTimeout(() => {
      setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
    }, 0);
  };

  return (
    <div className="bg-white">
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
            <div className="d-none d-sm-block d-lg-none me-3"><Link href="https://enroll.winghill.com" className="btn btn-primary">Enroll Now</Link></div>
            <div className="d-sm-none me-3"><Link href="https://enroll.winghill.com" className="btn btn-sm btn-primary">Enroll Now</Link></div>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <Toggle />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Online Writing Courses" id="courses-nav-dropdown">
                {courseCodes.map(c => <Link key={c} href={getCourseUrl(c)} className="dropdown-item" onClick={handleClick}>{getCourseName(c)}</Link>)}
                <li><hr className="dropdown-divider" /></li>
                <Link href="/online-writing-courses" className="dropdown-item" onClick={handleClick}>View All Courses</Link>
              </NavDropdown>
              <Link href="/free-course-catalog" className="nav-link" onClick={handleClick}>Free Catalog</Link>
              <Link href="/learning-online" className="nav-link" onClick={handleClick}>Learning Online</Link>
              <Link href="/tutors" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>Your Tutors</Link>
              <Link href="/faq" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>FAQ</Link>
              <NavDropdown title="About" id="about-nav-dropdown">
                <Link href="/about" className="dropdown-item" onClick={handleClick}>About the School</Link>
                <Link href="/about/meet-the-team" className="dropdown-item" onClick={handleClick}>Meet the Team</Link>
                <Link href="/tutors" className="dropdown-item d-none d-lg-block d-xl-none" onClick={handleClick}>Your Tutors</Link>
                <Link href="/faq" className="dropdown-item d-none d-lg-block d-xl-none" onClick={handleClick}>FAQ</Link>
                <Link href="/contact-us" className="dropdown-item" onClick={handleClick}>Contact Us</Link>
              </NavDropdown>
              <div className="d-none d-lg-block ms-3"><Link href="https://enroll.winghill.com" className="btn btn-primary">Enroll Now</Link></div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

const courses = [
  { name: 'Creative Writing', href: '/online-writing-courses/creative-writing' },
  { name: 'Novel Writing', href: '/online-writing-courses/novel-writing' },
  { name: 'Writing for Children', href: '/online-writing-courses/writing-for-children' },
  { name: 'Romance Writing', href: '/online-writing-courses/romance-writing' },
  { name: 'Memoir Writing', href: '/online-writing-courses/memoir-writing' },
  { name: 'Business Communications', href: '/online-writing-courses/business-communications' },
  { name: 'Screenwriting', href: '/online-writing-courses/screenwriting' },
] as const;