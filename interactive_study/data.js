/* ========================================
   LAW EXAM DATA - JANUARY 2026
   Based on Professor's Exam Issues
   ======================================== */

// ========================================
// TOPICS STRUCTURE
// ========================================

const TOPICS = {
    system_of_law: {
        name: 'System of Law',
        icon: '⚖️',
        color: '#4F46E5',
        description: 'Legal systems, interpretation methods, and fundamental principles'
    },
    copyright: {
        name: 'Copyright Law',
        icon: '©️',
        color: '#7C3AED',
        description: 'Protection of creative works, moral and economic rights'
    },
    industrial_property: {
        name: 'Industrial Property',
        icon: '⚙️',
        color: '#2563EB',
        description: 'Patents, trademarks, designs, and geographical indications'
    },
    cartels: {
        name: 'Competition Law - Cartels',
        icon: '🤝',
        color: '#DC2626',
        description: 'Agreements restricting competition under Article 101 TFEU'
    },
    dominant_position: {
        name: 'Abuse of Dominant Position',
        icon: '👑',
        color: '#EA580C',
        description: 'Market dominance and its abuse under Article 102 TFEU'
    },
    unfair_competition: {
        name: 'Unfair Competition & Influencers',
        icon: '📱',
        color: '#DB2777',
        description: 'Advertising regulations, influencers, and unfair practices'
    },
    ai_act: {
        name: 'AI Act',
        icon: '🤖',
        color: '#059669',
        description: 'EU regulation of artificial intelligence systems'
    },
    dsa: {
        name: 'Digital Services Act',
        icon: '🌐',
        color: '#0891B2',
        description: 'Regulation of online platforms and digital services'
    },
    company_law: {
        name: 'Company Law',
        icon: '🏢',
        color: '#7C2D12',
        description: 'Business entities, governance, and corporate structures'
    },
    uber_case: {
        name: 'The Case of Uber',
        icon: '🚗',
        color: '#4338CA',
        description: 'Employment vs independent contractor status'
    },
    starting_business: {
        name: 'Starting Business',
        icon: '🚀',
        color: '#15803D',
        description: 'Registration, permits, and business authorization'
    },
    civil_law: {
        name: 'Civil Law',
        icon: '📜',
        color: '#6B7280',
        description: 'Contracts, property rights, and civil obligations'
    }
};

// ========================================
// FLASHCARDS - BASED ON EXAM QUESTIONS
// ========================================

