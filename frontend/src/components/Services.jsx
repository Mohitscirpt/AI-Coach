import { FileText, User, Target, BookOpen, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: () => <FileText className="h-5 w-5" />,
    title: 'Resume & ATS Optimize',
  },
  {
    icon: () => <User className="h-5 w-5" />,
    title: 'Cover Letter',
  },
  {
    icon: () => <Target className="h-5 w-5" />,
    title: 'Skill Gap',
  },
  {
    icon: () => <BookOpen className="h-5 w-5" />,
    title: 'Career Guidance',
  },
  {
    icon: () => <MessageSquare className="h-5 w-5" />,
    title: 'Interview Preparation',
  }
];

const Services = () => (
  <section className="services-section">
    <style>
      {`
        .services-section {
          background: #191820;
          color: #fff;
          padding: 3rem 0;
        }
        .services-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .services-header {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
          font-weight: bold;
        }
        .services-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        .service-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          background: transpert;
          padding: 0.7rem 1.2rem;
          border-radius: 9999px;
          font-size: 1rem;
          font-weight: 500;
          color: #b3b8c5;
          cursor: pointer;
          transition: background 0.2s;
        }
        .service-item:hover {
          background: #718096;
        }
        .service-icon-bg {
          background: #23232a;
          border-radius: 6px;
          padding: 0.35rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
        }
        .service-icon-bg svg {
          color: #7f9cf5;
        }
        .services-divider {
          border: none;
          border-top: 1px solid #23232a;
          margin: 2rem 0 0.5rem 0;
        }
        @media (max-width: 700px) {
          .services-list {
            flex-direction: column;
            gap: 1.2rem;
            align-items: flex-start;
          }
        }
      `}
    </style>
    <div className="services-container">
      <div className="services-header">Resume & ATS Optimize</div>
      <div className="services-list">
        {services.map((service, idx) => (
          <div key={idx} className="service-item">
            <span className="service-icon-bg">{service.icon()}</span>
            <span>{service.title}</span>
          </div>
        ))}
      </div>
      <hr className="services-divider" />
    </div>
  </section>
);

export default Services;