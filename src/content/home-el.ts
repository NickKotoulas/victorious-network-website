export const navItemsEl = [
  { label: "Αρχική", href: "#home" },
  { label: "Σχετικά", href: "#about" },
  { label: "Εμπειρίες", href: "#experiences" },
  { label: "Media", href: "#media" },
  { label: "Καινοτομία", href: "#innovation" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Επικοινωνία", href: "#contact" },
] as const;

export const heroEl = {
  headline: "Το AI-driven agency για τεχνολογία, καινοτομία και αντίκτυπο.",
  subline:
    "Συνδυάζουμε AI, ρομποτική, media και στρατηγική επικοινωνία, δίνοντας στα technology brands ορατότητα, κύρος και ισχυρή παρουσία στην αγορά.",
  motto: "AI Καινοτομία · Πολιτισμός · Αντίκτυπος",
  primaryCta: { label: "Επικοινωνήστε μαζί μας", href: "#contact" },
  secondaryCta: { label: "Δείτε τι κάνουμε", href: "#experiences" },
} as const;

export const aboutEl = {
  kicker: "Ποιοι Είμαστε",
  title:
    "Συνδέουμε την τεχνολογία με την κοινωνία, τις επιχειρήσεις και τα διεθνή οικοσυστήματα καινοτομίας.",
  text:
    "Είμαστε ένα AI-driven agency που μετατρέπει σύνθετες τεχνολογίες σε ξεκάθαρη στρατηγική επικοινωνία, ορατότητα και εμπειρίες, συνδυάζοντας AI, ρομποτική, media και δημόσιες σχέσεις κάτω από μία στέγη.",
  ceo: {
    name: "Andriana Manetta",
    title: "Ιδρύτρια & CEO",
    bio:
      "Σύμβουλος επικοινωνίας και marketing με εκτενή εμπειρία στη στρατηγική επικοινωνία, την καινοτομία και το technology branding. Ως ιδρύτρια και CEO της Victorious Network και Head of Marketing της Sophia the Robot, δραστηριοποιείται στη διασταύρωση επικοινωνίας, τεχνητής νοημοσύνης και τεχνολογίας νέας γενιάς.",
    photo: "/assets/ceo-andriana-manetta.jpg",
  },
} as const;

export const pillarsEl = [
  {
    id: "experiences",
    visualType: "experiences",
    kicker: "Πυλώνας 01",
    title: "AI Εμπειρίες & Εκδηλώσεις",
    intro: "Σχεδιάζουμε εμπειρίες και εκδηλώσεις που τοποθετούν το brand σας στο επίκεντρο της τεχνολογίας, από humanoid robots και holograms μέχρι expos και AI masterclasses.",
    items: [
      { title: "Sophia the Robot", description: "Μέσα από αποκλειστική συνεργασία, φέρνουμε τη Sophia σε events, καμπάνιες και συνεντεύξεις, δημιουργώντας άμεση δημοσιότητα και ισχυρή προσέλκυση κοινού." },
      { title: "Hologram & AI Installations", description: "Holographic displays και AI installations που μετατρέπουν κάθε χώρο σε μία εντυπωσιακή, διαδραστική εμπειρία." },
      { title: "Expos & Hackathons", description: "Σχεδιάζουμε και υποστηρίζουμε την παρουσία σας σε μεγάλα expos, hackathons και robotics competitions, συνδέοντας το brand με κοινό, συνεργάτες και το οικοσύστημα καινοτομίας." },
    ],
    cta: { prompt: "Θέλετε μία εμπειρία που θα κάνει το brand σας να ξεχωρίσει;", label: "Κλείστε ένα event", href: "#contact" },
  },
  {
    id: "media",
    visualType: "media",
    kicker: "Πυλώνας 02",
    title: "AI Media",
    intro: "Παράγουμε περιεχόμενο που δημιουργεί συνεχή ορατότητα. Με πλήρες studio παραγωγής και AI-assisted workflows, μετατρέπουμε την τεχνολογία σε ιστορίες που το κοινό βλέπει και θυμάται.",
    items: [
      { title: "AI Filming Studio", description: "Ολοκληρωμένο studio για videocasts, podcasts και shootings, από το concept έως την τελική παραγωγή." },
      { title: "Συνεντεύξεις", description: "Συνεντεύξεις με ηγέτες τεχνολογίας, καινοτομίας και επιχειρήσεων που ενισχύουν το κύρος και την αναγνωρισιμότητα." },
      { title: "Multilingual AI Video & Voice", description: "AI voiceovers, multilingual video, localization και προσβάσιμο περιεχόμενο για πολλαπλές αγορές και κοινά." },
      { title: "Interactive AI Experiences", description: "QR experiences, persona AI και immersive activations σε φυσικούς ή ψηφιακούς χώρους." },
    ],
    cta: { prompt: "Έτοιμοι να δημιουργήσουμε περιεχόμενο που ξεχωρίζει;", label: "Ας παράγουμε μαζί", href: "#contact" },
  },
  {
    id: "innovation",
    visualType: "innovation",
    kicker: "Πυλώνας 03",
    title: "Καινοτομία & Ρομποτική",
    intro: "Συνδέουμε εταιρείες και οργανισμούς με την αιχμή της ρομποτικής και της καινοτομίας, δημιουργώντας συνεργασίες με startups, πανεπιστήμια και ερευνητικά κέντρα.",
    items: [
      { title: "Robotics Solutions", description: "Πρόσβαση σε κορυφαίες λύσεις ρομποτικής για ενοικίαση, αγορά, demonstrations και activations." },
      { title: "Startups", description: "Υποστηρίζουμε technology startups να συνδεθούν με την αγορά, τους κατάλληλους συνεργάτες και το ευρύτερο οικοσύστημα." },
      { title: "Έρευνα & Πανεπιστήμια", description: "Συνδέουμε την έρευνα με την αγορά, ανοίγοντας δρόμους για κοινά projects, μεταφορά γνώσης και πρόσβαση σε χρηματοδότηση." },
    ],
    cta: { prompt: "Αναζητάτε συνεργασίες στη ρομποτική ή την καινοτομία;", label: "Μιλήστε μας για το project", href: "#contact" },
  },
  {
    id: "services",
    visualType: "commercial",
    kicker: "Πυλώνας 04",
    title: "Εμπορικές Υπηρεσίες",
    intro: "Όλες οι δυνατότητές μας προσφέρονται ως ολοκληρωμένες εμπορικές υπηρεσίες, από τη στρατηγική εισόδου στην αγορά έως τη ρομποτική και την experiential προβολή.",
    items: [
      { title: "Market Entry & International Growth", description: "Υποστηρίζουμε εταιρείες τεχνολογίας να εισέλθουν και να αναπτυχθούν σε Ελλάδα, Κύπρο και Ευρώπη." },
      { title: "PR, Branding & Technology Storytelling", description: "Χτίζουμε ισχυρή δημόσια παρουσία μέσα από PR strategy, media outreach, brand narrative και storytelling." },
      { title: "Ecosystem Integration & Funding Access", description: "Συνδέουμε εταιρείες και startups με θεσμούς, πανεπιστήμια, ερευνητικά κέντρα, incubators, συνεργάτες και επενδυτές." },
      { title: "360° Digital Solutions", description: "Ολοκληρωμένες ψηφιακές λύσεις: content creation, AI copywriting, video production, social media, websites, localization και campaigns." },
      { title: "Campaigns", description: "Σχεδιάζουμε ολοκληρωμένες καμπάνιες που συνδέουν την τεχνολογία και την καινοτομία με το κοινό και την αγορά." },
    ],
    cta: { prompt: "Χρειάζεστε μία στρατηγική προσαρμοσμένη στο brand σας;", label: "Ζητήστε πρόταση", href: "#contact" },
  },
] as const;

export const closingEl = {
  kicker: "Επικοινωνήστε με τη Victorious Network",
  headline: "Ας δημιουργήσουμε μαζί το επόμενο ορατό σας βήμα.",
  text: "Είτε σχεδιάζετε ένα event, ένα innovation project ή μία στρατηγική επικοινωνίας, είμαστε εδώ για να το κάνουμε ορατό και κατανοητό.",
  cta: { label: "Επικοινωνήστε μαζί μας", href: "mailto:info@victoriousnetwork.com" },
} as const;
