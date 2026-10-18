"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {q:"What age do you accept? We have Islam pupils?", a:"Baby Class from 3 years - even if not toilet trained we help patiently, Middle 4 years, Top 5 years, Primary P1-P7 Day & Boarding. YES we embrace Islam as well - hijab allowed white top green skirt, halal meals for boarders on request, Muslim teachers, Ramadan respect. Your photo with 4 girls in hijab is everyday at MEDAG. Day & Boarding available, Christian & Muslim together, no discrimination."},
    {q:"Is 2026 Admission really FREE? What is full cost?", a:"YES! 2026 Admission FREE for all classes. You only pay Development 20k once/year, Uniform Nursery 130k / Primary 150k (includes 2 sets + sweater + socks), Requirements 50k, Medical 10k per term, Transport 100k-130k if you need van, plus termly tuition. No admission fee. MTN 0782198528 is main WhatsApp, not Airtel. Bank fees in school account."},
    {q:"What are P7 Fees NEXT YEAR including boarding?", a:"UPDATED 2026: Day - Baby-Top 250k, P1-P2 280k, P3-P4 290k, P5-P6 310k, P7 Day 350k NEXT YEAR. Boarding - Nursery 540k, P1-P2 560k, P3-P6 580k, P7 Board 630k NEXT YEAR. All include meals, prep, sports, MDD. Uniform Nursery 130k Primary 150k separate. Confirm via WhatsApp MTN 0782198528. Your maroon photo is primary uniform, green before van is transport."},
    {q:"Boarding casual wear, Fashion Show, Freedom City?", a:"YES! Boarders have casual wear for evening - your red dresses + swings photo is boarding girls in evening casual at swings, not uniform. Fashion Show every term - grey vests red bow ties (Ministers), green suits white cross, traditional wear colorful hats - your 3 photos. Builds confidence, MDD Music Dance Drama. Freedom City tours annually - water park educational trip to Kampala - your pool photo. Basketball court brick paving for games."},
    {q:"Play Area for Nursery Kids & Nursery Section?", a:"Play Area for Nursery Kids - your title - merry-go-round wheel, swings, slide, sand pit, low height, soft sand, always supervised, not shared with primary. Nursery Section - your title - colorful buildings blue/green/yellow/red separate gate, kid-size toilets, hand washing. Safe, joyful. Plus playground generated image. Infant section with toilet training help."},
    {q:"What is needed to enroll? Location & Transport?", a:"Birth certificate copy, 2 passport photos, previous report card for P1-P7. Visit Kigulu-Iganga along Kaliro Road 2km from Iganga Town - Boda 3k from town. Boda say MEDAG Infant School. Van 100k-130k with matron - your green before van photo. Call MTN 0782198528 / 0704797650. Uniform Nursery 130k Primary 150k full set. Boarding uniform 70k, Hair cutting 3k. Map below."},
  ];

  return (
    <main className="bg-[#FFFBFB] overflow-x-hidden text-[#141A33]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="MEDAG Logo" className="w-10 h-10 rounded-full bg-white object-contain border-2 border-[#BF000A] p-1 shadow" />
            <div className="leading-none"><p className="font-black text-[16px] tracking-tight text-[#BF000A]">MEDAG INFANT AND PRIMARY SCHOOL</p><p className="text-[8.5px] font-bold tracking-widest text-gray-500 mt-1">MAKING A DIFFERENCE • KIGULU-IGANGA • MTN 0782198528 • P7 350K/630K</p></div>
          </div>
          <nav className="hidden lg:flex gap-7 text-[13px] font-bold">
            <a href="#about" className="hover:text-[#BF000A]">About</a>
            <a href="#facilities" className="hover:text-[#BF000A]">Facilities</a>
            <a href="#programs" className="hover:text-[#BF000A]">Programs</a>
            <a href="#gallery" className="hover:text-[#BF000A]">Gallery</a>
            <a href="#fees" className="hover:text-[#BF000A]">Fees</a>
            <a href="#contact" className="hover:text-[#BF000A]">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/256782198528" className="hidden md:block bg-[#22C55E] text-white px-5 py-2.5 rounded-full font-bold text-[13px]">WhatsApp MTN 0782198528</a>
            <button onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 bg-[#BF000A] text-white rounded-full font-bold">☰</button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-3 text-[14px] font-bold">
            <a onClick={()=>setMenuOpen(false)} href="#about" className="block">About & Islam</a>
            <a onClick={()=>setMenuOpen(false)} href="#facilities" className="block">Play Area & Nursery</a>
            <a onClick={()=>setMenuOpen(false)} href="#programs" className="block">Baby to P7</a>
            <a onClick={()=>setMenuOpen(false)} href="#gallery" className="block">Gallery</a>
            <a onClick={()=>setMenuOpen(false)} href="#fees" className="block">P7 350k/630k Fees</a>
            <a onClick={()=>setMenuOpen(false)} href="#contact" className="block">Map & Contact</a>
            <a href="https://wa.me/256782198528" className="block bg-[#22C55E] text-white text-center py-3 rounded-full mt-3">WhatsApp MTN 0782198528</a>
          </div>
        )}
      </header>

      {/* HERO - BALANCED WORDS + PICTURE - NOT MANY PICTURES */}
      <section id="home" className="bg-[#FFF0F0]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex bg-[#BF000A] text-white px-4 py-1.5 rounded-full text-[11px] font-black border shadow-sm">🔥 2026 ADMISSION FREE • P7 DAY 350K BOARD 630K NEXT YEAR • UNIFORM NUR 130K PRI 150K • MTN 0782198528 MAIN</div>
            <h1 className="mt-5 text-[38px] md:text-[56px] font-black leading-[0.95]">Making A Difference,<br/><span className="text-[#BF000A]">One Child at a Time</span></h1>
            <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-gray-600">MEDAG Infant and Primary School, Kigulu - Iganga along Kaliro Road 2km from Iganga Town. We accept Baby 3 years - even if not toilet trained we help - Middle 4y, Top 5y, to P1-P7 Day & Boarding with casual wear. Colorful Nursery Section, Play Area for Nursery Kids with merry-go-round & swings, Basketball Court, School Van 100k-130k, Fashion Show grey vests red bow ties green suits traditional, Freedom City tours, We embrace Islam as well - hijab allowed halal meals, Smart Pupils maroon uniform. Licensed MoES, God-fearing.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href="#enroll" className="bg-[#BF000A] text-white px-8 py-3.5 rounded-full font-bold text-[14px] shadow">Enroll Now - FREE Admission →</a><a href="#gallery" className="bg-white border-2 border-[#BF000A] text-[#BF000A] px-8 py-3.5 rounded-full font-bold text-[14px]">See Real Photos</a></div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[460px]">
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-xl text-[#BF000A]">600+</p><p className="text-[10px] font-bold text-gray-500">PUPILS Baby-P7</p></div>
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-[14px] text-[#BF000A]">Day & Board</p><p className="text-[10px] font-bold text-gray-500">CASUAL WEAR</p></div>
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-[14px] text-[#BF000A]">Islam Too</p><p className="text-[10px] font-bold text-gray-500">HIJAB ALLOWED</p></div>
            </div>
          </div>
          <div className="space-y-4">
            <img src="/images/medga/medag-school-building.jpg" alt="School Building" className="rounded-[24px] h-[340px] w-full object-cover shadow-xl border-4 border-white" />
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/medga/medag-nursery-class.jpg" alt="Nursery Class Generated" className="rounded-[20px] h-[160px] w-full object-cover shadow border" />
              <img src="/images/medga/nursery-section.jpg" alt="Nursery Section Real" className="rounded-[20px] h-[160px] w-full object-cover shadow border" />
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES - BALANCED WORDS + PICTURES */}
      <section id="facilities" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center">Safe. Quality. God-Fearing.</h2>
          <p className="text-center text-gray-500 text-[13px] mt-2 max-w-2xl mx-auto"></p>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              {t:"Play Area for Nursery Kids", d:"Merry-go-round wheel, swings, slide, sand pit - your title. Low height soft sand daily inspection teacher always. Not shared with primary.", img:"/images/medga/play-area.jpg", gen:"/images/medga/medag-playground.jpg"},
              {t:"Nursery Section", d:"Colorful buildings blue/green/yellow/red separate gate kid-size toilets - your title. Safe joyful.", img:"/images/medga/nursery-section.jpg", gen:"/images/medga/medag-nursery-class.jpg"},
              {t:"We Embrace Islam As Well", d:"4 girls hijab white top green skirt - your photo. Hijab allowed halal meals Muslim teachers Ramadan respect.", img:"/images/medga/islam.jpg", gen:"/images/medga/medag-primary-class.jpg"},
              {t:"Basketball Court", d:"Brick paving white board net - P5-P7 sports inter-house. Healthy body healthy mind.", img:"/images/medga/basketball.jpg", gen:"/images/medga/medag-school-building.jpg"},
              {t:"Fashion Show - Ministers Grey Vests", d:"Grey vests red bow ties black shorts - boys smart Ministers MDD confidence every term.", img:"/images/medga/ministers.jpg", gen:"/images/medga/fashion-traditional.jpg"},
              {t:"Transport Van + Green Before Van", d:"School van with matron 100k-130k - your green before van photo morning assembly before van.", img:"/images/medga/green-van.jpg", gen:"/images/medga/medag-van.jpg"},
            ].map(c=>(
              <div key={c.t} className="border rounded-[24px] overflow-hidden hover:shadow-xl transition hover:border-[#BF000A]/20 bg-white">
                <div className="grid grid-cols-2 gap-0"><img src={c.img} alt={c.t} className="h-48 w-full object-cover" /><img src={c.gen} alt={c.t} className="h-48 w-full object-cover" /></div>
                <div className="p-5"><h4 className="font-black text-[14px] text-[#BF000A]">{c.t}</h4><p className="text-[12px] text-gray-500 mt-1 leading-6">{c.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + DAILY SCHEDULE - WORDS HEAVY */}
      <section id="about" className="bg-[#FFF5F5] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[32px] md:text-[36px] font-black">Built To Make A Difference - Much Information</h2>
            <p className="mt-4 text-[14px] leading-7 text-gray-700">MEDAG Infant and Primary School is community-founded in Kigulu, Iganga along Kaliro Road 2km from Iganga Town. 600+ pupils Baby to P7, 25+ dedicated teachers, 10+ years service. We accept Baby 3 years - even if not toilet trained we help - Middle 4y, Top 5y, P1-P7 Day & Boarding. We embrace Islam as well. Colorful Nursery Section, Play Area for Nursery Kids merry-go-round swings, Basketball Court, Fashion Show grey vests green suits traditional, Freedom City tours water park, Smart Pupils maroon sweater green skirt, Green Before Van transport, Red Dresses + Swings boarding casual evening, Boarding Facilities dorms 3 meals prep laundry guidance, MDD Music Dance Drama traditional dances choir drums, Medical & Feeding first aid 10k/term balanced meals posho beans veg meat twice.</p>
            <div className="mt-6 space-y-3">
              <div className="bg-[#FFE2E2] rounded-2xl p-4 flex gap-3 border"><span>🎯</span><div><p className="font-black text-[13px] text-[#BF000A]">Mission</p><p className="text-[12px]">Provide quality affordable education that develops whole child intellectually spiritually socially - God-fearing, inclusive Islam + Christian.</p></div></div>
              <div className="bg-[#FFEDED] rounded-2xl p-4 flex gap-3 border"><span>👁️</span><div><p className="font-black text-[13px] text-[#BF000A]">Vision</p><p className="text-[12px]">Be leading model school in Busoga producing disciplined God-fearing excellent children - Baby to P7 Day & Boarding with casual wear.</p></div></div>
              <div className="bg-white rounded-2xl p-4 flex gap-3 border"><span>💬</span><div><p className="font-black text-[13px] text-[#BF000A]">Motto</p><p className="text-[12px]">Making a Difference, One Child at a Time - Red shield Maltese cross - Smart Pupils maroon, Play Area, Nursery Section, Islam, Fashion Show.</p></div></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <img src="/images/medga/red-swings.jpg" alt="Red Swings Boarding Casual" className="rounded-[16px] h-[160px] w-full object-cover border shadow" />
              <img src="/images/medga/boarding-casual.jpg" alt="Boarding Casual" className="rounded-[16px] h-[160px] w-full object-cover border shadow" />
            </div>
          </div>
          <div className="bg-white rounded-[28px] p-7 shadow-sm border">
            <h3 className="font-black text-[18px] text-[#BF000A]">A Day at MEDAG - Much Content</h3>
            <p className="text-[12px] text-gray-500 mt-1">7:30am - 4:30pm Day + Boarding with casual wear evening</p>
            <div className="mt-6 space-y-3">
              {[
                ["7:00-7:30","Arrival & Parade","Health check assembly - Green Before Van arrival matron"],
                ["8:00-10:00","Morning Lessons","English Math Science per UNEB - Smart Pupils maroon uniform"],
                ["10:00-10:30","Porridge Break","Millet porridge + break at swings"],
                ["10:30-12:30","Mid-Morning","SST RE Computer - Nursery Section colorful buildings"],
                ["12:30-2:00","Lunch & Rest","Posho beans veg meat twice - We Embrace Islam halal"],
                ["2:00-4:00","Afternoon Activities","Agriculture MDD Fashion Show grey vests green suits traditional - Basketball Court"],
                ["4:00-5:30","Prep / Departure","Boarders prep - Red Dresses + Swings boarding casual - Day departure van 100k-130k"],
              ].map(([time,title,desc])=>(
                <div key={time} className="flex gap-3"><div className="text-[10px] font-black bg-[#FFF0F0] text-[#BF000A] px-3 py-1 rounded-full h-fit whitespace-nowrap border">{time}</div><div><p className="font-bold text-[13px]">{title}</p><p className="text-[11px] text-gray-500">{desc}</p></div></div>
              ))}
            </div>
            <img src="/images/medga/freedom.jpg" alt="Freedom City Tour" className="rounded-[16px] mt-6 h-[180px] w-full object-cover border" />
            <p className="text-[11px] text-gray-500 mt-2 text-center font-bold">Freedom City Tour - Annual Educational Trip - Water Park</p>
          </div>
        </div>
      </section>

      {/* PROGRAMS - BABY TO P7 */}
      <section id="programs" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-black text-center">Our Programs - Baby to P7 Day & Boarding - P7 350k/630k NEXT YEAR</h2>
          <p className="text-center text-[13px] text-gray-500 mt-2">Uniform Nursery 130k Primary 150k - MTN 0782198528 main</p>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              {age:"Baby 3y", name:"Baby Class", price:"250k / 540k Board", points:["Play-based phonics","Numbers social skills","Toilet training support - we help"], img:"/images/medga/medag-nursery-class.jpg"},
              {age:"Middle 4y", name:"Middle Class", price:"250k / 540k Board", points:["Early reading writing","Counting art music","Moral stories - God-fearing"], img:"/images/medga/nursery-section.jpg"},
              {age:"Top 5y", name:"Top Class", price:"250k / 540k Board", points:["Graduation Day colorful","Reading fluency","Speech training P1 prep"], img:"/images/medga/play-area.jpg"},
              {age:"P1-P7", name:"Primary Section", price:"280k-350k / 560k-630k", points:["UNEB Curriculum","Computer & Agriculture","PLE special P7 Day 350k Board 630k NEXT"], img:"/images/medga/medag-primary-class.jpg"},
            ].map(p=>(
              <div key={p.age} className="rounded-[24px] border-2 overflow-hidden hover:shadow-lg transition hover:border-[#BF000A]/30 bg-white">
                <img src={p.img} alt={p.name} className="h-40 w-full object-cover" />
                <div className="p-5"><span className="text-[11px] font-bold bg-[#FFF0F0] text-[#BF000A] px-3 py-1 rounded-full border">{p.age}</span><h3 className="font-black mt-3 text-[16px]">{p.name}</h3><ul className="mt-3 text-[12px] list-disc ml-5 space-y-1 text-gray-600">{p.points.map(pt=><li key={pt}>{pt}</li>)}</ul><div className="mt-4 bg-[#BF000A] text-white inline-block px-4 py-2 rounded-full text-[11px] font-bold">{p.price}/term</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY - BALANCED - NOT PACKED */}
      <section id="gallery" className="py-16 px-6 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-black text-center">Life at MEDAG - Balanced Pictures + Words</h2>
          <p className="text-center text-[13px] text-gray-500 mt-2">Real + Generated - 6 used, not 11 packed - gap-8 rounded</p>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[20px] p-3 border shadow-sm"><img src="/images/medga/maroon.jpg" alt="Smart Pupils Maroon" className="rounded-[16px] h-[220px] w-full object-cover" /><p className="font-black text-[13px] mt-3">Smart Pupils Maroon</p><p className="text-[11px] text-gray-500">Maroon sweater green skirt primary uniform - smart</p></div>
            <div className="bg-white rounded-[20px] p-3 border shadow-sm"><img src="/images/medga/medag-playground.jpg" alt="Play Area Generated" className="rounded-[16px] h-[220px] w-full object-cover" /><p className="font-black text-[13px] mt-3">Play Area for Nursery Kids</p><p className="text-[11px] text-gray-500">Merry-go-round swings slide sand pit safe</p></div>
            <div className="bg-white rounded-[20px] p-3 border shadow-sm"><img src="/images/medga/fashion-traditional.jpg" alt="Fashion Traditional" className="rounded-[16px] h-[220px] w-full object-cover" /><p className="font-black text-[13px] mt-3">Fashion Show Traditional</p><p className="text-[11px] text-gray-500">Traditional wear colorful hats culture day</p></div>
          </div>
        </div>
      </section>

      {/* FEES + MAP + ENROLL - BALANCED */}
      <section id="fees" className="bg-[#FFF0F0] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] p-7">
            <h3 className="font-black text-[18px] text-[#BF000A]">MEDAG Fees 2026 - Official - Much Info</h3>
            <p className="text-[11px] text-gray-500 mt-1">P7 Day 350k Board 630k NEXT YEAR • Uniform Nursery 130k Primary 150k • FREE Admission • MTN 0782198528</p>
            <div className="mt-4 border rounded-xl overflow-hidden text-[13px]"><div className="grid grid-cols-3 bg-[#BF000A] text-white p-3 font-bold text-[12px]"><span>Class</span><span>Day</span><span>Board</span></div>
            <div className="grid grid-cols-3 p-2.5 border-b text-[12px]"><span>Baby-Top Day</span><span>250k</span><span>540k</span></div>
            <div className="grid grid-cols-3 p-2.5 border-b text-[12px]"><span>P1-P2 Day</span><span>280k</span><span>560k</span></div>
            <div className="grid grid-cols-3 p-2.5 border-b text-[12px]"><span>P3-P4 Day</span><span>290k</span><span>580k</span></div>
            <div className="grid grid-cols-3 p-2.5 border-b text-[12px]"><span>P5-P6 Day</span><span>310k</span><span>580k</span></div>
            <div className="grid grid-cols-3 p-2.5 border-b text-[12px] bg-yellow-50 font-black"><span>P7 Day NEXT</span><b>350k</b><b className="text-[#BF000A]">630k</b></div>
            </div>
            <ul className="mt-4 text-[11px] space-y-1 text-gray-600 list-disc ml-5"><li>Admission FREE 2026 - No admission fee</li><li>Development 20k once/year (Cash)</li><li>Uniform Nursery 130k Primary 150k full - includes 2 sets sweater socks</li><li>Boarding uniform 70k + Hair 3k + Medical 10k + Requirements 50k</li><li>Transport 100k-130k/term with matron - Green Before Van</li><li>MTN 0782198528 main WhatsApp not Airtel</li></ul>
            <img src="/images/medga/basketball.jpg" alt="Basketball Court" className="rounded-[16px] mt-4 h-[120px] w-full object-cover border" />
          </div>

          <div className="space-y-6">
            <div id="enroll" className="bg-[#BF000A] rounded-[24px] p-7 text-white">
              <h3 className="font-black text-xl">Enrollment Form - FREE Admission 2026</h3><p className="text-[12px] opacity-80 mt-1">We reply on WhatsApp MTN 0782198528</p>
              <div className="mt-5 space-y-3">
                <input placeholder="Parent Full Name *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" />
                <div className="grid grid-cols-2 gap-2"><input placeholder="WhatsApp MTN 0782*" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /><input placeholder="Alt Number" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /></div>
                <div className="grid grid-cols-2 gap-2"><input placeholder="Child Full Name *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /><input placeholder="Age *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /></div>
                <div className="grid grid-cols-2 gap-2"><select className="w-full p-3 rounded-full text-[13px] text-black outline-none"><option>Gender</option><option>Boy</option><option>Girl</option></select><select className="w-full p-3 rounded-full text-[13px] text-black outline-none"><option>Class</option><option>Baby 3y</option><option>Middle 4y</option><option>Top 5y</option><option>P1-P7</option></select></div>
                <a href="https://wa.me/256782198528?text=Hello%20MEDAG%20I%20want%20FREE%20Admission%202026%20P7%20Day%20350k%20Board%20630k%20Uniform%20Nur%20130k%20Pri%20150k" target="_blank" className="block bg-white text-[#BF000A] text-center py-3.5 rounded-full font-black text-[14px]">Send via WhatsApp MTN 0782198528 →</a>
              </div>
            </div>
            <div className="bg-white rounded-[24px] p-7"><h3 className="font-black text-[18px] text-[#BF000A]">Admissions Steps - FREE</h3><div className="mt-6 space-y-4">{[["1","Visit School","Kigulu - Iganga along Kaliro Road 2km"],["2","Pick Free Form","No admission fee 2026 MTN 0782198528"],["3","Interview / Assessment","Baby-Top simple P1-P6 test - Islam embraced"],["4","Pay & Start!","20k Dev + 130k/150k Uniform + Bank fees - P7 350k/630k NEXT"]].map(([n,t,d])=>(<div key={n} className="flex gap-3"><div className="w-7 h-7 rounded-full bg-[#BF000A] text-white flex items-center justify-center font-black text-[12px] shrink-0">{n}</div><div><p className="font-bold text-[13px]">{t}</p><p className="text-[11px] text-gray-500">{d}</p></div></div>))}</div></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[24px] p-2 border shadow-sm">
              <h4 className="font-black text-[14px] p-4 pb-2">Find Us - Kigulu-Iganga Along Kaliro Road 2km From Iganga Town</h4>
              <p className="text-[11px] text-gray-500 px-4 pb-2">Boda 3,000 from town, Van 100k-130k with matron, MTN 0782198528 main</p>
              <iframe title="MEDAG Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5!2d33.476!3d0.615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKigulu%2C%20Iganga!5e0!3m2!1sen!2sug!4v1" width="100%" height="360" style={{border:0, borderRadius:'16px'}} loading="lazy"></iframe>
              <div className="p-4 grid grid-cols-2 gap-2"><a href="https://wa.me/256782198528" className="bg-[#22C55E] text-white text-center py-2.5 rounded-full font-bold text-[12px]">WhatsApp Direction</a><a href="https://www.google.com/maps/search/Kigulu+Iganga+Uganda" target="_blank" className="bg-[#BF000A] text-white text-center py-2.5 rounded-full font-bold text-[12px]">Open in Maps</a></div>
            </div>
            <div className="bg-white rounded-[24px] p-6">
              <h3 className="font-black text-[14px]">FAQs - Much Info - Click</h3>
              <div className="mt-4 space-y-2">
                {faqs.slice(0,3).map((f,i)=>(
                  <div key={i} className="border rounded-xl overflow-hidden">
                    <button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between p-3 text-left bg-[#FFFBFB]"><span className="font-bold text-[12px]">{f.q}</span><span className="text-[#BF000A]">{openFaq===i?'−':'+'}</span></button>
                    {openFaq===i && <div className="p-3 text-[11px] leading-6 text-gray-600 bg-white">{f.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ FULL */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] font-black text-center text-[#BF000A]">MEDAG Common Questions - Full Much Information</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f,i)=>(
              <div key={i} className="border rounded-2xl overflow-hidden">
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center p-5 text-left bg-[#FFFBFB] hover:bg-[#FFF0F0]">
                  <span className="font-black text-[13px]">{f.q}</span><span className="text-xl text-[#BF000A]">{openFaq===i? "−" : "+"}</span>
                </button>
                {openFaq===i && <div className="p-5 text-[12px] leading-6 text-gray-600 bg-white">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + MAP - BALANCED */}
      <section id="contact" className="py-14 px-6 bg-[#FFFBFB]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-[28px] font-black text-[#BF000A]">Find MEDAG in Kigulu - Iganga - Much Info Balanced</h2>
            <p className="text-[13px] text-gray-600 mt-2 leading-6">We are along Kaliro Road 2km from Iganga Town behind Kigulu Trading Centre. Permanent building with playground swings visible from road. Colorful Nursery Section, Play Area for Nursery Kids, Basketball Court, We Embrace Islam, Fashion Show grey vests green suits traditional, Freedom City tours, Smart Pupils maroon, Green Before Van, Red Dresses + Swings. Baby 3y toilet training help. P7 Day 350k Board 630k NEXT YEAR Uniform Nursery 130k Primary 150k. MTN 0782198528 main.</p>
            <div className="mt-6 space-y-2 text-[13px]">
              <p>📍 <b>Address:</b> Kigulu - Iganga along Kaliro Road, Iganga District, Uganda - 2km from Iganga Town</p>
              <p>📞 <b>Call:</b> MTN 0782198528 main / 0704797650</p>
              <p>✉️ <b>Email:</b> medaginfantsch@gmail.com</p>
              <p>🕒 <b>Hours:</b> Mon-Fri 7:30am-5pm Sat 8am-1pm Admissions FREE 2026</p>
              <p>🚌 <b>Transport:</b> Van 100k-130k/term with matron - Green Before Van photo</p>
              <p>🕌 <b>Islam:</b> We Embrace Islam - hijab allowed halal meals - your islam photo</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3"><a href="https://wa.me/256782198528" className="bg-[#22C55E] text-white px-6 py-3 rounded-full font-bold text-[13px]">WhatsApp MTN 0782198528</a><a href="tel:+256782198528" className="bg-[#BF000A] text-white px-6 py-3 rounded-full font-bold text-[13px]">Call MTN 0782198528</a></div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <img src="/images/medga/medag-van.jpg" alt="Van Generated" className="rounded-[16px] h-[120px] w-full object-cover border" />
              <img src="/images/medga/freedom.jpg" alt="Freedom City Real" className="rounded-[16px] h-[120px] w-full object-cover border" />
            </div>
          </div>
          <div className="rounded-[24px] overflow-hidden border shadow-xl border-[#BF000A]/20 bg-white p-2">
            <iframe title="MEDAG Location Map" src="https://maps.google.com/maps?q=Kigulu%20Iganga%20Uganda&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="420" style={{border:0, borderRadius:'16px'}} loading="lazy"></iframe>
            <div className="bg-white p-4 flex justify-between items-center"><p className="font-bold text-[12px]">📍 MEDAG Infant & Primary, Kigulu - P7 350k/630k NEXT</p><a href="https://www.google.com/maps/search/Kigulu+Iganga+Uganda" target="_blank" className="bg-[#BF000A] text-white px-4 py-2 rounded-full text-[11px] font-bold">Open in Maps</a></div>
          </div>
        </div>
      </section>

      <footer className="bg-[#8A0006] text-white py-10 text-center px-6">
        <div className="flex justify-center items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-full bg-white p-1" />
          <p className="font-black text-xl">MEDAG INFANT AND PRIMARY SCHOOL</p>
        </div>
        <p className="text-[11px] opacity-80 mt-2">Kigulu - Iganga along Kaliro Road 2km • Licensed MoES • P7 Day 350k Board 630k NEXT YEAR • Uniform Nur 130k Pri 150k • 2026 Admission FREE • MTN 0782198528 main • We Embrace Islam • Play Area Nursery Kids • Nursery Section • Fashion Show • Basketball • Freedom City • Smart Pupils • Green Before Van • Red Dresses + Swings • Day & Boarding Casual Wear</p>
        <p className="text-[12px] font-bold mt-2">Making A Difference, One Child at a Time</p>
      </footer>
    </main>
  );
}