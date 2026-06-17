// ═══════════════════════════════════════════════════
// THE SUCCESS TOOLKITS ACADEMY — CONTENT FILE
// ═══════════════════════════════════════════════════
//
// This file contains all course content — lessons, exercises,
// quizzes, and module structure. Edit this file to update
// content without touching any application code.
//
// STRUCTURE:
//   COURSE_CATALOGUE — the list of courses shown on the dashboard
//   MODULES          — all 14 modules with lessons, steps, exercises, quizzes
//
// To add a new course:  add an entry to COURSE_CATALOGUE
// To edit lesson text:  find the lesson by title, edit the html property
// To add an exercise:   add an exercise:{} block to any step
// To edit a quiz:       find the quiz:[] array for that lesson
// ═══════════════════════════════════════════════════

// ═══════════════════════════════════════════════════
// COURSE CATALOGUE — add future courses here
// ═══════════════════════════════════════════════════
const COURSE_CATALOGUE = [
  { id:'startup-process', title:'The Startup Process', subtitle:'14 Modules · ~8 hours', icon:'🚀',
    desc:'Everything you need to launch and grow your business — from your why and business structure through to marketing, sales, and AI. Practical, structured, and built from real experience.',
    active:true, locked:false },
  { id:'growth-process', title:'The Growth Process', subtitle:'Coming Soon', icon:'📈',
    desc:'Scale what works. Hiring, systems for growth, funding options, and building a business that runs without you.',
    active:false, locked:true },
  { id:'money-mastery', title:'Money Mastery', subtitle:'Coming Soon', icon:'💰',
    desc:'A deep dive into business finance — reading your P&L, forecasting cash flow, understanding tax, and building financial resilience.',
    active:false, locked:true }
];