const FLASHCARDS = [
    // SYSTEM OF LAW
    {
        id: 'sol_1',
        topic: 'system_of_law',
        question: 'In which legal system do decisions made by judges have the value of law?',
        answer: '<strong>The ANGLO-SAXON (Common Law) system</strong> - through the doctrine of precedent (<em>stare decisis</em>).<br><br>In the Continental (Civil Law) system, judges apply the law but their decisions do NOT have the force of law.'
    },
    {
        id: 'sol_2',
        topic: 'system_of_law',
        question: 'What is the opposite of positive law in constitutional interpretation?',
        answer: '<strong>The LIVING CONSTITUTION concept</strong><br><br>It allows interpreters to derive meaning from CURRENT circumstances, rather than the original intent of lawmakers (originalism).'
    },
    {
        id: 'sol_3',
        topic: 'system_of_law',
        question: 'What is the difference between a MONIST and DUALIST legal system?',
        answer: '<strong>MONIST:</strong> International and domestic law form ONE system; international law automatically applies<br><br><strong>DUALIST:</strong> Two SEPARATE systems; international law must be transformed into domestic law'
    },
    {
        id: 'sol_4',
        topic: 'system_of_law',
        question: 'What is the status of international agreements in the Polish Constitution?',
        answer: 'International agreements ratified with parliamentary consent have <strong>PRIORITY BEFORE STATUTES</strong> (acts of Parliament).<br><br>The Constitution itself remains supreme.'
    },
    {
        id: 'sol_5',
        topic: 'system_of_law',
        question: 'Which branch of law was influenced by French law - Contract law or Administrative law?',
        answer: '<strong>CONTRACT LAW (Private Law)</strong><br><br>This includes:<br>• Civil Code structure<br>• Contract formation rules<br>• Property law concepts'
    },
    {
        id: 'sol_6',
        topic: 'system_of_law',
        question: 'What does "the law does not act retroactively" mean?',
        answer: '<strong>Lex retro non agit</strong><br><br>A person cannot be punished for an act committed BEFORE the law was enacted. New laws apply to future conduct, not past conduct.'
    },
    {
        id: 'sol_7',
        topic: 'system_of_law',
        question: 'What is the difference between a LEGAL and FACTUAL presumption?',
        answer: '<strong>LEGAL presumption:</strong> Required by LAW; shifts burden of proof (e.g., paternity within 300 days of divorce)<br><br><strong>FACTUAL presumption:</strong> Based on LOGIC and evidence (e.g., "smoking gun")<br><br>Both can be rebutted by proof to the contrary.'
    },
    {
        id: 'sol_8',
        topic: 'system_of_law',
        question: 'Which interpretation method is allowed in Civil Law vs Administrative Law?',
        answer: '<strong>Civil Law:</strong> EXPANSIVE interpretation allowed (equality of parties)<br><br><strong>Administrative Law:</strong> Only RESTRICTIVE interpretation (state vs individual)'
    },

    // COPYRIGHT LAW
    {
        id: 'copy_1',
        topic: 'copyright',
        question: 'What does it mean that a work is "established"?',
        answer: 'A work is protected since it takes a <strong>RECOGNIZABLE FORM</strong> - even if incomplete.<br><br><strong>No formalities required.</strong><br><br>Example: An unfinished thesis with identifiable creative content is already protected.'
    },
    {
        id: 'copy_2',
        topic: 'copyright',
        question: 'What does the "exhaustion of rights" mean?',
        answer: 'A copyright owner\'s right to control copies <strong>EXHAUSTS on the FIRST SALE</strong> with their consent.<br><br>After first sale, the owner cannot prevent resale of legitimately purchased items.'
    },
    {
        id: 'copy_3',
        topic: 'copyright',
        question: 'What is the duration of MORAL rights vs ECONOMIC rights?',
        answer: '<strong>MORAL rights:</strong> NO TIME LIMIT (perpetual)<br><br><strong>ECONOMIC rights:</strong> Life of author + 70 years'
    },
    {
        id: 'copy_4',
        topic: 'copyright',
        question: 'Which copyright rights are NOT transferable?',
        answer: '<strong>MORAL RIGHTS are INALIENABLE</strong> - cannot be sold, given away, or transferred.<br><br>They include:<br>• Right to authorship<br>• Integrity of work<br>• First publication'
    },
    {
        id: 'copy_5',
        topic: 'copyright',
        question: 'How are Xerox operators affected by copyright law?',
        answer: 'Xerox operators must pay fees <strong>up to 3% OF PROCEEDS</strong> to collective management organizations.<br><br>Proceeds distributed <strong>50/50 between authors and publishers</strong>.'
    },
    {
        id: 'copy_6',
        topic: 'copyright',
        question: 'If a work is in the public domain, are you free to use it WITHOUT indicating the source?',
        answer: '<strong>NO! You must still CREDIT THE AUTHOR.</strong><br><br>Moral rights (including attribution) persist even after economic rights expire.'
    },
    {
        id: 'copy_7',
        topic: 'copyright',
        question: 'Whose consent is needed to publish a letter?',
        answer: 'Consent needed from:<br><br>1. <strong>The AUTHOR</strong> (writer) - for copyright<br>2. <strong>The RECIPIENT</strong> - for privacy rights<br>3. <strong>Heirs</strong> if author is deceased'
    },

    // INDUSTRIAL PROPERTY
    {
        id: 'ind_1',
        topic: 'industrial_property',
        question: 'How long does PATENT protection last?',
        answer: '<strong>20 YEARS from filing date</strong>'
    },
    {
        id: 'ind_2',
        topic: 'industrial_property',
        question: 'How long does TRADEMARK protection last?',
        answer: '<strong>10 YEARS, renewable INDEFINITELY</strong>'
    },
    {
        id: 'ind_3',
        topic: 'industrial_property',
        question: 'How long does INDUSTRIAL DESIGN protection last?',
        answer: '<strong>Up to 25 YEARS</strong> (5-year terms, renewable)'
    },
    {
        id: 'ind_4',
        topic: 'industrial_property',
        question: 'How long does UTILITY MODEL protection last?',
        answer: '<strong>10 YEARS from filing date</strong>'
    },
    {
        id: 'ind_5',
        topic: 'industrial_property',
        question: 'Can a Spanish producer of sparkling wine use the name "Champagne"?',
        answer: '<strong>NO</strong> - Champagne is a <strong>PROTECTED GEOGRAPHICAL INDICATION</strong> that can only be used for wine from the Champagne region of France.<br><br>Spanish sparkling wine must use other names (e.g., "Cava").'
    },
    {
        id: 'ind_6',
        topic: 'industrial_property',
        question: 'To be "new," a patent must not be state of the art to whom?',
        answer: 'To an <strong>EXPERT (person skilled in the art)</strong> - NOT an ordinary person.<br><br>The standard is what would be obvious to someone with technical expertise.'
    },
    {
        id: 'ind_7',
        topic: 'industrial_property',
        question: 'What is an SPC (Supplementary Protection Certificate)?',
        answer: 'An IP right that <strong>EXTENDS patent duration</strong> for:<br>• <strong>Pharmaceutical products</strong><br>• <strong>Plant protection products</strong><br><br>Compensates for time lost during regulatory approval. Can extend up to <strong>5 additional years</strong>.'
    },
    {
        id: 'ind_8',
        topic: 'industrial_property',
        question: 'What can be done about patent abuse?',
        answer: '1. <strong>COMPULSORY LICENSING</strong> - government authorizes third parties to use patent<br>2. <strong>ANTITRUST ENFORCEMENT</strong> - competition authorities intervene<br>3. <strong>PATENT REVOCATION</strong> in extreme cases'
    },

    // CARTELS
    {
        id: 'cart_1',
        topic: 'cartels',
        question: 'What is a CARTEL?',
        answer: 'An <strong>AGREEMENT between undertakings</strong>, decisions by associations, or <strong>CONCERTED PRACTICES</strong> that have as their object or effect the prevention, restriction, or distortion of <strong>COMPETITION</strong>.<br><br>Legal basis: Article 101 TFEU'
    },
    {
        id: 'cart_2',
        topic: 'cartels',
        question: 'Can you enter into a cartel WITHOUT saying or writing anything?',
        answer: '<strong>YES!</strong> Through:<br>• Concerted practices<br>• Tacit collusion<br>• Information exchange<br>• Algorithmic coordination<br><br><strong>ETURAS case:</strong> Coordination through booking system without direct communication'
    },
    {
        id: 'cart_3',
        topic: 'cartels',
        question: 'What is the difference between a CARTEL and PARALLEL BEHAVIOR?',
        answer: '<strong>CARTEL:</strong> Coordinated action through agreement - <span style="color: red;">PROHIBITED</span><br><br><strong>PARALLEL BEHAVIOR:</strong> Independent decisions leading to similar outcomes (due to market conditions) - <span style="color: green;">LEGAL</span><br><br>(Wood Pulp II case, 1993)'
    },
    {
        id: 'cart_4',
        topic: 'cartels',
        question: 'When is a SELECTIVE DISTRIBUTION agreement NOT a cartel?',
        answer: 'When:<br>1. Goods need specialized service (electronics, watches)<br>2. Luxury goods requiring brand protection<br>3. Criteria are <strong>OPEN, TRANSPARENT, NON-DISCRIMINATORY</strong><br>4. Restrictions necessary to maintain prestige (L\'Oreal case)'
    },
    {
        id: 'cart_5',
        topic: 'cartels',
        question: 'What is the DE MINIMIS exemption for cartels?',
        answer: '<strong>HORIZONTAL cartels:</strong> < 5% market share<br><strong>VERTICAL agreements:</strong> < 10% market share<br><br>⚠️ Does NOT apply to price-fixing or market-sharing!'
    },

    // DOMINANT POSITION
    {
        id: 'dom_1',
        topic: 'dominant_position',
        question: 'Is HAVING a dominant position prohibited?',
        answer: '<strong>NO!</strong> Having a dominant position is NOT prohibited.<br><br>Only the <strong>ABUSE</strong> of it is prohibited (Article 102 TFEU).'
    },
    {
        id: 'dom_2',
        topic: 'dominant_position',
        question: 'Does having 40% market share give CERTAINTY or only a PRESUMPTION of dominance?',
        answer: 'Only a <strong>PRESUMPTION of dominance</strong> - not certainty!<br><br>Actual research of market forces must be conducted.'
    },
    {
        id: 'dom_3',
        topic: 'dominant_position',
        question: 'What are the THREE ELEMENTS of the relevant market?',
        answer: '1. <strong>PRODUCT market</strong> (substitutable products)<br>2. <strong>TERRITORIAL/GEOGRAPHIC market</strong> (homogeneous competition conditions)<br>3. <strong>TIME FRAMEWORK</strong> (seasons, market fluctuations)'
    },
    {
        id: 'dom_4',
        topic: 'dominant_position',
        question: 'Can a SMALL company be dominant?',
        answer: '<strong>YES!</strong> In a niche or specialized market where it has significant market power, even a small company can be dominant.'
    },
    {
        id: 'dom_5',
        topic: 'dominant_position',
        question: 'Why are LOYALTY REBATES prohibited as abuse of dominant position?',
        answer: '<strong>British Airways case:</strong><br>• Create artificial loyalty not based on product quality<br>• <strong>FORECLOSE</strong> competitors from the market<br>• Competitors must offer much higher commissions<br>• Prevent customers from switching'
    },
    {
        id: 'dom_6',
        topic: 'dominant_position',
        question: 'How did GOOGLE abuse its dominant position in comparative shopping?',
        answer: '1. <strong>SELF-PREFERENCING</strong> - promoting own Google Shopping<br>2. <strong>DEMOTING competitors</strong> in search results<br>3. <strong>LEVERAGING dominance</strong> from search to shopping<br><br>Result: Reduced consumer choice, stifled innovation'
    },
    {
        id: 'dom_7',
        topic: 'dominant_position',
        question: 'Give an example of an ESSENTIAL FACILITY',
        answer: '• Ports and harbors<br>• Railway networks<br>• Telecommunications infrastructure<br>• Airport slots<br>• Energy distribution networks<br><br><em>(Essential = controlled by dominant company, necessary for competitors, not feasible to duplicate)</em>'
    },
    {
        id: 'dom_8',
        topic: 'dominant_position',
        question: 'Why can MERGERS pose a threat to competition?',
        answer: '• Create or strengthen dominant positions<br>• Reduce number of competitors<br>• Increase market concentration<br>• May lead to higher prices and less innovation'
    },

    // UNFAIR COMPETITION & INFLUENCERS
    {
        id: 'unfair_1',
        topic: 'unfair_competition',
        question: 'What type of prohibited advertising are INFLUENCERS often accused of?',
        answer: '1. <strong>HIDDEN advertising</strong> (crypto-advertising)<br>2. Misleading advertising<br>3. Product placement without disclosure<br>4. Subliminal persuasion<br>5. Improper advertising to children'
    },
    {
        id: 'unfair_2',
        topic: 'unfair_competition',
        question: 'What must INFLUENCERS do to make their activity LEGAL?',
        answer: '1. <strong>CLEAR DISCLOSURE</strong> - mark as advertising/sponsored<br>2. <strong>PROPER TAGGING</strong> - visible, clear language<br>3. Tags at <strong>BEGINNING</strong>, not hidden<br>4. Language of AUDIENCE<br>5. <strong>REGISTER</strong> as entrepreneur<br>6. Comply with competition law'
    },
    {
        id: 'unfair_3',
        topic: 'unfair_competition',
        question: 'What are the CONDITIONS for COMPARATIVE ADVERTISING to be legal?',
        answer: '1. Not misleading<br>2. Fair, verifiable comparison<br>3. Objective comparison of material features<br>4. No market confusion<br>5. No discrediting competitor<br>6. Same geographical designation<br>7. No unfair advantage from competitor\'s reputation<br>8. No imitation claims'
    },
    {
        id: 'unfair_4',
        topic: 'unfair_competition',
        question: 'When is PRODUCT PLACEMENT prohibited?',
        answer: '<strong>Prohibited in:</strong><br>1. NEWS programs (except sports/weather)<br>2. Social and political commentary<br>3. Consumer advice programs<br>4. Religious programs<br>5. <strong>CHILDREN\'S programs</strong>'
    },

    // AI ACT
    {
        id: 'ai_1',
        topic: 'ai_act',
        question: 'When is AI-based BIOMETRICS PROHIBITED?',
        answer: '1. Real-time remote biometric ID in public (with exceptions)<br>2. Facial recognition databases from untargeted scraping<br>3. <strong>Social scoring</strong><br>4. Emotion recognition in <strong>WORKPLACES/SCHOOLS</strong><br>5. Biometric categorization inferring sensitive attributes'
    },
    {
        id: 'ai_2',
        topic: 'ai_act',
        question: 'How is EMOTION READING by AI different in workplace/classroom vs other places?',
        answer: '<strong>Workplace/Classroom:</strong> PROHIBITED (except medical/safety reasons)<br><br><strong>Other places:</strong> HIGH-RISK (allowed with precautions)<br><br>Reason: Power imbalance, risk of coercion, privacy concerns'
    },
    {
        id: 'ai_3',
        topic: 'ai_act',
        question: 'What is a REGULATORY SANDBOX?',
        answer: 'A <strong>CONTROLLED FRAMEWORK</strong> allowing AI providers to:<br>• Develop, train, validate, test AI systems<br>• Operate in real-world conditions<br>• Limited time, with regulatory supervision<br><br><strong>Benefits:</strong> Lower entry barriers, direct regulator feedback, path to authorization'
    },
    {
        id: 'ai_4',
        topic: 'ai_act',
        question: 'Can authorities use AI to predict if someone is a CRIMINAL?',
        answer: '<strong>PROHIBITED</strong> when based SOLELY on profiling or personality traits.<br><br><strong>EXCEPTION:</strong> Can AUGMENT human assessments based on objective, verifiable facts directly linked to criminal activity.'
    },

    // DSA
    {
        id: 'dsa_1',
        topic: 'dsa',
        question: 'What is the PRIMARY PURPOSE of the DSA?',
        answer: 'To contribute to the proper functioning of the <strong>INTERNAL MARKET</strong> for intermediary services by creating a <strong>safe, predictable, trusted online environment</strong> that protects fundamental rights and facilitates innovation.'
    },
    {
        id: 'dsa_2',
        topic: 'dsa',
        question: 'How does the DSA affect the SOCIAL MEDIA industry?',
        answer: '1. Content moderation requirements<br>2. Transparency obligations<br>3. Advertising rules<br>4. Trusted flagger system<br>5. Annual risk assessments<br>6. Compliance officers (large platforms)<br>7. External audits<br>8. Data access for researchers'
    },
    {
        id: 'dsa_3',
        topic: 'dsa',
        question: 'What is the threshold for VLOP (Very Large Online Platform)?',
        answer: '<strong>45 MILLION average monthly active users in the EU</strong>'
    },

    // COMPANY LAW
    {
        id: 'comp_1',
        topic: 'company_law',
        question: 'What are the ATTRIBUTES of business activity?',
        answer: '1. <strong>ORGANIZED</strong> (sign, seat, structure)<br>2. <strong>FOR PROFIT</strong> (potential, not necessarily actual)<br>3. <strong>IN ONE\'S OWN NAME</strong> (independently)<br>4. <strong>CONTINUOUS</strong> (ongoing)'
    },
    {
        id: 'comp_2',
        topic: 'company_law',
        question: 'What is the DIFFERENCE in liability between SOLE PROPRIETORSHIP and JSC?',
        answer: '<strong>Sole Proprietorship:</strong> UNLIMITED liability - owner liable with ALL personal property<br><br><strong>JSC:</strong> LIMITED liability - shareholders liable only up to value of shares'
    },
    {
        id: 'comp_3',
        topic: 'company_law',
        question: 'What are the CLASSES OF SHARES in a JSC?',
        answer: '• <strong>REGISTERED shares</strong> (owner\'s name, can be issued before full payment)<br>• <strong>BEARER shares</strong> (anonymous, must be fully paid first)<br>• <strong>PREFERRED shares</strong> (voting, dividend, or liquidation preferences)<br><br>Only registered shares can be preferred.'
    },
    {
        id: 'comp_4',
        topic: 'company_law',
        question: 'How many MANAGEMENT BOARD members are needed to SIGN A CONTRACT?',
        answer: '<strong>TWO management board members</strong><br>OR<br><strong>ONE MB member + ONE proxy</strong>'
    },
    {
        id: 'comp_5',
        topic: 'company_law',
        question: 'How many MB members needed to RECEIVE a communication?',
        answer: '<strong>ONE management board member is sufficient</strong>'
    },
    {
        id: 'comp_6',
        topic: 'company_law',
        question: 'What are the AUTHORITIES of a Joint-Stock Company?',
        answer: '1. <strong>GENERAL ASSEMBLY</strong> (shareholders) - supreme body<br>2. <strong>MANAGEMENT BOARD</strong> - manages and represents<br>3. <strong>SUPERVISORY BOARD</strong> - oversees management'
    },
    {
        id: 'comp_7',
        topic: 'company_law',
        question: 'Why are SHARES called NEGOTIABLE INSTRUMENTS?',
        answer: 'Because they can be:<br>• <strong>TRADED</strong> (bought, sold)<br>• <strong>PAWNED</strong> (used as collateral)<br>• Serve as <strong>SECURITY</strong> for loans<br>• Transferred by delivery or endorsement'
    },
    {
        id: 'comp_8',
        topic: 'company_law',
        question: 'Can the Supervisory Board INTERFERE in day-to-day business?',
        answer: '<strong>NO</strong> - should NOT interfere.<br><br>If it does:<br>• Exceeds competence<br>• May face liability<br>• Decisions can be challenged<br>• Conflicts with management authority'
    },
    {
        id: 'comp_9',
        topic: 'company_law',
        question: 'Can MINORITY SHAREHOLDERS be expropriated?',
        answer: '<strong>YES</strong>, under conditions:<br>1. Shareholders holding ≥95% of capital<br>2. Must pay FAIR PRICE (expert valuation)<br>3. General assembly resolution required<br>4. Minority can challenge price in court'
    },
    {
        id: 'comp_10',
        topic: 'company_law',
        question: 'How is PROFIT determined in a JSC?',
        answer: '<strong>Per SHARE</strong> - each share represents equal participation in profits.<br><br>More shares = more dividends.'
    },

    // UBER CASE
    {
        id: 'uber_1',
        topic: 'uber_case',
        question: 'What is the difference between EMPLOYMENT and BUSINESS in the Uber case?',
        answer: '<strong>Uber\'s argument:</strong> Drivers are independent "partners"<br><br><strong>Court\'s conclusion:</strong> Drivers are <strong>WORKERS</strong> because:<br>• App-based monitoring<br>• Ratings leading to exclusion<br>• Uber controls pricing<br>• No direct payment from customers'
    },
    {
        id: 'uber_2',
        topic: 'uber_case',
        question: 'What does EU Platform Work Directive 2024/2831 presume?',
        answer: '<strong>LEGAL PRESUMPTION</strong> that platform work relationship is <strong>EMPLOYMENT</strong> where facts indicate direction and control.<br><br>Platform must prove it\'s NOT employment if it wants to rebut.'
    },

    // STARTING BUSINESS
    {
        id: 'start_1',
        topic: 'starting_business',
        question: 'Where are SOLE PROPRIETORS registered?',
        answer: '<strong>CEIDG</strong> (Central Register and Information on Economic Activity)'
    },
    {
        id: 'start_2',
        topic: 'starting_business',
        question: 'Where are COMPANIES (JSC, LLC) registered?',
        answer: '<strong>National Court Register (KRS)</strong>'
    },
    {
        id: 'start_3',
        topic: 'starting_business',
        question: 'What is the difference between PERMISSION and NOTIFICATION procedure?',
        answer: '<strong>PERMISSION:</strong> Authority actively reviews and approves (discretionary powers)<br><br><strong>NOTIFICATION:</strong> Declare compliance; authority can VETO within 14 days; silence = can start'
    },

    // CIVIL LAW
    {
        id: 'civil_1',
        topic: 'civil_law',
        question: 'What is the difference between ENTERPRISE and ENTREPRENEUR?',
        answer: '<strong>ENTREPRENEUR:</strong> The PERSON conducting business (subject)<br><br><strong>ENTERPRISE:</strong> The PROPERTY/ASSETS for business (object)'
    },
    {
        id: 'civil_2',
        topic: 'civil_law',
        question: 'If only PART of a legal act is invalid, what happens?',
        answer: 'Remaining parts are <strong>STILL VALID</strong> if:<br>• Act makes sense without the invalid part<br>• Parties would have concluded without invalid clause<br>• Invalid part is severable'
    },
    {
        id: 'civil_3',
        topic: 'civil_law',
        question: 'What has PRIORITY in contract interpretation?',
        answer: 'The <strong>AIM AND INTENTION of the parties</strong> has PRIORITY over literal wording.'
    },
    {
        id: 'civil_4',
        topic: 'civil_law',
        question: 'What FORM is required for sale of REAL ESTATE?',
        answer: '<strong>NOTARIAL FORM</strong> - must be executed before a notary public.<br><br>Written form is NOT sufficient. Failure = contract is VOID.'
    },
    {
        id: 'civil_5',
        topic: 'civil_law',
        question: 'If goods are DEFECTIVE for the SECOND TIME, can seller offer ANOTHER exchange?',
        answer: '<strong>NO</strong> - After second defect, buyer can:<br>• WITHDRAW from contract (get refund)<br>OR<br>• Demand PRICE REDUCTION<br><br>Seller cannot force endless exchanges.'
    },
    {
        id: 'civil_6',
        topic: 'civil_law',
        question: 'When do TAX CLAIMS expire?',
        answer: '<strong>5 YEARS</strong>'
    },
    {
        id: 'civil_7',
        topic: 'civil_law',
        question: 'When do EMPLOYMENT CLAIMS expire?',
        answer: '<strong>3 YEARS</strong>'
    },
    {
        id: 'civil_8',
        topic: 'civil_law',
        question: 'When can property rights be LAWFULLY violated?',
        answer: 'In situations of <strong>NECESSITY or SELF-DEFENSE</strong><br><br>• Danger to PERSON: Greater interference allowed (human life priority)<br>• Danger to PROPERTY: More limited; proportionality required'
    }
];

