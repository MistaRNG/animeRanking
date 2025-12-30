const coverText = document.querySelector(".cover-text");
const navbar = document.querySelector(".navbar");
const navElements = [...document.querySelectorAll(".nav-element")];
const sections = [...document.querySelectorAll("section")];
const scrollRoot = document.querySelector(".scroller");
const rankingList = document.getElementById("rankingList");
const rankingCards = document.getElementById("rankingCards");
const honorableMentions = document.getElementById("honorableMentions");

const animeData = [
  {
    place: "17",
    navLabel: "17",
    title: "Steins;Gate",
    image: "images/steins_gate.jpg",
    summary:
      "Zeitreise-Thriller in Akihabara: ein chaotisches Labor, eine Telefon-Mikrowelle und eine Verschwörung, die immer größer wird.",
    year: "2011",
    genre: "Sci-Fi, Thriller",
    studio: "White Fox",
    format: "24 Episoden + OVA",
    hook: "Zeitreisen & Mindblow",
    note: "Holt langsam Anlauf und zerlegt dich dann mit seinem Zeitreise-Knoten komplett. Der Twist am Ende hat mich damals richtig umgehauen und ich wollte sofort alle Details noch einmal auseinandernehmen."
  },
  {
    place: "16",
    navLabel: "16",
    title: "Sakurasou no Pet na Kanojo",
    image: "images/sakurasou.jpg",
    summary:
      "Slice-of-Life über Kreativität, Scheitern und Freundschaft im Chaos eines Wohnheims. Viel Herz, Drama und ein bisschen Wahnsinn.",
    year: "2012",
    genre: "Slice of Life, Drama",
    studio: "J.C.Staff",
    format: "24 Episoden",
    hook: "Feels & Alltag",
    note: "Einer meiner ersten Anime und bis heute der einzige Slice-of-Life-Titel, der mich wirklich berührt hat. Ich habe ihn etwa drei Mal gesehen und jedes Mal knüpfen die Gefühle von früher wieder an."
  },
  {
    place: "15",
    navLabel: "15",
    title: "KonoSuba: God's Blessing on this Wonderful World!",
    image: "images/konosuba.jpg",
    summary:
      "Der chaotischste Isekai-Trupp: ein zynischer Protagonist, eine Explosion-Fanatikerin, eine masochistische Kreuzritterin und eine unfähige Göttin.",
    year: "2016",
    genre: "Comedy, Isekai",
    studio: "Studio Deen",
    format: "2 Staffeln + Film",
    hook: "Bester Comedy-Isekai",
    note: "Für mich unschlagbar, wenn es um Comedy im Isekai-Genre geht. Jeder Gag sitzt, jede Folge ist quotable – perfektes Kontrastprogramm zu düsteren Titeln."
  },
  {
    place: "14",
    navLabel: "14",
    title: "Demon Slayer (Kimetsu no Yaiba)",
    image: "images/demon_slayer.jpg",
    summary:
      "Shōnen-Action über Dämonenjäger, getragen von Ufotables Licht- und Farbgewalt. Tanjiros Reise ist visuell ein Brett.",
    year: "2019",
    genre: "Action, Shōnen",
    studio: "ufotable",
    format: "Serien + Filme",
    hook: "Ufotable-Optik",
    note: "Für viele der beste Anime überhaupt, vor allem wegen der Animation. Story und Figuren sind eher simpel, aber Ufotable verwandelt wirklich alles in Gold."
  },
  {
    place: "13",
    navLabel: "13",
    title: "Hunter x Hunter (2011)",
    image: "images/hunter_x_hunter.jpg",
    summary:
      "Shōnen-Klassiker über die Hunter-Prüfung, düstere Chimera-Ameisen und Freundschaft unter Extrembedingungen.",
    year: "2011",
    genre: "Adventure, Shōnen",
    studio: "Madhouse",
    format: "148 Episoden",
    hook: "Klassiker-Status",
    note: "Gehört einfach in jede Sammlung. Sauber erzählte Arcs, starke Figuren – ein Evergreen, den man immer wieder empfehlen kann."
  },
  {
    place: "12",
    navLabel: "12",
    title: "JoJo's Bizarre Adventure",
    image: "images/jojo.jpg",
    summary:
      "Mehrgenerationen-Saga mit Stands, Posing und einer stilistisch einzigartigen Erzählweise. Jedes Part fühlt sich wie ein eigenes Genre an.",
    year: "2012",
    genre: "Action, Abenteuer",
    studio: "David Production",
    format: "Mehrere Parts",
    hook: "Bizarre Style",
    note: "Erste Staffel ist die schwächste, aber Part 3–5 sind pures Gold. Schwer zu beschreiben, man muss es erleben – sehr bizarre, sehr einzigartig."
  },
  {
    place: "11",
    navLabel: "11",
    title: "Mirai Nikki",
    image: "images/mirai_nikki.jpg",
    summary:
      "Survival-Game mit Tagebüchern aus der Zukunft, einer Yandere-Ikone und einem tödlichen Wettlauf gegen die Zeit.",
    year: "2011",
    genre: "Thriller, Mystery",
    studio: "asread.",
    format: "26 Episoden",
    hook: "Yuno Gasai",
    note: "Einer meiner frühen Anime und der erste, den ich auf Japanisch geschaut habe. Die Story ist wild, die Spannung hoch – bis heute ein Guilty Pleasure."
  },
  {
    place: "10",
    navLabel: "10",
    title: "Death Note",
    image: "images/death_note.jpg",
    summary:
      "Katz-und-Maus-Spiel zwischen Light Yagami und L. Ein Notizbuch, das tötet, stellt Moral und Machtfantasien auf die Probe.",
    year: "2006",
    genre: "Thriller, Mystery",
    studio: "Madhouse",
    format: "37 Episoden",
    hook: "Kopf-an-Kopf-Duell",
    note: "Dreimal gesehen, beim dritten Mal war es sogar am besten. Auf Deutsch macht es besonders Spaß. Gibt mir ähnlich intensives Feeling wie Attack on Titan."
  },
  {
    place: "9",
    navLabel: "9",
    title: "Mushoku Tensei: Jobless Reincarnation",
    image: "images/mushoku_tensei.jpg",
    summary:
      "Isekai-Pionier mit viel Charakterwachstum, detaillierter Welt und ehrlichem Blick auf die Fehler seines Protagonisten.",
    year: "2021",
    genre: "Isekai, Abenteuer",
    studio: "Studio Bind",
    format: "2 Staffeln (bisher)",
    hook: "Isekai-Blueprint",
    note: "Aktuell bester Isekai für mich. Staffel 1 überragend, Staffel 2 schwächelt außer dem Ende. Potential, in die Top 3 zu rutschen, sobald Staffel 3 liefert."
  },
  {
    place: "8",
    navLabel: "8",
    title: "Akame ga Kill!",
    image: "images/akame_ga_kill.jpg",
    summary:
      "Revolutions-Anime mit Assassinen, die gegen ein korruptes Imperium kämpfen. Hoher Bodycount, viel Drama.",
    year: "2014",
    genre: "Action, Dark Fantasy",
    studio: "White Fox",
    format: "24 Episoden",
    hook: "Sympathische Antagonisten",
    note: "Beim Rewatch fühlte ich mich wie dement, weil ich alles vergessen hatte – und fand ihn dann umso geiler. Die Antagonisten sind fast noch spannender als die Haupttruppe."
  },
  {
    place: "7",
    navLabel: "7",
    title: "Kill la Kill",
    image: "images/kill_la_kill.jpg",
    summary:
      "Uniformen als Waffen, überdrehte Action und Trigger-typischer Humor. Ein wilder, bunter Stil, der keine Pause gönnt.",
    year: "2013",
    genre: "Action, Comedy",
    studio: "Trigger",
    format: "24 Episoden",
    hook: "Style over Clothes",
    note: "Trifft genau meinen Humor. Schon Folge 1, wenn jemand lachend aus dem Fenster springt, hat mich abgeholt. Viele lassen es wegen der freizügigen Designs fallen – persönliches Pech, denn es ist ein Meisterwerk."
  },
  {
    place: "6",
    navLabel: "6",
    title: "Berserk (Golden Age Filme)",
    image: "images/berserk_golden_age.jpg",
    summary:
      "Düstere Mittelalter-Fantasy über Guts, Griffith und die Falken. Die Filmtrilogie erzählt den Golden Age Arc kompakt und heftig.",
    year: "2012",
    genre: "Dark Fantasy",
    studio: "Studio 4°C",
    format: "Filmtrilogie",
    hook: "Manga-Gate",
    note: "Die Anime-Adaption ist berüchtigt, aber die Story so stark, dass ich den Manga lesen musste. Inzwischen steht die Reihe sogar physisch im Regal – neben Fate der einzige Manga, den ich besitze."
  },
  {
    place: "5",
    navLabel: "5",
    title: "Re:Zero − Starting Life in Another World",
    image: "images/rezero.jpg",
    summary:
      "Isekai mit harter Zeitschleife, psychischem Druck und Figuren, die wachsen, weil sie immer wieder scheitern.",
    year: "2016",
    genre: "Isekai, Drama",
    studio: "White Fox",
    format: "2 Staffeln (bisher)",
    hook: "Return by Death",
    note: "Bisher bester Isekai für mich. Staffel 1 im zweiten Arc reine Rage-Bait, Staffel 2 setzt noch eins drauf. Plot habe ich erst beim dritten Mal richtig kapiert. War der erste Anime, bei dem ich direkt die Light Novel weitergelesen habe."
  },
  {
    place: "4",
    navLabel: "4",
    title: "Attack on Titan",
    image: "images/attack_on_titan.jpg",
    summary:
      "Mauern, Titanen, Intrigen und ein Soundtrack, der einen Aufstand vertonen könnte. Ein Epos in vier Staffeln.",
    year: "2013",
    genre: "Dark Fantasy, Action",
    studio: "Wit Studio & MAPPA",
    format: "4 Staffeln",
    hook: "Dauer-Gänsehaut",
    note: "Seit Release der ersten Staffel dabei. Staffel 1 viermal, Staffel 2 dreimal gesehen. Jede neue Folge war ein Event – und der Nervenkitzel bleibt selbst beim Rewatch."
  },
  {
    place: "3",
    navLabel: "3",
    title: "Hellsing Ultimate",
    image: "images/hellsing_ultimate.jpg",
    summary:
      "Vampire, Vatikan und jede Menge unzensierter Wahnsinn. Alucard gegen alles, was ihm in die Quere kommt.",
    year: "2006",
    genre: "Action, Horror",
    studio: "Madhouse & Co.",
    format: "10 OVAs",
    hook: "Alucard unleashed",
    note: "Mein zweiter Anime und bis heute einer der unzensiertesten. Oft geschaut; würde man heute vielleicht für verhaftet. Genau deshalb so gut."
  },
  {
    place: "2",
    navLabel: "2",
    title: "Fate/Zero & Fate/stay night (Reihe)",
    image: "images/fate_zero.jpg",
    summary:
      "Heiliger Gral Krieg mit Heroic Spirits, philosophischen Duellen und ufotable-Sakuga, die jede Schlacht zum Kunstwerk macht.",
    year: "2011",
    genre: "Action, Fantasy",
    studio: "ufotable",
    format: "Mehrere Staffeln & Filme",
    hook: "Ufotable-Sakuga",
    note: "Absoluter Fan. Eine der besten Animationen überhaupt. Habe fast Angst, wieder reinzuschauen, weil ich sonst sofort alles binged. Story komplex, Kämpfe godlike animiert."
  },
  {
    place: "1",
    navLabel: "1",
    title: "Elfen Lied",
    image: "images/elfen_lied.jpg",
    summary:
      "Brutal, tragisch und gleichzeitig zart. Lucy, Nyu und das Thema Einsamkeit – ein Anime, der berührt und verstört.",
    year: "2004",
    genre: "Horror, Drama",
    studio: "Arms",
    format: "13 Episoden + OVA",
    hook: "Erster Anime ever",
    note: "Mein Einstiegsmedium. Sehr unzensiert, wunderschöne Story. Bestimmt zwölfmal gesehen; damals direkt vier Tage am Stück und daraus wurde ein jährliches Ritual. Verdient meine persönliche Nummer 1."
  }
];

