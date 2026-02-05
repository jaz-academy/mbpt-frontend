import { Link } from "react-router-dom";
import personaImg from "@/assets/img/personalities.png";
import fuelsImg from "@/assets/img/fuels.jpg";
import { useApp } from "../../../app/hook";

export default function About() {
  const { language } = useApp();

  const copy = {
    id: {
      heroTitle: "Motivation-Based ",
      heroAccent: "Personality",
      heroSubtitle: "Kepribadian berdasarkan Jenis Motivasi yang Dominan",
      heroP1Start: "Setiap orang punya ",
      heroP1Accent: "bahan bakar yang berbeda",
      heroP1End:
        " untuk bergerak, bertahan, belajar dan bekerja secara produktif.",
      heroLead: "The Four Fuel Types",
      heroBy: "oleh",
      heroName: "Rama Gani",
      heroNote: "Self-Determination Theory - Richard M. Ryan & Edward L. Deci",
      backBtn: "Kembali",
      startBtn: "Mulai Tes",
      s2TitleStart: "4 Jenis ",
      s2TitleAccent: "Bahan Bakar Manusia",
      s2TitleEnd: " untuk Bergerak dan Bekerja",
      s2By: "Original Post by. Rafi Achmad -",
      s2Source: " retizen.republika.co.id",
      s2P1: "Pernah gak sih kalian menemukan orang yang semakin dinasihati justru semakin malas, tetapi ketika dibiarkan malah jadi lebih produktif? Fenomena ini ternyata bukan soal keras kepala atau kurang ambisi, tapi bisa jadi karena sumber energi tiap orang itu beda-beda.",
      s2P2: "Bersumber dari konten edukatif seorang pegiat buku di media sosial dengan akun @ganiramaa, yang merangkum hasil deep research dari berbagai jurnal serta buku Self-Determination Theory karya Richard M. Ryan dan Edward L. Deci",
      cIntro:
        'Dijelaskan bahwa manusia tidak digerakkan oleh satu jenis motivasi yang sama. Setiap orang punya "bahan bakar" berbeda untuk bisa bergerak, bertahan, dan bekerja secara produktif. Konsep ini kemudian dirangkum oleh Rama Gani dalam istilah "The Four Fuel Types." Lantas, apa saja yang dimaksud dengan The Four Fuel Types ini?',
      fuels: [
        {
          prefix: "Pertama, ",
          label: "Validation",
          suffix: " Fuel",
          body: "Validation Fuel adalah energi yang muncul dari pengakuan eksternal. Orang dengan tipe ini akan merasa hidup ketika mendapat apresiasi, pujian, atau pengakuan. Sebaliknya, ketika diabaikan, energinya bisa langsung turun drastis. Rama Gani menegaskan bahwa hal ini bukan bentuk manja, melainkan memang sumber energi orang tersebut berasal dari luar dirinya.",
        },
        {
          prefix: "Kedua, ",
          label: "Fear",
          suffix: " Fuel",
          body: "Fear Fuel adalah tipe orang yang bergerak karena rasa takut seperti takut miskin, takut tertinggal, takut gagal, dan berbagai ketakutan lainnya. Selama hidup terasa mengancam, mereka bisa berjalan gaspol. Namun ketika hidup sudah terasa aman, dorongannya cenderung menurun, yang penting sudah berada di zona aman. Menariknya, tipe energi ini sering dianggap sebagai cara paling ampuh untuk memotivasi seseorang. Dalam kehidupan sehari-hari, Fear Fuel kerap muncul dalam bentuk nasihat orang tua, keluarga, bahkan teman, yang tanpa sadar menekan lewat rasa takut.",
        },
        {
          prefix: "Ketiga, ",
          label: "Vision",
          suffix: " Fuel",
          body: "Vision Fuel adalah energi yang lahir dari mimpi dan gambaran masa depan. Selama visi, wishlist, dan tujuan hidup masih jelas dan hidup di dalam dirinya, orang dengan tipe ini akan terus bergerak. Namun tanpa visi, hidup bisa terasa kosong. Ketika seseorang terlihat bingung, stagnan, atau hanya menghabiskan waktu di kamar tanpa arah, bisa jadi bukan karena malas, melainkan karena vision fuel-nya belum terbentuk. Ia perlu menciptakan mimpinya terlebih dahulu agar bisa melangkah maju.",
        },
        {
          prefix: "Keempat, ",
          label: "Meaning",
          suffix: " Fuel",
          body: 'Terakhir adalah Meaning Fuel. Orang dengan tipe ini akan terus berjalan selama apa yang ia lakukan terasa bermakna bagi dirinya. Geraknya mungkin tidak cepat, tetapi cenderung stabil dan konsisten karena didorong oleh rasa "ini penting" dan "ini berarti."',
        },
      ],
      cClose1:
        "Dari keempat jenis bahan bakar manusia ini, sering kali kesalahan justru terjadi saat kita memberi energi yang tidak sesuai. Orang yang membutuhkan makna malah didorong untuk mencari validasi. Orang yang hidup dari visi justru ditakut-takuti dan terus dinasihati. Akibatnya, banyak orang kemudian dicap malas, tidak punya tujuan, kurang ambisi, atau tidak punya drive. Padahal, mungkin bukan orangnya yang salah, melainkan bahan bakar yang kita berikan tidak sesuai.",
      cClose2:
        "Karena itu, penting untuk berkomunikasi dengan orang-orang terdekat agar kita bisa memahami energi apa yang paling cocok untuk mendorong mereka terus bergerak dan produktif alih-alih menebak-nebak dan memaksakan motivasi versi kita sendiri.",
      tags: "#psikologipendidikan #psikologi #mental #motivasi #energi",
    },
    en: {
      heroTitle: "Motivation-Based ",
      heroAccent: "Personality",
      heroSubtitle: "Personality based on the dominant type of motivation",
      heroP1Start: "Everyone has ",
      heroP1Accent: "a different fuel",
      heroP1End: " that helps them move, endure, learn, and work productively.",
      heroLead: "The Four Fuel Types",
      heroBy: "by",
      heroName: "Rama Gani",
      heroNote: "Self-Determination Theory - Richard M. Ryan & Edward L. Deci",
      backBtn: "Back",
      startBtn: "Start Test",
      s2TitleStart: "Four Types of ",
      s2TitleAccent: "Human Fuel",
      s2TitleEnd: " to Move and Work",
      s2By: "Original Post by. Rafi Achmad -",
      s2Source: " retizen.republika.co.id",
      s2P1: "Have you ever met someone who gets lazier the more they are advised, but becomes more productive when left alone? This turns out not to be about stubbornness or lack of ambition. It may simply be that each person draws energy from different sources.",
      s2P2: "This comes from educational content by a book enthusiast on social media, @ganiramaa, who summarized deep research from various journals and the Self-Determination Theory book by Richard M. Ryan and Edward L. Deci.",
      cIntro:
        'It is explained that humans are not driven by a single type of motivation. Each person has a different "fuel" to move, endure, and work productively. Rama Gani summarized this concept as "The Four Fuel Types." So, what are these Four Fuel Types?',
      fuels: [
        {
          prefix: "First, ",
          label: "Validation",
          suffix: " Fuel",
          body: "Validation Fuel is energy that comes from external recognition. People of this type feel alive when they receive appreciation, praise, or acknowledgement. Conversely, when ignored, their energy can drop sharply. Rama Gani emphasizes that this is not being spoiled; it simply means their energy source comes from outside themselves.",
        },
        {
          prefix: "Second, ",
          label: "Fear",
          suffix: " Fuel",
          body: "Fear Fuel describes people who move because of fear, such as fear of being poor, left behind, or failing, and other anxieties. As long as life feels threatening, they can push hard. But when life feels safe, their drive tends to decline as long as they are in a safe zone. Interestingly, this energy type is often considered the most effective way to motivate someone. In daily life, Fear Fuel appears in advice from parents, family, or even friends that unconsciously pressures through fear.",
        },
        {
          prefix: "Third, ",
          label: "Vision",
          suffix: " Fuel",
          body: "Vision Fuel is energy born from dreams and images of the future. As long as vision, wishlists, and life goals remain clear and alive within them, people of this type keep moving. But without vision, life can feel empty. When someone looks confused, stagnant, or spends time in their room without direction, it may not be laziness, but a vision fuel that has not yet formed. They need to create their dream first to move forward.",
        },
        {
          prefix: "Fourth, ",
          label: "Meaning",
          suffix: " Fuel",
          body: 'Lastly is Meaning Fuel. People of this type keep moving as long as what they do feels meaningful to them. Their pace may not be fast, but it tends to be steady and consistent because they are driven by "this matters" and "this is meaningful."',
        },
      ],
      cClose1:
        "Across these four human fuel types, mistakes often happen when we give the wrong kind of energy. People who need meaning are pushed to seek validation. People who live from vision are frightened and constantly advised. As a result, many are labeled lazy, aimless, unambitious, or lacking drive. Perhaps the person is not the problem; the fuel we provide is the mismatch.",
      cClose2:
        "That is why it is important to communicate with people close to us so we can understand which energy best helps them keep moving and being productive rather than guessing and forcing our own version of motivation.",
      tags: "#educationpsychology #psychology #mental #motivation #energy",
    },
  } as const;

  const t = copy[language];

  return (
    <>
      {/* <!-- HERO --> */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
          <img
            src={personaImg}
            id="heroImage"
            className="w-full h-full animate-[smoothZoom_16s_ease-in-out_infinite]"
            alt=""
          />
        </div>
        <div className="items-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            {t.heroTitle}
            <span className="text-indigo-600">{t.heroAccent}</span>
          </h1>
          <em className="text-sm">{t.heroSubtitle}</em>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-xl my-4">
            {t.heroP1Start}
            <span className="text-pink-500">{t.heroP1Accent}</span>
            {t.heroP1End}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-xl my-4">
            <strong>{t.heroLead}</strong> {t.heroBy}
            <a
              href="https://instagram.com/ganiramaa"
              target="_blank"
              className="font-bold"
            >
              {` ${t.heroName} `}
            </a>
            <br />
            <i className="text-xs md:text-sm">{t.heroNote}</i>
          </p>
          <div className="flex mt-10">
            <Link to="/">
              <button className="cursor-pointer bg-gray-600 text-white px-6 py-3 rounded-xl transition-transform duration-700 ease-in-out scale-100 hover:scale-110 mr-3">
                {t.backBtn}
              </button>
            </Link>
            <Link to="/test">
              <button className="cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-xl transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
                {t.startBtn}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center text-justify">
        <div className="items-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
            {t.s2TitleStart}
            <span className="text-indigo-600">{t.s2TitleAccent}</span>
            {t.s2TitleEnd}
          </h1>
          <i>
            {t.s2By}
            <span className="text-pink-500">{t.s2Source}</span>
          </i>
          <p className="mt-6">{t.s2P1}</p>
          <p className="mt-6">{t.s2P2}</p>
        </div>
        <div className="rounded-3xl shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
          <img
            src={fuelsImg}
            id="heroImage"
            className="w-full h-full animate-[smoothZoom_16s_ease-in-out_infinite]"
            alt=""
          />
        </div>
      </section>

      {/* <!-- CONTENT --> */}
      <section className="max-w-6xl mx-auto px-8 py-10 grid md:grid-rrows-2 gap-8 items-center text-justify">
        <div>
          <p className="mb-6">{t.cIntro}</p>
          {t.fuels.map((fuel) => (
            <div key={fuel.label}>
              <strong className="mb-6 block">
                {fuel.prefix}
                <span className="text-indigo-600">{fuel.label}</span>
                {fuel.suffix}
              </strong>
              <p className="mb-6">{fuel.body}</p>
            </div>
          ))}
          <p className="mb-6">{t.cClose1}</p>
          <p className="mb-6">{t.cClose2}</p>
          <i className="mb-20 text-italic text-pink-500">{t.tags}</i>
        </div>
      </section>
    </>
  );
}
