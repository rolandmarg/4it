import { useState } from 'react';
import Vacancy from './Vacancy';
import VacancyTags from './VacancyTags';

export default function Vacancies({ data }) {
  const initialVacancies = data.map((vacancy) => {
    const tags = [...new Set(vacancy.tags)];
    const firstSpace = vacancy.description?.indexOf(' ', 45);
    const excerpt =
      firstSpace === -1
        ? vacancy.description
        : vacancy.description?.substr(0, firstSpace);

    return { ...vacancy, tags, excerpt };
  });

  const [vacancies, setVacancies] = useState(initialVacancies);

  const tags = initialVacancies.reduce((accumulator, vacancy) => {
    accumulator = accumulator.concat(vacancy.tags);

    return accumulator;
  }, []);

  const onSelectedTagsChange = (selectedTags) => {
    setVacancies(() => {
      if (selectedTags.length === 0) {
        return initialVacancies;
      }

      const newVacancies = initialVacancies.filter((vacancy) => {
        return selectedTags.some((v) => {
          return vacancy.tags.indexOf(v) != -1;
        });
      });
      return newVacancies;
    });
  };

  return (
    <div id='vacancies' className='bg-teal-200 p-2 pt-24'>
      <VacancyTags tags={tags} onSelectedTagsChange={onSelectedTagsChange} />
      <div className='flex flex-col mt-8 space-y-4'>
        {vacancies.map((v, index) => {
          return <Vacancy key={index} data={v} />;
        })}
      </div>
    </div>
  );
}