// ========================================
// QUIZ QUESTIONS - BASED ON EXAM FORMAT
// ========================================

const QUIZ_QUESTIONS = [
    // SYSTEM OF LAW
    {
        id: 'q_sol_1',
        topic: 'system_of_law',
        question: 'In which legal system do decisions made by judges have the value of law?',
        options: [
            'Continental (Civil Law) system',
            'Anglo-Saxon (Common Law) system',
            'Both systems equally',
            'Neither system'
        ],
        correct: 1,
        explanation: 'In the Anglo-Saxon (Common Law) system, judicial precedent (stare decisis) means judges\' decisions become binding law. In the Continental system, judges apply the law but their decisions do NOT have the force of law.'
    },
    {
        id: 'q_sol_2',
        topic: 'system_of_law',
        question: 'What is the opposite of the concept of positive law in constitutional interpretation?',
        options: [
            'Natural law',
            'Living constitution',
            'Originalism',
            'Statutory law'
        ],
        correct: 1,
        explanation: 'Living constitution allows interpreting law based on current circumstances, opposite to strict positive law interpretation (originalism).'
    },
    {
        id: 'q_sol_3',
        topic: 'system_of_law',
        question: 'In a MONIST legal system:',
        options: [
            'International and domestic law are completely separate',
            'International law automatically becomes part of domestic law',
            'Domestic law always prevails over international law',
            'Only constitutional courts can apply international law'
        ],
        correct: 1,
        explanation: 'In a monist system, international and domestic law form ONE legal system, and international law automatically applies domestically.'
    },
    {
        id: 'q_sol_4',
        topic: 'system_of_law',
        question: 'In the Polish Constitution, international agreements ratified with parliamentary consent:',
        options: [
            'Have no effect on domestic law',
            'Are equal to statutes',
            'Have priority before statutes',
            'Can override the Constitution'
        ],
        correct: 2,
        explanation: 'These international agreements have PRIORITY BEFORE STATUTES (acts of Parliament). The Constitution itself remains supreme.'
    },
    {
        id: 'q_sol_5',
        topic: 'system_of_law',
        question: 'Which branch of law was influenced by French law in Poland?',
        options: [
            'Administrative law (public law)',
            'Contract law (private law)',
            'Criminal law',
            'Constitutional law'
        ],
        correct: 1,
        explanation: 'French law influenced CONTRACT LAW (Private Law) in Poland, including Civil Code structure, contract formation rules, and property law concepts.'
    },
    {
        id: 'q_sol_6',
        topic: 'system_of_law',
        question: 'The principle "Lex retro non agit" means:',
        options: [
            'Higher law wins over lower law',
            'Later law wins over earlier law',
            'Law does not act retroactively',
            'Specific law prevails over general law'
        ],
        correct: 2,
        explanation: '"The law does not act retroactively" - A person cannot be punished for an act committed BEFORE the law was enacted.'
    },
    {
        id: 'q_sol_7',
        topic: 'system_of_law',
        question: 'A legal presumption differs from a factual presumption in that it is:',
        options: [
            'Based on logic',
            'Cannot be rebutted',
            'Required by law',
            'Always accurate'
        ],
        correct: 2,
        explanation: 'A LEGAL presumption is required by LAW and shifts burden of proof (e.g., paternity within 300 days of divorce). A FACTUAL presumption is based on logic and evidence.'
    },
    {
        id: 'q_sol_8',
        topic: 'system_of_law',
        question: 'In administrative law, which interpretation method is allowed?',
        options: [
            'Expansive interpretation',
            'Restrictive interpretation only',
            'Both equally',
            'Analogy'
        ],
        correct: 1,
        explanation: 'Administrative law allows only RESTRICTIVE interpretation (due to state vs individual inequality). Civil law allows EXPANSIVE interpretation.'
    },

    // COPYRIGHT LAW
    {
        id: 'q_copy_1',
        topic: 'copyright',
        question: 'A work is protected by copyright:',
        options: [
            'Only after registration',
            'Only when completed',
            'Since being established in recognizable form',
            'Only after publication'
        ],
        correct: 2,
        explanation: 'A work is protected since it takes a RECOGNIZABLE FORM, even if incomplete. No formalities required.'
    },
    {
        id: 'q_copy_2',
        topic: 'copyright',
        question: 'The "exhaustion of rights" doctrine means:',
        options: [
            'Copyright expires after a certain time',
            'Rights end after the first sale with consent',
            'Authors lose rights after death',
            'Multiple sales exhaust the copyright'
        ],
        correct: 1,
        explanation: 'A copyright owner\'s right to control copies EXHAUSTS on the FIRST SALE with their consent. After that, the owner cannot prevent resale of legitimately purchased items.'
    },
    {
        id: 'q_copy_3',
        topic: 'copyright',
        question: 'Moral rights in copyright:',
        options: [
            'Last for 70 years after death',
            'Can be sold to publishers',
            'Are inalienable and last forever',
            'Only apply to visual arts'
        ],
        correct: 2,
        explanation: 'Moral rights are INALIENABLE (cannot be sold) and have NO TIME LIMIT. They include right to authorship, integrity of work, and first publication.'
    },
    {
        id: 'q_copy_4',
        topic: 'copyright',
        question: 'Xerox operators must pay copyright fees of:',
        options: [
            '1% of proceeds',
            'Up to 3% of proceeds',
            '5% of proceeds',
            '10% of proceeds'
        ],
        correct: 1,
        explanation: 'Xerox operators must pay fees up to 3% OF PROCEEDS to collective management organizations, distributed 50/50 between authors and publishers.'
    },
    {
        id: 'q_copy_5',
        topic: 'copyright',
        question: 'If a work is in the public domain, you:',
        options: [
            'Can use it without any restrictions',
            'Must still credit the author',
            'Must pay reduced fees',
            'Cannot use it commercially'
        ],
        correct: 1,
        explanation: 'Even if a work is in the public domain, you must still CREDIT THE AUTHOR. Moral rights (including attribution) persist even after economic rights expire.'
    },
    {
        id: 'q_copy_6',
        topic: 'copyright',
        question: 'To publish someone\'s letter, you need consent from:',
        options: [
            'Only the author',
            'Only the recipient',
            'Both the author and recipient',
            'No one, letters are not protected'
        ],
        correct: 2,
        explanation: 'You need consent from both the AUTHOR (for copyright) and the RECIPIENT (for privacy rights). If the author is deceased, you also need consent from heirs.'
    },

    // INDUSTRIAL PROPERTY
    {
        id: 'q_ind_1',
        topic: 'industrial_property',
        question: 'Patent protection lasts for:',
        options: [
            '10 years',
            '20 years',
            '25 years',
            'Indefinitely'
        ],
        correct: 1,
        explanation: 'Patent protection lasts for 20 YEARS from the filing date.'
    },
    {
        id: 'q_ind_2',
        topic: 'industrial_property',
        question: 'Trademark protection lasts for:',
        options: [
            '20 years, non-renewable',
            '10 years, renewable indefinitely',
            '25 years maximum',
            'Life of the owner'
        ],
        correct: 1,
        explanation: 'Trademark protection lasts for 10 YEARS and can be renewed INDEFINITELY.'
    },
    {
        id: 'q_ind_3',
        topic: 'industrial_property',
        question: 'Can a Spanish producer use the name "Champagne" for sparkling wine?',
        options: [
            'Yes, it\'s a generic term',
            'Yes, if quality is similar',
            'No, it\'s a protected geographical indication',
            'Only if licensed'
        ],
        correct: 2,
        explanation: 'NO - Champagne is a PROTECTED GEOGRAPHICAL INDICATION that can only be used for wine from the Champagne region of France. Spanish sparkling wine must use other names (e.g., "Cava").'
    },
    {
        id: 'q_ind_4',
        topic: 'industrial_property',
        question: 'To be considered "new," a patent must not be state of the art to:',
        options: [
            'An ordinary person',
            'An expert in the field',
            'A patent examiner',
            'A consumer'
        ],
        correct: 1,
        explanation: 'A patent must not be state of the art to an EXPERT (person skilled in the art), NOT an ordinary person.'
    },

    // CARTELS
    {
        id: 'q_cart_1',
        topic: 'cartels',
        question: 'A cartel can be formed:',
        options: [
            'Only through written agreements',
            'Only through oral agreements',
            'Through any form including tacit coordination',
            'Only with government approval'
        ],
        correct: 2,
        explanation: 'A cartel can be formed through ANY FORM including written agreements, oral agreements, concerted practices, information exchange, and even tacit coordination (ETURAS case).'
    },
    {
        id: 'q_cart_2',
        topic: 'cartels',
        question: 'Parallel behavior differs from a cartel because it:',
        options: [
            'Involves written agreements',
            'Results from independent market decisions, not coordination',
            'Is only between competitors',
            'Involves more companies'
        ],
        correct: 1,
        explanation: 'PARALLEL BEHAVIOR results from independent market decisions (like all companies raising prices due to increased costs) and is LEGAL. CARTELS involve coordination and are PROHIBITED.'
    },
    {
        id: 'q_cart_3',
        topic: 'cartels',
        question: 'The de minimis exemption for HORIZONTAL cartels is:',
        options: [
            'Less than 10% market share',
            'Less than 5% market share',
            'Less than 15% market share',
            'Less than 1% market share'
        ],
        correct: 1,
        explanation: 'The de minimis exemption for HORIZONTAL cartels is < 5% market share (< 10% for vertical agreements). Does NOT apply to price-fixing or market-sharing!'
    },
    {
        id: 'q_cart_4',
        topic: 'cartels',
        question: 'A selective distribution agreement is NOT a cartel when:',
        options: [
            'It fixes prices',
            'It divides markets',
            'Criteria are open, transparent, and non-discriminatory',
            'It excludes online sales'
        ],
        correct: 2,
        explanation: 'Selective distribution is NOT a cartel when criteria are OPEN, TRANSPARENT, and NON-DISCRIMINATORY, goods need specialized service, and restrictions are necessary to maintain product prestige (L\'Oreal case).'
    },

    // DOMINANT POSITION
    {
        id: 'q_dom_1',
        topic: 'dominant_position',
        question: 'Having a dominant position on the market is:',
        options: [
            'Always prohibited',
            'Prohibited if market share exceeds 50%',
            'Not prohibited; only abuse is prohibited',
            'Prohibited in the EU only'
        ],
        correct: 2,
        explanation: 'Having a dominant position is NOT prohibited. Only the ABUSE of dominant position is prohibited (Article 102 TFEU).'
    },
    {
        id: 'q_dom_2',
        topic: 'dominant_position',
        question: 'A market share of 40% creates:',
        options: [
            'Certainty of dominance',
            'A presumption of dominance',
            'No legal significance',
            'Automatic abuse'
        ],
        correct: 1,
        explanation: 'A market share > 40% creates only a PRESUMPTION of dominance, not certainty. Actual research of market forces must be conducted.'
    },
    {
        id: 'q_dom_3',
        topic: 'dominant_position',
        question: 'The three elements of the relevant market are:',
        options: [
            'Price, quality, quantity',
            'Product, territory, time',
            'Supply, demand, competition',
            'Local, national, international'
        ],
        correct: 1,
        explanation: 'The three elements are: 1) PRODUCT market (substitutable products), 2) TERRITORIAL/GEOGRAPHIC market (homogeneous conditions), 3) TIME FRAMEWORK (seasonal variations).'
    },
    {
        id: 'q_dom_4',
        topic: 'dominant_position',
        question: 'Can a small company be considered dominant?',
        options: [
            'No, only large companies can be dominant',
            'Yes, if it has market power in its niche',
            'Only if it has over 1000 employees',
            'Only in developing countries'
        ],
        correct: 1,
        explanation: 'YES! In a niche or specialized market where it has significant market power, even a small company can be dominant.'
    },
    {
        id: 'q_dom_5',
        topic: 'dominant_position',
        question: 'Selling goods in a tied transaction by a dominant company:',
        options: [
            'Is absolutely always illegal',
            'May be justified by tradition or functionality',
            'Is legal if beneficial to shareholders',
            'Is only illegal in the EU'
        ],
        correct: 1,
        explanation: 'Tied transactions by a dominant company are illegal, but may be justified by the tradition of selling tied goods and the functionality of such a sale.'
    },
    {
        id: 'q_dom_6',
        topic: 'dominant_position',
        question: 'Loyalty rebates (like in the British Airways case) are prohibited because they:',
        options: [
            'Lower prices for consumers',
            'Foreclose competitors from the market',
            'Benefit small businesses',
            'Increase competition'
        ],
        correct: 1,
        explanation: 'Loyalty rebates FORECLOSE competitors from the market by creating artificial loyalty not based on product quality. Competitors must offer much higher commissions to overcome the effect.'
    },

    // AI ACT
    {
        id: 'q_ai_1',
        topic: 'ai_act',
        question: 'Reading emotions by AI in the workplace is:',
        options: [
            'High-risk',
            'Prohibited',
            'Permitted with consent',
            'Unregulated'
        ],
        correct: 1,
        explanation: 'Reading emotions by AI in the workplace (or classroom) is PROHIBITED except for medical or safety reasons, due to power imbalance and privacy concerns.'
    },
    {
        id: 'q_ai_2',
        topic: 'ai_act',
        question: 'Can authorities use AI solely to predict whether someone is a criminal based on profiling?',
        options: [
            'Yes, with court approval',
            'Yes, if accurate',
            'No, this is prohibited',
            'Only for serious crimes'
        ],
        correct: 2,
        explanation: 'This is PROHIBITED when based solely on profiling or personality traits without connection to actual criminal activity.'
    },
    {
        id: 'q_ai_3',
        topic: 'ai_act',
        question: 'Social scoring by AI is:',
        options: [
            'High-risk',
            'Limited risk',
            'Prohibited',
            'Permitted for businesses'
        ],
        correct: 2,
        explanation: 'Social scoring - evaluating individuals based on social behavior causing detrimental outcomes - is PROHIBITED as an unacceptable risk.'
    },

    // DSA
    {
        id: 'q_dsa_1',
        topic: 'dsa',
        question: 'The VLOP threshold under DSA is:',
        options: [
            '10 million users',
            '25 million users',
            '45 million users',
            '100 million users'
        ],
        correct: 2,
        explanation: 'A Very Large Online Platform (VLOP) is defined as having 45 MILLION average monthly active users in the EU.'
    },
    {
        id: 'q_dsa_2',
        topic: 'dsa',
        question: 'The primary purpose of the DSA is:',
        options: [
            'To ban social media',
            'To create a safe, trusted online environment',
            'To promote EU technology',
            'To collect taxes from platforms'
        ],
        correct: 1,
        explanation: 'The DSA aims to create a SAFE, TRUSTED ONLINE ENVIRONMENT while facilitating innovation and protecting fundamental rights in the internal market.'
    },

    // COMPANY LAW
    {
        id: 'q_comp_1',
        topic: 'company_law',
        question: 'In a joint-stock company, profit is determined:',
        options: [
            'Per person',
            'Per share',
            'By personal contribution',
            'By seniority'
        ],
        correct: 1,
        explanation: 'In a JSC, profit is determined PER SHARE. Each share represents equal participation in profits. More shares = more dividends.'
    },
    {
        id: 'q_comp_2',
        topic: 'company_law',
        question: 'Effective expression of a company will (to sign a contract) requires:',
        options: [
            'One management board member',
            'Two MB members or one MB member plus a proxy',
            'Three signatures altogether',
            'Only the chairman'
        ],
        correct: 1,
        explanation: 'To sign a contract requires signatures of TWO management board members OR ONE MB member + ONE proxy.'
    },
    {
        id: 'q_comp_3',
        topic: 'company_law',
        question: 'The supervisory board in a JSC:',
        options: [
            'Manages day-to-day operations',
            'Oversees the management board',
            'Elects shareholders',
            'Sets product prices'
        ],
        correct: 1,
        explanation: 'The supervisory board OVERSEES the management board - it should NOT interfere in day-to-day business operations.'
    },
    {
        id: 'q_comp_4',
        topic: 'company_law',
        question: 'Can minority shareholders be expropriated in a JSC?',
        options: [
            'Never',
            'Yes, if majority holds ≥95% and pays fair price',
            'Only with court order',
            'Only in bankruptcy'
        ],
        correct: 1,
        explanation: 'YES - if shareholders holding ≥95% of share capital can force squeeze-out by paying fair price (determined by expert valuation), with court review available.'
    },
    {
        id: 'q_comp_5',
        topic: 'company_law',
        question: 'The minimum capital for a JSC is:',
        options: [
            '5,000 PLN',
            '50,000 PLN',
            '100,000 PLN',
            '500,000 PLN'
        ],
        correct: 2,
        explanation: 'The minimum capital for a Joint-Stock Company (JSC) is 100,000 PLN.'
    },

    // UBER CASE
    {
        id: 'q_uber_1',
        topic: 'uber_case',
        question: 'In the Uber case (Aslam/Farrar v. Uber), the UK court found that drivers are:',
        options: [
            'Independent entrepreneurs',
            'Workers (entitled to minimum wage, vacation)',
            'Volunteers',
            'Shareholders'
        ],
        correct: 1,
        explanation: 'The court found drivers are WORKERS because of app-based monitoring, ratings that can lead to exclusion, Uber\'s control of pricing, and no direct payment from customers.'
    },
    {
        id: 'q_uber_2',
        topic: 'uber_case',
        question: 'Under EU Directive 2024/2831, platform work is:',
        options: [
            'Always self-employment',
            'Always employment',
            'Presumed to be employment',
            'Undefined'
        ],
        correct: 2,
        explanation: 'The directive creates a LEGAL PRESUMPTION that platform work is EMPLOYMENT where facts indicate direction and control. The platform must prove otherwise.'
    },

    // STARTING BUSINESS
    {
        id: 'q_start_1',
        topic: 'starting_business',
        question: 'Sole proprietors are registered in:',
        options: [
            'KRS',
            'CEIDG',
            'The Commercial Court',
            'The Tax Office'
        ],
        correct: 1,
        explanation: 'Sole proprietors are registered in CEIDG (Central Register and Information on Economic Activity). Companies are registered in KRS (National Court Register).'
    },
    {
        id: 'q_start_2',
        topic: 'starting_business',
        question: 'The difference between permission and notification is:',
        options: [
            'Permission is faster',
            'Notification: you declare, authority can veto; Permission: authority decides',
            'Notification requires fees',
            'No difference'
        ],
        correct: 1,
        explanation: 'NOTIFICATION: You declare compliance and can start after 14 days if no objection. PERMISSION: Authority actively reviews and decides whether to grant approval.'
    },

    // CIVIL LAW
    {
        id: 'q_civil_1',
        topic: 'civil_law',
        question: 'If part of a contract is invalid:',
        options: [
            'The entire contract is void',
            'The rest may still be valid if it makes sense',
            'Both parties must renegotiate',
            'A court must decide'
        ],
        correct: 1,
        explanation: 'The remaining parts are STILL VALID if the act makes sense without the invalid part and parties would have concluded the agreement without the invalid clause.'
    },
    {
        id: 'q_civil_2',
        topic: 'civil_law',
        question: 'In contract interpretation, priority is given to:',
        options: [
            'Literal wording',
            'Aim and intention of the parties',
            'Industry standards',
            'What benefits both parties equally'
        ],
        correct: 1,
        explanation: 'The AIM AND INTENTION of the parties has PRIORITY over literal wording in contract interpretation.'
    },
    {
        id: 'q_civil_3',
        topic: 'civil_law',
        question: 'A contract for sale of real estate must be in:',
        options: [
            'Written form',
            'Notarial form',
            'Electronic form',
            'Any form'
        ],
        correct: 1,
        explanation: 'Real estate sales contracts MUST be in NOTARIAL FORM - executed before a notary public. Written form is NOT sufficient. Failure = contract is VOID.'
    },
    {
        id: 'q_civil_4',
        topic: 'civil_law',
        question: 'Tax claims expire after:',
        options: [
            '3 years',
            '5 years',
            '10 years',
            'Never'
        ],
        correct: 1,
        explanation: 'Tax claims expire (statute of limitations) after 5 YEARS. Employment claims expire after 3 YEARS.'
    }
];

