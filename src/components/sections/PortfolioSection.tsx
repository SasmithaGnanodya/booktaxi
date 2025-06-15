
import Section from '@/components/ui/Section';
import PortfolioCard from '@/components/PortfolioCard';
import { Brain, Code2, DatabaseZap, Smartphone, ScanFace, Bitcoin, LineChart, HeartPulse, PenTool, ScanText, Microscope, LayoutGrid, Award, Cpu, Scissors, TrendingUp, BedDouble, CarFront } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

const portfolioItems = [
  {
    title: 'Hotel Siyathma - Online Booking & Showcase',
    description: "Developed a responsive and user-friendly website for Hotel Siyathma, featuring online booking capabilities, room showcases, and local attraction information to enhance guest experience and drive direct reservations.",
    tags: ['Web Development', 'Booking Engine', 'Hospitality', 'UI/UX Design', 'Responsive Design'],
    Icon: BedDouble,
    projectUrl: 'https://hotelsiyathma.com/',
    delay: 0,
  },
  {
    title: 'DermCare - AI-Powered Skincare Assistant (v0)',
    description: "Initial version of an AI-driven skincare assistant web application (v0-derm-care.vercel.app). Provides preliminary skin analysis and product recommendations based on user input. (Conceptual v0 project).",
    tags: ['AI', 'Web App', 'Skincare', 'UI Concept', 'Frontend', 'Vercel'],
    Icon: ScanFace,
    projectUrl: 'https://v0-derm-care.vercel.app/',
    delay: 1,
  },
  {
    title: 'FashionFlow - Future Trends Prediction Platform',
    description: "A sophisticated website that utilizes machine learning to predict future market trends in the fashion industry, providing valuable insights for designers and retailers.",
    tags: ['Machine Learning', 'Predictive Analytics', 'Fashion Tech', 'Data Visualization', 'Web App'],
    Icon: TrendingUp,
    projectUrl: 'https://market-prediction.vercel.app/',
    delay: 2,
  },
  {
    title: 'BookSriLankaTaxi - Online Booking Site',
    description: "Developed a comprehensive online booking platform for BookSriLankaTaxi, enabling users to easily reserve taxi services across Sri Lanka with a streamlined user experience.",
    tags: ['Web Development', 'Booking Engine', 'Travel & Tourism', 'UI/UX Design', 'PHP'],
    Icon: CarFront,
    projectUrl: 'https://www.booksrilankataxi.com/www.booksrilankataxi.com/index.html',
    delay: 3,
  },
  {
    title: 'Advanced Skin Disease Classification AI (Ongoing)',
    description: "Currently developing a deep learning model for accurate classification of various skin diseases from images, aiming to assist dermatologists and improve diagnostic speed.",
    tags: ['Deep Learning', 'Computer Vision', 'Healthcare AI', 'Medical Imaging', 'Ongoing'],
    Icon: Microscope,
    delay: 4,
  },
  {
    title: 'Diverse Web Development Projects (7+ Ongoing)',
    description: "Actively developing over seven unique website projects for various clients, spanning e-commerce, corporate portals, and custom web applications, focusing on modern design and functionality.",
    tags: ['Web Development', 'UI/UX Design', 'E-commerce', 'SaaS', 'Ongoing'],
    Icon: LayoutGrid,
    delay: 5,
  },
  {
    title: 'Challenge Coin Design Automation using n8n',
    description: "Automating unique challenge coin design generation using n8n workflows, integrating with APIs based on customer inputs and templates to streamline custom merchandise creation.",
    tags: ['n8n', 'Automation', 'API Integration', 'Custom Design', 'E-commerce Tool', 'Ongoing'],
    Icon: Award,
    delay: 6,
  },
  {
    title: 'AI Haircut Style Advisor (Ongoing)',
    description: "Developing an innovative AI model to suggest suitable haircut styles for salon clients by analyzing facial features and preferences, enhancing the consultation process.",
    tags: ['AI', 'Computer Vision', 'Personalization', 'Beauty Tech', 'Ongoing'],
    Icon: Scissors,
    delay: 7,
  },
];

export default function PortfolioSection() {
  return (
    <Section id="portfolio" className="bg-transparent">
      <ScrollAnimationWrapper>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-foreground text-shadow-md">
          Our Signature <span className="text-accent">Creations</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto leading-relaxed text-shadow">
          Explore a galaxy of our projects, each a testament to our prowess in transforming visionary ideas into powerful, mind-bending digital solutions.
        </p>
      </ScrollAnimationWrapper>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioItems.map((item) => (
          <ScrollAnimationWrapper key={item.title} style={{ transitionDelay: `${item.delay * 100}ms` }}>
            <PortfolioCard {...item} />
          </ScrollAnimationWrapper>
        ))}
      </div>
    </Section>
  );
}

