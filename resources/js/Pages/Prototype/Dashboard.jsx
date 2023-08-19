import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import React from "react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <title>Dashboard</title>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity
                    className="gap-[30px] outline-none"
                    options={flickityOptions}
                >
                    {[1, 2, 3, 4].map((item) => (
                        <FeaturedMovie
                            key={item}
                            slug="the-batman-in-love"
                            name={`The Batman in Love ${item}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/200/300"
                            rating={4.7}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity
                    className="gap-[30px] outline-none"
                    options={flickityOptions}
                >
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <MovieCard
                            key={item}
                            slug="the-batman-in-love"
                            name={`The Batman in Love ${item}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/200/300"
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
