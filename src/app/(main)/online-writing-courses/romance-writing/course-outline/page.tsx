import Unit1Icon from './outline-icons-romance-writing-01.png';
import Unit2Icon from './outline-icons-romance-writing-02.png';
import Unit3Icon from './outline-icons-romance-writing-03.png';
import Unit4Icon from './outline-icons-romance-writing-04.png';
import Unit5Icon from './outline-icons-romance-writing-05.png';
import Unit6Icon from './outline-icons-romance-writing-06.png';
import Unit7Icon from './outline-icons-romance-writing-07.png';
import Unit8Icon from './outline-icons-romance-writing-08.png';
import Unit9Icon from './outline-icons-romance-writing-09.png';
import Unit10Icon from './outline-icons-romance-writing-10.png';
import Unit11Icon from './outline-icons-romance-writing-11.png';
import Unit12Icon from './outline-icons-romance-writing-12.png';
import Unit13Icon from './outline-icons-romance-writing-13.png';
import Unit14Icon from './outline-icons-romance-writing-14.png';
import Unit15Icon from './outline-icons-romance-writing-15.png';
import Unit16Icon from './outline-icons-romance-writing-16.png';
import Unit17Icon from './outline-icons-romance-writing-17.png';
import Unit18Icon from './outline-icons-romance-writing-18.png';
import Unit19Icon from './outline-icons-romance-writing-19.png';
import Unit20Icon from './outline-icons-romance-writing-20.png';
import { CourseOutline } from '@/components/courseOutline';
import type { PageComponent } from '@/serverComponent';

const RomanceWritingPageOutline: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <h1>Romance Writing Course Outline</h1>
        <p>We will show you all the techniques of romance writing. You'll learn the plot elements necessary for saleable romance: attraction, internal, and external conflict, &quot;life's darkest moment&quot;, and satisfying resolution. We will help you build romantic characters that will take your reader's breath away. We will guide you in marketing and publishing your work.</p>
      </div>
    </section>

    {unitData.map((d, i) => (
      <CourseOutline key={d.title} unit={i + 1} title={d.title} src={d.icon} alternate={i % 2 === 1} className={i % 2 === 1 ? 'bg-light' : undefined}>
        {d.content}
      </CourseOutline>
    ))}
  </>
);

export default RomanceWritingPageOutline;

const unitData = [
  {
    title: 'Choosing the Right Words',
    icon: Unit1Icon,
    content: <p>Understanding the function of words (dialogue, description, action, and narrative).</p>,
  },
  {
    title: 'Character Development',
    icon: Unit2Icon,
    content: <p>Advancing the plot, showing character, using your reader's imagination.</p>,
  },
  {
    title: 'Getting Inspired',
    icon: Unit3Icon,
    content: <p>Writing what you know, using your background to create believable characters, your heroine and hero.</p>,
  },
  {
    title: 'Marketing Your Ideas',
    icon: Unit4Icon,
    content: <p>How to sell your novel, getting a publisher to read your manuscript. The mechanical rules (looking for a market, proper format submissions).</p>,
  },
  {
    title: 'Creating a Plot Outline',
    icon: Unit5Icon,
    content: <p>The concept of plot—your novel's blueprint, its skeleton, its girders and its load-bearing walls. Driving your story forward right from the beginning.</p>,
  },
  {
    title: 'Developing Your Plot',
    icon: Unit6Icon,
    content: <p>Different Stages of plot from major to minor. Creating dramatic irony.</p>,
  },
  {
    title: 'Using the Right Tools',
    icon: Unit7Icon,
    content: <p>Tools of the trade. How your equipment affects the way you write. Working with the best tools you can afford — from computers, dictionaries to resource manuals, thesaurus, books on grammar, and more.</p>,
  },
  {
    title: 'Grabbing Attention',
    icon: Unit8Icon,
    content: <p>How will you grab your reader with your first page, first paragraph, first sentence. The right mixture and rules to follow to produce a perfectly sculptured novel from the first chapter to your ending.</p>,
  },
  {
    title: 'Writing Your First Chapter',
    icon: Unit9Icon,
    content: <p>Chapters, paragraphs, dialogue. Writing your first chapter now that you've a good understanding of all the &quot;building blocks&quot;. Starting to build your novel.</p>,
  },

  {
    title: 'Maintaining Tension',
    icon: Unit10Icon,
    content: <p>Maintaining tension and avoiding unnecessary transitions. Leading your reader from room to room.</p>,
  },
  {
    title: 'The Editing Process',
    icon: Unit11Icon,
    content: <p>Providing your readers entertainment and insight to your work. Cutting out the inessentials.</p>,
  },
  {
    title: 'Choosing Names and Titles',
    icon: Unit12Icon,
    content: <p>What's in a name? How to go about getting a pen name, title for your book, and naming your characters.</p>,
  },
  {
    title: 'Dealing with Copyright',
    icon: Unit13Icon,
    content: <p>Copyright—protecting your work against plagiarism.</p>,
  },
  {
    title: 'Sensual Words',
    icon: Unit14Icon,
    content: <p>The &quot;sensuality scale&quot;—picking the imprint that you write for.</p>,
  },
  {
    title: 'Revealing Thoughts on Paper',
    icon: Unit15Icon,
    content: <p>The novelist's job is to show—not tell. The techniques on how to show your reader what's going on inside your character's skull and behind the scenes. The right way to feed your reader information. How to avoid the wrong way.</p>,
  },
  {
    title: 'The Process of Rewriting',
    icon: Unit16Icon,
    content: <p>The purpose and process of rewrite. The novelist's checklist.</p>,
  },
  {
    title: 'The Role of Research',
    icon: Unit17Icon,
    content: <p>The role of research. How to avoid a &quot;bad&quot; beginning and ending. Developing a well planned novel from page one.</p>,
  },
  {
    title: 'Selling Your Outline',
    icon: Unit18Icon,
    content: <p>Outlines. Writing the outline that will &quot;presell&quot; your novel. How to make the O&3 (three complete highly polished chapters and an outline for the rest of your book).</p>,
  },
  {
    title: 'Working with Editors',
    icon: Unit19Icon,
    content: <p>The odds and ends, the rag bag. How the role of the editor has changed—how they judge submissions, the process of editing and avoiding clichés.</p>,
  },
  {
    title: 'Presenting Your Manuscript',
    icon: Unit20Icon,
    content: <p>The construction and selling of yourself and your novel. The best way to approach the editor. How your manuscript should be presented. Using rejection as an encouragement—recharging your batteries.</p>,
  },

];
