// src/app/page.tsx
import Link from 'next/link'; // For links on cards

// Data for the argument cards - can be moved to a separate file later
const argumentCards = [
  {
    pageId: 'materialism', // We'll create this page route later
    iconSvgPath: "M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364m12.728 0L5.636 5.636",
    title: "1. The Materialist's Paradox",
    description: "An analytical audit of the prevailing scientific worldview, arguing it is falsified by data and requires more blind faith than theism.",
    buttonText: "Explore the Evidence",
  },
  {
    pageId: 'creation',
    iconSvgPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "2. A Scientific Audit of Genesis",
    description: "Testing Genesis 1 as a scientific model against cosmology, demonstrating its superior predictive power over competing ancient myths and even naturalism.",
    buttonText: "Analyze the Design",
  },
  {
    pageId: 'foreshadowing',
    iconSvgPath: "M5 3v4M3 5h4M4 17h2m2 0h2m-4 4h4m4-16h2m2 0h2m-4-4v4m4 0v4m-4-4h4m-2 12h2m2 0h2M7 7l10 10M7 17L17 7",
    title: "3. The Divine Echo",
    description: "Applying a rigorous analytical framework to distinguish divinely authored foreshadowing (typology) from mere coincidence in the Old Testament.",
    buttonText: "Uncover the Patterns",
  },
  {
    pageId: 'prophecies',
    iconSvgPath: "M12 6.253v11.494m-9-5.747h18M12 6.253a4.5 4.5 0 00-4.5 4.5v2.494a4.5 4.5 0 009 0v-2.494a4.5 4.5 0 00-4.5-4.5z",
    title: "4. The Prophetic Fingerprint",
    description: "Evaluating Messianic prophecy as objective, falsifiable evidence using an analytical framework to score for specificity and historical confirmation.",
    buttonText: "Examine the Predictions",
  },
  {
    pageId: 'gospels',
    iconSvgPath: "M12 6.253v11.494m-9-5.747h18M3.75 12h16.5m-16.5 3.75h16.5M3.75 15.75h16.5M3.75 8.25h16.5",
    title: "5. The Gospels on Trial",
    description: "A forensic investigation into the historical reliability of the Gospels using the standard tests of historiography and evidence from undesigned coincidences.",
    buttonText: "Weigh the Testimony",
  },
  {
    pageId: 'resurrection',
    iconSvgPath: "M12 19V5m0 14l-4-4m4 4l4-4M3 10h18M3 5h18",
    title: "6. An Autopsy of History",
    description: "A forensic investigation of the resurrection, using bedrock facts accepted by mainstream scholars to demonstrate it as the inference to the best explanation.",
    buttonText: "Investigate the Central Claim",
  },
];

const bonusCard = {
  pageId: 'ndes',
  iconSvgPath: "M12 18.75a6 6 0 006-6c0-1.791-.76-3.414-2-4.625a6 6 0 00-4-1.625a6 6 0 00-4 1.625a6 6 0 00-2 4.625a6 6 0 006 6zM12 15.75a3.75 3.75 0 003.75-3.75c0-1.12-.485-2.14-1.28-2.835a3.75 3.75 0 00-4.94 0c-.795.695-1.28 1.715-1.28 2.835A3.75 3.75 0 0012 15.75z",
  title: "Bonus: Beyond the Brain",
  description: "An analytical investigation of Near-Death Experiences, presenting both the objective evidence that falsifies materialism and the subjective data that corroborates a biblical worldview.",
  buttonText: "Consider Modern Evidence",
};


export default function HomePage() {
  return (
    <div id="home-page" className="relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-navy z-10"></div>
        <div className="relative z-20 px-4 container mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight font-serif">
            The God Hypothesis: An Analytical Investigation
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            An analytical, evidence-based investigation of the hypothesis that God created the Universe, precisely prophesied the Messiah, Jesus Christ, for over 1,000 years, and definitively demonstrated His divine authority through Christ's resurrection from the dead.
          </p>
          <div className="mt-10 flex flex-col items-center">
            <svg className="w-10 h-10 text-accent-gold animate-bounce-y" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <a href="#argument-flow" className="mt-2 text-lg font-semibold text-accent-gold hover:text-amber-300 transition-colors">
              Explore the Evidence
            </a>
          </div>
        </div>
      </section>

      {/* Argument Flow Section */}
      <section id="argument-flow" className="py-20 sm:py-24 relative z-20 bg-brand-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
              A Rational Path to Faith
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
              The case for Christianity is not a blind leap, but a logical progression built on cumulative evidence. Each step below builds upon the last, forming a coherent and powerful argument.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {argumentCards.map((card) => (
              // NEW VERSION - INSIDE THE .map()
<Link 
  key={card.pageId} 
  href={`/${card.pageId}`}
  className="card p-8 rounded-lg flex flex-col bg-gray-900/70 backdrop-blur-md border border-gray-700/50 hover:border-accent-gold/70 hover:shadow-accent-gold/30 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
>
  {/* Inner card content stays the same, just no surrounding <a> tag */}
  <div className="flex-shrink-0">
    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ring-1 ring-gray-700">
      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.iconSvgPath}></path>
      </svg>
    </div>
  </div>
  <div className="flex-grow mt-6">
    <h3 className="text-xl font-bold text-white font-serif">{card.title}</h3>
    <p className="mt-3 text-gray-400 text-sm">{card.description}</p>
  </div>
  <div className="mt-6">
    <span className="font-semibold text-accent-gold hover:text-amber-300 transition-colors">
      {card.buttonText} →
    </span>
  </div>
</Link>
            ))}
          </div>

          {/* Bonus Card */}
          <div className="mt-12 flex justify-center">
            // NEW VERSION - FOR THE BONUS CARD
<Link 
  href={`/${bonusCard.pageId}`}
  className="card p-8 rounded-lg w-full lg:w-2/3 flex flex-col md:flex-row items-center bg-gray-900/70 backdrop-blur-md border border-gray-700/50 hover:border-accent-gold/70 hover:shadow-accent-gold/30 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
>
   {/* Inner bonus card content stays the same, just no surrounding <a> tag */}
   <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
      <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center ring-1 ring-gray-700">
        <svg className="w-8 h-8 text-accent-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" d={bonusCard.iconSvgPath} />
        </svg>
      </div>
    </div>
    <div className="flex-grow text-left">
      <h3 className="text-xl font-bold text-white font-serif">{bonusCard.title}</h3>
      <p className="mt-3 text-gray-400 text-sm">{bonusCard.description}</p>
      <div className="mt-4">
        <span className="font-semibold text-accent-gold hover:text-amber-300 transition-colors">
          {bonusCard.buttonText} →
        </span>
      </div>
    </div>
</Link>
          </div>
        </div>
      </section>
    </div>
  );
}