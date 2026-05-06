import Image from 'next/image';

import CourseBanner from './course-banner-writing-for-children.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import { GuaranteeSection } from '../_components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'ch' ];

const ChildrenWritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return (
    <>
      {courseCodes.map(c => <CourseJsonLd key={c} courseCode={c} />)}
      <section>
        <div className="container">
          <h1>Writing for Children Course</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image src={CourseBanner} alt="" style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5rem' }} />
          <p>If you enjoy tales of magic and adventure, heart-warming coming-of-age stories, and funny sagas about life as a child or teenager, this is the course for you. Children's writing is a rewarding—and highly lucrative—market. Authors who can create stories that capture the interest and imagination of children and teens are in high demand.</p>
          <p>Our Writing For Children course shows you how to develop and write stories that resonate with this sometimes fickle audience. You'll learn how to engage your reader and create plots, characters, and situations that ring true. You'll explore many different types of children's writing to discover the niche that suits you best. Perhaps you're destined to write the next hit series of fantasy books that both children and adults adore? Or maybe you'd prefer to write short, illustrated books that entertain children while also teaching them how to read? No matter how you'd like to pursue your passion for children's writing, we'll give you the skills you need to succeed.</p>
          <p className="mb-0">You probably still remember the books you read as a child that captivated your attention and stole your heart. If you want to give future generations the same cherished memories, our writing for children program is the best choice for you.</p>
        </div>
      </section>
      <TestimonialWallSection className="bg-light" testimonialIds={[ 'TW-0001', 'TW-0002', 'TW-0003' ]} />
      <CourseOutlineSection items={outlineItems} />
      <GuaranteeSection title="Writing for Children" doubleGuarantee={true} courseCodes={courseCodes} className="bg-light" />
    </>
  );
};

export default ChildrenWritingPage;

const outlineItems = [
  'Marketing Your Ideas',
  'Creating Memorable Characters',
  'Plot Development',
  'Making Speech Ring True',
  'Making Your Reader Laugh',
  'Educational Writing',
  'Working with Words and Pictures',
  'Tales of Horror',
  'Suspense and Mystery',
  'Children\'s Radio and Television',
  'Selling Your Work',
  'Handling Ethical Issues',
  'Interacting with Publishers',
  'The Editing Process',
  'Children\'s Writer\'s First-Aid Kit',
];
