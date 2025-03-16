import TestimonialHeader from "@/app/ui/Testimonial/TestimonialHeader";
import Review from "@/app/ui/Testimonial/Review";

const reviews = [
  {
    id: 1,
    name: "Alice Thompson",
    review:
      "I had severe water damage in my basement, and the team fixed everything quickly. I’m extremely satisfied with the results!",
    rating: 5,
    service: "Water Damage Restoration",
    image: "/images/testimonial/alice-thompson.jpg",
  },
  {
    id: 2,
    name: "Brian Hernandez",
    review:
      "Their prompt response saved my living room carpet from a leak that could’ve ruined the entire floor. Highly recommend!",
    rating: 5,
    service: "Leak Detection & Repair",
    image: "/images/testimonial/brian-hernandez.jpg",
  },
  {
    id: 3,
    name: "Catherine Lee",
    review:
      "I was amazed at how quickly they dried out the walls after a flood. They went above and beyond to ensure no mold developed.",
    rating: 5,
    service: "Flood Cleanup",
    image: "/images/testimonial/catherine-lee.jpg",
  },
  {
    id: 4,
    name: "Daniel Murphy",
    review:
      "We had a pipe burst that caused water damage in the kitchen. The team arrived fast and left everything spotless.",
    rating: 4,
    service: "Water Damage Restoration",
    image: "/images/testimonial/daniel-murphy.jpg",
  },
  {
    id: 5,
    name: "Eliza Kim",
    review:
      "Top-notch service from start to finish! They identified hidden moisture in my walls and prevented a bigger issue down the road.",
    rating: 5,
    service: "Moisture Inspection",
    image: "/images/testimonial/eliza-kim.jpg",
  },
  {
    id: 6,
    name: "Frank Wilson",
    review:
      "Their water extraction process was quick and efficient, saving my carpets from further damage. Great work!",
    rating: 5,
    service: "Carpet Water Extraction",
    image: "/images/testimonial/frank-wilson.jpg",
  },
  {
    id: 7,
    name: "Grace Patel",
    review:
      "They did a fantastic job repairing our drywall after a plumbing leak. Everything looks brand new!",
    rating: 5,
    service: "Drywall Restoration",
    image: "/images/testimonial/grace-patel.jpg",
  },
  {
    id: 8,
    name: "Henry Brown",
    review:
      "After a pipe burst in the basement, I was worried about mold. Their thorough inspection and remediation put my mind at ease.",
    rating: 4,
    service: "Mold Remediation",
    image: "/images/testimonial/henry-brown.jpg",
  },
  {
    id: 9,
    name: "Isabella Jones",
    review:
      "They were incredibly professional when fixing our foundation after flood damage. Our home feels safe again!",
    rating: 5,
    service: "Foundation Repair",
    image: "/images/testimonial/isabella-jones.jpg",
  },
  {
    id: 10,
    name: "Jackie Cooper",
    review:
      "Great service at a fair price. They replaced our sump pump and ensured our basement stays dry during heavy rains.",
    rating: 4,
    service: "Sump Pump Replacement",
    image: "/images/testimonial/jackie-cooper.jpg",
  },
];

export default function Testimonial() {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-4 inline-flex">
      <TestimonialHeader />
      <div className="w-full h-fit justify-start items-center gap-4 inline-flex overflow-hidden">
        <div className="w-full h-fit justify-start items-center gap-4 inline-flex animate-marquee">
          {reviews.map((review) => (
            <Review
              key={review.id}
              name={review.name}
              review={review.review}
              rating={review.rating}
              image={review.image}
              service={review.service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
