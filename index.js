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
    place: "20",
    navLabel: "20",
    title: "Steins;Gate",
    image: "images/steins_gate.jpg",
    summary:
      "Zeitreise-Thriller in Akihabara: ein chaotisches Labor, eine Telefon-Mikrowelle und eine Verschwörung, die immer größer wird.",
    year: "2011",
    genre: "Sci-Fi, Thriller",
    studio: "White Fox",
    format: "24 Episoden",
    hook: "Zeitreisen & Mindblow",
    note: "Holt langsam Anlauf und zerlegt dich dann mit seinem Zeitreise-Knoten komplett. Der Twist am Ende hat mich damals richtig umgehauen und ich wollte sofort alle Details noch einmal auseinandernehmen. Lohnt sich wohl auch für einen Rewatch, bei dem man neue Foreshadowing-Schnipsel entdeckt. Den Film dazu habe ich noch nicht gesehen und den sollte ich zukünftig mal anpacken."
  },
  {
    place: "19",
    navLabel: "19",
    title: "Sakurasou no Pet na Kanojo",
    image: "images/sakurasou.png",
    summary:
      "Slice-of-Life über Kreativität, Scheitern und Freundschaft im Chaos eines Wohnheims. Viel Herz, Drama und ein bisschen Wahnsinn.",
    year: "2012",
    genre: "Slice of Life, Drama",
    studio: "J.C.Staff",
    format: "24 Episoden",
    hook: "Feels & Alltag",
    note: "Einer meiner ersten Anime (glaube, der vierte) und bis heute einer der wenigen Slice-of-Life-Titel, der mich wirklich berührt hat. Rückblickend weiß ich selbst nicht mehr so richtig, woran das lag. Vielleicht hatte ich mich hier noch nicht am Genre sattgesehen, aber ich habe ihn als besonders gut und unterhaltend in Erinnerung. Ich habe ihn vor langer Zeit etwa dreimal gesehen; jedes Mal knüpften die Gefühle von früher wieder an. Dieses Wohnheim-Chaos trifft mich, weil es echte Kreativ-Blockaden, Scheitern und Freundschaft so greifbar macht – und trotzdem herrlich absurd bleibt."
  },
  {
    place: "18",
    navLabel: "18",
    title: "Frieren – Nach dem Ende der Reise",
    image: "images/frieren.jpg",
    summary:
      "Der Dämonenkönig ist besiegt, doch für die langlebige Elfenmagierin Frieren beginnt die eigentliche Reise erst jetzt: Sie lernt, was gemeinsame Zeit und vergängliche Freundschaften bedeuten.",
    year: "2023",
    genre: "Fantasy, Abenteuer, Drama",
    studio: "Madhouse",
    format: "2 Staffeln",
    hook: "Fantasy mit Seele",
    note: "Frieren hat für mich wohl das beste World-Building, das ich jemals irgendwo gesehen habe. Die Serie nimmt einen wirklich überallhin mit: auf lange Wanderungen, in kleine Dörfer, an unscheinbare Wegkreuzungen und mitten in den Alltag der Menschen. Man sieht, wie sie leben, welche Bräuche sie pflegen und was Magie für sie ganz praktisch bedeutet. Selbst ein kurzer Zwischenstopp fühlt sich dadurch wie ein echter Ort mit eigener Geschichte an. Die Welt wird nicht bloß erklärt, man verbringt Zeit in ihr. Dazu kommen die herrlich deutschen Namen: Himmel, Heiter, Eisen, Fern und Stark – als deutschsprachiger Zuschauer muss ich da regelmäßig grinsen. Für die langlebige Frieren hat Zeit eine völlig andere Bedeutung als für ihre menschlichen Begleiter, und aus diesem Unterschied entstehen unglaublich schöne, melancholische Momente. Trockener Humor, kleine Gesten, Musik und ruhige Landschaften machen den Anime für mich so beruhigend, dass er fast schon therapeutisch wirkt. Er hat mir einmal durch eine sehr stressige Zeit geholfen, und ich kann mir gut vorstellen, auch künftig wieder zu ihm zurückzukehren. Genau deshalb hat er es in meine Liste geschafft. Ich habe das Gefühl, dass viele an dieser Ruhe etwas Ähnliches schätzen. Dass Frieren derzeit auf MyAnimeList auf Platz 1 steht, überrascht mich deshalb überhaupt nicht. Und wenn doch gekämpft wird, zeigt Madhouse nebenbei, wie fantastisch Magie aussehen kann."
  },
  {
    place: "17",
    navLabel: "17",
    title: "Mirai Nikki",
    image: "images/mirai_nikki.png",
    summary:
      "Survival-Game mit Tagebüchern aus der Zukunft, einer Yandere-Ikone und einem tödlichen Wettlauf gegen die Zeit.",
    year: "2011",
    genre: "Thriller, Mystery",
    studio: "asread.",
    format: "26 Episoden",
    hook: "Yuno Gasai",
    note: "Einer meiner frühen Anime und der erste, den ich vollständig auf Japanisch geschaut habe. Die Story ist wild, die Spannung hoch – bis heute ein Titel, den ich gern verteidige. Es gab noch keinen Battle-Royale oder Hunger Games Hype. Damals wirkte dieses Survival-Spiel richtig frisch: Zwölf Tagebücher mit unterschiedlichen Fähigkeiten, jeder misstraut jedem, ständig wechseln die Allianzen. Yuno ist der Inbegriff einer Yandere-Ikone – süß, besitzergreifend, brandgefährlich – und zieht den Hauptcharakter in ein Katz-und-Maus-Spiel, bei dem es um nichts weniger als die Nachfolge Gottes geht. Mir gefiel, wie der Protagonist vom passiven Beobachter zum Getriebenen wird, während die Welt um ihn herum kippt. Mindgames, plötzliche Wendungen und Memes, die bis heute leben: Ich hatte selten so viel Spaß an einem so chaotischen Survival-Spiel. Und schau dir ruhig mal das 1. Opening an, um dir eine Meinung zu bilden – am besten auch bei anderen Anime, das lohnt sich fast immer."
  },
  {
    place: "16",
    navLabel: "16",
    title: "Demon Slayer (Kimetsu no Yaiba)",
    image: "images/demon_slayer.jpg",
    summary:
      "Shōnen-Action über Dämonenjäger, getragen von Ufotables Licht- und Farbgewalt. Tanjiros Reise ist visuell ein Brett.",
    year: "2019",
    genre: "Action, Shōnen",
    studio: "ufotable",
    format: "4 Staffeln + 2 Filme",
    hook: "Ufotable-Optik",
    note: "Für viele der beste Anime überhaupt, und das liegt ganz klar an ufotable. Story und Figuren sind eher simpel bis generisch, aber dieses Animations-Studio verwandelt alles, was es anfasst, in Gold – eigentlich sollten die einfach jeden Anime machen. Gonpachiro und seine zwei Dullis hat man eigentlich in dieser Form schon etliche Male gesehen und ohne ufotable wäre Demon Slayer niemals so explodiert. Mein Highlight ist der Movie, der mich mit Abstand am meisten abgeholt hat. Der Anime ist extrem mainstream und teilweise overhyped, aber die Story ist dennoch gut und als Showcase für brachiale Animation, Licht und Kampfchoreos funktioniert er trotzdem sehr gut."
  },
  {
    place: "15",
    navLabel: "15",
    title: "Claymore",
    image: "images/claymore.png",
    summary:
      "Düstere Monsterjagd in Mittelalter-Optik: Halb-menschliche Kriegerinnen bekämpfen Yoma, die Menschen imitieren.",
    year: "2007",
    genre: "Dark Fantasy, Action",
    studio: "Madhouse",
    format: "26 Episoden",
    hook: "Berserk-Vibes",
    note: "Ich musste auch hier sehr, sehr, sehr lange überzeugt werden, weil die Story erst nicht spektakulär klang. Aber zum Glück habe ich nachgegeben: Ich habe den Anime zweimal direkt hintereinander geschaut (passiert bei mir selten) und ihn ausnahmsweise auf Deutsch gesehen – war geil. Es ist Dark Fantasy und vom Feeling extrem nah an Berserk, also musste ich es lieben, und genauso war es auch. Das Anime-Ende weicht stark vom Manga ab und wirkt dadurch etwas abrupt. Der Manga soll deutlich geiler sein – das ging so weit, dass ich ihn in kürzester Zeit durchgesuchtet habe. Und Mann, war das fantastisch: super Berserk-Vibes, viel besseres Ende, einfach alles noch mal eine Ecke stärker. Manga wie Berserk und Claymore sind halt wirklich wie für mich gemacht."
  },
  {
    place: "14",
    navLabel: "14",
    title: "Hunter x Hunter (2011)",
    image: "images/hunter_x_hunter.jpg",
    summary:
      "Shōnen-Klassiker über die Hunter-Prüfung, düstere Chimera-Ameisen und Freundschaft unter Extrembedingungen.",
    year: "2011",
    genre: "Adventure, Shōnen",
    studio: "Madhouse",
    format: "148 Episoden",
    hook: "Klassiker-Status",
    note: "Gehört einfach in jede Sammlung. Sauber erzählte Arcs, starke Figuren – ein Evergreen, den man immer wieder empfehlen kann. Den Chimera-Ant-Arc habe ich damals mit jemandem zusammen geschaut und bin mental ausgestiegen, wobei ich denselben Arc wenig später noch mal allein komplett nachgeholt habe, weil es mich dann doch so gepackt hat. Eigentlich mag ich Trainings- und Tournament-Arcs nicht, aber hier funktioniert es – gefühlt ist der Anime ja fast nur daraus gebaut und kriegt mich trotzdem."
  },
  {
    place: "13",
    navLabel: "13",
    title: "JoJo's Bizarre Adventure",
    image: "images/jojo.png",
    summary:
      "Mehrgenerationen-Saga mit Stands, Posing und einer stilistisch einzigartigen Erzählweise. Jedes Part fühlt sich wie ein eigenes Genre an.",
    year: "2012",
    genre: "Action, Abenteuer",
    studio: "David Production",
    format: "7 Parts",
    hook: "Bizarre Style",
    note: "Erste Staffel fand ich schwach und war danach skeptisch. Staffel 2 war schon klar besser, und ab Part/Staffel 3 bis 5 war ich komplett drin: Stands statt Vampir-Power, irre Gegnerdesigns, Roadtrip-Vibes und dieser Stil, der dir ständig neue Meme-Momente schenkt. JoJo ist als Mehrgenerationen-Saga aufgebaut – jeder Part hat einen neuen Joestar-Nachfahren und fühlt sich wie ein eigenes Genre an, aber der völlig überdrehte JoJo-Spirit bleibt. Memes haben mich quasi hineingezogen; irgendwann musste ich schauen, weil ich so viele Referenzen gesehen hatte. Genau diese Mischung macht Part 3–5 für mich pures Gold."
  },
  {
    place: "12",
    navLabel: "12",
    title: "Clevatess",
    image: "images/clevatess.png",
    summary:
      "Düstere Fantasy um den beinahe gottgleichen Clevatess und die Heldin Alicia. Eine gewaltige, gefährliche Welt, ungewöhnliche Figuren und eine Reise voller Geheimnisse.",
    year: "2025",
    genre: "Dark Fantasy",
    studio: "Lay-duce",
    format: "2 Staffeln",
    hook: "Düstere Welt, starke Figuren",
    note: "Die erste Folge ist für mich die beste Auftaktfolge, die ich überhaupt je bei einer Serie gesehen habe. Sie zieht einen mit einer Wucht in diese Welt, die ich so selten erlebt habe. Staffel 1 gehört für mich zu den besten Dark-Fantasy-Darstellungen überhaupt: eine finstere, gefährliche Welt, gewaltige Schlachten und ein Gefühl für Größe, das mich stellenweise an Herr der Ringe erinnert. Die Farbpalette gibt den Bildern eine ganz eigene Stimmung, und für manche Schauplätze wurden tatsächlich echte Miniaturkulissen gebaut und gefilmt. Diese handwerkliche Arbeit macht die Welt für mich besonders plastisch und greifbar. Dazu kommt das Sounddesign, das die Szenen richtig schwer und bedrohlich wirken lässt. Das ist für mich CINEMA. Schon das grandiose Opening bringt diese Atmosphäre perfekt auf den Punkt. Dazu kommen die Figuren: Clevatess wirkt mit seiner gottgleichen Macht fremd und faszinierend, und Alicia ist für mich die bisher am besten umgesetzte Heldin überhaupt. Ihr Mut, ihre Haltung und ihr eigener Wille machen sie überzeugend, ohne dass der Anime einem ständig erklären muss, warum man sie großartig finden soll. Gerade diese beiden tragen die Geschichte für mich enorm. Staffel 2 verliert mit dem für mich völlig unpassenden Schul-Arc in Folge 2 bis 4 leider etwas von dieser Stärke. Ab Folge 5 wird es aber bedeutend besser, und Richtung Staffelende fühlt sich das Ganze wieder richtig episch an. Wenn eine dritte Staffel an die Stärken der ersten anknüpft, wird Clevatess hier ziemlich sicher weiter steigen. Schade, dass es so wenig Anime in dieser Richtung gibt. Ich würde mir wünschen, dass solche Titel im Mainstream und bei Plattformen wie Crunchyroll deutlich mehr Aufmerksamkeit bekommen. Eine Berserk-Umsetzung mit genau dieser Atmosphäre und Inszenierung? Gott, wäre das geil."
  },
  {
    place: "11",
    navLabel: "11",
    title: "KonoSuba: God's Blessing on this Wonderful World!",
    image: "images/konosuba.jpg",
    summary:
      "Der chaotischste Isekai-Trupp: ein zynischer Protagonist, eine Explosion-Fanatikerin, eine masochistische Kreuzritterin und eine unfähige Göttin.",
    year: "2016",
    genre: "Comedy, Isekai",
    studio: "Studio Deen",
    format: "3 Staffeln + Film",
    hook: "Bester Comedy-Isekai",
    note: "Für mich unschlagbar, wenn es um Comedy im Isekai-Genre geht. Jeder Gag sitzt, jede Folge ist quotable – perfektes Kontrastprogramm zu düsteren Titeln. Nach einer langen Anime-Pause hat mich KonoSuba wieder zurückgeholt und mein Vertrauen in ein völlig überlaufendes Genre gefixt, das oft nur Müll liefert. Kazuma und seine Chaos-Truppe lassen mich regelmäßig laut lachen, egal wie oft ich einzelne Folgen noch mal anmache, und sogar den Manga zum Prequel habe ich mir reingezogen, weil ich mehr wollte."
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
    note: "Dreimal mit vielen Jahren dazwischen gesehen, beim dritten Mal war es sogar am besten, was wohl am Älterwerden liegt. Erstaunlicherweise schaue ich ihn gern auf Deutsch, obwohl ich Synchros sonst hasse – hier ist sie wirklich gut. Brutale Mindgames (Tennis-Match!) und Memes mit ewiger Halbwertszeit. Das Ende ist für mich nicht perfekt, aber der Weg dahin ist so stark, dass es insgesamt ein sehr, sehr geiler Anime bleibt."
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
    format: "3 Staffeln",
    hook: "Isekai-Blueprint",
    note: "Einer der stärksten Isekai für mich, auch wenn die Serie ihren Platz hier selbst ein Stück weit verspielt hat. Nach einer zweijährigen Anime-Pause hat mich Staffel 1 komplett zurückgeholt: eine glaubwürdige Welt, starke Animation und Figuren, deren Entwicklung Zeit bekommt. Wer unbedingt einen Hauptcharakter braucht, mit dem er sich identifizieren kann, dürfte gerade am Anfang Probleme haben. Bei manchen scheint es psychologische Gründe dafür zu geben, dass sie sich UNBEDINGT mit dem Hauptcharakter identifizieren können müssen. Für mich muss ein Protagonist aber weder mein Wunschbild sein noch moralisch zu mir passen. Ich kann seine Entwicklung spannend finden, ohne sein Verhalten gutzuheißen – und gerade diese Distanz macht die Figur für mich interessant. Mein größtes Problem liegt woanders: Staffel 2 war über weite Strecken unfassbar langweilig. Der Schul-Arc zieht sich für mich gefühlt endlos, der Entdeckergeist der ersten Staffel geht verloren und selbst die interessanten Ansätze kommen viel zu langsam voran. Irgendwann wollte ich einfach nur wieder raus aus dieser Schule. Das starke Ende rettet einiges, aber dieser lange Durchhänger ist der Hauptgrund, warum der Anime derzeit nur auf Platz 9 steht. Die aktuell laufende dritte Staffel liefert dagegen wieder genau das, was ich hier liebe: Abenteuer, intensive Momente und das Gefühl, in einer riesigen Welt unterwegs zu sein. Mit Turning Point 4 erreicht die Geschichte einen Höhepunkt, der auch für viele Fans zu den stärksten Momenten der gesamten Serie gehört. Mehr will ich dazu gar nicht verraten. Bleibt sie auf diesem Niveau, sind nach Staffel 3 ein paar Plätze nach oben drin. Die Geschichte hat mich trotz der Schwächen so neugierig gemacht, dass ich wie bei Re:Zero zur Light Novel gegriffen habe. Umso ärgerlicher, wie viele andere Isekai nur die Oberfläche solcher Geschichten kopieren."
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
    note: "Beim Rewatch nach 10 Jahren fühlte ich mich wie dement, weil ich den Plot teilweise komplett falsch im Kopf hatte – echt beängstigend, vielleicht weil ich ihn damals nebenbei mit jemandem geschaut habe. Dieses Mal war er umso geiler. Die Antagonisten sind fast noch spannender als die Protagonisten-Gruppe: zwei Teams, die sich ständig jagen, und jede Seite hat starke Persönlichkeiten. Ich hatte sogar das Ende falsch in Erinnerung. Im Manga ist das Finale anders – lohnt sich, das mal mitzunehmen. Selten waren Kämpfe so konsequent tödlich; man weiß nie, wer als nächstes fällt, und das hält die Spannung hoch."
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
    note: "Trifft genau meinen Humor. Schon Folge 1, wenn jemand lachend aus dem Fenster springt, hat mich abgeholt. Kill la Kill ist einzigartig in Humor, Zeichenstil, Charakteren und Geschichte – ein Paradebeispiel dafür, was Anime als Medium kann. Viele lassen es wegen des freizügigen Kampfoutfits der Protagonistin fallen – persönliches Pech, denn es ist ein Meisterwerk. Der anarchische Stil, die fantastischen Songs (Ohrwurm-Garantie) und der überdrehte Humor sind unvergleichlich. Bedauerlich, dass es kaum mehr Titel dieser Sorte gibt."
  },
  {
    place: "6",
    navLabel: "6",
    title: "Berserk (Golden Age Filme)",
    image: "images/berserk1.png",
    summary:
      "Düstere Mittelalter-Fantasy über Guts, Griffith und die Falken. Die Filmtrilogie erzählt den Golden Age Arc kompakt und heftig.",
    year: "2012",
    genre: "Dark Fantasy",
    studio: "Studio 4°C",
    format: "Filmtrilogie",
    hook: "PEAK Dark Fantasy",
    note: "Berserk ist der beste Vertreter des Dark-Fantasy-Genres. Die absolute Messlatte. Nicht bloß wegen der Gewalt oder der Monster, sondern weil diese Welt gleichzeitig gewaltig, grausam und bedrückend menschlich ist. Ehrgeiz, Freundschaft, Verletzlichkeit und der Wille, irgendwie weiterzumachen, geben der ganzen Härte ihr Gewicht. Zwischen all dem Schrecken gibt es leise, fast zärtliche Momente – und genau dadurch trifft einen die Geschichte so sehr. Der Manga setzt den Maßstab: Der Zeichenstil ist so krank gut, dass man fast jede Seite an die Wand hängen könnte. Es ist bis heute der einzige Manga, den ich physisch besitze. Die drei Golden-Age-Arc-Filme sind ein ziemlich guter Einstieg und für mich insgesamt auch recht gut animiert, selbst wenn die Mischung aus 2D und CGI nicht immer perfekt aufgeht. Atmosphäre, Musik und die großen Szenen transportieren trotzdem viel von dem, was Berserk besonders macht. Der Anime von 2016 ist dagegen für mich eine Katastrophe: steife CGI-Figuren, hölzerne Bewegungen und eine Inszenierung, die dieser Vorlage einfach nicht gerecht wird. So sollte die stärkste Geschichte des Genres wirklich nicht aussehen. Früher hätte ich für eine neue Umsetzung unbedingt ufotable gewollt. Inzwischen ist mir der Name des Studios fast egal – Hauptsache, jemand versteht diese Welt und setzt sie mit der nötigen Sorgfalt um. Eine Umsetzung im Stil von Clevatess wäre zum Beispiel ein absoluter Traum. Diese düstere Bildsprache, die Wucht, das Gefühl von echtem Kino, nur mit Berserk: GOTT, WÄRE DAS GEIL. Bis dahin bleibt der Manga für mich das Herzstück. Dass Kentaro Miura seine Geschichte nicht selbst vollenden konnte, macht mich bis heute traurig."
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
    format: "4 Staffeln",
    hook: "Return by Death",
    note: "Aktuell bester Isekai für mich, wenn man nur nach Anime-Umsetzung geht. Bei diesem Anime war ich beim Release von Staffel 1 dabei und habe ihn seitdem verfolgt. Staffel 1 ist im dritten Arc ein reiner Rage-Bait, weshalb auch viele den Anime damals liegen lassen haben (was für Opfer). Staffel 2 ist sehr viel besser und zusammen mit Staffel 4 mein Favorit. Die zweite Staffel sorgt dafür, dass man so ziemlich alle Charaktere anders wahrnimmt. Auch der Aufbau als großes Mysterium war fantastisch. Den Plot habe ich erst beim dritten Mal richtig kapiert. Es liegt daran, wie hart Return by Death Subaru mental zerlegt: jeder Loop hat Konsequenzen, Beziehungen verändern sich, nichts wird vergessen. Staffel 2 zeigt, wie sehr Subaru an sich arbeitet, statt nur zu sterben und zu resetten. Charaktere fühlen sich glaubwürdig an, Entscheidungen tun weh. Die aktuelle vierte Staffel gehört zusammen mit Staffel 2 zum Besten, was dieser Anime bisher geliefert hat. Den zugrunde liegenden Arc 6 hatte ich in der Light Novel Gott sei Dank noch nicht gelesen. Mir wurde immer wieder gesagt, dass das der beste Arc sein soll – und bloß gut, dass ich ihn mir für den Anime aufgehoben habe. So konnte ich mehr oder weniger als Anime-only komplett blind reingehen und alles zum ersten Mal erleben. Genau dafür liebe ich Re:Zero: Seit Attack on Titan hat es keine Serie mehr geschafft, mich innerhalb einer Staffel mit so vielen Plottwists und Mysterien zu beschäftigen und gleichzeitig so starke Auflösungen zu liefern. Das wöchentliche Schauen ist wie schon bei Staffel 2 ein Fest – miträtseln, Theorien aufstellen und sich in der nächsten Folge wieder komplett überraschen lassen. Wenn der Anime dieses Niveau hält, wird er künftig wahrscheinlich in meinen Top 3 landen. Es war der erste Anime, bei dem ich direkt die Light Novel weitergelesen habe, weil ich nach der gelungenen Staffel 3 unbedingt wissen musste, wie es weitergeht."
  },
  {
    place: "4",
    navLabel: "4",
    title: "Attack on Titan",
    image: "images/attack_on_titan.png",
    summary:
      "Mauern, Titanen, Intrigen und ein Soundtrack, der einen Aufstand vertonen könnte. Ein Epos in vier Staffeln.",
    year: "2013",
    genre: "Dark Fantasy, Action",
    studio: "Wit Studio & MAPPA",
    format: "4 Staffeln",
    hook: "Dauer-Gänsehaut",
    note: "Ein Generationen-Anime. Als Staffel 1 kam, liefen massig Leute auf Messen im Aufklärungstrupp-Look herum. Staffel 2 ließ lange auf sich warten und hatte wenige Folgen, aber einen der stärksten Überraschungsmomente, die ich je in einer Serie erlebt habe. Ich war seit Release dabei: Staffel 1 viermal, Staffel 2 dreimal gesehen; jede Folge war ein Event, kein Binge. Reiner bester Charakter :P. Die moralischen Konflikte werden immer unbequemer, und über das Ende kann man sich wunderbar streiten. Die Welt wird ständig größer, die Mystery hält die Spannung oben, die Parallelen zum NS-Totalitarismus und der Judenverfolgung sind interessant. Musik ist fantastisch – hatte ich früher sogar als Wecker. Schade, dass die Animationsqualität später nachließ, wie es bei vielen Anime der Fall ist (Studio-Wechsel lässt grüßen)."
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
    note: "Mein zweiter Anime und bis heute einer der unzensiertesten. Ich habe ihn früher oft geschaut; heute würde man dafür vielleicht verhaftet werden, wenn man sowas produziert – genau deshalb ist er so gut. Ultimate ist die Version, die die Manga-Story vollständig und brutal adaptiert (anders als die alte TV-Serie), mit besserer Animation und mehr Wahnsinn. Alucard als unsterblicher Vampir gegen Nazi-Vampir-Armeen, der Vatikan mischt mit, überall stilisierte Gewalt und ikonische Momente. Soundtrack knallt, Inszenierung ist wahnsinnig gut. Ich habe damals angefangen zu schauen, als die letzte OVA gerade erschienen ist, weshalb ich dafür auch von der deutschen Synchro auf Japanisch wechseln musste, was mich damals sehr störte, aber auch ein guter Einstieg war."
  },
  {
    place: "2",
    navLabel: "2",
    title: "Fate/Zero & Fate/stay night (Reihe)",
    image: "images/fate_zero.jpg",
    summary:
      "Heiliger-Gral-Krieg mit Heroic Spirits, philosophischen Duellen und ufotable-Sakuga, die jede Schlacht zum Kunstwerk macht.",
    year: "2011",
    genre: "Action, Dark Fantasy",
    studio: "ufotable",
    format: "Mehrere Staffeln & Filme",
    hook: "Ufotable-Sakuga",
    note: "Absoluter Fan. Fate/Zero ist für mich Peak ufotable: sakuga ohne Ende, düstere Farbpalette, Kamerafahrten wie im Kino und Kämpfe, die sich in den Kopf brennen. Man lernt nebenbei was über Geschichte und Helden. Selbst in Dialogszenen bleibt das Bild nie stehen – zwei Figuren laufen im Kreis durch ein prächtiges Gebäude, während sie reden; andere Studios würden nur Mundanimation zeigen. Die Idee, historische Helden in einem Battle Royale um den Heiligen Gral gegeneinander antreten zu lassen, ist stark, aber die Reihe glänzt vor allem in den moralischen Dilemmas (Kiritsugu vs. Kirei, Ideale vs. Realität). Fate/Zero ist ein sehr guter, einfacher Einstieg. Danach spielt Fate/stay night mit drei Routen (Saber, Rin/Unlimited Blade Works, Sakura/Heaven’s Feel), weil es auf einem Spiel mit verzweigten Story-Strängen basiert. Leider ist meine Lieblingsroute (Saber) am schwächsten animiert, weil es nicht von ufotable ist. Ich hatte die Saber-Route vor ganz langer Zeit versucht mit einem Kumpel zu schauen und diese abgebrochen. Erst nachdem jemand anderes mich überredete Fate/Zero und UBW zu schauen, bekam ich langsam Fan und schaute auch die grandiosen Heaven’s-Feel-Filme. Danach gab ich auch der Saber-Route noch eine Chance – ab da war ich dann komplett drin und mochte diese am meisten. Aber auch die Rin- und Sakura-Route sind fantastisch. Schau dir nur mal Saber vs. Berserker oder Saber vs. Rider auf YouTube an: jeder einzelne Kampf, jede Animation ist godlike. Ich habe eine regelrechte Angst mir ein Video dazu anzuschauen, weil ich sonst wohl wieder sofort alles binge. Philosophisch und bombastisch zugleich – genau diese Mischung macht die Reihe so einzigartig."
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
    format: "13 Episoden",
    hook: "Erster Anime ever",
    note: "Dieser ist mein erster Anime, mein Einstiegsmedium. Für viele ist der erste bewusst geschaute Anime auch immer der Beste, und so ist es auch bei mir der Fall. Ein Freund musste mich dazu zwingen, ihn mit sich anzuschauen, weil ich von Anime (generell japanischen Medien) nicht viel gehalten habe und eigentlich viel lieber Call of Duty: Black Ops 2 spielen wollte. Nach viel Überzeugungsarbeit schauten wir ihn uns dann auf Deutsch auf YouTube an (ja, sowas gab es früher auf YouTube als 5-Stunden-Video OHNE Werbung). Aus damaliger Sicht war es unfassbar zu sehen, wie sehr unzensiert eine Serie sein kann, um eine wunderschöne Story zu erzählen. Ich habe ihn bestimmt zwölfmal gesehen; damals direkt vier Tage am Stück hintereinander mit meinem Kumpel zusammen, und daraus wurde ein jährliches Ritual. Ich erinnere mich noch, wie ich wochenlang an nichts anderes denken konnte, als ich in der Schule saß. Er ist brutal und zart zugleich – genau deshalb meine persönliche Nummer 1. So etwas hatte man einfach noch nie gesehen. Die Musik ist unvergleichbar und das Ende lässt einen (zumindest jungen Menschen) als emotionales Nervenbündel zurück."
  }
];

const honorableMentionsList = [
  {
    title: "Jujutsu Kaisen",
    note: "Bis Ende Staffel 2 richtig gut, danach wird die Story unverständlich und bodenlos schlecht."
  },
  {
    title: "Dandadan",
    note: "Aliens, Geister und herrlich überdrehter Wahnsinn. Starker Stil, schräger Humor und tolle Chemie zwischen den Charakteren."
  },
  {
    title: "Hell's Paradise",
    note: "Eine paradiesische Insel als brutaler Albtraum. Düstere Atmosphäre, groteske Kreaturen und eine schöne Portion Mystery."
  },
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
  },
  {
    title: "Seven Deadly Sins",
    note: "Die ersten zwei Staffeln sind richtig stark – danach wird die Animation leider gottlos schlecht."
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
