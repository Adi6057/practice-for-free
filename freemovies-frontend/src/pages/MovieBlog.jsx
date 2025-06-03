import React, { useState } from "react";
import PopupAd from "../PopupAd";

const movies = [
  {
    id: "jana-nayagan",
    title: "Jana Nayagan (Thalapathy 69)",
    releaseDate: "January 9, 2026",
    director: "H. Vinoth",
    cast: "Vijay, Pooja Hegde, Bobby Deol, Gautham Vasudev Menon, Prakash Raj, Priyamani, Shruti Haasan, and others",
    genre: "Political Action Thriller",
    overview:
      "Billed as Vijay’s final film before his political debut, Jana Nayagan delves into themes of governance and social justice. The film is produced by KVN Productions and features music by Anirudh Ravichander.",
    story: `Leo 2

(The Lion Awakens Again)

A Blodstained Legacy. A Reluctant King. A War rekindled.

After the thunderous success of Leo, which redefined the action thriller genre in Tamil cinema and gave fans a layered Vijay to recline to, the much awaited sequel, Leo 2 is in the making and it promises to raise the stakes, deepen the construct and mythology of the story, along with unraveling an identity crisis of the protagonist. 

Prologue : Ghosts Never Rest

Parthiban is thought to be dead by the world.

Parthi, once a quiet baker and a father, fought an empire during the climax and turned into a beast at the end of Leo and in the middle of the climax he SIMPLY vanishes. He disappears after the fight. He manages to keep his family safe. His past starts to haunt him and the worst part about ina is that he bravely manages to bury it again. 

At least that is what he believes. 

Leo 2 begins with the world deep eastern Europe ice cold region. A convoy is under ambush, but not by optimists or rogue mili—by some precise, and calculated people with intention. Many die. Many Files go missing while A Name reverberates through capturable communications. 

“Leo Das.”


Act I: The Lion Reborn

Back in India, Parthiban is living under a new identity in a remote border town. His wife, Sathya, and children believe the storm has passed. He runs a humble auto-repair shop. But his eyes—once burning with trauma—now hold only dread.

Then comes a knock. A woman from Interpol, Agent Meera Thomas, arrives. She’s not there to arrest him. She’s there to beg for help.

The remnants of Antony Das’s empire have reformed under a new leader: Gabriel Das—Antony’s estranged son, raised in exile and trained in warfare. Cold, brilliant, and vengeful, Gabriel believes Leo Das is still alive—and he wants his brother’s blood.

As Gabriel’s syndicate expands into global arms and human trafficking, one name continues to appear on their encrypted servers: Leo. A ghost. A myth. A threat.

Parthiban, despite years of trying to bury Leo, realizes a terrifying truth: he can’t run from a war he started.

Act II: Past, Present, Predator

Leo 2 plunges into a deeper psychological exploration. While Leo dealt with identity denial, Leo 2 explores reluctant acceptance. Parthiban no longer denies he was Leo Das. But he now wrestles with what it means to become him again.

We get flashbacks to Leo’s earlier days—before Leo’s timeline—where young Leo was both protector and predator, fighting for his family yet consumed by a brutal world. These sequences are intercut with present-day confrontations, where Parthi is forced to relive his worst memories to protect his family.

Gabriel launches calculated attacks—not just physical, but emotional. He kidnaps a close friend of Parthi’s family. He leaks old footage of Leo’s crimes. He turns the media and the law against him.

As the pressure mounts, Vijay transforms on-screen from the weary-eyed Parthi to the silent, surgically violent Leo Das. But this time, he’s not alone.

Sathya, no longer the unaware wife, becomes his anchor. Agent Meera becomes his tactical ally. And an unexpected figure—a former associate of Antony Das, now seeking redemption—offers Leo the intel he needs.

Act III: Fire and Ice

The action in Leo 2 escalates beyond anything seen before. We’re taken to icy tundras, neon-drenched ports, and deep into underground fight arenas in Eastern Europe. The cinematography is brutal and beautiful—each sequence framed like a memory Leo wishes he could erase.

One standout scene involves Leo infiltrating an abandoned Soviet bunker, converted into a weapon smuggling hub. Armed with nothing but a knife and his old instincts, Vijay delivers a 12-minute uncut action set-piece—a masterclass in choreography and tension. It’s visceral, it’s unrelenting—and it ends with Leo breaking, not just his enemies, but emotionally as he finds a child soldier forced into combat.

This becomes the emotional crux: Leo realizes that every time he runs, more innocents pay the price. The only way out is not escape—but eradication.

Act IV: The Final Hunt

Gabriel, learning that Leo is back, stages his final plan: a mass hostage situation in the heart of Chennai, using Leo’s old name and deeds to frame him as a terrorist. With the government unwilling to help, and the media baying for blood, Leo must go rogue.

The final hour of Leo 2 is an operatic ballet of chaos, confrontation, and catharsis. Parthi becomes Leo—but this time, with purpose, not pain. He leads a strike team made up of former enemies, rogue agents, and street-level allies.

The final battle between Leo and Gabriel is not just fists and firepower—it’s ideology. Gabriel represents inherited hate. Leo, redefined by love and loss, is no longer the same man. The fight is brutal. Both are wounded. But Leo, drawing on every lesson of both past and present, wins—not by killing—but by walking away, exposing Gabriel to his own men.

In the aftermath, Leo disappears again. Not as a fugitive. But as a myth—a force that rises only when needed.

Epilogue: What Remains

The final scenes of Leo 2 show Sathya and their children living in peace. Agent Meera delivers a report to her superiors: “Leo Das is gone. Parthiban lives. Let him.”

But in a final post-credits shot, in a distant port, a shadow watches a cargo ship full of trafficked weapons. The camera rises. We see a familiar silhouette lighting a cigarette.

He doesn’t speak.

But his eyes say everything.

The lion sleeps—but never dies.

Behind the Screen: A Sequel with Purpose

Leo 2 is more than just a follow-up. It is a deliberate evolution—of both character and craft. Vijay reprises one of his most complex roles to date, portraying Leo not as an action hero but as a man constantly negotiating the trauma of his choices.

The makers have hinted that Leo 2 will complete the psychological arc of the character, turning Leo from a man running from his demons into one who faces them and rises above. With music by Anirudh, direction rumoured to again involve Lokesh Kanagaraj, and cinematography that rivals global action cinema, Leo 2 aims to push Tamil cinema into international waters.

Unlike many sequels that merely inflate the spectacle, Leo 2 appears focused on depth. The themes of legacy, violence, guilt, and redemption are explored with emotional heft and narrative maturity. The film doesn't just continue Leo’s story—it finishes it, perhaps not with closure, but with understanding.

Conclusion: The Return of the King

Slated for a massive 2026 release, Leo 2 is shaping up to be not just one of Vijay’s most anticipated projects—but possibly his boldest. As the industry watches with bated breath, and fans flood social media with theories and tributes, one thing is certain:

The lion has roared once.
Now, it returns.
Not for glory.
But for peace.
For family.
For justice.

Leo 2. The blood has not dried. The war is not over.`,
  },
  {
    id: "leo-2",
    title: "Leo 2",
    releaseDate: "2026 (expected)",
    director: "Lokesh Kanagaraj",
    cast: "Vijay and others",
    genre: "Action Thriller",
    overview:
      "Following the success of Leo, a sequel is in the works. Leo 2 promises to escalate the action and narrative intensity, with Vijay reprising his role. The film is anticipated to be a major release in 2026.",
    story: `Leo 2 (The Lion Awakens Again)

Jana Nayagan
(The People's Hero)
A Cinematic Farewell, A Political Awakening

In the dusty bylanes of a small village nestled deep in Tamil Nadu, a boy named Arivazhagan was born with little more than grit in his eyes and fire in his heart. The village, plagued by poverty and long-forgotten by those in power, had no heroes—only survivors. But even as a child, Arivu stood apart. He asked questions others were afraid to raise. He fought not for himself, but for the quiet dignity of those around him. And thus began a journey that would one day elevate him from the shadows of the forgotten to the forefront of an awakening.

Act I: The Spark

Arivu (played by Vijay) grows up watching his father struggle against an unjust system—a man who once dreamt of change but was broken by bureaucracy and betrayal. The village school lacks teachers. The clinic has no doctor. The corrupt local politician, Sathyamoorthy, maintains a tight grip, handing out meager benefits in exchange for loyalty.

But Arivu refuses to bow. He organizes youth groups, helps villagers access government schemes, and exposes corrupt middlemen siphoning funds meant for welfare. A confrontation with the police during a peaceful protest lands him in jail—but it also lands him on the front pages of newspapers.

A local journalist, Meera, is drawn to his story. Unlike many who seek spectacle, she sees substance. Through her lens, Arivu becomes a symbol—a reluctant leader with no ambition but every reason to lead.

Act II: The Rise

After his release, Arivu is approached by a fringe political party—the Tamil Makkal Katchi (TMK). The party wants to use his popularity to win a few seats, but Arivu sets conditions: no caste politics, complete transparency, and a people-first manifesto.

He contests his first election not with pomp, but with purpose. His campaign includes walking from village to village, eating with farmers, sleeping in schools, and listening more than speaking. The people, disillusioned by decades of dynastic politics, begin to believe again.

Against all odds, he wins.

In the legislative assembly, Arivu is a thorn in the side of the establishment. He challenges corrupt contracts, speaks up for minority rights, and advocates education and healthcare reform. His speeches go viral. His name, once whispered in hope, becomes a rallying cry: "Arivu vendum, porattam thodarum!" (We need Arivu, the struggle continues.)

His growing popularity threatens the ruling elite. Sathyamoorthy, now a cabinet minister, orchestrates a smear campaign, accusing Arivu of inciting violence. Meera stands by him, releasing a documentary that exposes the rot in the system and the innocence of Arivu’s movement.

Act III: The Fall and the Fire

Just as Arivu prepares for a larger political plunge, tragedy strikes. During a protest against a corporate land grab, police open fire. Several villagers die. Arivu, though injured, shields a child and survives—but the scars are deep.

Haunted by the bloodshed, he withdraws briefly from politics. His absence is felt across the state. A vacuum begins to form. Opportunists try to hijack his movement, and the ruling government clamps down harder, thinking the storm has passed.

But the people rise. Women lead marches. Students take to the streets. Songs are written. Walls are painted with his image—not as a messiah, but as a mirror of their own struggle. One elderly farmer puts it simply: "He gave us courage. Now, we give it back to him."

Arivu returns—not as a member of a party, but as the founder of a movement: Jana Nayagam. With the slogan "Ellorukkum vaakkum, ellorum poruppu" (Every voice counts, every person is responsible), he announces his candidacy for Chief Minister.

Act IV: The War of Wills

The final act of the film is a tightly-woven battle of ideologies. Sathyamoorthy represents the old guard—power through manipulation. Arivu brings in young leaders, even from rival parties, promoting merit and unity. He refuses to promise freebies, focusing instead on structural reforms.

Election night becomes a national event. Every channel is tuned in. In a powerful montage, the country watches the results alongside scenes from Arivu’s journey—his childhood fights, the jail cell, the bloodied protest, and the people's unwavering support.

The final count: Arivu’s coalition wins by a landslide.

The film ends not with a grand coronation, but with a quiet moment: Arivu visiting his father's grave. He kneels, placing a hand-written note: "Naan aanaalum, makkal aatchi dhaan. Naan ilainaalum, makkal porattam dhaan."
("Even if I lead, it's the people's rule. Even if I fall, it's the people's struggle.")

He walks away, the crowd behind him chanting, “Jana Nayagan!”

Meta-Layer: Vijay’s Swan Song

Jana Nayagan is more than just a film. It is a reflection of Vijay’s own path. For years, he has been more than an actor. Through roles that championed justice, unity, and compassion, he has gradually become a cultural force—one whose words echo in real-life protests, whose fan clubs have turned into grassroots movements.

The promotional posters show Vijay standing not in front of a burning backdrop or holding weapons, but standing amidst common people—farmers, students, women, workers—his hand raised not in defiance, but in assurance. The tagline reads: “Ungal kural thaan en kural.” (Your voice is my voice.)

Critics have noted that the film blurs the line between reel and real. The monologues about governance, corruption, and people's rights seem crafted not just for a fictional audience, but as Vijay’s own vision statement. His character’s refusal to indulge in theatrics, his focus on democratic values and inclusion, feel like blueprints for the kind of politics Vijay may wish to pursue.

The final shot—Arivu walking into the legislative assembly, not as a hero, but as a servant of the people—fades into black as the screen reads simply:

“Ithu oru kadhai alla. Ithu oru aarambam.”
(This is not just a story. This is a beginning.)

Conclusion

Jana Nayagan is a farewell to cinema, but not to the audience. Through Arivu, Vijay delivers his final message on-screen: that power belongs to the people, and leadership is service, not supremacy.

Whether Vijay succeeds in politics or not, his transition has already sparked conversation. Jana Nayagan ensures that his cinematic exit is not just memorable—but meaningful.

A story of struggle, idealism, and transformation, this 69th film is not the end of a journey. It is the start of a revolution.`,
  },
];

