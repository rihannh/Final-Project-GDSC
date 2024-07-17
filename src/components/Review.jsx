import { cn } from "../utils/utils";
import Marquee from "./magicui/Marquee";
import PropTypes from 'prop-types';
import { reviews } from "../utils/reviews";


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ image, name, role, body }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-cyan-100/[.25] duration-300",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <figure className="rounded-full h-8 w-8 overflow-hidden">
                    <img className="w-full h-full object-cover" alt={`Photo of ${name}`} src={image} />
                </figure>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{role}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export default function Review() {
    return (
        <section id="review" className="mt-24">
            <h1 className='mx-auto text-center w-fit text-3xl lg:text-5xl font-semibold text-slate-800 mb-2 relative before:absolute before:bg-cyan-500 before:h-[3px] before:rounded-full before:w-20 before:shadow before:shadow-cyan-400/50 before:-bottom-3 before:right-1/2 before:translate-x-1/2'>Apa Kata Mereka?</h1>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                <Marquee pauseOnHover className="[--duration:60s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:60s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>

    );
}

ReviewCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    body: PropTypes.string
}

