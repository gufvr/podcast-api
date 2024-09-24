<h1 align='center'>Podcast Manager</h1>

<p align='center'>
Podcast Manager is a Netflix-style application that allows users to centralize and manage different podcast episodes by category. With a user-friendly interface, you can explore various episodes, filter them by podcast name, and enjoy a seamless experience with video podcasts.
</p>

## Domain

This application focuses on video podcasts, making it easy for users to access and enjoy their favorite episodes.

## Features

- **Categorized Episode Listings**: Users can browse podcast episodes organized into various categories, including:
  - Health
  - Fitness
  - Mentality
  - Humor
  - Music
- **Episode Filtering**: Users can filter episodes by podcast name to find specific content easily.

## How It Works

### Feature: List Podcast Episodes by Category

#### Implementation

The application provides an API endpoint to retrieve a list of podcast episodes categorized by different sections.

**GET**: `/api/podcasts`
**Example response**:
```json
[
  {
    "podcastName": "Syntax",
    "episodeName": "Taylor Otwell's opinions on PHP, React, Laravel and Lamborghini Memes",
    "videoId": "aitlUO8nAA0",
    "cover": "https://i9.ytimg.com/vi/aitlUO8nAA0/hqdefault_custom_1.jpg",
    "link": "https://www.youtube.com/watch?v=aitlUO8nAA0",
    "categories": ["webdevelopment", "webdeveloper", "javascript"]
  },
  {
    "podcastName": "Syntax",
    "episodeName": "Deno 2 with Ryan Dahl",
    "videoId": "tZBCq8Ijkgw",
    "cover": "https://i.ytimg.com/vi/tZBCq8Ijkgw/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=tZBCq8Ijkgw",
    "categories": ["webdevelopment", "webdeveloper", "javascript", "nodejs"]
  }
]
```

### Feature: Filter Episodes by Podcast Name
**GET**: `/api/podcasts?name={podcastName}` 

This endpoint allows clients to retrieve episodes based on the specified podcast name.

## Installation

To set up the Podcast Manager locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/gufvr/podcast-api.git
```

2. Navigate into the project directory:
```bash
cd podcast-api
```

3. Install the required dependencies:
```bash
npm install
```

## Usage:
```bash
tsx --env-file=.env src/server.ts
```

## License
This project is open-source and available under the **MIT License**.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.
