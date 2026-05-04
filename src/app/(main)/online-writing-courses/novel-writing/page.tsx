import type { PageComponent } from '@/app/serverComponent';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';

const courseCode: CourseCode = 'NV';

const NovelWritingPage: PageComponent = async () => {
  const priceResult = await fetchPrice();

  return(
    <section>
      <div className="container">
        <h1>Novel Writing Course</h1>
        <p>You might be overwhelmed by the idea of writing an entire novel on your own. We’ll let you in on a little secret—it’s easier than you think! By writing only a few pages a week, you’ll quickly finish your first book. We’ll show you how.</p>
        <p>Our course guides break down the process of writing a novel into a few simple steps. The first step involves careful planning and organization. You’ll discover that once you’ve laid out the structure of the book and its characters, writing the novel is actually the easy part! We’ll teach you how to create plots, bring in conflict, and craft an effective ending. You’ll also learn how to build major and minor characters that are full of life, emotion, and energy. Each lesson of the course is dedicated to helping you harness your creative ideas and mould them into a publishable manuscript.</p>
      </div>
    </section>
  );

};

export default NovelWritingPage;
