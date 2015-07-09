(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Mike Gesell',
        avatar: 'http://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/7/90/7900a430-26de-11e2-a294-001a4bcf887a/5097068dc1ac8.preview-620.jpg',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.",
        position: 'PG',
        number: 10,
        team: 'home',
        minutesPlayed: 30,
        points: 22,
        assists: 2,
        rebounds: 6
      },
      {
        name: 'Aaron White',
        avatar: 'http://bloximages.chicago2.vip.townnews.com/qctimes.com/content/tncms/assets/v3/editorial/7/a7/7a7ade0b-afcf-59eb-91a3-29b1adbe6e55/52d1ae8fa7220.preview-620.jpg',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.",
        position: 'F',
        number: 30,
        team: 'home',
        minutesPlayed: 29,
        points: 11,
        assists: 2,
        rebounds: 3,
      },
      {
        name: 'Peter Jok',
        avatar: 'data:image/jpeg;base64,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',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.",
        position: 'SG',
        number: 3,
        team: 'home',
        minutesPlayed: 19,
        points: 7,
        assists: 2,
        rebounds: 4,
      },
      {
        name: 'Jarrod Uthoff',
        avatar: 'https://tse1.mm.bing.net/th?&id=JN.6l/4igtCFO/NmgtKDURq5w&w=300&h=300&c=0&pid=1.9&rs=0&p=0&r=0',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.',
        position: 'F',
        number: 20,
        team: 'home',
        minutesPlayed: 28,
        points: 7,
        assists: 2,
        rebounds: 5,
      },
      {
        name: 'Adam Woodbury',
        avatar: 'http://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/0/81/081f2042-26df-11e2-8788-001a4bcf887a/5097073acd62e.preview-620.jpg',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
        position: 'PG',
        number: 34,
        team: 'home',
        minutesPlayed: 28,
        points: 13,
        assists: 10,
        rebounds: 1,
      },
      {
        name: 'Anthony Clemmons',
        avatar: 'http://bloximages.chicago2.vip.townnews.com/qctimes.com/content/tncms/assets/v3/editorial/8/95/895c78fa-d2f9-561d-a10e-86b10e34f2ed/5283f76b81c91.preview-620.jpg',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada.",
        position: 'PG',
        number: 5,
        team: 'home',
        minutesPlayed: 23,
        points: 5,
        assists: 1,
        rebounds: 3,
      },
      {
        name: '2Lia Lugo',
        avatar: 'svg-1',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
        position: 'PG',
        number: 20,
        team: 'away'
      },
      {
        name: '2George Duke',
        avatar: 'svg-2',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
        position: 'PG',
        number: 20,
        team: 'away'
      },
      {
        name: '2Gener Delosreyes',
        avatar: 'svg-3',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.",
        position: 'PG',
        number: 20,
        team: 'away'
      },
      {
        name: '2Lawrence Ray',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.',
        position: 'PG',
        number: 20,
        team: 'away'
      },
      {
        name: '2Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
        position: 'PG',
        number: 20,
        team: 'away'
      },
      {
        name: '2Gani Ferrer',
        avatar: 'svg-6',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada.",
        position: 'PG',
        number: 20,
        team: 'away'
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
