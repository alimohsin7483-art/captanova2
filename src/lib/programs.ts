export interface Module {
  title: string;
  description: string;
}

export interface Program {
  id: string;
  slug: string;
  category: 'core' | 'mini';
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  duration: string;
  format: string;
  thumbnail: string;
  benefits: string[];
  modules: Module[];
  badge?: string;
  featured?: boolean;
}

export const programs: Program[] = [
  {
    id: 'fpb_001',
    slug: 'full-potential-blueprint',
    category: 'core',
    name: 'Full Potential Blueprint',
    tagline: 'The master system to unlock every dimension of your life',
    description:
      'The Full Potential Blueprint is our flagship 8-week immersive program designed to systematically deconstruct your mental limits, rebuild your identity at the core level, and install the high-performance habits that elite achievers live by. This is not motivation — this is rewiring.',
    price: 14999,
    originalPrice: 29999,
    currency: 'INR',
    duration: '8 Weeks',
    format: 'Video + Workbooks + Live Q&A',
    thumbnail: '/programs/fpb.jpg',
    featured: true,
    badge: 'Most Popular',
    benefits: [
      'Reprogram your subconscious beliefs in 21 days',
      'Build unshakeable confidence that compounds daily',
      'Master emotional regulation under pressure',
      'Install elite morning & evening systems',
      'Develop a vision so clear it becomes inevitable',
      'Create high-performance relationships and boundaries',
      'Unlock discipline without willpower dependency',
      'Access exclusive alumni community for life',
    ],
    modules: [
      {
        title: 'Module 1: Identity Architecture',
        description:
          'Dismantle the outdated self-concept that is silently sabotaging your results. Rebuild a new identity from first principles using proven neuroplasticity techniques.',
      },
      {
        title: 'Module 2: The Belief Audit',
        description:
          'Uncover the hidden limiting beliefs operating in your unconscious mind. Map, challenge, and replace each one with an empowering belief that serves your highest vision.',
      },
      {
        title: 'Module 3: Vision Crystallization',
        description:
          'Create a 3D vision of your ideal life so vivid and specific that your nervous system treats it as real. Build your personal north star that guides every decision.',
      },
      {
        title: 'Module 4: The Discipline Engine',
        description:
          'Stop relying on motivation — it is unreliable. Install systems and environments that make discipline automatic, regardless of your emotional state.',
      },
      {
        title: 'Module 5: Emotional Mastery',
        description:
          'Develop the ability to access peak states on demand, process difficult emotions without suppression, and maintain calm clarity under pressure.',
      },
      {
        title: 'Module 6: High-Performance Relationships',
        description:
          'Audit your social environment, set elite-level boundaries, and learn to attract and maintain relationships that elevate your growth.',
      },
      {
        title: 'Module 7: The Energy Blueprint',
        description:
          'Optimize your physical energy through sleep, nutrition, movement, and recovery — because your mindset can only go as high as your energy allows.',
      },
      {
        title: 'Module 8: The Compounding Life',
        description:
          'Synthesize all systems into a compounding daily framework. Learn how to maintain momentum, track progress, and continuously upgrade your version.',
      },
    ],
  },
  {
    id: 'mds_001',
    slug: 'mindset-domination-system',
    category: 'core',
    name: 'Mindset Domination System',
    tagline: 'Train your mind like a weapon. Dominate every arena of life.',
    description:
      'The Mindset Domination System is a 6-week intensive program for high-achievers who want to operate at an elite mental level. Built on cognitive performance science, sports psychology, and stoic philosophy — this program is for those who are ready to stop playing small.',
    price: 9999,
    originalPrice: 19999,
    currency: 'INR',
    duration: '6 Weeks',
    format: 'Video + Daily Practices + Community',
    thumbnail: '/programs/mds.jpg',
    badge: 'New',
    benefits: [
      'Develop an unbreakable mental foundation',
      'Eliminate self-doubt and imposter syndrome permanently',
      'Master the art of focused execution under chaos',
      'Build a bulletproof morning mental ritual',
      'Learn performance psychology used by world champions',
      'Cultivate radical presence and eliminate anxiety',
      'Develop iron-will decision making',
      '30-day integration support post-program',
    ],
    modules: [
      {
        title: 'Module 1: The Warrior Mindset Foundation',
        description:
          'Understand what separates the top 1% mentally. Build the philosophical base of an elite performer — stoic, focused, decisive, and unshakeable.',
      },
      {
        title: 'Module 2: Conquering the Inner Critic',
        description:
          'Identify the voice that holds you back. Use proven CBT and ACT techniques to neutralize negative self-talk and transform it into fuel.',
      },
      {
        title: 'Module 3: Focus & Deep Work Architecture',
        description:
          'Train your attention like a muscle. Build systems for deep, distraction-free work that produces elite-level output in a distracted world.',
      },
      {
        title: 'Module 4: The Pressure Protocol',
        description:
          'Learn how to perform your absolute best when the stakes are highest. Understand the neuroscience of pressure and install protocols that flip it to power.',
      },
      {
        title: 'Module 5: Radical Ownership',
        description:
          'Own every area of your life completely. Eliminate the victim mindset, build radical accountability, and understand that your results are entirely yours to create.',
      },
      {
        title: 'Module 6: Sustaining Domination',
        description:
          'Install the long-game systems to maintain peak mental performance for life. Build your personal performance review cycle and quarterly vision reset.',
      },
    ],
  },
  {
    id: 'mf_001',
    slug: 'clarity-code',
    category: 'mini',
    name: 'The Clarity Code',
    tagline: 'From overwhelmed to crystal-clear in 7 days',
    description:
      'A focused 7-day sprint program to cut through mental fog, define your priorities with precision, and enter every week with unstoppable clarity and direction.',
    price: 1999,
    originalPrice: 3999,
    currency: 'INR',
    duration: '7 Days',
    format: 'Self-Paced Video',
    thumbnail: '/programs/clarity.jpg',
    benefits: [
      '7 focused daily video lessons',
      'Clarity mapping workbook',
      'Priority matrix template',
      'Weekly planning system',
    ],
    modules: [
      { title: 'Day 1: Diagnosing Your Fog', description: 'Understand exactly why you feel unclear and overwhelmed. Map your mental load.' },
      { title: 'Day 2: Your Core Values', description: 'Extract the 3-5 values that must guide every major decision you make.' },
      { title: 'Day 3: The Priority Matrix', description: 'Learn Eisenhower 2.0 — an upgraded decision-making matrix for modern life.' },
      { title: 'Day 4: The 90-Day Vision', description: 'Set a 90-day focus that aligns your daily actions with your bigger vision.' },
      { title: 'Day 5: Eliminating Decision Fatigue', description: 'Design defaults and systems that reduce the cognitive load of daily decisions.' },
      { title: 'Day 6: The Weekly Planning Ritual', description: 'Install a 30-minute Sunday ritual that keeps you in clarity mode all week.' },
      { title: 'Day 7: Your Clarity Dashboard', description: 'Build your personal one-page life dashboard to maintain clarity ongoing.' },
    ],
  },
  {
    id: 'mf_002',
    slug: 'confidence-accelerator',
    category: 'mini',
    name: 'Confidence Accelerator',
    tagline: 'Build real, unshakeable confidence in 14 days',
    description:
      'A 14-day intensive mini-program that rewires your confidence from the inside out — using psychology, daily challenges, and mindset reprogramming techniques.',
    price: 2499,
    originalPrice: 4999,
    currency: 'INR',
    duration: '14 Days',
    format: 'Self-Paced Video + Challenges',
    thumbnail: '/programs/confidence.jpg',
    benefits: [
      '14 daily video lessons',
      'Daily confidence challenge cards',
      'Affirmation architecture toolkit',
      'Social confidence blueprint',
    ],
    modules: [
      { title: 'Week 1: The Root of Real Confidence', description: 'Understand what confidence actually is (and what it is not). Start building from the inside.' },
      { title: 'Week 2: Confidence in Action', description: 'Daily challenges that expand your comfort zone and prove your competence to yourself.' },
    ],
  },
  {
    id: 'mf_003',
    slug: 'morning-dominance',
    category: 'mini',
    name: 'Morning Dominance',
    tagline: 'Win the morning. Win the day. Win your life.',
    description:
      'A complete 5-day blueprint to design and lock in a morning routine that sets the tone for peak performance, mental clarity, and unstoppable momentum.',
    price: 999,
    originalPrice: 1999,
    currency: 'INR',
    duration: '5 Days',
    format: 'Self-Paced Video',
    thumbnail: '/programs/morning.jpg',
    benefits: [
      '5 focused video modules',
      'Morning ritual design workbook',
      'Elite habit stack templates',
      'Instant access forever',
    ],
    modules: [
      { title: 'Day 1: Why Mornings Matter', description: 'The neuroscience of morning performance and why the first 90 minutes define your entire day.' },
      { title: 'Day 2: Designing Your Ideal Morning', description: 'Build a custom morning ritual based on your goals, lifestyle, and chronotype.' },
      { title: 'Day 3: The Physical Foundation', description: 'Movement, hydration, and nutrition protocols to ignite your energy for the day.' },
      { title: 'Day 4: Mental Priming Techniques', description: 'Visualization, journaling, and breathwork for peak mental states every morning.' },
      { title: 'Day 5: Locking It In', description: 'Habit stacking, accountability systems, and making your morning routine automatic.' },
    ],
  },
];

export const getProgramBySlug = (slug: string) => programs.find((p) => p.slug === slug);
export const getCorePrograms = () => programs.filter((p) => p.category === 'core');
export const getMiniPrograms = () => programs.filter((p) => p.category === 'mini');
