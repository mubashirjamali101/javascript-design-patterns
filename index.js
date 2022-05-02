const newsfeeds = [
  {
    type: "Top Headlines",
    query: "source=bbc-news",
  },
  {
    type: "Techy news",
    query: "source=domains=techcrunch.com",
  },
  {
    type: "everything",
    query: "domains=comicbookmovies.com?languages=en",
  },
];
let i = 0;
for (const feed of newsfeeds) {
  i++;
  console.log(`[${i}] ${feed.type.toUpperCase()} (${feed.query})`);
}