const honorableMentionsList = [
  {
    title: "Sword Art Online",
    note: "Der Hype, der Isekai groß gemacht hat. Aber bitte nur Staffel 1 schauen – und davon eigentlich nur die ersten zwölf Folgen."
  },
  {
    title: "Psycho-Pass",
    note: "Nur Season 1 ist Pflicht: großartige Dystopie, genialer Antagonist und ein Blick in eine mögliche Zukunft."
  },
  {
    title: "Tokyo Ghoul",
    note: "Erste Staffel super, alles danach bitte ignorieren. Tu dir den Gefallen und hör nach Staffel 1 auf."
  },
  {
    title: "Cautious Hero",
    note: "Nur zwölf Folgen, aber vermutlich der lustigste Kurz-Anime. Erzählt in einer Staffel mehr als andere in dreien."
  },
  {
    title: "Redo of Healer",
    note: "Krasser Rache-Isekai, stellenweise fast schon Soft-Porno. Nichts für Zartbesaitete, aber für mich super."
  },
  {
    title: "Made in Abyss",
    note: "Lass dich nicht vom kindlichen Look täuschen. Ernst, spannend und mitreißende Welt im Abyss."
  },
  {
    title: "One Punch Man",
    note: "Season 1 ist godlike animiert, der Manga auch top. Alles danach qualitativ deutlich schwächer."
  }
];

