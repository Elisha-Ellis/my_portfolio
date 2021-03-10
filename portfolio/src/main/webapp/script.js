// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['TV Show: Grown-ish', 'Song: Insecure by Brent Faiyez', 'Movie: The Blind Side ','Food: Choclate IceCream','Animal: Bees','Color: Yellow'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
async function showFavoriteQuotes() {
  const responseFromServer = await fetch('/Quotes');
  const textFromResponse = await responseFromServer.text();

  const quotes =
      ['I Never Look Back, Darling. It Distracts From The Now! -Edna ,The Incredibles', 'The future belongs to those who prepare for it today. -Malcolm X', 'All that Glitter aint gold And all that shines bright aint a diamond And all the wrinkles isnt old And as far as you see aint the horizon -Brent Faiyaz'];
  const quotes = quotes[Math.floor(Math.random() * quotes.length)];
  quotesContainer.innerText=quotes;
}