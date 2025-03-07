const About = () => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h4 className="text-hlPri mb-1 text-6xl font-bold">Who I Am</h4>
        <article className="bg-blackContainer text-whitePri border-grayPri rounded-xl border-2 p-3 text-2xl leading-relaxed">
          Hey there! I’m William, a 24-year-old Software Engineering student at the University of
          Turku in Finland. I’m currently in my fourth year, majoring in Software Engineering with a
          minor in Cybersecurity. Technology keeps moving fast, and I’m just here enjoying the ride.
        </article>
      </div>
      <div>
        <h4 className="text-hlPri mb-1 text-6xl font-bold">What I Do</h4>
        <article className="bg-blackContainer text-whitePri border-grayPri rounded-xl border-2 p-3 text-2xl leading-relaxed">
          I’m passionate about building and crafting beautiful digital experiences. I love the
          challenge of turning ideas into elegant solutions and bringing them to life on the
          screen—just by typing on my keyboard.
        </article>
      </div>
    </section>
  )
}

export default About
