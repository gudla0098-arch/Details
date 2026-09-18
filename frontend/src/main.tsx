import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  { title:"project 1", type:"UI / UX" },
  { title:"project 2", type:"GRAPHIC DESIGN" },
  { title:"project 3", type:"WEB" },
  { title:"project 4", type:"MOTION" },
  { title:"project 5", type:"UI / UX" },
  { title:"project 6", type:"WEB" },
  { title:"project 7", type:"GRAPHIC DESIGN" },
  { title:"project 8", type:"MOTION" },
  { title:"project 9", type:"WEB" }
];

const skills=["FIGMA","CANVA","C LANG","PYTHON","LINUX","SQL","GIT HUB","POWER BI","DJANGO"];

function GlassBackground(){
  const cols=[.2,.3,.4,.6,.4,.3,.2];
  return <div className="glass-bg" aria-hidden="true">
    <div className="glass-column edge-col left" />
    {cols.map((v,i)=><div className="glass-column" key={i} style={{
      left:(167+i*167)+"px",
      background:`linear-gradient(180deg,rgba(228,228,228,${v}),rgba(126,126,126,${v}))`,
      opacity:i===0||i===6?.55:.7,
      filter:`blur(${i===0||i===6?2.5:2}px)`
    }}/>)}
    <div className="glass-column edge-col right" />
  </div>
}

function App(){
  const [page,setPage]=useState("home");
  const [sent,setSent]=useState(false);
  const [form,setForm]=useState({name:"",email:"",phone:"",subject:"",message:""});

  const go=(p:string)=>{setPage(p);window.scrollTo({top:0,behavior:"smooth"})};

  return <div className="app">
    <GlassBackground/>
    <header className="nav">
      <button className="brand" onClick={()=>go("home")}>portfilo</button>
      <nav>
        <button className={page==="home"?"active":""} onClick={()=>go("home")}>home</button>
        <button className={page==="contact"?"active":""} onClick={()=>go("contact")}>contact</button>
        <button className={page==="projects"?"active":""} onClick={()=>go("projects")}>project</button>
      </nav>
    </header>

    {page==="home" && <main className="page home-page">
      <section className="hero">
        <p className="eyebrow">hi! i am</p>
        <h1>raju gudla</h1>
        <p className="hero-copy">B.Tech student with a unique "hybrid" profile, combining deep technical expertise in C++, Python, and DSA with creative mastery in UI/UX design using Figma. Skilled in building efficient backend systems with Django and SQL while maintaining a high-impact design portfolio.</p>
        <div className="actions">
          <a className="outline-btn" href="/resume.pdf" download>download cV</a>
          <button className="outline-btn" onClick={()=>go("projects")}>explore projects</button>
        </div>
      </section>
      <section className="about-card" id="about">
        <h2>about me</h2>
        <p>B.Tech student focused on software development, backend engineering and creative UI/UX design.</p>
        <div className="stats">
          <div><strong>20+</strong><span>projects</span></div>
          <div><strong>2+</strong><span>year’s experience</span></div>
          <div><strong>7.3<span>/10</span></strong><span>cGPA</span></div>
        </div>
      </section>
      <section className="skills-card">
        <h2>skill’s</h2>
        <div className="skill-grid">{skills.map(s=><button key={s} onClick={()=>go("projects")}>{s}</button>)}</div>
      </section>
    </main>}

    {page==="projects" && <main className="page projects-page">
      <section className="content-card">
        <h2>project</h2>
        <div className="project-grid">{projects.map((p,i)=><button className="project-card" key={p.title}>
          <span className="project-number">{String(i+1).padStart(2,"0")}</span><span>{p.title}</span><small>{p.type}</small>
        </button>)}</div>
      </section>
    </main>}

    {page==="contact" && <main className="page contact-page">
      {!sent ? <section className="contact-card">
        <h2>get in touch</h2>
        <div className="form-grid">
          <label>full name<input value={form.name} placeholder="name" onChange={e=>setForm({...form,name:e.target.value})}/></label>
          <label>email<input type="email" value={form.email} placeholder="email" onChange={e=>setForm({...form,email:e.target.value})}/></label>
          <label>phn no<input value={form.phone} placeholder="number" onChange={e=>setForm({...form,phone:e.target.value})}/></label>
          <label>subject<input value={form.subject} placeholder="sub" onChange={e=>setForm({...form,subject:e.target.value})}/></label>
        </div>
        <label className="message-field">message<textarea value={form.message} placeholder="message" onChange={e=>setForm({...form,message:e.target.value})}/></label>
        <button className="send-btn" onClick={()=>setSent(true)}>send message</button>
      </section> : <section className="thank-card">
        <div className="thank-art">✓</div><h2>thank you!</h2><p>for your interest</p>
        <span>Your message has been successfully submitted. I appreciate you taking the time to connect. I’ll review your message and get back to you soon. You can expect a response from me within 24 hours.</span>
        <button className="send-btn" onClick={()=>{setSent(false);setForm({name:"",email:"",phone:"",subject:"",message:""})}}>back to contact</button>
      </section>}
    </main>}
  </div>
}

createRoot(document.getElementById("root")!).render(<App/>);