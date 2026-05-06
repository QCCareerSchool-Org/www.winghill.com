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
import { CourseOutline } from '@/components/courseOutline';
import type { PageComponent } from '@/serverComponent';

const NovelWritingOutline: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <h1>Novel Writing Course Outline</h1>
        <p>Do you have a great idea for a novel but are having trouble getting it onto paper? In this course, we'll show you the mechanics of novel writing. You'll learn to build plots, when to bring in conflict, and when to resolve it. You'll see how to build your major and minor characters. We'll teach you some tricks that will make writing dialogue easy and lots of fun. What's more, we'll show you how much to introduce and where.</p>
      </div>
    </section>

    {unitData.map((d, i) => (
      <CourseOutline key={d.title} unit={i + 1} title={d.title} src={d.icon} alternate={i % 2 === 1} className={i % 2 === 1 ? 'bg-light' : undefined}>
        {d.content}
      </CourseOutline>
    ))}
  </>
);

export default NovelWritingOutline;

const unitData = [
  {
    title: 'Choosing a Genre',
    icon: Unit1Icon,
    content: <p>In <i>Choosing a Genre</i>, you start out the right way. Learn how to dissect the novel and how to recognize all the different elements that compose it. You'll learn how to identify them and when and how to use the different elements to best advantage. How to be sure that the right ones will be included in the right way in your book. The process of working with your own tutor begins.</p>,
  },
  {
    title: 'Plot Ideas',
    icon: Unit2Icon,
    content: <p>The bricks and mortar of your book: learn how to introduce action, description, narrative, and how to keep your reader's imagination in the equation. We'll also cover how to advance the plot, show character, develop description, and make each element appropriate for the genre you have chosen. By the end of this unit, you'll know just how to develop the framework of your novel.</p>,
  },
  {
    title: 'Developing Your Plot Further',
    icon: Unit3Icon,
    content: <p>How to add spice to your novel. Your reader won't want to put down your book if you have added character, &ldquo;voice,&rdquo; and ambiance. You learn the surprising ways to flesh out your basic plot and add substance to your book. Make your characters reach out and &ldquo;grab&rdquo; the reader. This unit shows you how and gives you lots of practice in how to do it yourself.</p>,
  },
  {
    title: 'Building Sub-Plots',
    icon: Unit4Icon,
    content: <p>You want your novel to be read. In this unit you'll learn the essential mechanics of the process and how to be practical before you get really creative. Every novel has to fulfill certain requirements. Learn what they are and how to include them the right way. Give your book the chance it deserves.</p>,
  },
  {
    title: 'Keeping Your Novel Balanced',
    icon: Unit5Icon,
    content: <p>In this unit, you'll learn some surprising new skills. Learn how to structure your novel so that it exactly fits the demands of specific publishers. Find out where to place your plot twists and what is behind the arithmetic of novel writing. Learn the vital &ldquo;readability rules&rdquo; and how to make your reader your ally.</p>,
  },
  {
    title: 'Creating Characters',
    icon: Unit6Icon,
    content: <p><i>Creating Characters</i> teaches you how to create real people for your book. You want your readers to weep with, laugh at and love your characters. Using a step-by-step approach, you'll learn how to develop traits, build on them, and mix ingredients so that even your minor characters spring to life.</p>,
  },
  {
    title: 'Choosing Names',
    icon: Unit7Icon,
    content: <p>Names are important in real life. In fiction, they play a vital role in developing personality. In <i>Choosing Names</i>, you'll learn and understand all the rules and the implications of name development. It's not as easy as it seems and there's a lot to think about. You'll get lots of practice to be sure that your characters have the advantage of the right names.</p>,
  },
  {
    title: 'Writing What You Know',
    icon: Unit8Icon,
    content: <p>In <i>Writing What You Know</i>, you learn about how to develop your knowledge and how to apply facts to different settings, times, and places. This unit is packed with information in a very concrete way. As a writer, you need to use the information in your head a thousand different ways. Shakespeare never left England. He wrote Othello, set in Cyprus, utterly convincingly. Find out how.</p>,
  },
  {
    title: 'Sentence Structure',
    icon: Unit9Icon,
    content: <p>Start to think of yourself as a professional. That is what you are fast becoming. In Your Tool Kit, you'll learn all the tools you need as a writer <i>and</i> the way to use them effectively and efficiently. Equip yourself with the right methodology and tools to do your job right.</p>,
  },
  {
    title: 'Outlines and Dialogue',
    icon: Unit10Icon,
    content: <p>An outline is a vital tool. New writers agonize over it. This unit removes all the pain. Learn the professional way to develop an outline to be of greatest help as you write and learn how to make the outline sell the work. This unit will also teach you how to develop dialogue the right way, when to use dialogue to advance the story, and how to make your dialogue &ldquo;right&rdquo; for the character.</p>,
  },
  {
    title: 'Capturing Your Reader',
    icon: Unit11Icon,
    content: <p><i>Capturing Your Reader</i> is not as violent as it sounds. This unit shows you how to ensure that your reader needs to read your book and wants to buy your next one. Where and how to introduce conflict, how to overlap the conflicts at plot twists, how to move the plot forward, how to reveal your characters slowly. How top force the reader to identify with your protagonists.</p>,
  },
  {
    title: 'Choosing Tense',
    icon: Unit12Icon,
    content: <p>How to choose the right tense and person for a story is a complex issue. This unit will make it simple for you. You'll know why the present tense is a difficult one to work in and how and when it should be used. When to write in one person, when in another. It would take years of hit and miss practice to acquire this kind of information by yourself.</p>,
  },
  {
    title: 'Checklist For Success',
    icon: Unit13Icon,
    content: <p>The best writers rewrite their work. <i>Checklist For Success</i> shows you how to do it effectively and efficiently. There's also much more. How to introduce real suspense, the bad and the good kinds. How to be sure your reader does not feel cheated by you. How to make your background work overtime. How to be sure your novel is &ldquo;of its own time&rdquo;. How to change focus.</p>,
  },
  {
    title: 'Polishing Your Dialogue',
    icon: Unit14Icon,
    content: <p>In <i>Polishing Your Dialogue</i>, you learn all the advanced tricks of the trade about how to make your dialogue really work for you. Seventy percent of verbal communication is conveyed by tone and body language. In your book you have to make the character speak volumes about himself with every word. This unit gives you the tools to do just that.</p>,
  },
  {
    title: 'Dissecting Your Characters',
    icon: Unit15Icon,
    content: <p>Would you like to really get inside your characters? This unit gives you real insight. You'll see how to equip your major characters with full compliments of appropriate accessories and tastes. They will say so much about your protagonists that no critic will ever claim that your people are unbelievable.</p>,
  },
  {
    title: 'Choosing the Right Words',
    icon: Unit16Icon,
    content: <p>In <i>Choosing the Right Words</i>, you'll see why &ldquo;the difference between the right word and the almost-right word is like the difference between lightning and the lightning bug&rdquo;. Your words must carry the impact of the lightning. After this chapter, they will!</p>,
  },
  {
    title: 'Science Fiction and Horror',
    icon: Unit17Icon,
    content: <p>In <i>Science Fiction and Horror</i> you'll learn to describe the grotesque and develop your disposable characters. This chapter will help you build fantasy worlds and the rules that govern them. A must read for those bent on horrifying horror and stellar science fiction.</p>,
  },
  {
    title: 'Comedy, Mystery, and Romance',
    icon: Unit18Icon,
    content: <p>Laughter, love, glitz, and mystery: <i>Comedy, Mystery, and Romance</i> will take you through these difficult genres and help you master them. He died, she married the butler, and <i>you</i> sold a book.</p>,
  },
  {
    title: 'Choosing a Title',
    icon: Unit19Icon,
    content: <p>Names, tense, voices and other tips: <i>Choosing a Title</i> is the final collection of tips and hints that will polish your novel into publishing gold.</p>,
  },
  {
    title: 'Finding a Publisher',
    icon: Unit20Icon,
    content: <p>Go from writer to marketer: <i>Finding a Publisher</i> takes you through the steps of selling your work, from choosing a publisher to evaluating your contract.</p>,
  },
];
