import React from "react";

interface EventData {
  eventName: string;
  eventSummary: string;
  eventDate: string;
  imageUrl: string; // Added imageUrl property
  eventPhotos?: Array<string>;
}

interface EventsProps {
  onEventClick: (eventData: EventData) => void;
}

const Events: React.FC<EventsProps> = ({ onEventClick }) => {
  // Define handleClick function with explicit parameter types
  const handleClick = (eventData: EventData) => {
    // Call the onEventClick function passed from the parent component
    // and pass the event details as arguments
    onEventClick(eventData);
  };

  // Define an array of event data
  const eventsData: EventData[] = [
    {
      eventName: "Live From the Cactus Cafe: Petite League & Redbud",
      eventSummary: `
      Live From the Cactus Cafe: Petite League & Redbud was an intimate night of alternative rock at a historic Austin venue. 
      This installation of the Live From The Cactus Cafe series featured performances by Austin-based indie outfit, Redbud, and Brooklyn-based lo-fi power pop act, Petite League.
      Redbud first began as a pandemic-era solo effort from singer/songwriter Katie Claghorn, but it has since blossomed into a four-piece with some impressive creative chemistry, with the band blending their kaleidoscopic melodies with Claghorn’s confessional lyrics. The resulting tracks weave together elastic guitar lines, sweet and unexpected melodies, and danceable rhythms, carving a welcome place for the band in the burgeoning Austin indie scene. 
      Petite League's Lorenzo Gillis Cook, songwriter and composer, along with drummer Henry Schoonmaker, came out of the gates swinging with their signature infectious lo-fi power pop releasing their two first records before graduating from college that same year. Petite League’s melodic sun kissed brand of indie rock started the buzz right away with some immediate industry, streaming, and publication recognition which helped propel the band forward from the jump.
    `,
      eventDate: "April 5th, 2023",
      imageUrl: "/images/cactus2.JPG", // Added imageUrl for Event 1
      eventPhotos: [
        "/images/eventPhotos/cactusThree/bud2.jpg",
        "/images/eventPhotos/cactusThree/bud1.jpg",
        "/images/eventPhotos/cactusThree/bud3.jpg",
        "/images/eventPhotos/cactusThree/bud4.jpg",
        "/images/eventPhotos/cactusThree/bud5.jpg",
      ],
    },
    {
      eventName: "Forty Acres Fest 2022 Ft. Coin",
      eventSummary: "The 29th annual Forty Acres Fest transformed the University of Texas at Austin's Main Mall into a vibrant spectacle. Kicking off the evening's festivities with an electrifying performance was Yardsale!, the University's Battle of the Bands champion, whose infectious energy and unwavering enthusiasm set the perfect tone for the night ahead. As the sun dipped below the horizon, thousands of eager fans congregated on the steps of the UT Tower, eagerly awaiting the arrival of the evening's headlining act. Their patience was soon rewarded as the spotlight illuminated the stage, heralding the arrival of Coin, the dynamic pop-rock sensation hailing from Nashville. Fresh from their appearance on the Jimmy Kimmel show just days prior, Coin graced the stage for what would be their final performance in the United States before embarking on a whirlwind European world tour in support of their latest album, Uncanny Valley. The band delivered a mesmerizing performance that UT students would not soon forget.",
      eventDate: "March 26, 2022",
      imageUrl: "/images/faf.JPG", // Added imageUrl for Event 7
      eventPhotos: [
        "/images/eventPhotos/faf/faf7.jpg",
        "/images/eventPhotos/faf/faf2.jpg",
        "/images/eventPhotos/faf/faf3.jpg",
        "/images/eventPhotos/faf/faf4.jpg",
        "/images/eventPhotos/faf/faf5.jpg",
        "/images/eventPhotos/faf/faf6.jpg",
        "/images/eventPhotos/faf/faf1.jpg",
      ],
    },
    {
      eventName: "Battle of the Bands",
      eventSummary:
        "Battle of the Bands was a friendly competition for student and local bands to showcase their original music! Each band was given an allotted amount of time for their set and at the end, the audience voted on their favorite band of the night. The winner opened for the headlining band, Coin, at Forty Acres Fest 2022! Headliners aims to provide musicians with a platform and give them the chance at a huge opportunity: working with a popular and established band.",
      eventDate: "March 9th, 2022",
      imageUrl: "/images/battle.jpg", // Added imageUrl for Event 3
      eventPhotos: [
        "/images/eventPhotos/battle/battle.jpg",
        "/images/eventPhotos/battle/battle1.jpg",
        "/images/eventPhotos/battle/battle2.jpg",
        "/images/eventPhotos/battle/battle3.jpg",
      ],
    },
    {
      eventName: "Killer Comedy at the Cactus Cafe",
      eventSummary:
        "Killer Comedy at the Cactus Cafe was a night showcasing 5 comics who work in and around the Austin Area. The Cactus Cafe is a perfect venue as it is intimate and provides a space for laughter to grow. Austin’s local comedy scene is often overwhelming and people new to the area may not know where to begin—this was the perfect place. Right at home on UT’s campus, students and guests experienced a space for comedy that is accessible for all.",
      eventDate: "February 16th, 2022",
      imageUrl: "/images/killer.JPG", // Added imageUrl for Event 4
      eventPhotos: [
        "/images/eventPhotos/KC/KC.JPG",
        "/images/eventPhotos/KC/KC1.JPG",
        "/images/eventPhotos/KC/KC2.JPG",
        "/images/eventPhotos/KC/KC3.JPG",
        "/images/eventPhotos/KC/KC4.JPG",
      ],
    },
    {
      eventName: "24th Street Festival",
      eventSummary:
        "24th Street Festival was a street fair that showcased the art of various local artists—both students and professionals. Attendees could listen to live music, see imaginative art pieces, and browse products from local vendors. Lainey Gonzales is a singer-songwriter and self-proclaimed Pop-Punk Country Superstar in Austin, TX. She aims to make songs that are easy on the ears and hard on the heart. Her debut album, “Don’t Make Me Worry” is available on streaming platforms everywhere. Hall Johnson is a guitar pop-rock band that was formed in July of 2016. Today, Hall Johnson is currently residing in Austin, Texas. As they have come accustomed to the culture and life of living in Austin, the band has reinvented itself. Recording textured, direct, and authentic sounds that display an even blend of each member’s individual talents. Their sound has evolved, and today has created a consistent and recognizable tone. You can find Hall Johnson practicing their debut record on their porch in Austin after they went to Connecticut in the Summer of 2021 to record their debut record with Charles Dahlke of The Brazen Youth.",
      eventDate: "December 2nd, 2021",
      imageUrl: "/images/24th.JPG", // Added imageUrl for Event 5
      eventPhotos: [
        "/images/eventPhotos/24th/24th1.jpg",
        "/images/eventPhotos/24th/24th2.jpg",
        "/images/eventPhotos/24th/24th3.jpg",
        "/images/eventPhotos/24th/24th4.jpg",
        "/images/eventPhotos/24th/24th5.jpg",
        "/images/eventPhotos/24th/24th6.jpg",
        "/images/eventPhotos/24th/24th7.jpg",
        "/images/eventPhotos/24th/24th8.jpg",
        "/images/eventPhotos/24th/24th9.jpg",
      ],
    },
    {
      eventName: "Live from the Cactus Cafe: Eli Josef",
      eventSummary: "This installment of Live from the Cactus Café featured the talents of San Marcos artist, Eli Josef. Self described as indie garage pop synth rock, Eli Josef truly does not fit into one genre, but is a guaranteed great time for all in attendance at his shows. Eli Josef is an artist out of San Marcos, Texas. “I try to create something that is first meaningful to me,” he explains simply, “hopefully people can relate to those things – and it turns out that many of them can because we're all pretty much in this together. The way people have responded to my music, and the relationships I have formed with my fans, has inspired me to continue down this path in the hopes that I might help people through a difficult spot or give them a bit of joy in hard times. With songs like “I Love You Aubrey Plaza,” “Man Enter Sand,” and “Doomsday Disco,” his good-humored lyrics and high energy live show will undoubtedly bring a smile to your face and have you up on your feet.",
      eventDate: "October 26, 2021",
      imageUrl: "/images/eli.png", // Added imageUrl for Event 6
      eventPhotos: [
        "/images/eventPhotos/cactusTwo/cactusTwo1.JPG",
        "/images/eventPhotos/cactusTwo/cactusTwo2.JPG",
        "/images/eventPhotos/cactusTwo/cactusTwo3.JPG",
        "/images/eventPhotos/cactusTwo/cactusTwo4.JPG",
      ],
    },
    {
      eventName: "Live from the Cactus Cafe: Aidan Stewart & Caelin",
      eventSummary:
        "Live From the Cactus Cafe was an especially intimate showcase of two phenomenal local artists. Aidan Stewart is an Indie Folk artist from Austin, Texas. He writes music about the human experience in an accessible and expressive way. His influences include: Pinegrove, Dr. Dog, and Phoebe Bridgers. The Austin based artist, Caelin, reels her listeners in with her dreamy vocals, insightful lyrics, acoustic guitar picking patterns and synth melodies. She focuses her lyrics on interpersonal relationships and even more so dialogue within the self. Caelin has been playing music for over 10 years but started playing with her full band in late 2019. In the past year she has been curating her full length album set to be released in early 2022.",
      eventDate: "September 29, 2021",
      imageUrl: "/images/cactus.jpg", // Added imageUrl for Event 6
      eventPhotos: [
        "/images/eventPhotos/cactusOne/cactusOne1.JPG",
        "/images/eventPhotos/cactusOne/cactusOne2.JPG",
        "/images/eventPhotos/cactusOne/cactusOne3.JPG",
      ],
    },
    {
      eventName: "Silent Dance Party",
      eventSummary:
        "Set on the steps of Gregory Gymnasium, three DJs were brought out to the University of Texas at Austin Campus to welcome students back to school. This event kicked off Campus Event + Entertainment: Headliners' first year of in-person events since 2019. Students were encouraged to use pairs of headphones that could be switched between three stations and watch the light show displayed on the outside of the gym.",
      eventDate: "September 8th, 2021",
      imageUrl: "/images/sdp.JPG", // Added imageUrl for Event 7
      eventPhotos: ["/images/eventPhotos/sdp/sdpPromo.mov"],
    },
  ];

  return (
    <div>
      <h1>EVENT EXPERIENCE</h1>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="row row-cols-4">
            {/* Map over the eventsData array to generate card elements */}
            {eventsData.map((event, index) => (
              <div className="col" key={index}>
                <div className="card">
                  <img
                    src={event.imageUrl}
                    className="card-img-top"
                    alt={event.eventName}
                  />
                  <div className="card-body">
                    <button
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={() => handleClick(event)}
                    >
                      VIEW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