export default function MovieBlog() {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const selectedMovie = movies.find((m) => m.id === selectedMovieId);

  const openPopunder = () => {
    const win = window.open("https://your-popunder-ad.com", "_blank");
    if (win) {
      win.blur(); // Send to background
      window.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}

      {/* 🔹 Ad #1: Top Banner Ad */}
      <div className="w-full bg-gray-800 text-center py-3 mb-4">
        <span className="text-sm text-gray-400">Ad — Top Banner</span>
        {/* Place AdSense/PropellerAds/etc. script here */}
      </div>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {!selectedMovie && (
          <>
            <h2 className="text-4xl font-bold mb-8 text-indigo-400">
              Upcoming Vijay Movies
            </h2>
            <div className="space-y-6">
              {movies.map(
                ({
                  id,
                  title,
                  releaseDate,
                  director,
                  cast,
                  genre,
                  overview,
                }) => (
                  <div
                    key={id}
                    className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-indigo-900 transition"
                    onClick={() => setSelectedMovieId(id)}
                    aria-label={`View details of ${title}`}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-indigo-300">
                      {title}
                    </h3>
                    <p>
                      <strong>Release Date:</strong> {releaseDate}
                    </p>
                    <p>
                      <strong>Director:</strong> {director}
                    </p>
                    <p>
                      <strong>Cast:</strong> {cast}
                    </p>
                    <p>
                      <strong>Genre:</strong> {genre}
                    </p>
                    <p className="mt-2 text-gray-300">{overview}</p>
                    <button
                      className="mt-4 inline-block text-indigo-400 hover:text-indigo-600 font-semibold"
                      onClick={() => setSelectedMovieId(id)}
                    >
                      Read Story
                    </button>
                    {/* 🔹 Ad #2: Top Banner Ad */}
                    <div className="w-full bg-gray-800 text-center py-3 mb-4">
                      <span className="text-sm text-gray-400">
                        Ad — Top Banner
                      </span>
                      {/* Place AdSense/PropellerAds/etc. script here */}
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        )}

        {/* Movie Story Explainer */}
        {selectedMovie && (
          <article className="bg-gray-800 rounded-lg p-8 prose prose-invert max-w-none">
            <button
              onClick={openPopunder}
              className="mb-6 text-indigo-400 hover:text-indigo-600 font-semibold cursor-pointer"
            >
              ← Back to Movies
            </button>

            <h2 className="text-4xl font-bold mb-4 text-indigo-300">
              {selectedMovie.title}
            </h2>
            <p className="mb-1">
              <strong>Director:</strong> {selectedMovie.director}
            </p>
            <p className="mb-1">
              <strong>Genre:</strong> {selectedMovie.genre}
            </p>

            {/* 🔹 Ad #3: Inside Story */}
            <div className="my-6 text-center bg-gray-700 p-4 rounded">
              <span className="text-sm text-gray-400">
                Ad — In Story Content
              </span>
              {/* Insert AdSense/ad code here */}
            </div>
            <p className="mb-6 whitespace-pre-line">{selectedMovie.story}</p>
          </article>
        )}
      </main>
      <PopupAd />
    </div>
  );
}
