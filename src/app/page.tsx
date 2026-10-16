"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {q:"What age do you accept?", a:"MEDAG accepts Baby Class from 3 years (even if not toilet trained, we help), Middle 4 years, Top 5 years, and Primary P1-P7. Day & Boarding available."},
    {q:"Is 2026 Admission really FREE?", a:"Yes! 2026 Admission is FREE for all classes. You only pay Development 20k, Uniform 130k, Requirements 50k and termly school fees. No admission fee."},
    {q:"What are your Day & Boarding fees?", a:"Day: Baby-Top 250k, P1-P2 280k, P3-P4 290k, P5-P6 310k termly. Boarding: Nursery 540k, P1-P2 560k, P3-P6 580k. Includes meals, accommodation, prep. Banked in school account."},
    {q:"Do you provide food & transport?", a:"Yes! Boarders get 3 balanced meals + porridge. Day scholars can bring lunch or pay for meals. Transport van available Baby-P4 at 100k-130k per term - Iganga town & Kigulu routes with matron."},
    {q:"What about safety & facilities?", a:"Permanent fenced compound, CCTV, locked gate, pickup ID, first aid, playground with swings & slides, MDD (Music Dance Drama), spacious classrooms, medical care 10k per term."},
    {q:"What is needed to enroll?", a:"Birth certificate copy, 2 passport photos, previous report card for P1-P7 transfer. Visit Kigulu - Iganga along Kaliro Road. Call 0704797650 / 0782198528. Uniform full set 130k, Boarding uniform 70k, Hair cutting 3k."},
  ];

  return (
    <main className="bg-[#FFFBFB] overflow-x-hidden text-[#141A33]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="MEDAG Logo" className="w-10 h-10 rounded-full bg-white object-contain border-2 border-[#BF000A] p-1 shadow" />
            <div className="leading-none"><p className="font-black text-[16px] tracking-tight text-[#BF000A]">MEDAG INFANT AND PRIMARY SCHOOL</p><p className="text-[8.5px] font-bold tracking-widest text-gray-500 mt-1">MAKING A DIFFERENCE • KIGULU-IGANGA</p></div>
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
            <a href="https://wa.me/256704797650" className="hidden md:block bg-[#22C55E] text-white px-5 py-2.5 rounded-full font-bold text-[13px]">WhatsApp Us</a>
            <button onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 bg-[#BF000A] text-white rounded-full font-bold">☰</button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-3 text-[14px] font-bold">
            <a onClick={()=>setMenuOpen(false)} href="#about" className="block">About</a>
            <a onClick={()=>setMenuOpen(false)} href="#facilities" className="block">Facilities</a>
            <a onClick={()=>setMenuOpen(false)} href="#programs" className="block">Programs</a>
            <a onClick={()=>setMenuOpen(false)} href="#gallery" className="block">Gallery</a>
            <a onClick={()=>setMenuOpen(false)} href="#fees" className="block">Fees</a>
            <a onClick={()=>setMenuOpen(false)} href="#contact" className="block">Contact</a>
            <a href="https://wa.me/256704797650" className="block bg-[#22C55E] text-white text-center py-3 rounded-full mt-3">WhatsApp Us</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="bg-[#FFF0F0]">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <div className="inline-flex bg-[#BF000A] text-white px-4 py-1.5 rounded-full text-[11px] font-black border shadow-sm">🔥 2026 ADMISSION FREE • Enrolling Baby to P7</div>
            <h1 className="mt-5 text-[36px] md:text-[56px] font-black leading-[0.95]">Making A Difference,<br/><span className="text-[#BF000A]">One Child at a Time</span></h1>
            <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-gray-600">MEDAG Infant and Primary School, Kigulu - Iganga along Kaliro Road. Quality foundation from Baby Class to P7, Day & Boarding, permanent classrooms, playground with swings, MDD, transport, Top Class Graduation. Licensed by MoES.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href="#enroll" className="bg-[#BF000A] text-white px-7 md:px-8 py-3.5 rounded-full font-bold text-[14px] shadow">Enroll Now - FREE Admission →</a><a href="#gallery" className="bg-white border-2 border-[#BF000A] text-[#BF000A] px-7 md:px-8 py-3.5 rounded-full font-bold text-[14px]">See Our School</a></div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[420px]">
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-xl text-[#BF000A]">600+</p><p className="text-[10px] font-bold text-gray-500">PUPILS</p></div>
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-xl text-[#BF000A]">25+</p><p className="text-[10px] font-bold text-gray-500">TEACHERS</p></div>
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-xl text-[#BF000A]">100%</p><p className="text-[10px] font-bold text-gray-500">PLE PASS</p></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img src="/logo.png" alt="MEDAG" className="rounded-[32px] h-[380px] md:h-[520px] w-full object-contain bg-white p-8 shadow-2xl border-2 border-[#BF000A]/20" />
            <div className="space-y-3 md:space-y-4">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" alt="classroom" className="rounded-[20px] md:rounded-[24px] h-[180px] md:h-[250px] w-full object-cover shadow-xl" />
              <div className="bg-white rounded-[20px] p-4 shadow-xl border"><p className="font-black text-sm text-[#BF000A]">🛡️ Safe & Licensed</p><p className="text-[11px] text-gray-500 mt-1">Fenced • CCTV • Day & Boarding</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-black text-center">Safe. Quality. God-Fearing.</h2>
          <p className="text-center text-gray-500 text-[13px] mt-2">Real facilities at Kigulu - Iganga.</p>
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {t:"Permanent Classrooms", d:"Well-ventilated with desks, charts", img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"},
              {t:"Play Park & Swings", d:"Large field, swings, slides, football, netball", img:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop"},
              {t:"Boarding Facilities", d:"Dormitories, 3 meals, prep, laundry guidance", img:"https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop"},
              {t:"School Transport Van", d:"Safe van with matron, Iganga & Kaliro Road, 100k-130k", img:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop"},
              {t:"MDD - Music Dance Drama", d:"Traditional dances, choir, drums, competitions", img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop"},
              {t:"Medical & Feeding", d:"First aid 10k/term, balanced meals, porridge", img:"https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&h=400&fit=crop"},
            ].map(c=>(
              <div key={c.t} className="border rounded-[24px] overflow-hidden hover:shadow-xl transition hover:border-[#BF000A]/30">
                <img src={c.img} alt={c.t} className="h-48 w-full object-cover" />
                <div className="p-5"><h4 className="font-black text-[14px] text-[#BF000A]">{c.t}</h4><p className="text-[12px] text-gray-500 mt-1">{c.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + DAILY SCHEDULE */}
      <section id="about" className="bg-[#FFF5F5] py-14 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-black">Built To Make A Difference</h2>
            <p className="mt-4 text-[14px] leading-6 text-gray-700">MEDAG Infant and Primary School is a community-founded school in Kigulu, Iganga along Kaliro Road. Established to make a difference one child at a time, 600+ pupils, 25+ dedicated teachers, 10+ years of service.</p>
            <div className="mt-6 space-y-3">
              <div className="bg-[#FFE2E2] rounded-2xl p-4 flex gap-3 border"><span>🎯</span><div><p className="font-black text-[13px] text-[#BF000A]">Mission</p><p className="text-[12px]">Provide quality affordable education that develops whole child intellectually, spiritually, socially.</p></div></div>
              <div className="bg-[#FFEDED] rounded-2xl p-4 flex gap-3 border"><span>👁️</span><div><p className="font-black text-[13px] text-[#BF000A]">Vision</p><p className="text-[12px]">Be leading model school in Busoga producing disciplined, God-fearing, excellent children.</p></div></div>
              <div className="bg-white rounded-2xl p-4 flex gap-3 border"><span>💬</span><div><p className="font-black text-[13px] text-[#BF000A]">Motto</p><p className="text-[12px]">Making a Difference, One Child at a Time - Red shield with Maltese cross.</p></div></div>
            </div>
          </div>
          <div className="bg-white rounded-[28px] p-6 md:p-7 shadow-sm border">
            <h3 className="font-black text-[18px] text-[#BF000A]">A Day at MEDAG</h3>
            <p className="text-[12px] text-gray-500 mt-1">7:30am - 4:30pm Day + Boarding</p>
            <div className="mt-6 space-y-3">
              {[
                ["7:00-7:30","Arrival & Parade","Health check, assembly"],
                ["8:00-10:00","Morning Lessons","English, Math, Science per UNEB"],
                ["10:00-10:30","Porridge Break","Millet porridge + break"],
                ["10:30-12:30","Mid-Morning","SST, RE, Computer"],
                ["12:30-2:00","Lunch & Rest","Posho, beans, veg, meat twice"],
                ["2:00-4:00","Afternoon Activities","Agriculture, MDD, Sports"],
                ["4:00-5:30","Prep / Departure","Boarders prep, Day departure"],
              ].map(([time,title,desc])=>(
                <div key={time} className="flex gap-3"><div className="text-[10px] font-black bg-[#FFF0F0] text-[#BF000A] px-3 py-1 rounded-full h-fit whitespace-nowrap border">{time}</div><div><p className="font-bold text-[13px]">{title}</p><p className="text-[11px] text-gray-500">{desc}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-black text-center">Our Programs - Baby to P7</h2>
          <div className="mt-8 md:mt-10 grid md:grid-cols-4 gap-6">
            {[
              {age:"Baby 3y", name:"Baby Class", price:"250k / 540k Board", points:["Play-based, phonics","Numbers, social skills","Toilet training support"]},
              {age:"Middle 4y", name:"Middle Class", price:"250k / 540k Board", points:["Early reading & writing","Counting, art, music","Moral stories"]},
              {age:"Top 5y", name:"Top Class", price:"250k / 540k Board", points:["Graduation Day","Reading fluency","Speech training, P1 prep"]},
              {age:"P1-P7", name:"Primary Section", price:"280k-580k", points:["UNEB Curriculum","Computer & Agriculture","PLE special coaching P7"]},
            ].map(p=>(
              <div key={p.age} className="rounded-[24px] border-2 overflow-hidden hover:shadow-lg transition hover:border-[#BF000A]/30">
                <div className="h-2 bg-[#BF000A]"></div>
                <div className="p-6"><span className="text-[11px] font-bold bg-[#FFF0F0] text-[#BF000A] px-3 py-1 rounded-full border">{p.age}</span><h3 className="font-black mt-3 text-[18px]">{p.name}</h3><ul className="mt-3 text-[13px] list-disc ml-5 space-y-1 text-gray-600">{p.points.map(pt=><li key={pt}>{pt}</li>)}</ul><div className="mt-4 bg-[#BF000A] text-white inline-block px-4 py-2 rounded-full text-[11px] font-bold">{p.price}/term</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-black text-center">Life at MEDAG</h2>
          <p className="text-center text-[13px] text-gray-500 mt-2">Top Class Graduation, MDD, Playground Swings, Smart Pupils</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=800&fit=crop",
              "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&h=800&fit=crop",
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
            ].map((src,i)=>(
              <img key={i} src={src} alt="gallery" className={`rounded-2xl w-full object-cover hover:scale-105 transition duration-300 border-2 border-transparent hover:border-[#BF000A] ${i%3===1? 'h-64' : 'h-44'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 md:py-16 px-6 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-black text-center">What Iganga Parents Say About MEDAG</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {name:"Mama Ethan - P2", text:"MEDAG made a difference for my son. From Baby to P2 now reading fluently. Boarding safe, teachers caring."},
              {name:"Papa Fatimah - Top", text:"Top Class graduation was colorful! My daughter is now P1 ready. Admission free, fees affordable 250k."},
              {name:"Mama Twins - Day", text:"Transport van with matron picks from Iganga town at 100k. Safe, fed, learning MDD dance."},
            ].map(t=>(
              <div key={t.name} className="bg-white rounded-[20px] p-6 border shadow-sm hover:shadow-md transition"><p className="font-black text-[13px]">{t.name}</p><p className="text-[11px] text-[#BF000A]">⭐⭐⭐⭐⭐</p><p className="mt-4 text-[13px] leading-6">"{t.text}"</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES + ENROLL */}
      <section id="fees" className="bg-[#FFF0F0] py-14 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] p-6 md:p-7"><h3 className="font-black text-[18px] text-[#BF000A]">MEDAG Fees 2026 (UGX)</h3>
          <div className="mt-4 border rounded-xl overflow-hidden text-[13px]"><div className="grid grid-cols-2 bg-[#BF000A] text-white p-3 font-bold text-[12px]"><span>Class</span><span>Fee / Term</span></div>
          <div className="grid grid-cols-2 p-2.5 border-b text-[12px]"><span>Baby-Top Day</span><b>250,000</b></div>
          <div className="grid grid-cols-2 p-2.5 border-b text-[12px]"><span>P1-P2 Day</span><b>280,000</b></div>
          <div className="grid grid-cols-2 p-2.5 border-b text-[12px]"><span>P3-P4 Day</span><b>290,000</b></div>
          <div className="grid grid-cols-2 p-2.5 border-b text-[12px]"><span>P5-P6 Day</span><b>310,000</b></div>
          <div className="grid grid-cols-2 p-2.5 border-b text-[12px] bg-[#FFF5F5]"><span>Nursery Board</span><b>540,000</b></div>
          <div className="grid grid-cols-2 p-2.5 border-b text-[12px] bg-[#FFF5F5]"><span>P1-P2 Board</span><b>560,000</b></div>
          <div className="grid grid-cols-2 p-2.5 text-[12px] bg-[#FFF5F5]"><span>P3-P6 Board</span><b>580,000</b></div>
          </div>
          <ul className="mt-4 text-[11px] space-y-1 text-gray-600 list-disc ml-5"><li>Admission FREE 2026</li><li>Development 20k once/year (Cash)</li><li>Uniform full 130k (Cash) + Boarding uniform 70k</li><li>Medical 10k + Requirements 50k (Cash)</li><li>Transport 100k-130k (Cash) + Hair 3k</li></ul>
          </div>

          <div id="enroll" className="bg-[#BF000A] rounded-[24px] p-6 md:p-7 text-white">
            <h3 className="font-black text-xl">MEDAG Enrollment Form</h3><p className="text-[12px] opacity-80 mt-1">We reply on WhatsApp 0704797650</p>
            <div className="mt-5 space-y-3">
              <input placeholder="Parent Full Name *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" />
              <div className="grid grid-cols-2 gap-2"><input placeholder="WhatsApp *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /><input placeholder="Alt Number" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /></div>
              <div className="grid grid-cols-2 gap-2"><input placeholder="Child Full Name *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /><input placeholder="Age *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /></div>
              <div className="grid grid-cols-2 gap-2"><select className="w-full p-3 rounded-full text-[13px] text-black outline-none"><option>Gender</option><option>Boy</option><option>Girl</option></select><select className="w-full p-3 rounded-full text-[13px] text-black outline-none"><option>Class</option><option>Baby</option><option>Middle</option><option>Top</option><option>P1-P7</option></select></div>
              <input placeholder="Village / Residence" className="w-full p-3 rounded-full text-[13px] text-black outline-none" />
              <textarea placeholder="Message" rows={2} className="w-full p-3 rounded-2xl text-[13px] text-black outline-none"></textarea>
              <a href="https://wa.me/256704797650?text=Hello%20MEDAG%20I%20want%20to%20enroll%202026%20FREE%20Admission" target="_blank" className="block bg-white text-[#BF000A] text-center py-3.5 rounded-full font-black text-[14px]">Send via WhatsApp → 0704797650</a>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 md:p-7"><h3 className="font-black text-[18px] text-[#BF000A]">Admissions Steps - FREE</h3><div className="mt-6 space-y-4">{[["1","Visit School","Kigulu - Iganga along Kaliro Road"],["2","Pick Free Form","No admission fee 2026"],["3","Interview / Assessment","Baby-Top simple, P1-P6 test"],["4","Pay & Start!","20k Dev + 130k Uniform + Bank fees"]].map(([n,t,d])=>(<div key={n} className="flex gap-3"><div className="w-7 h-7 rounded-full bg-[#BF000A] text-white flex items-center justify-center font-black text-[12px] shrink-0">{n}</div><div><p className="font-bold text-[13px]">{t}</p><p className="text-[11px] text-gray-500">{d}</p></div></div>))}</div><div className="mt-6 p-4 bg-[#FFF5F5] rounded-xl border border-[#BF000A]/20"><p className="font-bold text-[12px] text-[#BF000A]">📍 Location</p><p className="text-[11px] mt-1">Kigulu - Iganga along Kaliro Road, 2km from Iganga Town. Boda: "MEDAG Infant School"</p></div></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] font-black text-center text-[#BF000A]">MEDAG Common Questions</h2>
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

      {/* CONTACT + MAP */}
      <section id="contact" className="py-14 px-6 bg-[#FFFBFB]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-[28px] font-black text-[#BF000A]">Find MEDAG in Kigulu - Iganga</h2>
            <p className="text-[13px] text-gray-600 mt-2 leading-6">We are along Kaliro Road, 2km from Iganga Town, behind Kigulu Trading Centre. Permanent building with playground and swings visible from road.</p>
            <div className="mt-6 space-y-3 text-[13px]">
              <p>📍 <b>Address:</b> Kigulu - Iganga along Kaliro Road, Iganga District, Uganda</p>
              <p>📞 <b>Call:</b> 0704797650 / 0782198528</p>
              <p>✉️ <b>Email:</b> medaginfantsch@gmail.com</p>
              <p>🕒 <b>Hours:</b> Mon-Fri 7:30am-5pm, Sat 8am-1pm Admissions</p>
              <p>🚌 <b>Transport:</b> Van 100k-130k/term with matron</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3"><a href="https://wa.me/256704797650" className="bg-[#22C55E] text-white px-6 py-3 rounded-full font-bold text-[13px]">WhatsApp Us</a><a href="tel:+256704797650" className="bg-[#BF000A] text-white px-6 py-3 rounded-full font-bold text-[13px]">Call 0704797650</a></div>
            <img src="/logo.png" alt="MEDAG Logo" className="rounded-2xl mt-6 h-32 w-full object-contain bg-white p-4 border" />
          </div>
          <div className="rounded-[24px] overflow-hidden border shadow-xl border-[#BF000A]/20">
            <iframe title="MEDAG Location" src="https://maps.google.com/maps?q=Kigulu%20Iganga%20Uganda&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="480" style={{border:0}} loading="lazy"></iframe>
            <div className="bg-white p-4 flex justify-between items-center"><p className="font-bold text-[12px]">📍 MEDAG Infant & Primary, Kigulu</p><a href="https://www.google.com/maps/search/Kigulu+Iganga+Uganda" target="_blank" className="bg-[#BF000A] text-white px-4 py-2 rounded-full text-[11px] font-bold">Open in Maps</a></div>
          </div>
        </div>
      </section>

      <footer className="bg-[#8A0006] text-white py-10 text-center px-6">
        <div className="flex justify-center items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-full bg-white p-1" />
          <p className="font-black text-xl">MEDAG INFANT AND PRIMARY SCHOOL</p>
        </div>
        <p className="text-[11px] opacity-80 mt-2">Kigulu - Iganga along Kaliro Road • Licensed by MoES • 2026 Admission FREE • 0704797650 / 0782198528</p>
        <p className="text-[12px] font-bold mt-2">Making A Difference, One Child at a Time</p>
      </footer>
    </main>
  );
}