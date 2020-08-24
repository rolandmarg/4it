import Vacancies from '../components/Vacancies';
import Layout from '../components/Layout';
import Header from '../components/Header';
import vacancyData from '../data/vacancies';

export async function getStaticProps() {
  return {
    props: { vacancies: vacancyData },
  };
}

export default function VacanciesPage({ vacancies }) {
  return (
    <Layout>
      <Header />
      <Vacancies data={vacancies} />
    </Layout>
  );
}
