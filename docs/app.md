# Application name

Podcast Manager

# Description

Netflix-style app where you can centralize different episodes by category

# Domain

Podcasts made in video

# Features

- List podcast episodes bu sections of categories
  - [health, fitness, mentality, humor, music]
- Filter episodes by podcast name

## How

### Feature:

List podcast episodes bu sections of categories

### How I'll implement

GET: Return episodes list

response:

```js
[
  {
    podcastName: 'Balela',
    episodeName: 'POLADO FALANDO BALELA #030',
    videoId: 'jR7PaeuPhic',
    cover: 'https://i.ytimg.com/vi/jR7PaeuPhic/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=jR7PaeuPhic&t=1s',
    categories: ['humor', 'mentality'],
  },
  {
    podcastName: 'Balela',
    episodeName: 'LUCAS INUTILISMO FALANDO BALELA DE NOVO #94',
    videoId: 'LtNsLQimmZs',
    cover: 'https://i.ytimg.com/vi/LtNsLQimmZs/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=LtNsLQimmZs',
    categories: ['humor', 'music'],
  },
];
```

GET: Return episodes list based on podcast name client parameter