// ========================================
// CASE STUDIES
// ========================================

const CASES = [
    {
        id: 'google_shopping',
        icon: '🔍',
        title: 'Google Shopping Case',
        category: 'Abuse of Dominant Position',
        summary: 'How Google abused its dominant position in search to favor its own shopping service',
        story: 'Google, the world\'s leading search engine, launched Google Shopping, a comparison shopping service. However, instead of competing fairly with other comparison shopping services, Google used its dominant position in general search to give itself an unfair advantage.',
        facts: `
            <ul>
                <li>Google had >90% market share in general search in most EU countries</li>
                <li>Google Shopping results appeared prominently at the top of search results</li>
                <li>Competing comparison shopping services were demoted in search rankings</li>
                <li>Google used algorithms to systematically lower competitors\' visibility</li>
                <li>This behavior started in 2008 and continued for years</li>
            </ul>
        `,
        ruling: `
            <strong>European Commission Decision (2017):</strong><br><br>
            The Commission found Google guilty of ABUSE OF DOMINANT POSITION under Article 102 TFEU because:<br><br>
            <ol>
                <li><strong>Self-preferencing:</strong> Promoting its own service</li>
                <li><strong>Demoting competitors:</strong> Lowering rivals\' rankings</li>
                <li><strong>Leveraging dominance:</strong> Using search power to favor shopping service</li>
            </ol>
            <br>
            <strong>Fine:</strong> €2.42 billion<br>
            <strong>Remedy:</strong> Google must treat competing shopping services equally
        `,
        significance: 'This case established that dominant digital platforms cannot use algorithmic manipulation to favor their own services. It set a precedent for regulating self-preferencing behavior by Big Tech companies.'
    },
    {
        id: 'british_airways',
        icon: '✈️',
        title: 'British Airways Loyalty Rebates',
        category: 'Abuse of Dominant Position',
        summary: 'Why BA\'s loyalty rebate scheme was found to be anticompetitive',
        story: 'British Airways operated a commission scheme for travel agents. The scheme offered extra commission not just on sales above targets, but retroactively on ALL sales once targets were met.',
        facts: `
            <ul>
                <li>BA had dominant position in UK air travel market</li>
                <li>Commission increased on ALL tickets (not just additional ones) when targets met</li>
                <li>This created strong incentive to sell only BA tickets</li>
                <li>Travel agents risked losing commission on all sales if they sold competitors\' tickets</li>
                <li>Competitors had to offer much higher commissions to overcome this effect</li>
            </ul>
        `,
        ruling: `
            <strong>EU Court Decision (Case T-219/99):</strong><br><br>
            PROHIBITED because:<br>
            <ol>
                <li><strong>Foreclosure effect:</strong> Prevented competitors from accessing the market</li>
                <li><strong>Artificial loyalty:</strong> Not based on product merit or quality</li>
                <li><strong>Disproportionate effect:</strong> Small shift in sales had huge commission impact</li>
            </ol>
            <br>
            The scheme went beyond normal competitive behavior and used BA\'s dominant position to lock out competitors.
        `,
        significance: 'This case clarified that loyalty rebates by dominant companies can be abusive when they create artificial switching costs and foreclose markets to competitors.'
    },
    {
        id: 'eturas',
        icon: '🏨',
        title: 'ETURAS Case - Tacit Collusion',
        category: 'Cartels',
        summary: 'Can you form a cartel without saying or writing anything?',
        story: 'ETURAS operated an online booking system for travel agencies in Lithuania. The system implemented a cap on discounts that could be offered to customers. Travel agencies claimed they didn\'t know about the cap.',
        facts: `
            <ul>
                <li>ETURAS controlled 70% of Lithuanian online travel booking market</li>
                <li>System automatically limited discounts to 3% without explicit agreement</li>
                <li>System sent message about discount cap to agencies</li>
                <li>No written agreements between travel agencies</li>
                <li>No meetings or direct communication between competitors</li>
                <li>Coordination happened through the booking system</li>
            </ul>
        `,
        ruling: `
            <strong>CJEU Decision (Case C-74/14):</strong><br><br>
            YES, this can be a CARTEL if:<br>
            <ol>
                <li>Travel agencies were AWARE of the discount cap</li>
                <li>They had a COMMON UNDERSTANDING about pricing</li>
                <li>Even without direct communication</li>
            </ol>
            <br>
            <strong>Key principle:</strong> A cartel can be formed through:<br>
            • Concerted practices<br>
            • Information exchange via platforms<br>
            • Algorithmic coordination<br>
            <br>
            NO need for written or oral agreement!
        `,
        significance: 'This case is crucial for understanding modern cartels in the digital age. It shows that platforms can facilitate collusion and that companies can\'t hide behind "we didn\'t communicate directly."'
    },
    {
        id: 'uber_employment',
        icon: '🚗',
        title: 'Aslam/Farrar v. Uber',
        category: 'Employment Law',
        summary: 'Are Uber drivers employees or independent contractors?',
        story: 'Two Uber drivers in the UK sued Uber, claiming they should be classified as workers (not independent contractors) and entitled to minimum wage, paid holidays, and other employment rights.',
        facts: `
            <ul>
                <li><strong>Uber\'s position:</strong> Drivers are independent business partners</li>
                <li><strong>Drivers argued:</strong> Uber controls pricing, routes, and terms</li>
                <li>Uber monitored drivers through app</li>
                <li>Driver ratings could lead to deactivation</li>
                <li>Drivers didn\'t negotiate fares with passengers</li>
                <li>Uber controlled customer relationship</li>
                <li>No direct payment from customers to drivers</li>
            </ul>
        `,
        ruling: `
            <strong>UK Employment Tribunal & Supreme Court (2021):</strong><br><br>
            Drivers ARE <strong>WORKERS</strong> because:<br>
            <ol>
                <li><strong>Control:</strong> Uber exercised significant control over how drivers worked</li>
                <li><strong>Integration:</strong> Drivers were integral to Uber\'s business</li>
                <li><strong>Pricing:</strong> Uber set fares, not drivers</li>
                <li><strong>Monitoring:</strong> Constant surveillance via app</li>
            </ol>
            <br>
            <strong>Rights granted:</strong><br>
            ✓ Minimum wage<br>
            ✓ Paid holidays<br>
            ✓ Rest breaks<br>
            ✓ Protection from discrimination
        `,
        significance: 'This landmark case challenged the gig economy model and established that platform companies cannot easily classify workers as independent contractors to avoid employment obligations.'
    },
    {
        id: 'champagne',
        icon: '🍾',
        title: 'Champagne Geographic Indication',
        category: 'Intellectual Property',
        summary: 'Why only French sparkling wine can be called Champagne',
        story: 'Spanish producers wanted to call their sparkling wine "Champagne" because it was made using the same method. French producers objected, arguing this violated their protected geographical indication.',
        facts: `
            <ul>
                <li>Champagne region in France has produced sparkling wine for centuries</li>
                <li>Specific terroir, climate, and production methods</li>
                <li>Champagne protected as Appellation d\'Origine Contrôlée (AOC) since 1927</li>
                <li>EU protected it as a geographical indication</li>
                <li>Spanish Cava is made similarly but in different region</li>
            </ul>
        `,
        ruling: `
            <strong>EU Regulation 1308/2013:</strong><br><br>
            <strong>CHAMPAGNE</strong> is a PROTECTED GEOGRAPHICAL INDICATION (PGI)<br><br>
            Can only be used for:<br>
            <ol>
                <li>Sparkling wine from Champagne region of France</li>
                <li>Made using traditional méthode champenoise</li>
                <li>Meeting specific quality standards</li>
                <li>Produced by approved growers</li>
            </ol>
            <br>
            Spanish sparkling wine must use different names:<br>
            • Cava (Spain)<br>
            • Prosecco (Italy)<br>
            • Sekt (Germany)
        `,
        significance: 'Demonstrates how geographical indications protect regional products and prevent misleading use of place names. Champagne is one of the most valuable protected names in the world.'
    },
    {
        id: 'wood_pulp',
        icon: '📄',
        title: 'Wood Pulp II - Parallel Behavior',
        category: 'Competition Law',
        summary: 'When similar pricing is NOT a cartel',
        story: 'Multiple wood pulp producers announced price increases at similar times. The European Commission suspected a cartel. Producers claimed it was just parallel behavior due to market transparency.',
        facts: `
            <ul>
                <li>40+ wood pulp producers announced similar price increases</li>
                <li>Announcements made within similar timeframes</li>
                <li>Prices moved in parallel</li>
                <li>No evidence of meetings or communication</li>
                <li>Market was highly transparent with published price lists</li>
                <li>All producers faced similar cost structures</li>
            </ul>
        `,
        ruling: `
            <strong>CJEU Decision (Cases C-89/85, 1993):</strong><br><br>
            <strong>NOT A CARTEL</strong> - Just PARALLEL BEHAVIOR because:<br>
            <ol>
                <li><strong>Market transparency:</strong> Everyone could see prices</li>
                <li><strong>Oligopolistic market:</strong> Few players, natural price awareness</li>
                <li><strong>Similar costs:</strong> All faced same input costs</li>
                <li><strong>No proof of coordination:</strong> Commission couldn\'t prove concerted practice</li>
            </ol>
            <br>
            <strong>Key principle:</strong><br>
            Companies can arrive at similar prices INDEPENDENTLY without it being a cartel.
        `,
        significance: 'This case established that parallel behavior resulting from market conditions and independent decision-making is LEGAL. Not every price similarity is evidence of collusion.'
    },
    {
        id: 'loreal',
        icon: '💄',
        title: 'L\'Oréal Selective Distribution',
        category: 'Competition Law - Cartels',
        summary: 'When selective distribution is justified for luxury goods',
        story: 'L\'Oréal implemented a selective distribution system for its luxury cosmetics, restricting which retailers could sell its products. Competition authorities questioned whether this restricted competition.',
        facts: `
            <ul>
                <li>L\'Oréal only allowed authorized retailers to sell products</li>
                <li>Criteria included: store quality, staff training, product presentation</li>
                <li>Some retailers excluded from selling L\'Oréal products</li>
                <li>System applied uniformly to all retailers meeting criteria</li>
                <li>Aimed to protect luxury brand image</li>
            </ul>
        `,
        ruling: `
            <strong>CJEU Decision:</strong><br><br>
            <strong>NOT A CARTEL</strong> - Selective distribution allowed because:<br>
            <ol>
                <li><strong>Luxury goods exception:</strong> Brand image is part of product quality</li>
                <li><strong>Objective criteria:</strong> Requirements were clear and non-discriminatory</li>
                <li><strong>Open to all:</strong> Any retailer meeting standards could join</li>
                <li><strong>Proportionate:</strong> Restrictions necessary to maintain prestige</li>
                <li><strong>Pro-competitive:</strong> Ensured inter-brand competition</li>
            </ol>
        `,
        significance: 'This case clarified that selective distribution for luxury goods can be legal when criteria are objective, transparent, and necessary to maintain brand prestige.'
    },
    {
        id: 'amazon_chicago',
        icon: '📦',
        title: 'Amazon and the Chicago School',
        category: 'Competition Law Theory',
        summary: 'How Amazon\'s strategy challenges traditional antitrust thinking',
        story: 'Amazon operated at losses for years while growing rapidly. The Chicago School\'s price theory suggested this was irrational. Critics argued traditional antitrust analysis failed to capture Amazon\'s predatory strategy.',
        facts: `
            <ul>
                <li>Amazon reported losses for first 7 years</li>
                <li>Prioritized growth and market share over profits</li>
                <li>Below-cost pricing in many categories</li>
                <li>Became infrastructure provider to competitors (AWS, FBA)</li>
                <li>Vertical integration across multiple business lines</li>
                <li>Created Amazon Prime to lock in customers</li>
            </ul>
        `,
        ruling: `
            <strong>Chicago School View:</strong><br>
            "Predatory pricing is irrational because firms prioritize profits."<br>
            • Low consumer prices = good competition<br>
            • Market will self-correct<br>
            • Focus only on short-term price effects<br><br>

            <strong>Critics\' Response (Lina Khan):</strong><br>
            Chicago School approach fails because:<br>
            <ol>
                <li>Doesn\'t capture how platforms gain dominance</li>
                <li>Ignores structural market power</li>
                <li>Allows predatory strategies that don\'t trigger scrutiny</li>
                <li>Focuses too narrowly on consumer prices</li>
            </ol>
        `,
        significance: 'This debate reshaped antitrust thinking about digital platforms. It challenged the Chicago School\'s consumer welfare standard and argued for considering market structure, not just prices.'
    }
];

