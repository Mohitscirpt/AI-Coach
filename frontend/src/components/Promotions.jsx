import { Gauge, MailOpen, Trophy, ChevronRight } from 'lucide-react';

const styles = {
  section: {
    background: '#18181b',
    color: '#fff',
    padding: '3rem 0'
  },
  container: {
    maxWidth: '60rem',
    margin: '0 auto',
    padding: '0 1rem'
  },
  promotionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem'
  },
  promotionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem',
    background: '#232326',
    borderRadius: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  promotionItemHover: {
    background: '#27272a'
  },
  icon: {
    flexShrink: 0,
    color: '#d1d5db',
    background: '#18181b',
    borderRadius: '0.75rem',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '4.5rem',
    height: '4.5rem'
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 500,
    marginBottom: '0.5rem'
  },
  description: {
    color: '#e5e7eb',
    fontSize: '1rem',
    lineHeight: 1.5
  },
  chevron: {
    flexShrink: 0,
    color: '#a1a1aa',
    marginLeft: '1rem'
  }
};

const promotions = [
  {
    icon: <Gauge size={56} />,
    description: 'Scan your resume for ATS compatibility, keyword match, and formatting. Get instant AI feedback to improve and stand out.'
  },
  {
    icon: <MailOpen size={56} />,
    description: 'Generate a personalized cover letter from your resume and job description. Save time and apply with confidence.'
  },
  {
    icon: <Trophy size={56} />,
    description: 'Practice with AI-powered mock interviews tailored to your role. Get instant feedback and boost your confidence.'
  }
];

const Promotions = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.promotionList}>
          {promotions.map((promotion, index) => (
            <div
              key={index}
              style={styles.promotionItem}
              onMouseEnter={e => e.currentTarget.style.background = styles.promotionItemHover.background}
              onMouseLeave={e => e.currentTarget.style.background = styles.promotionItem.background}
            >
              <div style={styles.icon}>
                {promotion.icon}
              </div>
              <div style={{ flex: 1 }}>
                <p style={styles.description}>{promotion.description}</p>
              </div>
              <div style={styles.chevron}>
                <ChevronRight size={28} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;