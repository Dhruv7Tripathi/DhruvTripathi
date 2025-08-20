
import React from 'react';
import Image from 'next/image';
const CricketBlogPost = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Cricket Journey: More Than Just a Game</h1>

      <div className="mb-8">
        <Image
          src="/images/cricket.jpg"
          alt="Cricket field at sunset"
          className="w-full h-60 rounded-lg shadow-md"
          height={800}
          width={400}
        />
      </div>

      <p className="mb-6">
        There&apos;s something magical about the sound of leather on willow, the anticipation as a bowler begins their run-up,
        and the electric atmosphere of a closely contested match. Cricket isn&apos;t just a sport I follow—it&apos;s a passion that
        has shaped significant parts of my life.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How It All Began</h2>
      <p className="mb-4">
        My love affair with cricket started when I was just eight years old. I remember sitting cross-legged on the living room floor,
        watching in awe as players performed seemingly impossible feats on the television screen. What began as casual viewing quickly
        transformed into a full-blown obsession.
      </p>
      <p className="mb-6">
        My parents, noticing my enthusiasm, gifted me my first cricket bat on my ninth birthday. It wasn&apos;t anything fancy—just a basic
        wooden bat that was slightly too big for me—but I treasured it like nothing else. Every evening after school, I would rush to
        the local park, where other cricket enthusiasts gathered for informal matches.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">From Spectator to Player</h2>
      <p className="mb-4">
        What I lacked in natural talent, I made up for with determination. Hours of practice, countless YouTube tutorials, and friendly
        guidance from more experienced players gradually helped me develop my skills. I focused on becoming an all-rounder, though my
        bowling always had a slight edge over my batting.
      </p>
      <p className="mb-6">
        The local cricket club became my second home during weekends. The coach there, Mr. Sharma, took a special interest in helping
        me improve my bowling technique. Cricket is as much about mental strength as it is about physical prowess, he would often say,
        words that have stuck with me through various life challenges.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Match Day Memories</h2>
      <p className="mb-4">
        Nothing compares to the nervous excitement of match days. I still remember my first competitive match representing our local
        club in a district tournament. I was a bundle of nerves, but the moment I stepped onto the field, a strange calm took over.
        That day, I took three wickets and contributed a modest but crucial 24 runs to our total.
      </p>
      <p className="mb-6">
        We didn&apos;t win the tournament, but that hardly mattered. The camaraderie, the shared disappointment of losses, and the collective
        joy of victories—these experiences forged friendships that have stood the test of time.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Cricket Beyond the Field</h2>
      <p className="mb-6">
        My passion for cricket extends beyond playing the game. I&apos;ve amassed a collection of memorabilia over the years—signed balls,
        jerseys, and even a bat autographed by my cricketing hero. My bookshelf is lined with biographies of cricket legends and
        detailed analyses of famous matches.
      </p>
      <p className="mb-6">
        During major tournaments, my life practically revolves around match schedules. Friends know better than to plan events during
        important fixtures! I&apos;ve also developed a knack for cricket statistics, often surprising fellow fans with obscure facts and
        figures from games played decades ago.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Passing on the Passion</h2>
      <p className="mb-6">
        Recently, I&apos;ve started volunteering as an assistant coach for young cricketers in my community. There&apos;s immense satisfaction
        in seeing a child&apos;s face light up when they execute a perfect cover drive or take their first wicket. It feels like coming
        full circle—from that wide-eyed eight-year-old watching cricket on TV to now kindling that same passion in the next generation.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">More Than Just a Game</h2>
      <p className="mb-4">
        Cricket has taught me valuable life lessons—patience, resilience, teamwork, and the importance of maintaining composure under
        pressure. It has given me some of my closest friends and most cherished memories.
      </p>
      <p className="mb-4">
        Whether it&apos;s playing a weekend match, discussing team selections with fellow enthusiasts, or simply enjoying a high-stakes
        international game, cricket continues to be a significant source of joy in my life.
      </p>
      <p className="mb-8 italic">
        As the famous cricket commentator John Arlott once said, Cricket is the most wonderful entertainment in the world. I couldn&apos;t
        agree more—and I look forward to many more years of this wonderful entertainment, both on and off the field.
      </p>
    </div>
  );
};

export default CricketBlogPost;