// ========================================
// MIND MAPS
// ========================================

const MIND_MAPS = {
    'legal-systems': {
        center: 'Legal Systems',
        branches: [
            {
                name: 'Common Law',
                color: '#4F46E5',
                children: [
                    'Judge decisions = law',
                    'Precedent (stare decisis)',
                    'Case-by-case development',
                    'UK, US, Commonwealth'
                ]
            },
            {
                name: 'Civil Law',
                color: '#7C3AED',
                children: [
                    'Codified statutes',
                    'Judges apply law',
                    'Deductive reasoning',
                    'Most of Europe'
                ]
            },
            {
                name: 'Monist vs Dualist',
                color: '#2563EB',
                children: [
                    'Monist: Int\'l law automatic',
                    'Dualist: Need transformation',
                    'Poland: Modified monist'
                ]
            }
        ]
    },
    'copyright': {
        center: 'Copyright Law',
        branches: [
            {
                name: 'Moral Rights',
                color: '#7C3AED',
                children: [
                    'NO time limit',
                    'Inalienable',
                    'Attribution',
                    'Integrity of work'
                ]
            },
            {
                name: 'Economic Rights',
                color: '#DB2777',
                children: [
                    'Life + 70 years',
                    'Transferable',
                    'Reproduction',
                    'Distribution'
                ]
            },
            {
                name: 'Key Concepts',
                color: '#059669',
                children: [
                    'Established = protected',
                    'Exhaustion after 1st sale',
                    'Public domain',
                    'Fair use'
                ]
            }
        ]
    },
    'competition-law': {
        center: 'Competition Law',
        branches: [
            {
                name: 'Cartels (Art 101)',
                color: '#DC2626',
                children: [
                    'Agreements restricting competition',
                    'Price fixing',
                    'Market sharing',
                    'Can be tacit'
                ]
            },
            {
                name: 'Dominant Position (Art 102)',
                color: '#EA580C',
                children: [
                    'Having = OK',
                    'Abuse = prohibited',
                    '>40% = presumption',
                    'Special responsibility'
                ]
            },
            {
                name: 'Types of Abuse',
                color: '#7C2D12',
                children: [
                    'Unfair pricing',
                    'Loyalty rebates',
                    'Tied transactions',
                    'Self-preferencing'
                ]
            }
        ]
    },
    'company-structure': {
        center: 'Company Law',
        branches: [
            {
                name: 'Sole Proprietorship',
                color: '#15803D',
                children: [
                    'Unlimited liability',
                    'Simple structure',
                    'CEIDG registration',
                    'Full control'
                ]
            },
            {
                name: 'Joint-Stock Company',
                color: '#7C2D12',
                children: [
                    'Limited liability',
                    'Min 100,000 PLN',
                    'Profit per share',
                    'Complex governance'
                ]
            },
            {
                name: 'JSC Authorities',
                color: '#4338CA',
                children: [
                    'General Assembly',
                    'Management Board',
                    'Supervisory Board'
                ]
            }
        ]
    },
    'ip': {
        center: 'Intellectual Property',
        branches: [
            {
                name: 'Copyright',
                color: '#7C3AED',
                children: [
                    'Moral rights (∞)',
                    'Economic rights (Life+70)',
                    'Established = protected',
                    'Exhaustion after 1st sale'
                ]
            },
            {
                name: 'Industrial Property',
                color: '#2563EB',
                children: [
                    'Patent (20 years)',
                    'Trademark (10 years, renewable)',
                    'Industrial Design (25 years)',
                    'Utility Model (10 years)'
                ]
            },
            {
                name: 'Special Rights',
                color: '#059669',
                children: [
                    'Geographical Indications',
                    'SPC for pharmaceuticals',
                    'Trade secrets',
                    'Know-how'
                ]
            }
        ]
    },
    'competition': {
        center: 'Competition Law',
        branches: [
            {
                name: 'Cartels (Art 101)',
                color: '#DC2626',
                children: [
                    'Horizontal agreements',
                    'Price fixing prohibited',
                    'Market sharing prohibited',
                    'De minimis <5%'
                ]
            },
            {
                name: 'Dominance (Art 102)',
                color: '#EA580C',
                children: [
                    'Having = OK',
                    'Abuse = prohibited',
                    '>40% = presumption',
                    'Special responsibility'
                ]
            },
            {
                name: 'Enforcement',
                color: '#7C2D12',
                children: [
                    'European Commission',
                    'National authorities',
                    'Fines up to 10% turnover',
                    'Private damages'
                ]
            }
        ]
    },
    'ai-dsa': {
        center: 'AI Act & DSA',
        branches: [
            {
                name: 'AI Act - Prohibited',
                color: '#DC2626',
                children: [
                    'Social scoring',
                    'Emotion reading (workplace)',
                    'Real-time biometrics (public)',
                    'Subliminal manipulation'
                ]
            },
            {
                name: 'AI Act - High-Risk',
                color: '#EA580C',
                children: [
                    'Critical infrastructure',
                    'Education/employment',
                    'Essential services',
                    'Law enforcement'
                ]
            },
            {
                name: 'DSA',
                color: '#0891B2',
                children: [
                    'VLOP ≥45M users',
                    'Content moderation',
                    'Transparency obligations',
                    'Risk assessments'
                ]
            }
        ]
    },
    'company': {
        center: 'Company Law',
        branches: [
            {
                name: 'JSC Structure',
                color: '#7C2D12',
                children: [
                    'General Assembly',
                    'Management Board',
                    'Supervisory Board',
                    'Min capital 100k PLN'
                ]
            },
            {
                name: 'Shares',
                color: '#4338CA',
                children: [
                    'Registered shares',
                    'Bearer shares',
                    'Preferred shares',
                    'Profit per share'
                ]
            },
            {
                name: 'Liability',
                color: '#15803D',
                children: [
                    'JSC: Limited',
                    'Sole: Unlimited',
                    'Partnership: Varies',
                    'Professional: Protected'
                ]
            }
        ]
    },
    'civil': {
        center: 'Civil Law',
        branches: [
            {
                name: 'Contracts',
                color: '#6B7280',
                children: [
                    'Intention > literal wording',
                    'Real estate = notarial form',
                    'Partial invalidity possible',
                    'Customs play a role'
                ]
            },
            {
                name: 'Interpretation',
                color: '#059669',
                children: [
                    'Civil law = expansive',
                    'Admin law = restrictive',
                    'Parties in equality',
                    'Good faith principle'
                ]
            },
            {
                name: 'Limitations',
                color: '#EA580C',
                children: [
                    'Tax claims: 5 years',
                    'Employment: 3 years',
                    'General: 6 years',
                    'Tort: 3 years from knowledge'
                ]
            }
        ]
    }
};

