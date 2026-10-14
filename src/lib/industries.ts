/**
 * Industries ADL builds for. Single source for the nav dropdown, the
 * /industries/[slug] pages and the sitemap — add or rename an industry here only.
 *
 * An industry without `content` renders as a noindex placeholder and stays
 * out of the sitemap. Adding `content` publishes it: the page becomes
 * indexable and sitemap.ts picks it up automatically.
 */

export interface IndustryContent {
  /** Meta description — max ~155 characters. */
  description: string;
  intro: { headline: string; body: string };
  services: { heading: string; items: { title: string; description: string }[] };
}

export interface Industry {
  slug: string;
  name: string;
  content?: IndustryContent;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'legal',
    name: 'Legal',
    content: {
      description:
        'AI systems for law firms and in-house legal teams: intake, deadline tracking, searchable firm knowledge and first-pass document review.',
      intro: {
        headline: 'Give your lawyers back the hours admin takes.',
        body:
          "Law firms and in-house legal teams lose hours every week to intake forms, deadline tracking, and digging through past matters for work that's already been done. We build AI systems that take that load off your team, so their hours go back to client work.",
      },
      services: {
        heading: 'What we build for legal teams',
        items: [
          {
            title: 'Client intake and matter setup',
            description:
              'New enquiries arrive by email, phone and web form, and someone re-types every one. We build an intake system that captures the details once, runs the first checks, and opens the matter for a lawyer to review.',
          },
          {
            title: 'Deadline and renewal tracking',
            description:
              'Filing dates, contract renewals and follow-ups live in calendars and spreadsheets that one person keeps up to date. We build a system that tracks every date, assigns an owner, and chases it automatically before it’s missed.',
          },
          {
            title: 'Searchable firm knowledge',
            description:
              'The clause, the precedent, the answer to “have we done this before?” is already in your files. We make it searchable in plain English, so nobody rebuilds work the firm has already done.',
          },
          {
            title: 'Document review and first drafts',
            description:
              'Every contract and document starts with someone reading it cold. We build AI that does the first pass, pulling out key terms, flagging unusual clauses and preparing a first draft, so your lawyers review and decide instead of starting from scratch.',
          },
        ],
      },
    },
  },
  {
    slug: 'real-estate',
    name: 'Real Estate and Property Management',
    content: {
      description:
        'AI systems for brokerages and property managers: one-entry listings, leads that stay with your agents, automatic seller reports and tenant follow-up.',
      intro: {
        headline: 'Spend your time closing deals, not re-typing listings.',
        body:
          'Brokerages and property managers run on a patchwork of listing tools, spreadsheets and inboxes, so the same details get entered three times, leads slip away, and every update to a seller or tenant is written by hand. We build AI systems that connect it all and take the busywork off your team.',
      },
      services: {
        heading: 'What we build for real estate teams',
        items: [
          {
            title: 'One entry for every listing',
            description:
              'Listing details, photos and status changes get typed into the MLS, then your website, then your CRM. We connect them so a listing is entered once and stays current everywhere.',
          },
          {
            title: 'Leads that stay with your agents',
            description:
              "Enquiries on your own listings end up with outside agents or sit unanswered in an inbox. We build lead capture that sends every enquiry to the right agent. An AI assistant answers common buyer questions from the listing's own documents.",
          },
          {
            title: 'Seller and owner reports that compile themselves',
            description:
              'Weekly updates for sellers and property owners take hours to pull together. We build reports that gather views, showings and activity automatically and send on schedule, with room for an agent to add a personal note.',
          },
          {
            title: 'Maintenance, leases and tenant follow-up',
            description:
              'Repair requests, lease renewals and tenant questions are scattered across emails and spreadsheets. We build a system that logs every request, assigns an owner, and chases open jobs and upcoming renewals before they’re overdue.',
          },
        ],
      },
    },
  },
  {
    slug: 'logistics-supply-chain',
    name: 'Logistics and Supply Chain',
    content: {
      description:
        'AI systems for freight, warehouse and distribution teams: one view of every shipment, early delay alerts, paperwork filled once, and every issue owned.',
      intro: {
        headline: 'Know a shipment is late before your customer calls.',
        body:
          "Freight brokers, warehouses and distributors track orders across carrier portals, spreadsheets and email threads. Dispatchers spend the day chasing status updates, the same details get re-typed onto every document, and a delay often surfaces when the customer calls to ask where their order is. We build AI systems that pull it together, so your team works the exceptions instead of chasing updates.",
      },
      services: {
        heading: 'What we build for logistics teams',
        items: [
          {
            title: 'Every shipment in one view',
            description:
              "Status lives in carrier portals, tracking emails and someone's spreadsheet, so answering “where is it?” means checking five places. We build one live view of every order and shipment, updated automatically from the systems you already use.",
          },
          {
            title: 'Delays flagged before the customer calls',
            description:
              'A missed pickup or a held container usually comes to light when the customer complains. We build alerts that check every shipment against its schedule, flag the ones slipping, and tell the right person while there’s still time to fix it.',
          },
          {
            title: 'Shipping paperwork without the re-typing',
            description:
              'Bills of lading, customs forms, invoices and proof of delivery repeat the same details, typed by hand each time. We build AI that reads the order once and fills in each document, ready for your team to check and send.',
          },
          {
            title: 'Every exception has an owner',
            description:
              'Short shipments, damaged goods and address problems get raised by email and forgotten when the thread goes quiet. We build a shared list where every exception has an owner and a due date, and open issues are chased automatically until they’re closed.',
          },
        ],
      },
    },
  },
  {
    slug: 'food-and-drinks',
    name: 'Food and Drinks',
    content: {
      description:
        'AI tools for restaurant and café groups: live stock and supplier orders, waste caught early, rotas drafted from bookings, and one report for every site.',
      intro: {
        headline: 'Your managers belong on the floor, not in spreadsheets.',
        body:
          "Restaurant and café groups run stock counts on clipboards, supplier orders by text and staff rotas in spreadsheets. Managers spend their evenings on admin, and nobody sees what each site is wasting until the month's accounts close. We build AI tools that join it up, so your managers' time goes back to guests and staff.",
      },
      services: {
        heading: 'What we build for restaurant and café groups',
        items: [
          {
            title: 'Stock and supplier orders in one place',
            description:
              'Counts happen on paper, orders go out by text, and every site over-orders to be safe. We build one live stock record per site that drafts the next order from what was actually used, ready for the manager to approve and send.',
          },
          {
            title: 'Waste and margin caught early',
            description:
              'Waste, supplier price rises and dishes that lose money only show up when the accounts close. We build weekly checks that compare what each site bought with what it sold, and flag the item, supplier or site that’s drifting.',
          },
          {
            title: 'Rotas that fit the week ahead',
            description:
              'Rotas get copied from last week, so some shifts run short and others are overstaffed. We build a rota draft for each site from bookings and past sales, ready for the manager to adjust and publish.',
          },
          {
            title: 'One report across every site',
            description:
              'Comparing sites means someone pulling sales, staff hours and stock figures from separate systems into a spreadsheet. We build a report that assembles itself every week, so you can see which sites are on track and which need a visit.',
          },
        ],
      },
    },
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    content: {
      description:
        'AI tools for private practices and clinic groups: every patient system in one view, early flags on patients drifting out of care, and one-click reports.',
      intro: {
        headline: 'Your care team should see the pattern before the crisis.',
        body:
          "Private practices and clinic groups keep patient information in a records system, a scheduling tool and a billing system that don't talk to each other. Staff lose hours merging spreadsheets, and warning signs stay hidden until the next visit, or the missed one. We build AI tools that bring it together, so your staff's time goes to patients.",
      },
      services: {
        heading: 'What we build for healthcare teams',
        items: [
          {
            title: "Every patient's picture in one place",
            description:
              'Appointments, results, billing and referrals live in separate systems, and getting the full picture means merging exports by hand. We build one view that pulls it together automatically, so the front desk, clinicians and billing all start from the same facts.',
          },
          {
            title: 'Early flags, explained in plain language',
            description:
              'Missed appointments, lapsed refills and overdue follow-ups add up quietly until a patient has fallen out of care. We build alerts that flag the pattern early and say why, then leave the next step to a clinician.',
          },
          {
            title: 'Follow-ups the whole team can see',
            description:
              'Concerns live in personal spreadsheets and hallway conversations, so follow-up depends on who remembers. We build shared notes on each patient, with every follow-up assigned to someone and chased automatically until it’s done.',
          },
          {
            title: 'Meeting reports in one click',
            description:
              'Getting ready for a team huddle or partners’ meeting means hours of copying numbers into slides. We build reports that assemble from live data and show what has changed since the last meeting.',
          },
        ],
      },
    },
  },
  {
    slug: 'consumer-goods',
    name: 'Consumer Goods',
    content: {
      description:
        'AI tools for brands that sell through resellers: one live record of every unit, a curated catalog per partner, and no product ever promised twice.',
      intro: {
        headline: 'Know where every product is, without texting five people.',
        body:
          "Brands that sell through resellers, distributors and live sellers run their stock on spreadsheets and direct messages. Products get promised twice, partners see stock they shouldn't, and nobody knows what sold until someone rebuilds it from memory. We build AI tools that keep one live record of every unit, so adding partners doesn't add coordination.",
      },
      services: {
        heading: 'What we build for consumer goods brands',
        items: [
          {
            title: 'One live record of every unit',
            description:
              "Stock lives in spreadsheets, phone notes and message threads, and you're the only one who knows where anything is. We build one live record of what's in, what's out, who has it and when it's due back, and you can run it from your phone.",
          },
          {
            title: 'Each partner sees only what you choose',
            description:
              'Resellers see stock they were never meant to sell, or miss products that would sell well for them. We build access you set per partner, so each one sees exactly the catalog you’ve assigned.',
          },
          {
            title: 'No product promised twice',
            description:
              'Nothing stops the same one-of-a-kind piece from being promised to two sellers at once. We build bookings that lock a product the moment it’s claimed, and chase overdue returns automatically.',
          },
          {
            title: 'Sales reports without the chasing',
            description:
              'What sold gets reported by message and reconciled by hand, so stock decisions run on gut feel. We build reports that compile each sale automatically and show which partners and products move fastest, so you can decide who gets more stock.',
          },
        ],
      },
    },
  },
];

export const industryHref = (slug: string) => `/industries/${slug}`;

export const getIndustry = (slug: string) =>
  INDUSTRIES.find((industry) => industry.slug === slug);
