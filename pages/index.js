import Layout from '../components/Layout';
import Landing from '../components/Landing';
import Header from '../components/Header';
import testimonialData from '../data/testimonials';
import vacancyData from '../data/vacancies';

export async function getStaticProps() {
  return {
    props: { testimonials: testimonialData, vacancies: vacancyData },
  };
}

export default function IndexPage({ testimonials, vacancies }) {
  return (
    <Layout>
      <Header />
      <Landing testimonials={testimonials} vacancies={vacancies} />
    </Layout>
  );
}