// ═══════════════════════════════════════════════════
// MODULES & LESSONS — 14 modules, full content
// ═══════════════════════════════════════════════════
const MODULES = [

// ── 01 GETTING STARTED ──────────────────────────────
{ num:'01', title:'Getting Started', icon:'🚀',
  lessons:[
    { id:'l01a', title:'How to Use This Course', time:'3 min', xp:10, hasQuiz:false,
      steps:[{ title:'Welcome',
        html:`<div class="lesson-body">
<p>Welcome. This course is built directly from the book <em>The Startup Process</em> — the toolkit Rhianne wishes she'd had when she started her own business in 2022.</p>
<p>It isn't theory-heavy or filled with jargon. It's practical, honest, and built around the challenges real entrepreneurs face in their first months and years.</p>
<div class="key-point-box"><strong>🎯 The big idea</strong>Building a business isn't about getting everything perfect from day one. It's about progress, clarity, and momentum. This course gives you the structure to build that — step by step.</div>
<h3>What the Callouts Mean</h3>
<ul>
<li>💡 <strong>Tip boxes</strong> — practical advice to help you complete exercises or get unstuck</li>
<li>🎙️ <strong>Story sections</strong> — Rhianne's personal experiences from her own startup journey</li>
<li>☑ <strong>Action boxes</strong> — things for you to do or think about</li>
<li>📋 <strong>Exercises</strong> — fillable worksheets from the accompanying planner</li>
</ul>
<div class="action-box"><strong>☑ Your First Action</strong>Before you move on: in the notes section below, write down why you're doing this. What does success look like for you in 12 months? Don't overthink it. Just write.</div>
</div>`
      }]
    },
    { id:'l01b', title:'Finding Your Why', time:'8 min', xp:20, hasQuiz:true,
      steps:[
        { title:'Why Your Why Matters', html:`<div class="lesson-body">
<p>Before anything else — the business name, the logo, the bank account — you need to understand <em>why</em> you are doing this.</p>
<p>Your "why" is the compass that guides your decisions when everything feels uncertain.</p>
<div class="story-box"><strong>🎙️ Rhianne's Story</strong>"What makes me come alive is a challenge, a problem to solve. My weeks are long, my days are longer, but I can truly say I have built something that is making a difference to lots of people."
<div class="video-placeholder"><div class="play-icon">▶️</div><p>Video: Rhianne on finding her why — coming soon</p></div>
</div>
<div class="key-point-box"><strong>🎯 Key Point</strong>Many people end up creating themselves a job — a hard one — rather than a business. Your why is what separates the people who push through from those who give up when it gets hard.</div>
</div>` },
        { title:'Finding Your Theme', html:`<div class="lesson-body">
<p>Look back at your life. You'll find patterns — consistent themes in how you engage with others, what energises you, what people come to you for.</p>
<h3>Questions to Sit With</h3>
<ul>
<li>What did it look like the last time you were truly happy?</li>
<li>What do people consistently come to you for?</li>
<li>If your closest friends were asked what you're brilliant at — what would they say?</li>
<li>What is your end game — not just for the business, but for your life?</li>
</ul>
<div class="story-box"><strong>🎙️ Rhianne's Theme</strong>"My theme came up as 'for others' — every activity had a theme of doing things for others. So I wove that into my business. What theme can you weave into yours?"</div>
<div class="tip-box"><strong>💡 Tip</strong>If you're struggling to see your own patterns, ask someone who knows you well. Friends and family often see our strengths far more clearly than we do.</div>
</div>` },
        { title:'Your Why Statement', html:`<div class="lesson-body">
<p>Your why statement doesn't need to be perfect — it will evolve. It just needs to be honest and specific enough to mean something.</p>
<h3>Two Useful Frameworks</h3>
<ul>
<li><strong>"I started this business because…"</strong></li>
<li><strong>"I help [audience] achieve [outcome] because…"</strong></li>
</ul>
<div class="example-box"><strong>🌟 Example</strong><p>Rhianne's why: <em>"I help businesses remove bottlenecks and work smarter — because I've seen firsthand how much time and money gets wasted without the right tools."</em></p></div>
<div class="tip-box"><strong>💡 Tip</strong>Write your why down and put it somewhere you'll see it. On a sticky note. As your phone wallpaper. When things get hard — and they will — having it visible matters.</div>
</div>`,
          exercise:{ title:'Your Why Statement', sub:"Complete these prompts — no wrong answers, just honest ones.",
            fields:[
              {label:'What did it look like the last time you were truly happy?', type:'textarea', ph:'Write freely — where were you, what were you doing?'},
              {label:'What do people consistently come to you for?', type:'textarea', ph:'Think about friends, colleagues, family…'},
              {label:'What theme runs through everything when you look back?', type:'text', ph:'e.g. "helping others", "building things", "solving problems"'},
              {label:'My Why (one or two sentences)', type:'textarea', ph:'"I started this business because…"'}
            ]}
        }
      ],
      quiz:[
        { q:'What is the primary purpose of defining your "why" before starting a business?',
          opts:['To complete the business plan requirement','To guide decision-making and sustain motivation when things get hard','To attract investors immediately','To set your pricing strategy'],
          correct:1, fb:'Your why acts as a compass. It keeps you aligned and motivated when things get difficult.' },
        { q:'Which of these best describes how to discover your personal "why"?',
          opts:['Copy a mission statement you admire','Research what competitors say about themselves','Identify consistent themes in your life — what energises you, what people come to you for','Focus on what is most profitable in your market'],
          correct:2, fb:'Your why comes from self-reflection — looking at patterns in what you love, what you\'re good at, and what drives you.' }
      ]
    },
    { id:'l01c', title:'The Jump — Pros, Cons & Strategies', time:'10 min', xp:20, hasQuiz:true,
      steps:[
        { title:'Before You Leap', html:`<div class="lesson-body">
<p>Making the leap into self-employment is one of the most exciting — and terrifying — decisions you'll make. The goal of this lesson isn't to talk you out of it. It's to make sure you go in prepared.</p>
<div class="story-box"><strong>🎙️ Rhianne's Story</strong>"Taking a leap into the unknown is nerve-wracking regardless of your plans. It's always important to have a savings buffer — usually 3 months is recommended. It took me about 9 months to start breaking even, so a little more cash at hand wouldn't do any harm!"
<div class="video-placeholder"><div class="play-icon">▶️</div><p>Video: Rhianne on making the jump — coming soon</p></div>
</div>
<div class="key-point-box"><strong>🎯 Key Point</strong>Being prepared is the key to your success. Most startup failures aren't caused by bad ideas — they're caused by people who weren't prepared for what the journey actually looks like.</div>
</div>` },
        { title:'Mapping Your Pros & Cons', html:`<div class="lesson-body">
<h3>Common Pros</h3>
<ul>
<li><strong>Freedom and autonomy</strong> — you control your time and who you work with</li>
<li><strong>Unlimited potential</strong> — your income ceiling is your own</li>
<li><strong>Purpose</strong> — doing work that aligns with what you believe in</li>
</ul>
<h3>Common Cons — and How to Counter Them</h3>
<ul>
<li><strong>Financial instability:</strong> Build a buffer. Know what you need each month before you start.</li>
<li><strong>Isolation:</strong> Find a networking group or accountability partner early.</li>
<li><strong>Wearing all the hats:</strong> Know which hats don't fit and plan to outsource those tasks.</li>
</ul>
<div class="tip-box"><strong>💡 Tip</strong>It's easy to write pros — they're the exciting bit. Spend more time on the cons. For each one, write a specific strategy to counteract it.</div>
</div>`,
          exercise:{ title:'Your Pros, Cons & Strategies', sub:"Be honest. The cons list is more valuable than the pros list.",
            fields:[{label:'How does thinking about your business plans make you feel?', type:'textarea', ph:'Excited? Terrified? Both? Write honestly.'}],
            tables:[
              {label:'Pros & Strategies', cols:['Pro','Strategy to support it'], rows:5},
              {label:'Cons & Strategies', cols:['Con','Strategy to counteract it'], rows:5}
            ]}
        }
      ],
      quiz:[
        { q:'Why is building strategies alongside your cons list more valuable than the cons list alone?',
          opts:['Investors require it','Strategies turn awareness into action — knowing a challenge exists is only useful if you have a plan to manage it','So you can share it with your accountant','It makes the cons list look more professional'],
          correct:1, fb:'Awareness without a plan is just worry. Strategies turn potential problems into things you\'re prepared for.' },
        { q:'Roughly how long did it take Rhianne to start breaking even?',
          opts:['1 month','3 months','9 months','2 years'],
          correct:2, fb:'Rhianne found it took about 9 months — which is why a meaningful financial buffer is so important.' }
      ]
    },
    { id:'l01d', title:'SWOT Analysis — Know Yourself First', time:'10 min', xp:20, hasQuiz:false,
      steps:[
        { title:'Why Start With You?', html:`<div class="lesson-body">
<p>Before you analyse your market, competition, or product, you need to understand the most important variable in your startup: <em>you</em>.</p>
<p>A personal SWOT — Strengths, Weaknesses, Opportunities, Threats — gives you an honest picture of what you're working with. This isn't about your business yet. It's about you as its founder.</p>
<div class="tip-box"><strong>💡 Tip</strong>Revisit this SWOT every 6–12 months. You'll be amazed how much it changes as you grow.</div>
</div>` },
        { title:'Strengths & Weaknesses', html:`<div class="lesson-body">
<h3>Strengths — Your Natural Advantages</h3>
<p>Think across four areas: Personal (resilience, empathy), Academic (critical thinking, research), Professional (leadership, communication), and Skills (writing, tech, networking).</p>
<div class="story-box"><strong>🎙️ Rhianne's Strengths</strong>"Personal: Adaptable, Friendly, Empathetic, Resilient. Professional: Leadership, Analytical, Communication. Skills: Documentation, Programming, Networking, Analysis."</div>
<h3>Weaknesses — Be Specific</h3>
<p>Vague weaknesses aren't useful. "I need to improve time management" is weak. "I consistently underestimate how long tasks take, which means I overcommit" is specific — and actionable.</p>
<div class="story-box"><strong>🎙️ Rhianne's Weaknesses</strong>"Personal: Oversharing, Procrastination, Impatience. Professional: Micro-management, Public Speaking."</div>
</div>` },
        { title:'Opportunities & Threats', html:`<div class="lesson-body">
<h3>Opportunities — External Conditions in Your Favour</h3>
<p>Opportunities are external — they exist in the world around you. Look for market gaps, emerging trends you're well-placed to capitalise on, and skills that are increasingly in demand.</p>
<div class="story-box"><strong>🎙️ Rhianne's Opportunity</strong>"Everyone is feeling overwhelmed, and employers aren't replacing staff who leave. Helping people use software more efficiently reduces that burden. That was my opportunity."</div>
<h3>Threats — What Could Work Against You</h3>
<p>Economic conditions, competitor moves, regulatory changes — and your own traits that might hold you back if left unchecked.</p>
</div>`,
          exercise:{ title:'Your Personal SWOT', sub:"Be honest. Ask someone who knows you well to review it — you'll be surprised what they add.",
            tables:[
              {label:'Strengths', cols:['Personal','Academic','Professional','Skills'], rows:3},
              {label:'Weaknesses', cols:['Personal','Academic','Professional','Skills'], rows:3},
              {label:'Opportunities', cols:['Personal','Academic','Professional','Skills'], rows:3},
              {label:'Threats', cols:['Personal','Academic','Professional','Skills'], rows:3}
            ]}
        }
      ]
    }
  ]
},

// ── 02 BUSINESS & OPERATIONS ────────────────────────────
{ num:'02', title:'The Business & Operations Process', icon:'🏢',
  lessons:[
    { id:'l02a', title:'Your Business Name & Structure', time:'10 min', xp:20, hasQuiz:true,
      steps:[
        { title:'Choosing Your Name', html:`<div class="lesson-body">
<p>Your business name is the first impression you make. It shapes perception before anyone has spoken to you, visited your website, or seen your work.</p>
<div class="story-box"><strong>🎙️ Rhianne's Story</strong>"Type on Data came about on a road trip. Do I regret the name? A little. But as time has gone on, people refer to 'Rhianne' rather than the business name anyway. The lesson: don't overthink it. Reputation goes a long way."</div>
<table class="framework-table"><tr><th>Type</th><th>Description</th><th>Example</th></tr>
<tr><td>Descriptive</td><td>Tells people what you do</td><td>Deliveroo, PayPal</td></tr>
<tr><td>Unique/Invented</td><td>Memorable and ownable</td><td>Google, Kodak</td></tr>
<tr><td>Founder Name</td><td>Builds personal brand</td><td>Disney, Ford</td></tr>
<tr><td>Acronym</td><td>Professional and concise</td><td>NASA, HSBC</td></tr>
</table>
<div class="key-point-box"><strong>⚠️ Watch Out</strong>Before you fall in love with a name, check: Companies House, the trademark register (gov.uk/search-for-trademark), and domain availability. Check all three before you tell anyone.</div>
</div>` },
        { title:'Choosing Your Business Structure', html:`<div class="lesson-body">
<table class="framework-table"><tr><th>Structure</th><th>What it means</th><th>Best for</th></tr>
<tr><td><strong>Sole Trader</strong></td><td>You and the business are legally the same. Simple to set up, but personally liable for all debts.</td><td>Testing the water, low-risk businesses, freelancers</td></tr>
<tr><td><strong>Limited Company</strong></td><td>A separate legal entity. Personal assets protected. More admin, more credibility.</td><td>B2B services, anyone expecting meaningful revenue quickly</td></tr>
<tr><td><strong>Partnership</strong></td><td>Two or more people sharing profits and liabilities.</td><td>Co-founders with complementary skills</td></tr>
</table>
<div class="story-box"><strong>🎙️ Rhianne's Choice</strong>"I went straight for a Limited Company and became VAT registered as I'm B2B. Look at your target market to help you make this decision."</div>
<div class="tip-box"><strong>💡 Tip</strong>Your structure isn't set in stone. Many businesses start as sole traders and transition to a limited company. Don't let this decision stall you — make it deliberately rather than by default.</div>
</div>`,
          exercise:{ title:'Your Name & Structure', sub:"Work through your options before committing.",
            tables:[{label:'Name Ideas by Theme', cols:['Theme','Name Ideas','Notes'], rows:4}],
            fields:[
              {label:'My chosen business name', type:'text', ph:'Or top 3 options'},
              {label:'Have you checked Companies House, trademarks, and domains?', type:'text', ph:'Yes / No / In progress'},
              {label:'Business structure I plan to use', type:'text', ph:'Sole Trader / Limited Company / Partnership'},
              {label:'Reason for this choice', type:'textarea', ph:''}
            ]}
        }
      ],
      quiz:[
        { q:'What is the main advantage of a Limited Company over a Sole Trader?',
          opts:['It costs less to set up','Your personal assets are protected from business debts','You pay less tax regardless of profit level','You don\'t need to register with HMRC'],
          correct:1, fb:'A Limited Company is a separate legal entity — your personal finances are protected if the business has debts or legal issues.' },
        { q:'Before settling on a business name, which check is NOT essential?',
          opts:['Companies House','Trademark register','Domain availability','Checking if a competitor uses a similar colour scheme'],
          correct:3, fb:'Colour schemes aren\'t registered. The three essential checks are Companies House, trademarks, and domain availability.' }
      ]
    },
    { id:'l02b', title:'Goal Setting & Business Planning', time:'12 min', xp:25, hasQuiz:true,
      steps:[
        { title:'Why Planning Matters', html:`<div class="lesson-body">
<p>A business plan isn't just a document for investors. It's a thinking tool that forces clarity on your vision, market, operations, and finances — before reality forces it on you.</p>
<h3>The One-Page Business Plan</h3>
<table class="framework-table"><tr><th>Section</th><th>What to cover</th></tr>
<tr><td>Problem</td><td>What problem does your business solve? Who has it?</td></tr>
<tr><td>Solution</td><td>How do you solve it better than alternatives?</td></tr>
<tr><td>Business Model</td><td>How will you make money?</td></tr>
<tr><td>Unique Value</td><td>What makes you the obvious choice?</td></tr>
<tr><td>Promotion</td><td>How will you reach customers?</td></tr>
<tr><td>Financials</td><td>What does it cost to run? What's your break-even?</td></tr>
</table>
</div>` },
        { title:'SMART Goal Setting', html:`<div class="lesson-body">
<p>Goals without structure are wishes. The SMART framework turns vague aspirations into things you can actually work towards and measure.</p>
<table class="framework-table"><tr><th>Letter</th><th>Means</th><th>Ask yourself</th></tr>
<tr><td class="letter-cell">S</td><td>Specific</td><td>What exactly will I achieve?</td></tr>
<tr><td class="letter-cell">M</td><td>Measurable</td><td>How will I know when I've achieved it?</td></tr>
<tr><td class="letter-cell">A</td><td>Achievable</td><td>Is this realistic given my resources?</td></tr>
<tr><td class="letter-cell">R</td><td>Relevant</td><td>Does this actually move my business forward?</td></tr>
<tr><td class="letter-cell">T</td><td>Time-bound</td><td>When will I achieve this by?</td></tr>
</table>
<div class="example-box"><strong>🌟 SMART Goal Example</strong><p><strong>Vague:</strong> "I want more clients."</p><p><strong>SMART:</strong> "I will sign 3 new clients in 90 days by attending 2 networking events per month and following up within 48 hours."</p></div>
<div class="tip-box"><strong>💡 CEO Time</strong>Block two hours every week to work <em>on</em> the business, not <em>in</em> it. Protect it like a client meeting — because it is one.</div>
</div>`,
          exercise:{ title:'Your Goals & Business Plan', sub:"Work through these. Come back and update as your thinking develops.",
            fields:[
              {label:'What problem does your business solve?', type:'textarea', ph:'Be specific — whose problem, what does it cost them?'},
              {label:'How do you solve it?', type:'textarea', ph:''},
              {label:'How will you make money?', type:'text', ph:'e.g. service fees, product sales, retainer, subscription'},
              {label:'Your 90-day SMART goal', type:'textarea', ph:'"I will… by… measured by…"'},
              {label:'Your 1-year goal', type:'textarea', ph:''},
              {label:'Your 5-year vision', type:'textarea', ph:'Keep it simple'}
            ]}
        }
      ],
      quiz:[
        { q:'What does the "M" in SMART goals stand for?',
          opts:['Motivating','Manageable','Measurable','Meaningful'],
          correct:2, fb:'Measurable — you need a way to know when you\'ve achieved the goal. Without this, you\'re just drifting.' },
        { q:'What is "CEO time"?',
          opts:['Time responding to customer emails','Time in board meetings','Scheduled time to work on the business — planning, strategy, reviewing progress','Time doing admin and invoicing'],
          correct:2, fb:'CEO time is protected thinking time — working on the business rather than in it. Most founders spend all their time doing tasks. The ones who scale protect time to think.' }
      ]
    }
  ]
},

// ── 03 MONEY ───────────────────────────────────────────
{ num:'03', title:'The Money Process', icon:'💰',
  lessons:[
    { id:'l03a', title:'Your Financial Foundation', time:'10 min', xp:20, hasQuiz:true,
      steps:[
        { title:'Setting Up Right', html:`<div class="lesson-body">
<p>Money is the oxygen of your business. You don't need to be an accountant — but you do need systems, clarity, and a good accountant from day one.</p>
<div class="key-point-box"><strong>🎯 The Golden Rule</strong>Separate your personal and business finances from day one. Even as a sole trader. It makes bookkeeping cleaner, tax simpler, and your business more professional.</div>
<h3>Finding the Right Accountant</h3>
<table class="framework-table"><tr><th>Service</th><th>What it covers</th><th>Need it?</th></tr>
<tr><td>Bookkeeping</td><td>Day-to-day recording — software often handles this now</td><td>Software + review</td></tr>
<tr><td>VAT Returns</td><td>Quarterly reporting if VAT registered</td><td>If VAT registered</td></tr>
<tr><td>Year-End Accounts</td><td>Annual statements and tax return</td><td>Yes</td></tr>
<tr><td>Tax Planning</td><td>Advice on structuring tax efficiently</td><td>Strongly recommended</td></tr>
</table>
<div class="tip-box"><strong>💡 Tip</strong>Many accountants offer monthly payment plans for a bundled package of services. Always ask if it's an option — it helps your cash flow enormously.</div>
</div>` },
        { title:'Software & Revenue Models', html:`<div class="lesson-body">
<h3>Accounting Software</h3>
<ul>
<li><strong>Xero</strong> — powerful, integrates with most banks, strong for growing businesses</li>
<li><strong>QuickBooks</strong> — user-friendly, good for sole traders and small teams</li>
<li><strong>FreeAgent</strong> — popular with freelancers, often included free with business bank accounts</li>
</ul>
<div class="story-box"><strong>🎙️ Rhianne Uses Xero</strong>"Getting your accounting software set up from the start saves an enormous amount of time sorting out a backlog later. Don't do it the hard way."</div>
<h3>Revenue Models</h3>
<table class="framework-table"><tr><th>Model</th><th>How it works</th><th>Good for</th></tr>
<tr><td>Service Fees</td><td>Charge for time or project deliverables</td><td>Consultants, freelancers</td></tr>
<tr><td>Retainer</td><td>Monthly recurring income for ongoing work</td><td>Service businesses wanting predictable revenue</td></tr>
<tr><td>Product Sales</td><td>One-off or repeat purchases</td><td>Makers, creators, ecommerce</td></tr>
<tr><td>Subscription</td><td>Regular payment for access or membership</td><td>SaaS, courses, communities</td></tr>
</table>
<div class="tip-box"><strong>💡 Tip</strong>Retainer income is the holy grail for service businesses — predictable monthly revenue makes everything else easier to plan. Build it in from the start if you can.</div>
</div>`,
          exercise:{ title:'Your Financial Setup', sub:"Track what's done and what still needs doing.",
            tables:[{label:'Financial Setup Checklist', cols:['Task','Status','Notes'], rows:6}],
            fields:[
              {label:'My revenue model(s)', type:'text', ph:'e.g. service fees + retainers'},
              {label:'My accounting software of choice', type:'text', ph:''},
              {label:'What I need from an accountant', type:'textarea', ph:'List the services you think you\'ll need'}
            ]}
        }
      ],
      quiz:[
        { q:'What is the most important financial habit to establish from day one?',
          opts:['Using spreadsheets to save money','Keeping personal and business finances completely separate','Waiting until year-end to sort your accounts','Invoicing clients in advance of all work'],
          correct:1, fb:'Separating finances from the start keeps bookkeeping clean, makes tax simpler, and looks more professional.' },
        { q:'What is a retainer model?',
          opts:['A penalty clause for late payment','Charging a fixed fee per project','Monthly recurring income for ongoing services','A deposit held until project completion'],
          correct:2, fb:'Retainer arrangements provide predictable monthly income — often the most valuable thing a service business can build.' }
      ]
    }
  ]
},

// ── 04 LEGAL ───────────────────────────────────────────
{ num:'04', title:'The Legal Process', icon:'⚖️',
  lessons:[
    { id:'l04a', title:'Legal Essentials for Startups', time:'12 min', xp:25, hasQuiz:true,
      steps:[
        { title:'Contracts — Never Skip This', html:`<div class="lesson-body">
<div class="key-point-box"><strong>🎯 Rule One</strong>Never start work without a signed contract. Not for friends. Not for family. Not for "a quick favour." A contract protects both parties and sets professional expectations before anything goes wrong.</div>
<h3>What Every Contract Should Cover</h3>
<ul>
<li><strong>Scope of work</strong> — exactly what you will and won't deliver</li>
<li><strong>Payment terms</strong> — amount, schedule, late payment clauses</li>
<li><strong>Intellectual property</strong> — who owns what you create</li>
<li><strong>Confidentiality</strong> — what stays between you and the client</li>
<li><strong>Termination</strong> — how either party can end the relationship</li>
<li><strong>Liability</strong> — what you're responsible for if things go wrong</li>
</ul>
<div class="tip-box"><strong>💡 Tip</strong>Templates exist for most service types. But if your work involves significant sums, complex IP, or high-stakes deliverables — get a solicitor to review it once. It's worth it.</div>
</div>` },
        { title:'Insurance, IP & GDPR', html:`<div class="lesson-body">
<h3>Insurance You Actually Need</h3>
<table class="framework-table"><tr><th>Type</th><th>What it covers</th><th>Required?</th></tr>
<tr><td>Professional Indemnity</td><td>Claims your advice caused financial loss</td><td>Strongly recommended for consultants</td></tr>
<tr><td>Public Liability</td><td>Third-party injury or property damage</td><td>Recommended if you meet clients</td></tr>
<tr><td>Employers Liability</td><td>Employee injury related to work</td><td><strong>Legally required with employees</strong></td></tr>
<tr><td>Cyber Liability</td><td>Data breach costs and ransomware</td><td>Worth considering if you handle client data</td></tr>
</table>
<h3>GDPR — Your Obligations</h3>
<ul>
<li>Register with the ICO (ico.org.uk) — legally required for most businesses</li>
<li>Have a Privacy Policy on your website</li>
<li>Get consent before adding anyone to a mailing list</li>
<li>Respond to data subject access requests within 30 days</li>
</ul>
</div>`,
          exercise:{ title:'Your Legal Checklist', sub:"Work through what you need and where you are with each.",
            tables:[{label:'Legal Setup', cols:['Item','Status','Action Needed'], rows:7}]}
        }
      ],
      quiz:[
        { q:'When should you start work with a new client?',
          opts:['As soon as they agree verbally','After receiving the first payment','Only after a signed contract is in place','Any time — contracts are just formalities'],
          correct:2, fb:'A signed contract protects both parties and establishes clear expectations. This protects you and your client.' },
        { q:'Which insurance is a legal requirement as soon as you have employees?',
          opts:['Professional Indemnity','Public Liability','Employers Liability','Cyber Liability'],
          correct:2, fb:'Employers Liability insurance is legally required from the moment you have employees. Failure to have it carries fines of up to £2,500 per day.' }
      ]
    }
  ]
},

// ── 05 PEOPLE ──────────────────────────────────────────
{ num:'05', title:'The People Process', icon:'👥',
  lessons:[
    { id:'l05a', title:'Team Building & HR Basics', time:'10 min', xp:20, hasQuiz:false,
      steps:[
        { title:'You Can\'t Do It All Forever', html:`<div class="lesson-body">
<p>Every founder starts doing everything themselves. At some point, that stops being scrappy and starts being a ceiling on your growth.</p>
<h3>Team or Outsource?</h3>
<ul>
<li>Is this task core to what my business delivers, or support work?</li>
<li>Does it need consistent availability, or is it project-based?</li>
<li>Can I afford to employ someone, or is outsourcing more flexible right now?</li>
</ul>
<div class="tip-box"><strong>💡 Tip</strong>Hire slowly and deliberately. A bad hire costs significantly more than a slow hire — in time, money, and team morale.</div>
</div>` },
        { title:'HR Basics', html:`<div class="lesson-body">
<p>The moment you hire anyone, you have HR obligations. Get ahead of them.</p>
<h3>When You Employ Someone, You Need:</h3>
<ul>
<li><strong>An employment contract</strong> — required by law, must be provided on or before their first day</li>
<li><strong>Right to work check</strong> — you must verify the right to work in the UK</li>
<li><strong>Employers Liability Insurance</strong> — legally required</li>
<li><strong>Payroll setup</strong> — register as an employer with HMRC</li>
<li><strong>Pension auto-enrolment</strong> — required for employees aged 22+ earning over £10,000/year</li>
</ul>
<div class="action-box"><strong>☑ Your Action</strong>Write out the roles your business needs now and in the next 12 months. For each: hire, outsource, or DIY for now?</div>
</div>`,
          exercise:{ title:'Your People Plan', sub:"Map out the roles your business needs.",
            tables:[{label:'Roles & Responsibilities', cols:['Role','Key Tasks','Hire / Outsource / DIY','Priority'], rows:6}]}
        }
      ]
    }
  ]
},

// ── 06 TECHNOLOGY ──────────────────────────────────────
{ num:'06', title:'The Technology Process', icon:'💻',
  lessons:[
    { id:'l06a', title:'Cybersecurity & Your Software Stack', time:'10 min', xp:20, hasQuiz:true,
      steps:[
        { title:'Why Small Businesses Are Prime Targets', html:`<div class="lesson-body">
<p>Small businesses are disproportionately targeted by cyberattacks — not because they hold the most valuable data, but because they're far less likely to have proper protections in place.</p>
<h3>The Three Most Common Threats</h3>
<ul>
<li><strong>Phishing:</strong> Fake emails designed to steal login credentials. Often convincingly impersonate banks or HMRC.</li>
<li><strong>Ransomware:</strong> Malicious software that encrypts your files and demands payment to restore them.</li>
<li><strong>Data breaches:</strong> Unauthorised access through hacking, weak passwords, or lost devices.</li>
</ul>
<div class="story-box"><strong>🎙️ Rhianne's Practice</strong>"I use two-factor authentication with all logins. I never leave my laptop unattended. These things became habit early and I haven't regretted it."</div>
</div>` },
        { title:'Security Basics & Software Stack', html:`<div class="lesson-body">
<h3>Non-Negotiable Security Habits</h3>
<ul>
<li><strong>Password manager</strong> — unique strong passwords for every account (1Password, Bitwarden)</li>
<li><strong>Two-factor authentication</strong> on every account that offers it</li>
<li><strong>Automatic updates</strong> — these patch known vulnerabilities</li>
<li><strong>Automated cloud backups</strong> — daily backups are your only real defence against ransomware</li>
</ul>
<h3>Essential Software for Most Startups</h3>
<table class="framework-table"><tr><th>Category</th><th>Options</th></tr>
<tr><td>Email & Calendar</td><td>Microsoft 365, Google Workspace</td></tr>
<tr><td>Accounting</td><td>Xero, QuickBooks, FreeAgent</td></tr>
<tr><td>Project Management</td><td>Trello, Asana, ClickUp, Notion</td></tr>
<tr><td>CRM</td><td>HubSpot (free tier), Pipedrive, Zoho</td></tr>
<tr><td>Design</td><td>Canva (excellent for non-designers)</td></tr>
<tr><td>Storage & Backup</td><td>OneDrive, Google Drive, Dropbox</td></tr>
</table>
</div>` }
      ],
      quiz:[
        { q:'Why are small businesses disproportionately targeted by cyberattacks?',
          opts:['They hold more valuable data','Attackers assume they\'re less likely to have proper protections','Small businesses are easier to find online','Hackers prefer local businesses'],
          correct:1, fb:'Small businesses often assume they\'re not worth targeting — which is exactly why they are. Basic protections make a significant difference.' },
        { q:'What is the most effective defence against ransomware?',
          opts:['A very long password','Paying the ransom quickly','Automated regular backups stored separately','Only opening emails from known senders'],
          correct:2, fb:'Backups are the only real defence. If files are encrypted, a recent backup means you can restore without paying.' }
      ]
    },
    { id:'l06b', title:'Your Website & SEO', time:'8 min', xp:15, hasQuiz:false,
      steps:[{ title:'Your Digital Home', html:`<div class="lesson-body">
<p>Your website is your 24/7 shop window — the one place online you fully own and control. Social platforms change; algorithms shift; accounts get restricted. Your website doesn't.</p>
<h3>Essential Pages Every Business Website Needs</h3>
<ul>
<li><strong>Home</strong> — clear statement of what you do and who you help, above the fold</li>
<li><strong>About</strong> — your story, credentials, why you're the right choice</li>
<li><strong>Services or Products</strong> — specific, not vague</li>
<li><strong>Contact</strong> — easy to find, multiple ways to reach you</li>
<li><strong>Privacy Policy</strong> — legally required if you collect any data</li>
</ul>
<h3>SEO Basics</h3>
<ul>
<li>Use the words your customers actually search for — not industry jargon</li>
<li>Write blog content that answers the questions your customers are asking</li>
<li>Get listed on Google Business Profile (free and highly effective)</li>
<li>Make sure your site loads quickly and works on mobile</li>
</ul>
<div class="action-box"><strong>☑ Your Action</strong>If your website doesn't exist yet: choose a platform (Squarespace, Wix, WordPress, Webflow) and register your domain today. If it exists: audit it against the checklist above.</div>
</div>` }]
    }
  ]
},

// ── 07 DATA ────────────────────────────────────────────
{ num:'07', title:'The Data Process', icon:'📊',
  lessons:[
    { id:'l07a', title:'Collect, Store & Use Your Data', time:'10 min', xp:20, hasQuiz:true,
      steps:[
        { title:'Why Data is Your Most Valuable Asset', html:`<div class="lesson-body">
<p>Most startup owners collect some data. Very few actually use it to make decisions. The ones who do have a significant competitive advantage.</p>
<table class="framework-table"><tr><th>Category</th><th>What to collect</th><th>Why it matters</th></tr>
<tr><td>Customer Data</td><td>Names, emails, preferences, purchase history</td><td>Personalisation, retention, lifetime value</td></tr>
<tr><td>Financial Data</td><td>Revenue, expenses, margins by product</td><td>Profitability, cash flow, pricing decisions</td></tr>
<tr><td>Marketing Data</td><td>Website traffic, email open rates, social engagement</td><td>Where to invest your time and budget</td></tr>
<tr><td>Operational Data</td><td>Time per task, delivery timelines, error rates</td><td>Efficiency, capacity planning</td></tr>
</table>
<div class="story-box"><strong>🎙️ Rhianne's Favourite Example</strong>"Currys examined their data, saw the impact of online shopping on footfall, and reacted by renting space to big brands — securing their high street survival. Data-driven decisions in action."</div>
</div>` },
        { title:'Using Data & GDPR Compliance', html:`<div class="lesson-body">
<h3>Turning Data into Action</h3>
<p>Review your key metrics monthly and ask one question: <em>what is this telling me to do differently?</em></p>
<table class="framework-table"><tr><th>What the data shows</th><th>What to investigate</th></tr>
<tr><td>Low email open rates</td><td>Test subject lines, check send time, review list quality</td></tr>
<tr><td>One product selling fast</td><td>Increase promotion, look at what's driving it</td></tr>
<tr><td>High engagement but low sales</td><td>Wrong audience, or website not converting</td></tr>
</table>
<h3>GDPR Obligations</h3>
<ul>
<li>Register with the ICO at ico.org.uk — legally required for most businesses</li>
<li>Have a clear Privacy Policy on your website</li>
<li>Get consent before adding anyone to a mailing list</li>
</ul>
</div>`,
          exercise:{ title:'Your Data Plan', sub:"Decide what you'll collect, how you'll store it, and which metrics matter most.",
            fields:[
              {label:'Top 3 metrics I\'ll track monthly', type:'textarea', ph:'e.g. monthly revenue, new enquiries, website visitors'},
              {label:'How will I collect customer data?', type:'textarea', ph:'e.g. website forms, booking system, CRM'},
              {label:'Have I registered with the ICO?', type:'text', ph:'Yes / No / In progress'}
            ]}
        }
      ],
      quiz:[
        { q:'You notice high Instagram engagement but low sales. What should you investigate first?',
          opts:['Post more frequently','Conclude social media doesn\'t work for you','Whether your audience is right, or your website is converting poorly','Lower your prices immediately'],
          correct:2, fb:'High engagement with low sales is a data signal. Something is disconnected between awareness and conversion — could be audience fit, weak website, or pricing friction.' }
      ]
    }
  ]
},

// ── 08 PRODUCT ─────────────────────────────────────────
{ num:'08', title:'The Product Process', icon:'📦',
  lessons:[
    { id:'l08a', title:'Product Development & SCAMPER', time:'12 min', xp:25, hasQuiz:true,
      steps:[
        { title:'Types of Products & Validation', html:`<div class="lesson-body">
<table class="framework-table"><tr><th>Type</th><th>Description</th><th>Considerations</th></tr>
<tr><td>Physical</td><td>Planners, clothing, packaged products</td><td>Manufacturing, inventory, fulfilment, quality control</td></tr>
<tr><td>Digital</td><td>eBooks, courses, templates, software</td><td>Create once, sell infinitely — lower cost to scale</td></tr>
<tr><td>Subscription</td><td>Memberships, SaaS, ongoing access</td><td>Recurring revenue — most valuable for cash flow</td></tr>
<tr><td>Hybrid</td><td>Physical product with digital add-ons</td><td>Increases perceived value — this course is exactly that</td></tr>
</table>
<h3>Validating Your Idea Before You Invest</h3>
<ul>
<li><strong>Pre-sale or waitlist</strong> — if people won't register before it exists, they probably won't buy when it does</li>
<li><strong>Landing page</strong> — describe the product and track sign-ups</li>
<li><strong>Competitor research</strong> — who else is doing this and what are reviews saying?</li>
</ul>
</div>` },
        { title:'The SCAMPER Method', html:`<div class="lesson-body">
<p>SCAMPER is a creative thinking framework for developing new products or improving existing ones. You take a product, process, or idea and run it through seven thinking prompts.</p>
<table class="framework-table">
<tr><th class="letter-cell">S</th><th>Substitute</th><td>What can you replace or swap out? Materials, processes, components?</td></tr>
<tr><td class="letter-cell">C</td><th>Combine</th><td>What ideas or products can you merge to create something new?</td></tr>
<tr><td class="letter-cell">A</td><th>Adapt</th><td>What can you borrow from another context or industry?</td></tr>
<tr><td class="letter-cell">M</td><th>Modify</th><td>Can you change the size, format, or function?</td></tr>
<tr><td class="letter-cell">P</td><th>Put to Another Use</th><td>Could this be used differently or for a different market?</td></tr>
<tr><td class="letter-cell">E</td><th>Eliminate</th><td>What can you remove, simplify, or streamline?</td></tr>
<tr><td class="letter-cell">R</td><th>Reverse</th><td>What if you reversed the order, direction, or perspective?</td></tr>
</table>
<div class="example-box"><strong>🌟 SCAMPER Applied — Customer Onboarding</strong>
<p><strong>Substitute:</strong> Replace manual forms with an automated chatbot</p>
<p><strong>Combine:</strong> Merge onboarding with product training in one session</p>
<p><strong>Adapt:</strong> Use gamification techniques from apps to boost engagement</p>
<p><strong>Modify:</strong> Simplify the whole process to 3 clear steps</p>
<p><strong>Put to another use:</strong> Use onboarding sessions to identify upsell opportunities</p>
<p><strong>Eliminate:</strong> Remove unnecessary forms and steps nobody reads</p>
<p><strong>Reverse:</strong> Start from the end goal — what does success look like? Build backwards.</p>
</div>
<div class="tip-box"><strong>💡 Tips for SCAMPER</strong>Don't aim for perfect ideas — let them flow. Apply it to one specific part of a product or process at a time. Involve different people for wider perspectives.</div>
</div>`,
          exercise:{ title:'Apply SCAMPER to Your Product', sub:"Pick one product or process and run it through all seven prompts.",
            fields:[{label:'The product or process I\'m applying SCAMPER to', type:'text', ph:'e.g. "My client onboarding process" or "My online course"'}],
            tables:[{label:'SCAMPER Worksheet', cols:['Prompt','Your ideas'], rows:7, prefill:['S — Substitute','C — Combine','A — Adapt','M — Modify','P — Put to Another Use','E — Eliminate','R — Reverse / Rearrange']}]}
        },
        { title:'Pricing Your Product', html:`<div class="lesson-body">
<h3>The Four Main Pricing Strategies</h3>
<table class="framework-table"><tr><th>Strategy</th><th>How it works</th><th>Best for</th></tr>
<tr><td>Cost-Based</td><td>Calculate costs, add a margin</td><td>Physical products with clear cost structures</td></tr>
<tr><td>Value-Based</td><td>Price based on the outcome you deliver</td><td>Service businesses and transformative products</td></tr>
<tr><td>Competitor-Based</td><td>Anchor to market rates</td><td>Commoditised markets — use with caution</td></tr>
<tr><td>Premium</td><td>Deliberately high pricing to signal quality</td><td>Strong brand with clear proof points</td></tr>
</table>
<div class="example-box"><strong>🌟 Pricing Calculation</strong><p>Total cost per planner: £6.50. Desired margin: 60%.</p><p>Sale price = £6.50 ÷ (1 - 0.60) = <strong>£16.25</strong></p><p>For direct-to-consumer products, aim for 50–70% gross margin. Wholesale typically needs 100–150% markup on cost.</p></div>
<h3>Psychological Pricing</h3>
<ul>
<li><strong>Charm pricing</strong> — £9.99 instead of £10. Feels meaningfully cheaper.</li>
<li><strong>Anchoring</strong> — Show original price (£59) then sale price (£39).</li>
<li><strong>Tiered pricing</strong> — Basic, Pro, Premium. Most people choose the middle.</li>
<li><strong>Urgency</strong> — "Only 3 left" or "Offer ends midnight Sunday."</li>
</ul>
</div>` }
      ],
      quiz:[
        { q:'What does the "S" in SCAMPER stand for?',
          opts:['Simplify','Substitute','Scale','Standardise'],
          correct:1, fb:'Substitute — asking what you can replace or swap out. Often the prompt that generates the most immediately actionable ideas.' },
        { q:'What is value-based pricing?',
          opts:['Adding a percentage margin to your production costs','Charging the same as your nearest competitor','Setting the lowest price to win customers','Pricing based on the perceived outcome and value you deliver to the customer'],
          correct:3, fb:'Value-based pricing reflects what the result is worth to the customer — not what it cost you to deliver. Often the right approach for service businesses.' },
        { q:'A product costs £8.00 to make and ship. You want a 60% gross margin. What should the sale price be?',
          opts:['£12.80','£16.80','£20.00','£13.33'],
          correct:2, fb:'£8.00 ÷ (1 - 0.60) = £20.00. Always check this against what the market will actually pay.' }
      ]
    }
  ]
},

// ── 09 SERVICE ─────────────────────────────────────────
{ num:'09', title:'The Service Process', icon:'🤝',
  lessons:[
    { id:'l09a', title:'Designing & Delivering Your Service', time:'10 min', xp:20, hasQuiz:false,
      steps:[{ title:'Service Design & Delivery', html:`<div class="lesson-body">
<p>A service business lives or dies on its delivery. You can have brilliant expertise — but if the experience of working with you is confusing or inconsistent, clients won't return and won't refer.</p>
<h3>Map Your Service From First to Last</h3>
<table class="framework-table"><tr><th>Stage</th><th>What happens</th><th>Client experience</th><th>Could improve?</th></tr>
<tr><td>First contact</td><td>Enquiry via website/email/referral</td><td></td><td></td></tr>
<tr><td>Discovery call</td><td>Understanding their needs</td><td></td><td></td></tr>
<tr><td>Proposal</td><td>Scope, timeline, price</td><td></td><td></td></tr>
<tr><td>Contract</td><td>Sign-off before work begins</td><td></td><td></td></tr>
<tr><td>Delivery</td><td>The actual work</td><td></td><td></td></tr>
<tr><td>Completion</td><td>Handover, review, feedback</td><td></td><td></td></tr>
<tr><td>Follow-up</td><td>Staying in touch, referrals</td><td></td><td></td></tr>
</table>
<div class="action-box"><strong>☑ Your Action</strong>Write your standard onboarding checklist — the steps you'll complete every time you take on a new client. Consistency is what turns a great first project into a long-term relationship.</div>
</div>` }]
    }
  ]
},

// ── 10 MARKETING ───────────────────────────────────────
{ num:'10', title:'The Marketing Process', icon:'🎯',
  lessons:[
    { id:'l10a', title:'Brand, USP & Ideal Customer', time:'14 min', xp:30, hasQuiz:true,
      steps:[
        { title:'What Your Brand Actually Is', html:`<div class="lesson-body">
<p>Your brand is not your logo. It's the feeling someone gets when they interact with your business — before, during, and after they buy.</p>
<h3>Your Brand Identity Checklist</h3>
<table class="framework-table"><tr><th>Element</th><th>What to define</th></tr>
<tr><td>Logo</td><td>Primary, secondary simplified, minimum size rules</td></tr>
<tr><td>Colours</td><td>Primary palette (2–3 colours), secondary, hex codes</td></tr>
<tr><td>Typography</td><td>Heading font, body font, where each is used</td></tr>
<tr><td>Photography style</td><td>Candid, professional, lifestyle — be consistent</td></tr>
<tr><td>Tone of voice</td><td>How your brand "sounds" — professional, friendly, direct?</td></tr>
<tr><td>Brand promise</td><td>What customers can always expect from you</td></tr>
</table>
<div class="story-box"><strong>🎙️ Rhianne's Brand Story</strong>"I saw businesses struggle with identity, purpose and direction, and knew there had to be a better way — so I built The Success Toolkits."
<div class="video-placeholder"><div class="play-icon">▶️</div><p>Video: Building The Success Toolkits brand — coming soon</p></div>
</div>
</div>` },
        { title:'Your Ideal Customer & USP', html:`<div class="lesson-body">
<p>"Everyone" is not a target market. The more specifically you can define your ideal customer, the more powerfully your marketing will speak to them.</p>
<div class="example-box"><strong>🌟 Example Persona: "Corporate Claire"</strong>
<p><strong>Age:</strong> 38 | <strong>Role:</strong> Senior manager, 15 years in finance, thinking about leaving</p>
<p><strong>Goal:</strong> Build a business she controls, without starting from scratch</p>
<p><strong>Fears:</strong> Financial insecurity, wasting money, not knowing what she doesn't know</p>
<p><strong>Where she spends time:</strong> LinkedIn, business podcasts, local networking events</p>
</div>
<h3>Your USP</h3>
<p>A real USP is specific, demonstrable, and meaningful to your ideal customer. "Great quality" and "excellent service" are not USPs — every competitor claims them.</p>
<table class="framework-table"><tr><th>Weak USP</th><th>Strong USP</th></tr>
<tr><td>"High quality service"</td><td>"We respond to every client query within 4 hours — guaranteed"</td></tr>
<tr><td>"Affordable prices"</td><td>"Flat-fee accounting with no hidden charges — ever"</td></tr>
<tr><td>"Experienced team"</td><td>"Every project is led by a director — no handoffs to juniors"</td></tr>
</table>
</div>`,
          exercise:{ title:'Your Brand & Marketing Foundation', sub:"Build out the core elements of your marketing identity.",
            fields:[
              {label:'My brand promise', type:'textarea', ph:'What can customers always expect from you?'},
              {label:'My tone of voice (3 words)', type:'text', ph:'e.g. "Professional, Direct, Warm"'},
              {label:'My ideal customer — describe them in a paragraph', type:'textarea', ph:'Who are they, what do they struggle with, what do they want?'},
              {label:'My USP — one specific sentence', type:'textarea', ph:'"Unlike [competitors], we [unique differentiator] so that [benefit]"'},
              {label:'My tagline or strapline', type:'text', ph:'3–7 words that capture what you stand for'}
            ]}
        }
      ],
      quiz:[
        { q:'Why is "everyone" a poor target market definition?',
          opts:['It\'s too expensive to reach such a large group','Without specificity, your marketing speaks to no one powerfully enough to drive action','Most products can\'t actually serve everyone','Only large companies should target broad audiences'],
          correct:1, fb:'The more specific you are, the more powerfully your message resonates. Paradoxically, the more people it actually reaches.' },
        { q:'Which of these is a genuine USP?',
          opts:['"We deliver high quality work"','"We\'ve been in business since 2010"','"We respond to every enquiry within 2 hours, guaranteed"','"We care about our customers"'],
          correct:2, fb:'A real USP is specific, verifiable, and meaningfully different. The 2-hour guarantee is specific and demonstrable. The others are vague claims every competitor makes.' }
      ]
    }
  ]
},

// ── 11 SOCIALS ─────────────────────────────────────────
{ num:'11', title:'The Socials & Content Process', icon:'📱',
  lessons:[
    { id:'l11a', title:'Content Strategy & Social Media', time:'10 min', xp:20, hasQuiz:true,
      steps:[
        { title:'Content Pillars & Platforms', html:`<div class="lesson-body">
<p>Social media is the most misunderstood marketing tool available to startups. The goal isn't to be everywhere, posting constantly. It's to be consistently valuable in the right places.</p>
<h3>Content Pillars</h3>
<p>Content pillars are the 3–5 recurring themes your content returns to. They prevent the daily "what do I post?" panic.</p>
<div class="example-box"><strong>🌟 Example Pillars for a Business Coach</strong>
<p>1. Behind the scenes — building in public, showing the reality</p>
<p>2. Practical tips — short, immediately actionable advice</p>
<p>3. Client wins — social proof and testimonials (with permission)</p>
<p>4. Personal story — your journey, your values</p>
</div>
<h3>Choosing Your Platform</h3>
<table class="framework-table"><tr><th>Platform</th><th>Best for</th><th>Format</th></tr>
<tr><td>LinkedIn</td><td>B2B, professional services, thought leadership</td><td>Articles, text posts, carousels</td></tr>
<tr><td>Instagram</td><td>Visual brands, lifestyle, community building</td><td>Reels, stories, carousels</td></tr>
<tr><td>TikTok</td><td>Short-form video, fast organic growth</td><td>Short video only</td></tr>
<tr><td>Facebook</td><td>Community groups, local businesses</td><td>Groups, events, posts</td></tr>
</table>
<div class="tip-box"><strong>💡 Start With One Platform</strong>Doing one platform well beats five platforms poorly. Pick where your ideal customer spends time and commit for 90 days before expanding.</div>
</div>` },
        { title:'Calls to Action & Growing Your Following', html:`<div class="lesson-body">
<h3>Every Piece of Content Needs a Purpose</h3>
<table class="framework-table"><tr><th>Stage</th><th>Appropriate CTA</th></tr>
<tr><td>Just discovered you</td><td>"Follow for more" / "Save this post"</td></tr>
<tr><td>Starting to trust you</td><td>"Download my free guide" / "Join my mailing list"</td></tr>
<tr><td>Considering buying</td><td>"Book a discovery call" / "Join the waitlist"</td></tr>
<tr><td>Ready to buy</td><td>"Buy now" / "Enrol today"</td></tr>
</table>
<div class="story-box"><strong>🎙️ Rhianne on Advertising</strong>"Start testing organically first before paying for anything. A friend of mine blew through a £2k sign-up bonus in the first month when it should have lasted a year. He didn't define his spend properly. Check and check again."</div>
</div>`,
          exercise:{ title:'Your Content Strategy', sub:"Get your social media strategy on paper before you start posting.",
            fields:[
              {label:'My primary platform', type:'text', ph:''},
              {label:'My 3 content pillars', type:'textarea', ph:'1.\n2.\n3.'},
              {label:'My CTA for people just discovering me', type:'text', ph:''},
              {label:'My CTA for people ready to buy', type:'text', ph:''}
            ]}
        }
      ],
      quiz:[
        { q:'What is a content pillar?',
          opts:['A specific post format like a carousel','A recurring theme your content consistently returns to','The most popular post you\'ve ever created','A paid advertising campaign'],
          correct:1, fb:'Content pillars are recurring themes that keep your strategy consistent and prevent the "what should I post?" problem.' },
        { q:'Why is it better to focus on one or two platforms when starting out?',
          opts:['Some platforms charge per post','Fewer platforms means less legal exposure','Quality and consistency on fewer platforms significantly outperforms thin presence across many','Algorithms punish multi-platform businesses'],
          correct:2, fb:'Quality beats quantity. Building a real audience on one platform takes sustained effort. Spreading that effort across five means none of them get what they need.' }
      ]
    }
  ]
},

// ── 12 SALES ───────────────────────────────────────────
{ num:'12', title:'The Sales Process', icon:'📈',
  lessons:[
    { id:'l12a', title:'Your Sales Engine', time:'12 min', xp:25, hasQuiz:false,
      steps:[
        { title:'The Sales Funnel', html:`<div class="lesson-body">
<table class="framework-table"><tr><th>Stage</th><th>What's happening</th><th>Your job</th></tr>
<tr><td>Awareness</td><td>They've just discovered you exist</td><td>Social media, SEO, PR, word of mouth</td></tr>
<tr><td>Interest</td><td>They're curious, exploring</td><td>Blogs, lead magnets, newsletters</td></tr>
<tr><td>Consideration</td><td>Thinking about buying</td><td>Testimonials, case studies, FAQs, demos</td></tr>
<tr><td>Decision</td><td>Ready, just need to commit</td><td>Clear offer, easy checkout, guarantee</td></tr>
<tr><td>Loyalty</td><td>They've bought — now keep them</td><td>Follow-up, reviews, loyalty offers</td></tr>
</table>
<div class="tip-box"><strong>💡 The Leaky Funnel</strong>Most sales problems aren't at the top of the funnel — they're in the middle. Find where people drop off. That's your biggest revenue opportunity.</div>
</div>` },
        { title:'Networking & The Pitch', html:`<div class="lesson-body">
<div class="story-box"><strong>🎙️ Rhianne on Networking</strong>"Networking in my early days was a lifeline — my business board when I needed it. One of the main things that becomes apparent: people buy from people. Letting people know you and what you stand for will help them buy into your company."
<div class="video-placeholder"><div class="play-icon">▶️</div><p>Video: Rhianne on building a network from scratch — coming soon</p></div>
</div>
<h3>Your Elevator Pitch</h3>
<div class="example-box"><strong>🌟 Pitch Formula</strong><p>"You know how [customer problem]? Well, at [your business], we [solution] so you can [benefit]."</p><p><em>Example: "You know how small business owners spend hours on admin that has nothing to do with their actual business? Well, at Type on Data, we automate those processes so founders can spend their time on things that actually drive growth."</em></p></div>
</div>`,
          exercise:{ title:'Your Sales Process', sub:"Map out how customers move through your funnel.",
            fields:[
              {label:'How do most customers currently find you?', type:'text', ph:''},
              {label:'Where do you think people drop out of your funnel?', type:'textarea', ph:''},
              {label:'Write your elevator pitch', type:'textarea', ph:'"You know how [problem]? Well, at [business], we [solution] so you can [benefit]."'},
              {label:'3 networking events or groups I\'ll commit to this quarter', type:'textarea', ph:'1.\n2.\n3.'}
            ]}
        }
      ]
    }
  ]
},

// ── 13 CUSTOMER ────────────────────────────────────────
{ num:'13', title:'The Customer Process', icon:'⭐',
  lessons:[
    { id:'l13a', title:'Customer Journey & Feedback', time:'10 min', xp:20, hasQuiz:true,
      steps:[
        { title:'Mapping the Customer Journey', html:`<div class="lesson-body">
<p>Getting a customer is hard. Keeping them is where the real value is. A business focused on existing customers will always outperform one that only chases new ones — because retention is cheaper than acquisition, and loyal customers refer.</p>
<table class="framework-table"><tr><th>Stage</th><th>Touchpoints</th><th>Opportunities</th></tr>
<tr><td>Awareness</td><td>Social, search, referral</td><td>First impression counts — is it a good one?</td></tr>
<tr><td>Consideration</td><td>Website, reviews, social proof</td><td>Make it easy to find the answers they need</td></tr>
<tr><td>Purchase</td><td>Checkout, booking, contract</td><td>Frictionless process, build confidence</td></tr>
<tr><td>Onboarding</td><td>Welcome email, first session</td><td>Set expectations, make them feel valued</td></tr>
<tr><td>Loyalty</td><td>Follow-up, reviews, offers</td><td>Ask for reviews, reward loyalty, stay in touch</td></tr>
</table>
</div>` },
        { title:'Getting & Handling Feedback', html:`<div class="lesson-body">
<h3>Getting Feedback Systematically</h3>
<ul>
<li><strong>Post-project survey</strong> — 3–5 questions, no more</li>
<li><strong>Review requests</strong> — ask at the moment of highest satisfaction</li>
<li><strong>Net Promoter Score</strong> — "How likely are you to recommend us? 0–10." Simple and powerful.</li>
</ul>
<div class="story-box"><strong>🎙️ Rhianne on Negative Feedback</strong>"All feedback is good feedback. Responding to a negative review with the same amount of emotion as the reviewer is guaranteed to escalate the problem. Be factual. Find a solution where you can. They're reacting to how they feel in the moment — not to you personally."</div>
<h3>Handling Negative Feedback</h3>
<ol>
<li>Respond within 24–48 hours</li>
<li>Stay calm and professional — avoid defensive language</li>
<li>Acknowledge and thank them</li>
<li>Investigate and resolve</li>
<li>Learn — if 3 or more people say the same thing, that's a pattern</li>
</ol>
<div class="key-point-box"><strong>🎯 The Trust Paradox</strong>A customer whose complaint was handled brilliantly is often more loyal than one who never had a problem. How you handle things going wrong defines your reputation more than things going right.</div>
</div>`,
          exercise:{ title:'Your Customer Feedback Plan', sub:"Build a systematic approach.",
            fields:[
              {label:'3 touchpoints where I\'ll ask for feedback', type:'textarea', ph:'e.g. end of project, 30 days after purchase, after each course module'},
              {label:'My feedback method(s)', type:'text', ph:'e.g. Google Form + email request for Google review'},
              {label:'Draft response to a negative review', type:'textarea', ph:'"Thank you for your feedback. I\'m sorry to hear… I\'d love to discuss this further…"'}
            ]}
        }
      ],
      quiz:[
        { q:'A customer whose complaint was handled brilliantly is often more loyal than one who never had a problem. Why?',
          opts:['Because complaints are always exaggerated','Because they\'ve seen how you behave under pressure — that builds a different kind of trust','Because negative reviews help your SEO','Because they feel guilty about complaining'],
          correct:1, fb:'When a complaint is resolved well, the customer has direct experience of your character under pressure. That builds trust that\'s hard to manufacture any other way.' }
      ]
    }
  ]
},

// ── 14 AI ──────────────────────────────────────────────
{ num:'14', title:'The AI Process', icon:'🤖',
  lessons:[
    { id:'l14a', title:'AI for Your Startup', time:'8 min', xp:20, hasQuiz:true,
      steps:[{ title:'The Living Chapter', html:`<div class="lesson-body">
<p>Artificial Intelligence is transforming how businesses are built and run — from automating repetitive tasks to generating content, analysing data, and enhancing decision-making. As a startup, AI tools give you capabilities that would previously have required a full team.</p>
<div class="key-point-box"><strong>📡 This is a Living Chapter</strong>The AI landscape evolves faster than any printed material can keep up with. Visit <strong>TheSuccessToolkits.com</strong> for the most current version of this chapter, updated regularly as new tools emerge.</div>
<h3>How AI Can Help Your Startup Right Now</h3>
<table class="framework-table"><tr><th>Area</th><th>How AI helps</th><th>Tools to explore</th></tr>
<tr><td>Writing & Content</td><td>Drafting emails, blogs, social posts, proposals</td><td>Claude, ChatGPT, Notion AI</td></tr>
<tr><td>Research</td><td>Summarising information, competitor analysis</td><td>Claude, Perplexity</td></tr>
<tr><td>Design</td><td>Graphics, presentations, marketing materials</td><td>Canva AI, Adobe Firefly</td></tr>
<tr><td>Automation</td><td>Connecting tools, automating repetitive workflows</td><td>Zapier, Power Automate, Make</td></tr>
<tr><td>Data & Analysis</td><td>Making sense of business data, spotting trends</td><td>Claude, ChatGPT with data upload</td></tr>
</table>
<div class="example-box"><strong>🌟 Better AI Prompts</strong><p><strong>Weak:</strong> "Write a LinkedIn post"</p><p><strong>Strong:</strong> "Write a LinkedIn post for my business coaching service targeting women leaving corporate. Warm and direct tone. Share one practical tip about setting up a business bank account. End with a question to drive comments. Around 150 words."</p></div>
<div class="tip-box"><strong>💡 The Golden Rule</strong>AI amplifies your thinking — it doesn't replace your judgement, relationships, or expertise. Always review output before publishing. Your voice is your competitive advantage.</div>
</div>` }],
      quiz:[
        { q:'What is the most important thing to do with AI-generated content before publishing?',
          opts:['Run it through a plagiarism checker','Publish immediately to save time','Review, refine, and ensure it sounds like you — your voice is your competitive advantage','Ask the AI to check it again'],
          correct:2, fb:'AI output is a starting point. Your voice, perspective, and judgement are what make content distinctly yours.' },
        { q:'What makes a strong AI prompt?',
          opts:['Keeping it as short as possible','Being vague so the AI has creative freedom','Providing specific context about your business, audience, tone, and what you want','Using technical language'],
          correct:2, fb:'The more context you give, the more useful the output. Brief it like a capable assistant who knows nothing about your business — with detail, purpose, and examples.' }
      ]
    }
  ]
}

]; // end MODULES