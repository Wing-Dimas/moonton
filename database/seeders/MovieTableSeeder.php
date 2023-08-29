<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $movies = [
            [
                "name" => "The Shawshank Redemption",
                "slug" => "the-shawshank-redemption",
                "category" => 'Drama',
                "video_url" => "https://www.youtube.com/watch?v=6hB3S9bIaco",
                "thumbnail" => "https://m.media-amazon.com/images/I/71aDDVOB+aL._AC_UL400_.jpg",
                "rating" => 9.3,
                "is_featured" => true,
            ],
            [
                "name" => 'The Godfather',
                "slug" => "the-godfather",
                "category" => "Drama",
                "video_url" => "https://www.youtube.com/watch?v=sY1S34973ZA",
                "thumbnail" => "https://m.media-amazon.com/images/I/61I5FovksxL._AC_UL400_.jpg",
                "rating" =>  9.2,
                "is_featured" => false,
            ],
            [
                "name" => 'The Godfather: Part II',
                "slug" => "the-godfather-part-ii",
                "category" => "Drama",
                "video_url" => "https://www.youtube.com/watch?v=sY1534973ZA",
                "thumbnail" => "https://m.media-amazon.com/images/I/717hzDUtBxL._AC_UL400_.jpg",
                "rating" => 9.0,
                "is_featured" => false,
                ]
        ];

        Movie::insert($movies);
    }
}

