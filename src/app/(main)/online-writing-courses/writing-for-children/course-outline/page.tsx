import Placeholder from './placeholder.png';
import { CourseOutline } from '@/components/courseOutline';
import type { PageComponent } from '@/serverComponent';

const ChildrenWritingOutline: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <h1>Writing For Children Course Outline</h1>
        <p>Our Writing For Children course shows you how to make the most of your talent, your interests, your childhood memories and feelings and turn them into memorable and marketable stories and articles for young readers. You'll also learn how to tackle the growing fields of radio, theatre and television for young audiences.</p>
      </div>
    </section>

    {unitData.map((d, i) => (
      <CourseOutline key={d.title} unit={i + 1} title={d.title} src={d.icon} alternate={i % 2 === 1} className={i % 2 === 1 ? 'bg-light' : undefined}>
        {d.content}
      </CourseOutline>
    ))}
  </>

);

export default ChildrenWritingOutline;

const unitData = [
  {
    title: `Marketing Your Ideas`,
    icon: Placeholder,
    content: <p><i>Marketing Your Ideas</i> is a vital first step. In this unit, you'll learn the rules, how to follow them, when and how to break them. See the right way to decide on your topic, theme and age group. Then be sure you talk the talk and walk the walk. This unit shows you how to be sure that you captivate and not offend your young readers.</p>,
  },
  {
    title: `Creating Memorable Characters`,
    icon: Placeholder,
    content: <p>No cookie-cutter characters allowed! Your readers may be small but they can spot a phony from afar. See how to make your characters real. Capture their essence, motivation, attitude and thought. Learn how to recognize and capitalize on trends but stamp out stereotypes.</p>,
  },
  {
    title: `Plot Development`,
    icon: Placeholder,
    content: <p>You'll learn how to develop your plot, setting, conflict and suspense. See how to move your character from A to B convincingly. Discover how to layer your writing. Your book may produce a roller coaster of emotions and action. We'll make sure you hold the controls.</p>,
  },
  {
    title: `Making Speech Ring True`,
    icon: Placeholder,
    content: <p>The right dialogue is more vital in children's writing than any other form. Here you'll learn how to give a sense of cadence, pacing, the right phrasing to your characters' words. Writing realistic dialogue is not enough. It has to propel the plot, entice and entertain your reader, reveal primary and secondary personality traits. This unit &ldquo;tells it all.&rdquo;</p>,
  },
  {
    title: `Making Your Reader Laugh`,
    icon: Placeholder,
    content: <p>The humour you communicate in your work can captivate or completely turn off young readers. You have to hit just the right note. It's not that easy. This unit tells you how. Beyond &ldquo;knock, knock&rdquo; jokes, bathroom humour and cheap shots, you'll learn how to tickle the funny bone of your readers and how to apply the right light touch to serious issues.</p>,
  },
  {
    title: `Educational Writing`,
    icon: Placeholder,
    content: <p>Fact-based, educational or instructional articles for children are fun and profitable. In this unit you learn the specifics of this worthwhile area. The &ldquo;how-tos&rdquo; are just as fascinating for non-fiction as when you are writing pure fantasy. You'll learn the special research techniques, interview tips, best lead-ins, topics and markets for mixing fun and fact for children's writing.</p>,
  },
  {
    title: `Working with Words and Pictures`,
    icon: Placeholder,
    content: <p>In this unit you learn how to create successful picture books through the creative marriage of words and pictures. Publishers have very specific demands in this area. Your work has to be creative, appealing AND economic to produce. You'll find out how to be sure it is. It doesn't end there. How can you know how to appeal to the right sector? We'll show you how to develop work for tots and teens!</p>,
  },
  {
    title: `Tales of Horror`,
    icon: Placeholder,
    content: <p>Horrors! Craft scaaary tales kids and adults will love to shiver and quiver by. Learn how to choose age appropriate themes and how to handle guts gore and more. See just how to pick a petrifying plot. Make it the one your readers will remember with joy when they are adult. Learn how to develop a continuous thread of fear, build atmosphere, suspense, scare them to the core. Learn how to develop living, breathing &#40;and heavily perspiring&#41; characters!</p>,
  },
  {
    title: `Suspense and Mystery`,
    icon: Placeholder,
    content: <p>Solve the mystery of children's mystery writing. Tension, suspense, action—it's all in the planning. How to be sure your plan works for you. Learn the special ingredients of writing mysteries for children. How to be sure the work is age appropriate. The idiosyncrasies to give your juvenile Sherlock Holmes. How to make your readers identify with him/her. How to simmer the solution. Clues to successful clues.</p>,
  },
  {
    title: `Children's Radio and Television`,
    icon: Placeholder,
    content: <p>Adaptations for stage, radio and television can be magical and inspired or dreadful. Do it the right way. Breathe new life into your children's stories with sparkling new versions and the development of series. Hone your skills on how to develop the plots, personalities, settings, and time lines that are right for series and adaptations.</p>,
  },
  {
    title: `Selling Your Work`,
    icon: Placeholder,
    content: <p>Discover the proven techniques to selling your work in a variety of markets. They may not be traditional. They are profitable. Learn about the &ldquo;hidden&rdquo; markets for children's writing. We'll teach you how to write the right query and cover letters and &ldquo;milk&rdquo; one idea for several different markets.</p>,
  },
  {
    title: `Handling Ethical Issues`,
    icon: Placeholder,
    content: <p>Today's world is complex. Mother, father and two happy kids are no longer necessarily the norm for family life. Learn the ground rules to being a responsible children's writer. See how to handle sensitive issues, from fair play, to abuse, to harassment and racial diversity. Multicultural writing is a huge &#40;and growing&#41; sector of the market. Inspirational writing for children is another great area. Learn how to handle them like a pro.</p>,
  },
  {
    title: `Interacting with Publishers`,
    icon: Placeholder,
    content: <p>Publishers are people too. Learn how to build relationships with editors and publishers. It leads to long term writing success. The facts you need for how to deal with fiction and non-fiction editors and how to handle success and failure. Tips and tricks to giving those publishers what they want.</p>,
  },
  {
    title: `The Editing Process`,
    icon: Placeholder,
    content: <p>Painless self-editing leads to rich, lively, memorable writing that sells and keeps on selling. Learn what to leave in and what to cut out and just how to do it. Learn taut, tight writing, effective wordplay and the tricks of the editing trade. Our step-by-step approach takes you clearly, cleanly, simply, through a process many professional writers dread. You won't!</p>,
  },
  {
    title: `Children's Writer's First-Aid Kit`,
    icon: Placeholder,
    content: <p>Jam-packed with insider tips, hints, professional advice, handy research tools, this &ldquo;First Aid Kit&rdquo; is an all time favorite of the School's students. All the practical information you are likely to need and more.</p>,
  },
];
