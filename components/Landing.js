import About from './About';
import Testimonials from './Testimonials';

export default function Landing({ testimonials }) {
  return (
    <main>
      <About />
      <Testimonials data={testimonials} />
    </main>
  );
}
