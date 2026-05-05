import Placeholder from './placeholder.png';
import { CourseOutline } from '@/components/courseOutline';
import type { PageComponent } from '@/serverComponent';

const MemoirWritingOutline: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <h1>Memoir Writing Course Outline</h1>
        <p>You can easily write your own memoir by using our proven step-by-step approach. You'll be able to build a treasured legacy from your life history for yourself, your children, and future generations of your family. We will show you how to gather and organize your material. We'll help you to decide what's important and what can be left out. Most of all, we'll work with you to structure a beautiful history that will bring back old memories that will fascinate your friends and family.</p>
      </div>
    </section>

    {unitData.map((d, i) => (
      <CourseOutline key={d.title} unit={i + 1} title={d.title} src={d.icon} alternate={i % 2 === 1} className={i % 2 === 1 ? 'bg-light' : undefined}>
        {d.content}
      </CourseOutline>
    ))}
  </>

);

export default MemoirWritingOutline;

const unitData = [
  {
    title: `Family History`,
    icon: Placeholder,
    content: <p>In this unit, you learn to set the parameters for your work. You decide, in a strategic way, which track of family history writing to follow. Your journey into the most fascinating area of writing starts. You'll develop a clear idea of what to accomplish, understand how to target your readership, find out what you should include. We'll discuss the different forms of memoir writing. You practice them. Together, we consider your parents and their early lives. You learn the techniques for researching this period.</p>,
  },
  {
    title: `Beginning the Writing Process`,
    icon: Placeholder,
    content: <p>This is where you learn how to start in on the real creative process. We teach you the tricks of informing <i>and</i> entertaining your reader. You learn the practical techniques to make the work move forward smoothly and efficiently. We go back to your birth and your earliest memories. We teach you how to nurture and provoke half memories until they are in full flower.</p>,
  },
  {
    title: `Developing Working Parameters`,
    icon: Placeholder,
    content: <p>You learn about how to segment the project in the best way. You develop a formal chronology. Then you learn how to make the chronology sparkle. You'll find out exactly how to use an Outline and how it differs from a chronology. Together, we work on developing a working outline. The end of the unit takes a look at your early school years. Be brave! We are going to dredge up all kinds of memories about your first day of school and that teacher! It may not be easy to recall but it will make hilarious and poignant reading!</p>,
  },
  {
    title: `Locating Essential Information`,
    icon: Placeholder,
    content: <p>This unit helps you understand the process of research along trails which may be cold. Today, vast amounts of information about an individual and his history are measured in computer bytes. We show you how to locate and use it. You'll learn to research the records, data banks and archives. They may yield treasure troves of information you had not suspected were there. At the end of this unit we help you detail your formative years.</p>,
  },
  {
    title: `Working From an Outline`,
    icon: Placeholder,
    content: <p>Now you'll learn all the golden rules for conducting effective interviews. Discover who are the most effective sources and how to be sure you gain access to them. You'll learn how to verify and document your information. It's a vital lesson. Then you learn how to introduce an element of real excitement to achieve maximum effect. Now we start in together on describing your teenage years. Do you have any secrets you'd rather not tell? We'll help you decide what should—and what should not—be divulged!</p>,
  },
  {
    title: `Creating Lively Narrative`,
    icon: Placeholder,
    content: <p>Lively narrative stimulates a reader's interest. You learn to maintain a variety of pace. We help you learn the dynamics of a large number of different techniques and when to use them. You discover variations on themes, the joys of delivering spicy opinion pieces, riveting description and how to use humour in your work.</p>,
  },
  {
    title: `Writing From the Heart`,
    icon: Placeholder,
    content: <p>In this unit you learn the realities of writing from the heart, what it means and how to do it. We help you to get over the fear of baring your soul. You learn to make yourself creator, organizer and critic for your work. Then we get to the details of describing your years of romance, how you met your mate, your early relationship, wedding, first home etc. It's an exciting period to describe but you should be up to the job by this point.</p>,
  },
  {
    title: `Flexing Your Storytelling Muscles`,
    icon: Placeholder,
    content: <p>By the end of this unit, you will be equipped to analyze your stories to determine your own successes or failures. More importantly, you will know where to locate the weak or missing elements which, unless corrected, will disappoint your reader. Then we turn to a look at you and your community and era. Your analytical side is allowed to surface as we consider your lot in life, your career choices and contributions to family and society.</p>,
  },
  {
    title: `The Responsibility of the Writer`,
    icon: Placeholder,
    content: <p>As a writer, you are responsible for honest representation of the facts. However, you must still be sensitive to the feelings of others—and to the danger of libel and slander. You'll learn to walk the fine line between being an artist and an archaeologist. Learn how to deal with painful memories, tragedies and death. The healing properties of memoir writing exist but can be overrated. Learn how to handle this. In your own work, we go on to tackle the family years—and the joys and sorrows they can bring.</p>,
  },
  {
    title: `Variety, the Spice of Life`,
    icon: Placeholder,
    content: <p>Variety is the spice of life. In this unit, we examine thirty different ways to introduce originality and variety into your work. You'll learn how to trigger particular memories and then use them in the best way possible. Then we use that new information to help you build some very specific stories that might otherwise never have seen the light of day.</p>,
  },
  {
    title: `Focusing on the Writer`,
    icon: Placeholder,
    content: <p>In this unit we change emphasis from the writing to the writer: you. Can you find the real you in your writing? It's an important question. This unit shows you how to be sure that your essence is well represented. You'll see how to be effective in translating the important elements of your beliefs and personality to the page. Others will truly be able to know and understand you. That's a proud achievement for anyone.</p>,
  },
  {
    title: `Editing Like a Pro`,
    icon: Placeholder,
    content: <p>Revision is a highly underestimated phase of writing. As your own editor, you have to evaluate and perfect your work. This unit takes you through the different phases of editing like a pro. It shows you what to look for, how to recognize it and how to achieve the best product you are capable of. There are some very common errors. Others may be your very own specialty. You'll know how to recognize—and deal with—both kinds of mistakes.</p>,
  },
  {
    title: `Your Book`,
    icon: Placeholder,
    content: <p>By now you have a substantial manuscript. You have researched, written, revised and edited it with the help of your tutor and your new fund of knowledge. Finally we can start to relax and consider what your book should look like. We must be certain that your exit as a writer is completed with dignity and a sense of finality. Your title must be well chosen. You'll learn how to ensure all this.</p>,
  },
  {
    title: `Reproducing Your Memoir`,
    icon: Placeholder,
    content: <p>In this unit you learn how to market your work. Together, we develop a plan of action to deliver your book to as wide an audience as possible. This unit sets out all the available options and gives you lots of information about the wide range of choice. You'll be aware of the current trends, how to deal with publishers, the pitfalls to know of. This is your own personal introduction to the inside track of the publishing world.</p>,
  },
  {
    title: `The Business of Writing`,
    icon: Placeholder,
    content: <p>Finally we get to the hard-nosed world of business and how to deal with it. You'll learn everything you need to know before you contact a publisher. You'll practice writing query letters that really sell your work. You'll fully understand the purpose of a synopsis. You'll know all the right ways to make your work relevant, marketable and, ultimately, saleable. There are a thousand and one ways to make writing pay. You'll know the best ones.</p>,
  },
];
