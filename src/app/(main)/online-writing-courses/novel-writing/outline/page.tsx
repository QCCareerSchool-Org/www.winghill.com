import Image from 'next/image';

import { CourseOutlineLeft } from './courseOutline';
import { CourseOutlineRight } from './courseOutline';
import Unit1Icon from './outline-icons-novel-writing-01.png';
import Unit2Icon from './outline-icons-novel-writing-02.png';
import Unit3Icon from './outline-icons-novel-writing-03.png';
import Unit4Icon from './outline-icons-novel-writing-04.png';
import Unit5Icon from './outline-icons-novel-writing-05.png';
import Unit6Icon from './outline-icons-novel-writing-06.png';
import Unit7Icon from './outline-icons-novel-writing-07.png';
import Unit8Icon from './outline-icons-novel-writing-08.png';
import Unit9Icon from './outline-icons-novel-writing-09.png';
import Unit10Icon from './outline-icons-novel-writing-10.png';
import Unit11Icon from './outline-icons-novel-writing-11.png';
import Unit12Icon from './outline-icons-novel-writing-12.png';
import Unit13Icon from './outline-icons-novel-writing-13.png';
import Unit14Icon from './outline-icons-novel-writing-14.png';
import Unit15Icon from './outline-icons-novel-writing-15.png';
import Unit16Icon from './outline-icons-novel-writing-16.png';
import Unit17Icon from './outline-icons-novel-writing-17.png';
import Unit18Icon from './outline-icons-novel-writing-18.png';
import Unit19Icon from './outline-icons-novel-writing-19.png';
import Unit20Icon from './outline-icons-novel-writing-20.png';
import type { PageComponent } from '@/serverComponent';

const NovelWritingOutline: PageComponent = () => {

  return(
    <>
      <section>
        <div className="container">
          <h1>Novel Writing Course Outline</h1>
          <p>Do you have a great idea for a novel but are having trouble getting it onto paper? In this course, we'll show you the mechanics of novel writing. You'll learn to build plots, when to bring in conflict, and when to resolve it. You'll see how to build your major and minor characters. We'll teach you some tricks that will make writing dialogue easy and lots of fun. What's more, we'll show you how much to introduce and where.</p>
        </div>
      </section>

      <CourseOutlineLeft unit={1} title="Choosing a Genre" description={<p>In <i>Choosing a Genre</i>, you start out the right way. Learn how to dissect the novel and how to recognize all the different elements that compose it. You'll learn how to identify them and when and how to use the different elements to best advantage. How to be sure that the right ones will be included in the right way in your book. The process of working with your own tutor begins.</p>} src={Unit1Icon} bgLight />
      <CourseOutlineRight unit={2} title="Plot Ideas" description={<p>The bricks and mortar of your book: learn how to introduce action, description, narrative, and how to keep your reader's imagination in the equation. We'll also cover how to advance the plot, show character, develop description, and make each element appropriate for the genre you have chosen. By the end of this unit, you'll know just how to develop the framework of your novel.</p>} src={Unit2Icon} />
      <CourseOutlineLeft unit={3} title="Developing Your Plot Further" description={<p>How to add spice to your novel. Your reader won't want to put down your book if you have added character, &ldquo;voice,&rdquo; and ambiance. You learn the surprising ways to flesh out your basic plot and add substance to your book. Make your characters reach out and &ldquo;grab&rdquo; the reader. This unit shows you how and gives you lots of practice in how to do it yourself.</p>} src={Unit3Icon} bgLight />
      <CourseOutlineRight unit={4} title="Building Sub-Plots" description={<p>You want your novel to be read. In this unit you'll learn the essential mechanics of the process and how to be practical before you get really creative. Every novel has to fulfill certain requirements. Learn what they are and how to include them the right way. Give your book the chance it deserves.</p>} src={Unit4Icon} />
      <CourseOutlineLeft unit={5} title="Keeping Your Novel Balanced" description={<p>In this unit, you'll learn some surprising new skills. Learn how to structure your novel so that it exactly fits the demands of specific publishers. Find out where to place your plot twists and what is behind the arithmetic of novel writing. Learn the vital &ldquo;readability rules&rdquo; and how to make your reader your ally.</p>} src={Unit5Icon} bgLight />
      <CourseOutlineRight unit={6} title="Creating Characters" description={<p><i>Creating Characters</i> teaches you how to create real people for your book. You want your readers to weep with, laugh at and love your characters. Using a step-by-step approach, you'll learn how to develop traits, build on them, and mix ingredients so that even your minor characters spring to life.</p>} src={Unit6Icon} />
      <CourseOutlineLeft unit={7} title="Choosing Names" description={<p>Names are important in real life. In fiction, they play a vital role in developing personality. In <i>Choosing Names</i>, you'll learn and understand all the rules and the implications of name development. It's not as easy as it seems and there's a lot to think about. You'll get lots of practice to be sure that your characters have the advantage of the right names.</p>} src={Unit7Icon} bgLight />

    </>
  );
};

export default NovelWritingOutline;