const sanitizeId = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function createCard(anime) {
  const anchor = `place-${sanitizeId(anime.navLabel || anime.place)}`;
  const collapseId = `collapse-${sanitizeId(anime.navLabel || anime.place)}`;
  const card = document.createElement("article");
  card.className = "card mb-3 mt-5 position-relative top-10 start-50 translate-middle-x";
  card.dataset.bsTheme = "dark";
  card.id = anchor;
  card.innerHTML = `
    <div class="card-body rounded">
      <div class="card-header rounded">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <h2 class="card-title fw-semibold mb-0">Platz ${anime.place}: ${anime.title}</h2>
          <span class="badge bg-warning text-dark fw-semibold">${anime.hook}</span>
        </div>
      </div>
      <div class="card-footer rounded mt-2">
        <div class="row g-3 align-items-start">
          <div class="col-12 col-md-4 text-center">
            <img src="${anime.image}" alt="Cover von ${anime.title}" class="card-image img-fluid rounded" loading="lazy" />
          </div>
          <div class="col-12 col-md-8">
            <p class="card-text mb-3">${anime.summary}</p>
            <table class="table mt-1">
              <tbody>
                <tr>
                  <th scope="row" class="fw-semibold bg-transparent">Start</th>
                  <td class="bg-transparent">${anime.year}</td>
                </tr>
                <tr>
                  <th scope="row" class="fw-semibold bg-transparent">Genre</th>
                  <td class="bg-transparent">${anime.genre}</td>
                </tr>
                <tr>
                  <th scope="row" class="fw-semibold bg-transparent">Studio</th>
                  <td class="bg-transparent">${anime.studio}</td>
                </tr>
                <tr>
                  <th scope="row" class="fw-semibold bg-transparent">Format</th>
                  <td class="bg-transparent">${anime.format}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer rounded mt-2">
      <div class="accordion m-1">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#${collapseId}"
              aria-expanded="false"
              aria-controls="${collapseId}"
            >
              <p class="fw-semibold m-0">Eigene Erfahrung</p>
            </button>
          </h2>
          <div id="${collapseId}" class="accordion-collapse collapse">
            <div class="accordion-body m-0">
              <p class="card-text card-opinion m-0">${anime.note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return { card, anchor };
}

function renderRanking() {
  animeData.forEach((anime) => {
    const { card, anchor } = createCard(anime);
    rankingCards.appendChild(card);

    const navLink = document.createElement("a");
    navLink.href = `#${anchor}`;
    navLink.className = "list-group-item list-group-item-action";
    navLink.textContent = anime.navLabel || anime.place;
    rankingList.appendChild(navLink);
  });
}

