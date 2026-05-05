import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { courseCodes, getCourseName, getCourseUrl } from '@/domain/courseCode';
import type { PageComponent } from '@/serverComponent';

const HomePage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <h1>Online Writing Courses</h1>
        <p className="lead">Tune Your Creativity & Market Your Work</p>
        <p>Do you often wonder if you could earn money from your writing? You could share in the success that many of our students have achieved. Our unique training methods provide you with the techniques and marketing skills you need to break into print.</p>
        <p>You will work with your own tutor—a professional author—who will give you personal attention and advice. Our office staff will also help you whenever you need support.</p>
        <ul className="list-unstyled d-flex flex-wrap gap-2 justify-content-center">
          {courseCodes.map(c => <li key={c}><a href={getCourseUrl(c)}>{getCourseName(c)}</a></li>)}
        </ul>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <h2 className="h1">You Can Succeed As a Writer</h2>
        <p>To succeed as a writer, you simply need to exploit the things you know best. Perhaps you grow roses for a hobby? You can share your personal knowledge with fellow gardeners in newspapers and magazines. If you work in a bank, you could write articles on personal finance. Great cooks are always in demand for their recipes and tips. The bedtime stories you tell your own children can be shared with other parents and their kids.</p>
        <p>This simple approach—working with the things you know best—is the key to success. Knowing how and where to send your work are vital skills and they can be learned with the help of the School. We'll strengthen your special knowledge with professional technique and marketing skills.</p>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={[ 'TW-0001', 'TW-0002', 'TW-0003' ]} />
  </>
);

export default HomePage;