// ========================================
// LEARN CONTENT - STRUCTURED LESSONS
// ========================================

const LEARN_CONTENT = {
    system_of_law: {
        sections: [
            {
                title: '🌍 Legal Systems Overview',
                content: `
                    <h4>Two Main Legal Traditions</h4>
                    <div class="comparison-table">
                        <table>
                            <tr>
                                <th>Feature</th>
                                <th>Common Law (Anglo-Saxon)</th>
                                <th>Civil Law (Continental)</th>
                            </tr>
                            <tr>
                                <td><strong>Source of Law</strong></td>
                                <td>Case law (judicial precedents)</td>
                                <td>Codified statutes and codes</td>
                            </tr>
                            <tr>
                                <td><strong>Role of Judges</strong></td>
                                <td>✅ Decisions HAVE the force of law</td>
                                <td>❌ Decisions do NOT have force of law</td>
                            </tr>
                            <tr>
                                <td><strong>Key Principle</strong></td>
                                <td>Stare decisis (precedent)</td>
                                <td>Deductive reasoning from codes</td>
                            </tr>
                            <tr>
                                <td><strong>Examples</strong></td>
                                <td>UK, US, Commonwealth</td>
                                <td>Most of Europe, Poland</td>
                            </tr>
                        </table>
                    </div>
                    <div class="key-point">
                        <strong>🎯 EXAM KEY:</strong> In the Anglo-Saxon system, judges' decisions have the value of law through the doctrine of precedent.
                    </div>
                `
            },
            {
                title: '⚖️ International Law Integration',
                content: `
                    <h4>Monist vs Dualist Systems</h4>
                    <div class="info-box">
                        <h5>MONIST System</h5>
                        <p>International and domestic law form <strong>ONE legal system</strong></p>
                        <p>✅ International law automatically applies domestically</p>
                    </div>
                    <div class="info-box">
                        <h5>DUALIST System</h5>
                        <p>Two <strong>SEPARATE systems</strong></p>
                        <p>❌ International law must be transformed into domestic law</p>
                    </div>
                    <div class="key-point">
                        <strong>Poland's Approach:</strong> Modified monist system<br>
                        International agreements ratified with parliamentary consent have <strong>PRIORITY BEFORE STATUTES</strong><br>
                        (Constitution remains supreme)
                    </div>
                `
            },
            {
                title: '📜 Interpretation Methods',
                content: `
                    <h4>Civil Law vs Administrative Law Methods</h4>
                    <table>
                        <tr>
                            <th>Method</th>
                            <th>Interpretation</th>
                            <th>Used In</th>
                            <th>Reason</th>
                        </tr>
                        <tr>
                            <td><strong>Civil Law</strong></td>
                            <td>✅ EXPANSIVE</td>
                            <td>Contracts, private law</td>
                            <td>Equality of parties</td>
                        </tr>
                        <tr>
                            <td><strong>Administrative Law</strong></td>
                            <td>❌ RESTRICTIVE only</td>
                            <td>Criminal, tax, admin law</td>
                            <td>State vs individual inequality</td>
                        </tr>
                    </table>
                    <div class="example-box">
                        <strong>Living Constitution</strong> = Opposite of positive law interpretation<br>
                        Allows deriving meaning from CURRENT circumstances, not original intent
                    </div>
                `
            },
            {
                title: '⚡ Key Principles',
                content: `
                    <h4>Essential Legal Principles</h4>
                    <ul class="principle-list">
                        <li><strong>Lex retro non agit</strong> - Law does not act retroactively</li>
                        <li><strong>Lex superior derogat legi inferiori</strong> - Higher law prevails</li>
                        <li><strong>Lex posterior derogat priori</strong> - Later law prevails</li>
                        <li><strong>Nulla poena sine lege</strong> - No punishment without law</li>
                        <li><strong>In dubio pro reo</strong> - When in doubt, for the accused</li>
                    </ul>
                    <div class="key-point">
                        <h5>Legal vs Factual Presumption</h5>
                        <p><strong>Legal:</strong> Required by LAW; shifts burden of proof</p>
                        <p><strong>Factual:</strong> Based on LOGIC and evidence</p>
                        <p>Both can be rebutted by proof to the contrary</p>
                    </div>
                `
            }
        ]
    },
    copyright: {
        sections: [
            {
                title: '©️ Copyright Basics',
                content: `
                    <h4>When is a Work Protected?</h4>
                    <div class="key-point">
                        A work is protected <strong>since being established</strong> - when it takes a <strong>RECOGNIZABLE FORM</strong>
                        <br><br>
                        ✅ Even if incomplete<br>
                        ✅ No formalities required<br>
                        ✅ No registration needed
                    </div>
                    <div class="example-box">
                        <strong>Example:</strong> An unfinished bachelor thesis with identifiable creative content is already protected!
                    </div>
                `
            },
            {
                title: '⏰ Duration of Rights',
                content: `
                    <h4>Two Types of Copyright Rights</h4>
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Duration</th>
                            <th>Transferable?</th>
                            <th>Content</th>
                        </tr>
                        <tr>
                            <td><strong>Moral Rights</strong></td>
                            <td>∞ NO TIME LIMIT</td>
                            <td>❌ INALIENABLE</td>
                            <td>Authorship, integrity, first publication</td>
                        </tr>
                        <tr>
                            <td><strong>Economic Rights</strong></td>
                            <td>Life + 70 years</td>
                            <td>✅ Transferable</td>
                            <td>Use, reproduce, distribute, remuneration</td>
                        </tr>
                    </table>
                    <div class="warning-box">
                        ⚠️ Even if a work is in PUBLIC DOMAIN, you must still CREDIT THE AUTHOR!<br>
                        Moral rights persist even after economic rights expire.
                    </div>
                `
            },
            {
                title: '💰 Exhaustion of Rights',
                content: `
                    <h4>First Sale Doctrine</h4>
                    <div class="info-box">
                        A copyright owner's right to control copies <strong>EXHAUSTS on the FIRST SALE</strong> with their consent
                    </div>
                    <p><strong>What this means:</strong></p>
                    <ul>
                        <li>After first legitimate sale, owner cannot prevent resale</li>
                        <li>Purchaser can resell their copy</li>
                        <li>Cannot control secondary market</li>
                    </ul>
                    <div class="example-box">
                        You buy a book → You can resell it<br>
                        Publisher cannot stop you!
                    </div>
                `
            },
            {
                title: '📧 Special Cases',
                content: `
                    <h4>Publishing Letters</h4>
                    <p>To publish a letter, you need consent from:</p>
                    <ol>
                        <li><strong>The AUTHOR</strong> (writer) - for copyright</li>
                        <li><strong>The RECIPIENT</strong> - for privacy rights</li>
                        <li><strong>Heirs</strong> if author is deceased</li>
                    </ol>
                    <h4>Xerox Operators</h4>
                    <p>Must pay fees <strong>up to 3% OF PROCEEDS</strong> to collective management organizations</p>
                    <p>Distributed <strong>50/50 between authors and publishers</strong></p>
                `
            }
        ]
    },
    industrial_property: {
        sections: [
            {
                title: '⚙️ Types of Protection',
                content: `
                    <h4>Duration of Industrial Property Rights</h4>
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Duration</th>
                            <th>Renewable?</th>
                        </tr>
                        <tr>
                            <td><strong>Patent</strong></td>
                            <td>20 years</td>
                            <td>❌ No</td>
                        </tr>
                        <tr>
                            <td><strong>Trademark</strong></td>
                            <td>10 years</td>
                            <td>✅ Indefinitely</td>
                        </tr>
                        <tr>
                            <td><strong>Industrial Design</strong></td>
                            <td>Up to 25 years</td>
                            <td>✅ Yes (5-year terms)</td>
                        </tr>
                        <tr>
                            <td><strong>Utility Model</strong></td>
                            <td>10 years</td>
                            <td>❌ No</td>
                        </tr>
                    </table>
                `
            },
            {
                title: '🍾 Geographical Indications',
                content: `
                    <h4>Protected Names: The Champagne Example</h4>
                    <div class="key-point">
                        <strong>Q:</strong> Can a Spanish producer call their sparkling wine "Champagne"?<br>
                        <strong>A:</strong> ❌ NO!
                    </div>
                    <p><strong>Why?</strong> Champagne is a <strong>PROTECTED GEOGRAPHICAL INDICATION</strong></p>
                    <p>Can only be used for:</p>
                    <ul>
                        <li>Sparkling wine from Champagne region of France</li>
                        <li>Made using traditional méthode champenoise</li>
                        <li>Meeting specific quality standards</li>
                    </ul>
                    <div class="example-box">
                        Spanish sparkling wine = <strong>Cava</strong><br>
                        Italian sparkling wine = <strong>Prosecco</strong><br>
                        German sparkling wine = <strong>Sekt</strong>
                    </div>
                `
            },
            {
                title: '🔬 Patent Requirements',
                content: `
                    <h4>Novelty Standard</h4>
                    <div class="key-point">
                        To be "new," a patent must not be state of the art to an <strong>EXPERT</strong> (person skilled in the art)
                        <br>NOT an ordinary person!
                    </div>
                    <h4>Supplementary Protection Certificate (SPC)</h4>
                    <p>Extends patent duration for:</p>
                    <ul>
                        <li>Pharmaceutical products</li>
                        <li>Plant protection products</li>
                    </ul>
                    <p><strong>Purpose:</strong> Compensate for time lost during regulatory approval</p>
                    <p><strong>Extension:</strong> Up to 5 additional years</p>
                `
            },
            {
                title: '⚠️ Patent Abuse',
                content: `
                    <h4>What Can Be Done About Patent Abuse?</h4>
                    <ol>
                        <li><strong>COMPULSORY LICENSING</strong>
                            <p>Government authorizes third parties to use patent</p>
                        </li>
                        <li><strong>ANTITRUST ENFORCEMENT</strong>
                            <p>Competition authorities intervene</p>
                        </li>
                        <li><strong>PATENT REVOCATION</strong>
                            <p>In extreme cases</p>
                        </li>
                    </ol>
                `
            }
        ]
    },
    cartels: {
        sections: [
            {
                title: '🤝 What is a Cartel?',
                content: `
                    <h4>Definition (Article 101 TFEU)</h4>
                    <div class="key-point">
                        An <strong>AGREEMENT between undertakings</strong>, decisions by associations, or <strong>CONCERTED PRACTICES</strong> that:
                        <ul>
                            <li>May affect trade between Member States</li>
                            <li>Have as their <strong>object or effect</strong> the prevention, restriction, or distortion of COMPETITION</li>
                        </ul>
                    </div>
                `
            },
            {
                title: '📝 Forms of Cartels',
                content: `
                    <h4>Can You Form a Cartel Without Communication?</h4>
                    <div class="key-point">
                        <strong>YES!</strong> Through:
                    </div>
                    <ul>
                        <li>✍️ Written agreements</li>
                        <li>🗣️ Oral agreements</li>
                        <li>💬 Informal statements</li>
                        <li>🤐 Concerted practices</li>
                        <li>📊 Information exchange</li>
                        <li>🤖 Algorithmic coordination</li>
                    </ul>
                    <div class="case-box">
                        <strong>ETURAS Case:</strong> Travel agencies coordinated through a booking system without direct communication = CARTEL!
                    </div>
                `
            },
            {
                title: '↔️ Cartel vs Parallel Behavior',
                content: `
                    <h4>Key Distinction</h4>
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Definition</th>
                            <th>Legal Status</th>
                        </tr>
                        <tr>
                            <td><strong>CARTEL</strong></td>
                            <td>Coordinated action through agreement</td>
                            <td>❌ PROHIBITED</td>
                        </tr>
                        <tr>
                            <td><strong>PARALLEL BEHAVIOR</strong></td>
                            <td>Independent decisions, similar outcomes</td>
                            <td>✅ LEGAL</td>
                        </tr>
                    </table>
                    <div class="example-box">
                        <strong>Wood Pulp II Case:</strong> All producers raised prices similarly due to increased costs = LEGAL parallel behavior
                    </div>
                `
            },
            {
                title: '📦 Selective Distribution',
                content: `
                    <h4>When is it NOT a Cartel?</h4>
                    <div class="key-point">
                        Selective distribution is allowed when:
                    </div>
                    <ol>
                        <li>Goods need specialized service (watches, electronics)</li>
                        <li>Luxury goods requiring brand image protection</li>
                        <li>Criteria are <strong>OPEN, TRANSPARENT, NON-DISCRIMINATORY</strong></li>
                        <li>Restrictions necessary to maintain product prestige</li>
                    </ol>
                    <div class="case-box">
                        <strong>L'Oréal Case:</strong> Selective distribution justified for luxury cosmetics
                    </div>
                    <h4>De Minimis Exemption</h4>
                    <p>• Horizontal: < 5% market share</p>
                    <p>• Vertical: < 10% market share</p>
                    <p>⚠️ Does NOT apply to price-fixing or market-sharing!</p>
                `
            }
        ]
    },
    dominant_position: {
        sections: [
            {
                title: '👑 Understanding Dominance',
                content: `
                    <h4>Is Having Dominance Prohibited?</h4>
                    <div class="key-point">
                        ❌ <strong>NO!</strong> Having a dominant position is NOT prohibited.<br>
                        ✅ Only the <strong>ABUSE</strong> of dominant position is prohibited (Article 102 TFEU)
                    </div>
                    <h4>Measuring Dominance</h4>
                    <p><strong>Market share > 40%</strong> creates a <strong>PRESUMPTION</strong> (not certainty!) of dominance</p>
                    <p>Must also analyze:</p>
                    <ul>
                        <li>Technology advantages</li>
                        <li>Entry barriers</li>
                        <li>Vertical integration</li>
                        <li>Access to raw materials</li>
                    </ul>
                    <div class="info-box">
                        ✅ Even small companies can be dominant in niche markets!
                    </div>
                `
            },
            {
                title: '🎯 The Relevant Market',
                content: `
                    <h4>Three Elements</h4>
                    <div class="numbered-list">
                        <div class="list-item">
                            <strong>1. PRODUCT MARKET</strong>
                            <p>Products that are substitutes for each other</p>
                            <p><em>Example: Are bananas substitutes for other fruits? (United Brands case)</em></p>
                        </div>
                        <div class="list-item">
                            <strong>2. TERRITORIAL/GEOGRAPHIC MARKET</strong>
                            <p>Area where conditions of competition are homogeneous</p>
                            <p><em>Criteria: consumer habits, transportation costs, entry barriers</em></p>
                        </div>
                        <div class="list-item">
                            <strong>3. TIME FRAMEWORK</strong>
                            <p>Period for assessment</p>
                            <p><em>Seasonal variations, market fluctuations, economic crises</em></p>
                        </div>
                    </div>
                `
            },
            {
                title: '⚠️ Types of Abuse',
                content: `
                    <h4>Common Examples</h4>
                    <ul class="abuse-list">
                        <li><strong>Unfair pricing</strong> - Imposing unfair purchase/selling prices</li>
                        <li><strong>Limiting production</strong> - To prejudice consumers</li>
                        <li><strong>Discriminatory conditions</strong> - Different terms for equivalent transactions</li>
                        <li><strong>Tied transactions</strong> - Requiring unrelated purchases</li>
                        <li><strong>Loyalty rebates</strong> - Rewarding exclusivity to foreclose competitors</li>
                        <li><strong>Refusal to deal</strong> - Especially with essential facilities</li>
                        <li><strong>Predatory pricing</strong> - Below-cost pricing to eliminate competitors</li>
                    </ul>
                `
            },
            {
                title: '📱 Real Cases',
                content: `
                    <h4>Google Shopping Case</h4>
                    <div class="case-box">
                        <strong>Abuse:</strong>
                        <ol>
                            <li><strong>Self-preferencing</strong> - Promoting own service</li>
                            <li><strong>Demoting competitors</strong> - Lowering rivals in search results</li>
                            <li><strong>Leveraging dominance</strong> - Using search power for shopping</li>
                        </ol>
                        <strong>Fine:</strong> €2.42 billion
                    </div>
                    <h4>British Airways Loyalty Rebates</h4>
                    <div class="case-box">
                        BA offered rebates on ALL tickets (not just additional ones) when targets met
                        <br><br>
                        <strong>Result:</strong> Foreclosed competitors from the market
                    </div>
                `
            }
        ]
    },
    company_law: {
        sections: [
            {
                title: '🏢 Business Entities',
                content: `
                    <h4>Sole Proprietorship vs Joint-Stock Company</h4>
                    <table>
                        <tr>
                            <th>Feature</th>
                            <th>Sole Proprietorship</th>
                            <th>Joint-Stock Company</th>
                        </tr>
                        <tr>
                            <td><strong>Liability</strong></td>
                            <td>UNLIMITED - all personal property</td>
                            <td>LIMITED - only value of shares</td>
                        </tr>
                        <tr>
                            <td><strong>Registration</strong></td>
                            <td>CEIDG</td>
                            <td>KRS</td>
                        </tr>
                        <tr>
                            <td><strong>Min Capital</strong></td>
                            <td>None</td>
                            <td>100,000 PLN</td>
                        </tr>
                        <tr>
                            <td><strong>Legal Separation</strong></td>
                            <td>❌ Owner = business</td>
                            <td>✅ Separate legal person</td>
                        </tr>
                    </table>
                `
            },
            {
                title: '📊 JSC Structure',
                content: `
                    <h4>Three Authorities</h4>
                    <div class="authority-box">
                        <strong>1. GENERAL ASSEMBLY (Shareholders)</strong>
                        <p>Supreme body, makes major decisions</p>
                    </div>
                    <div class="authority-box">
                        <strong>2. MANAGEMENT BOARD</strong>
                        <p>Manages company, represents externally</p>
                        <p>✍️ To sign contract: <strong>2 MB members</strong> OR <strong>1 MB + 1 proxy</strong></p>
                    </div>
                    <div class="authority-box">
                        <strong>3. SUPERVISORY BOARD</strong>
                        <p>Oversees management board</p>
                        <p>❌ Should NOT interfere in day-to-day business</p>
                    </div>
                `
            },
            {
                title: '📈 Shares',
                content: `
                    <h4>Types of Shares</h4>
                    <ul>
                        <li><strong>Registered shares</strong> - Owner's name, can be issued before full payment</li>
                        <li><strong>Bearer shares</strong> - Anonymous, must be fully paid first</li>
                        <li><strong>Preferred shares</strong> - Voting, dividend, or liquidation preferences</li>
                    </ul>
                    <div class="key-point">
                        Only <strong>REGISTERED</strong> shares can be preferred!
                    </div>
                    <h4>Why "Negotiable Instruments"?</h4>
                    <p>Because shares can be:</p>
                    <ul>
                        <li>📊 TRADED (bought, sold)</li>
                        <li>🔒 PAWNED (used as collateral)</li>
                        <li>🏦 SECURITY for loans</li>
                    </ul>
                `
            },
            {
                title: '💰 Profit & Rights',
                content: `
                    <h4>Profit Distribution</h4>
                    <div class="key-point">
                        Profit is determined <strong>PER SHARE</strong>, not per person
                        <br><br>
                        More shares = More dividends
                    </div>
                    <h4>Squeeze-Out</h4>
                    <p><strong>Can minority shareholders be expropriated?</strong></p>
                    <p>✅ YES, if:</p>
                    <ol>
                        <li>Majority holds ≥95% of share capital</li>
                        <li>Must pay FAIR PRICE (expert valuation)</li>
                        <li>General assembly resolution required</li>
                        <li>Minority can challenge price in court</li>
                    </ol>
                `
            }
        ]
    }
};