function renderHonorableMentions() {
  const items = honorableMentionsList
    .map(
      (item) => `
        <li class="mb-3">
          <span class="fw-semibold">${item.title}:</span>
          <span class="text-secondary">${item.note}</span>
        </li>
      `
    )
    .join("");

  honorableMentions.innerHTML = `
    <div class="card-body rounded">
      <div class="card-header rounded">
        <h3 class="card-title fw-semibold">Kurz erwähnt, aber geliebt</h3>
      </div>
      <div class="card-footer rounded mt-2">
        <ul class="list-unstyled mb-0">${items}</ul>
      </div>
    </div>
  `;
}

function updateActiveNav() {
  const offset = scrollRoot.scrollTop + navbar.offsetHeight + 16;
  let activeIndex = 0;

  sections.forEach((section, index) => {
    if (section.offsetTop <= offset) {
      activeIndex = index;
    }
  });

  navElements.forEach((navEl, index) => {
    navEl.classList.toggle("active", index === activeIndex);
  });
}

const navColorIO = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    navbar.classList.toggle("nav-colored", !entry.isIntersecting);
    navbar.classList.toggle("nav-transparent", entry.isIntersecting);
  },
  { threshold: 0.6 }
);

function init() {
  renderRanking();
  renderHonorableMentions();
  navColorIO.observe(coverText);
  updateActiveNav();
  scrollRoot.addEventListener("scroll", updateActiveNav);
}

init();
