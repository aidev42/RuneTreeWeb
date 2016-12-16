// TO DO LIST:

//ready to create a front end render
//essentially create a one player game
//when do we render hand and items placed on board?
//all cards (react components) have a state, clickedOn that toggles on/off with click, when On zooms in, when off zooms back out to original position (can be accomplished potentially by using react to add a class, then css/scss to style/animate)
//want to lock screen in ionic as vertical aligned


//SECTION GUIDE
// 1.0 Game variables storage
// 2.0 Rune object setup
// 3.0-3.3 Deck and hand related functions
  // 3.1 Deck initializing functions
  // 3.2 Card drawing and discarding functions
  // 3.3 Playable cards/hand functions
  // 3.4 Active Runes functions
// 4.0 Gamesetup and loop functions
// 5.0 Game start
// 6.0 Dev automated testing functions

// BEGIN 1.0 Object to store all universal game variables
  var gameVariables = {
    handSize: 5
  }
// END 1.0

// BEGIN 2.0 Rune object setup

  var Rune = function(runeInfo){
    this.number = runeInfo.number
    this.name = runeInfo.name
    this.meaning = runeInfo.meaning
    this.symbol = runeInfo.symbol
    this.text = runeInfo.text
  }

  //First Aett- Affect own cards

    var fehu = new Rune({
      number: 0,
      name: 'Fehu',
      meaning: 'Wealth',
      symbol: 'test',
      text: 'Draw two cards (up to 7 max)'
    })

    var uruz = new Rune({
      number: 1,
      name: 'Uruz',
      meaning: 'Energy',
      symbol: 'test',
      text: 'Activate any other placed Rune (you still may only have one active Rune per aett)'
    })

    var thurisaz = new Rune({
      number: 2,
      name: 'Thurisaz',
      meaning: 'Chaos',
      symbol: 'test',
      text: 'Draw 4 cards (up to 9 max), then discard 2 at random'
    })

    var ansuz = new Rune({
      number: 3,
      name: 'Ansuz',
      meaning: 'Order',
      symbol: 'test',
      text: 'Look at the top 3 cards of your deck and reorder them however you like'
    })

    var radio = new Rune({
      number: 4,
      name: 'Radio',
      meaning: 'Motion',
      symbol: 'test',
      text: 'Place a rune you are able to place, discard a card, draw two cards'
    })

    var kenaz = new Rune({
      number: 5,
      name: 'Kenaz',
      meaning: 'Light',
      symbol: 'test',
      text: 'Look at the top 6 cards of your deck and replace them in the same order'
    })

    var gebo = new Rune({
      number: 6,
      name: 'Gebo',
      meaning: 'Exchange',
      symbol: 'test',
      text: 'Remove the top and bottom 5 cards of your deck and place them on bottom and top of your deck respectively'
    })

    var wunjo = new Rune({
      number: 7,
      name: 'Wunjo',
      meaning: 'Harmony',
      symbol: 'test',
      text: 'If you have fewer runes placed than an opponent, draw cards until finding a rune you can place. Place that rune, discard all cards, shuffle your deck, and redraw your hand. You miss your next turn.'
    })

  //Second Aett- Affect opponent's cards

    var hagalaz = new Rune({
      number: 8,
      name: 'Hagalaz',
      meaning: 'Storm',
      symbol: 'test',
      text: 'Opponent discards three cards at random and draws three cards'
    })

    var nauthiz = new Rune({
      number: 9,
      name: 'Nauthiz',
      meaning: 'Need',
      symbol: 'test',
      text: 'The next time your opponent places a rune they must discard their hand and redraw 5 cards'
    })

    var isa = new Rune({
      number: 10,
      name: 'Isa',
      meaning: 'Ice',
      symbol: 'test',
      text: 'You may take an additional action this turn. An opponent can do nothing their next turn except use an activated Rune ability.'
    })

    var jera = new Rune({
      number: 11,
      name: 'Jera',
      meaning: 'Seasons',
      symbol: 'test',
      text: 'Discard a rune from each aett and draw three cards. Your opponent reveals their hand. You choose if they keep it or discard it and draw 5 new cards.'
    })

    var eihwaz = new Rune({
      number: 12,
      name: 'Eihwaz',
      meaning: 'Life',
      symbol: 'test',
      text: 'Place a rune you can play, your opponent must discard a rune from that aett, if they cannot they can do nothing their next turn except use an activated Rune ability.'
    })

    var pertho = new Rune({
      number: 13,
      name: 'Pertho',
      meaning: 'Fate',
      symbol: 'test',
      text: "Look at the top 5 cards of your opponent's deck and reorder them however you'd like."
    })

    var algiz = new Rune({
      number: 14,
      name: 'Algiz',
      meaning: 'Enduring',
      symbol: 'test',
      text: 'While active, Algiz is triggered whenever your opponent uses a rune ability: deactivate Algiz and prevent any effect of their rune ability. If you hold another Algiz card in your hand, reactivate your placed Algiz rune, discard the Algiz card in your hand and draw a card.'
    })

    var sowilo = new Rune({
      number: 15,
      name: 'Sowilo',
      meaning: 'Sun',
      symbol: 'test',
      text: 'Your opponent plays with their hand revealed to you until they place a rune.'
    })

  //Third Aett- Affect anything

    var tiwaz = new Rune({
      number: 16,
      name: 'Tiwaz',
      meaning: 'Balance',
      symbol: 'test',
      text: ''
    })

    var birkano = new Rune({
      number: 17,
      name: 'Birkano',
      meaning: 'Awakening',
      symbol: 'test',
      text: ''
    })

    var ehwaz = new Rune({
      number: 18,
      name: 'Ehwaz',
      meaning: 'Trust',
      symbol: 'test',
      text: ''
    })

    var mannaz = new Rune({
      number: 19,
      name: 'Mannaz',
      meaning: 'Awareness',
      symbol: 'test',
      text: ''
    })

    var lagaz = new Rune({
      number: 20,
      name: 'Lagaz',
      meaning: 'Dreams',
      symbol: 'test',
      text: ''
    })

    var ingwaz = new Rune({
      number: 21,
      name: 'Ingwaz',
      meaning: 'Action',
      symbol: 'test',
      text: ''
    })

    var dagaz = new Rune({
      number: 22,
      name: 'Dagaz',
      meaning: 'Unity',
      symbol: 'test',
      text: ''
    })

    var othala = new Rune({
      number: 23,
      name: 'Othala',
      meaning: 'Acceptance',
      symbol: 'test',
      text: ''
    })
// END 2.0

// BEGIN 3.0 Deck and hand related functions

  // BEGIN 3.1 Deck initilization functions

    function initDeck(){
      var aett1 = [fehu,uruz,thurisaz,ansuz,radio,kenaz,gebo,wunjo]
      var aett2 = [hagalaz,nauthiz,isa,jera,eihwaz,pertho,algiz,sowilo]
      var aett3 = [tiwaz,birkano,ehwaz,mannaz,lagaz,ingwaz,dagaz,othala]
      // 3x aett1, 2x aett2, 1x aett3
      var deck = [aett1,aett1,aett1,aett2,aett2,aett3]
      // Flatten the deck to one dimension
      deck = [].concat.apply([], deck)
      //Now shuffle it
      return shuffleCards(deck);
    }

    function shuffleCards(cards) {
      // Using Durstenfeld shuffle algorithm
      for (var i = cards.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = cards[i];
          cards[i] = cards[j];
          cards[j] = temp;
      }
      return cards;
    }
  // END 3.1

  // BEGIN 3.2 Card drawing and discarding functions
    // Callable for hand modification: drawCards, drawHand, discardCards, discardHand, all return [hand,deck]
    // Callable as a precursor to hand modification: selectRandomCardsInHand, this returns [cards] within hand

    function drawCards(numberOfCards,hand,deck){
      // console.log('drawing X cards: ',numberOfCards)
      // console.log('the deck is: ',deck)
      for (var i = 0; i < numberOfCards; i++){
        hand.push(deck.splice(0,1)[0])
        console.log(deck.length)
      }
      // console.log('this is now the hand', hand)
      return [hand,deck]
    }

    //Only to be called when hand is empty
    function drawHand(deck){
      // console.log('about to draw hand, the deck is: ',deck)
      return drawCards(gameVariables.handSize,[],deck)
    }

    //Used to select random cards (usually before they are discarded)
    function selectRandomCardsInHand(numberOfCards,hand){
      var tempHand = hand.slice(0)
      var selectedCards = []
      var upperIndexBound = tempHand.length - 1
      for (var i = 0; i < numberOfCards; i++){
        var randInt = Math.floor(Math.random() * (upperIndexBound - 0 + 1)) + 0;
        selectedCards.push(tempHand.splice(randInt,1)[0])
        upperIndexBound --
      }
      return selectedCards
    }

    function discardCards(cards,hand,deck){
      //First shuffle the cards to be discarded before placing them on bottom of deck
      cards = shuffleCards(cards)
      //console.log('these are shuffled cards to delete: ',cards)
      var upperIndexBound = hand.length
      //Then go through each card to be discarded
      for (var i = 0; i<cards.length; i++){
        //And check to see if this card appears in the hand
        for (var j = 0; j < upperIndexBound; j++){
          if (cards[i] == hand[j]){
            //If card is found remove card from hand and add to bottom of the deck
            deck.push(hand.splice(j,1)[0])
            upperIndexBound --
            break
          }
        }
      }
      return [hand,deck]
    }

    //Only to be called when discarding entire hand
    function discardHand(hand,deck){
      //Shuffle hand before placing on bottom of deck
      hand = shuffleCards(hand)
      for (var i = 0; i < hand.length; i++){
        deck.push(hand[i])
      }
      hand = []
      return [hand,deck]
    }
  // END 3.2

  // BEGIN 3.3 Playable cards/hand functions

    function runeAettAndIndex(rune){
      //based on rune number returns the aett it belongs to and index in that aett
      var runeAett = Math.floor(rune.number / 8)
      var runeIndex = rune.number % 8
      return [runeAett,runeIndex]
    }

    //Used to find index location of Runes below and to sides of Runes in aetts 2 and 3
    //Returns [below to left, below to right]
    function runeLeftRightIndex(i){
      var left = null
      var right = null
      if (i - 1 < 0){
        left = 7
      } else {
        left = i -1
      }
      if (i + 1 > 7){
        right = 0
      } else {
        right = i + 1
      }
      return [left,right]
    }

    function playableRunes(placedRunes){
      //Runes in the first aett are always playable at first
      var playableRunesArray = [
        [1,1,1,1,1,1,1,1], //first aett
        [0,0,0,0,0,0,0,0], //second aett
        [0,0,0,0,0,0,0,0] //third aett
      ]
      //Runes in second aett are playable if first aett runes in same and +1/-1 index positions completed
      for (var i = 0; i < placedRunes[1].length; i++){
        var indexSpots = runeLeftRightIndex(i)
        var leftSpot = indexSpots[0]
        var rightSpot = indexSpots[1]
        if (placedRunes[0][i] == 1 && placedRunes[0][leftSpot] == 1 && placedRunes[0][rightSpot] == 1){
          playableRunesArray[1][i] = 1
        }
      }
      //Runes in third aett are playable if first aett entirely finished and above index pos criteria is met
      var aett1Sum = 0
      for (var i = 0; i < placedRunes[0].length; i++){
        aett1Sum += placedRunes[0][i]
      }
      if (aett1Sum == 8){
        //Run checks on third aett only if first aett entirely finished
        //Runes in third aett are playable if second aett runes in same and +1/-1 index positions completed
        for (var i = 0; i < placedRunes[2].length; i++){
          var indexSpots = runeLeftRightIndex(i)
          var leftSpot = indexSpots[0]
          var rightSpot = indexSpots[1]
          if (placedRunes[1][i] == 1 && placedRunes[1][leftSpot] == 1 && placedRunes[1][rightSpot] == 1){
            playableRunesArray[2][i] = 1
          }
        }
      }
      //Finally, remove already placed runes and we're left with array of current runes that can be placed
      for (a=0; a<playableRunesArray.length; a++){
        for (i=0; i<playableRunesArray[a].length; i++){
          if (placedRunes[a][i] == 1){
            playableRunesArray[a][i] = 0
          }
        }
      }
      return playableRunesArray
    }

    function isHandPlayable(hand,placedRunes){
      var playableHand = false
      var playableRunesArray = playableRunes(placedRunes)
      for (i=0; i < hand.length; i++){
        var runeLocation = runeAettAndIndex(hand[i])
        if (playableRunesArray[runeLocation[0]][runeLocation[1]] == 1){
          playableHand = true
          break
        }
      }
      return playableHand
    }
  // END 3.3

  // BEGIN 3.4 Active Runes functions

    function anyRunesActive(player){
      var active = false
      //check if any of player's placed runes are active
      console.log('this is the player: ',player)
      if (player.activeRuneAett1 || player.activeRuneAett2 || player.activeRuneAett3){
        active = true
      }
      return active
    }

    //Called after a rune is played
    function isRuneActive(rune,placedRunes){
      var activateRune = false
      var runeLocation = runeAettAndIndex(rune)
      var indexSpots = runeLeftRightIndex(runeLocation[1])

      //Check if index on left AND right of same aett are already played
      if (placedRunes[runelocation[0]][indexSpots[0]] == 1 && placedRunes[runelocation[0]][indexSpots[1]] == 1){
        activateRune = true
      }
      //Check if first rune of aett to be played
      else{
        activateRune = true //here start with default true then if we find another played rune set false
        for (i=0; i<placedRunes[runeLocation[0]].length; i++){
          if (i == runeLocation[1]){
            continue
          }
          if (placedRunes[runeLocation[0]][i] == 1){
            activateRune = false
            break
          }
        }
      }
      return activateRune
    }

  // END 3.4
// END 3.0

// BEGIN 4.0 Gamesetup and loop functions

  function gameInit(){
    //Create deck and hand
    var player1 = {
      name: 'You',
      deck: [],
      hand: [],
      placedRunes: [
        [0,0,0,0,0,0,0,0], //first aett
        [0,0,0,0,0,0,0,0], //second aett
        [0,0,0,0,0,0,0,0] //third aett
      ],
      activeRuneAett1: null,
      activeRuneAett2: null,
      activeRuneAett3: null
    }

    var player2 = {
      name: 'Computer',
      deck: [],
      hand: [],
      placedRunes: [
        [0,0,0,0,0,0,0,0], //first aett
        [0,0,0,0,0,0,0,0], //second aett
        [0,0,0,0,0,0,0,0] //third aett
      ],
      activeRuneAett1: null,
      activeRuneAett2: null,
      activeRuneAett3: null
    }

    function initPlayer(player){
      player.deck = initDeck()
      var deckClone = player1.deck.slice(0)
      console.log('after deck init this is now p1Deck: ', deckClone)
      player.handAndDeck = drawHand(player.deck)
      player.hand = player.handAndDeck[0]
      player.deck = player.handAndDeck[1]
    }

    initPlayer(player1)
    initPlayer(player2)
    console.log('after draw this is now p1Deck: ', player1.deck)
    console.log('after draw this is now p1Hand: ', player1.hand)

    console.log('hand is playable: ', isHandPlayable(player1.hand,player1.placedRunes))


    //KEEP THIS ONLY FOR TESTING PURPOSES
      // var p1Deck = initDeck()
      // var p1HandAndDeck = drawHand(p1Deck)
      // window.p1Hand = p1HandAndDeck[0]
      // window.p1Deck = p1HandAndDeck[1]
      // var p1PlacedRunes = [
      //   [0,0,0,0,0,0,0,0], //first aett
      //   [0,0,0,0,0,0,0,0], //second aett
      //   [0,0,0,0,0,0,0,0] //third aett
      // ]


    // Pass all these into gameLoop as player objects
    // gameLoop(player1,player2)
  }

  function gameLoop(player1,player2){
    var playerWins = false
    var currentPlayer = null

    //For now function set to always set player1's turn
    function setPlayerTurn(playerNow){
      if (playerNow == null){
        currentPlayer = player1
        //SET RANDOMLY FOR PRODUCTION
      } else if (playerNow == player1){
        // SET THIS FOR PRODUCTION: currentPlayer = player2
      } else {
        currentPlayer = player1
      }
    }

    setPlayerTurn(currentPlayer)
    console.log('current player is: ',currentPlayer)

    while (!playerWins){
      //wait for player action
        var canActivate = anyRunesActive(currentPlayer)
        var canPlay = isHandPlayable(currentPlayer.hand,currentPlayer.placedRunes)
        //1) Player can always discard any card and draw a card
        if (canActivate){
          //2) if so player can invoke rune ability
        }
        if (canPlay){
          //3) if so player can play a card
        } else {
          //4) may discard entire hand and redraw 5 cards

            // //Discard and update hand and deck
            // currentPlayer.handAndDeck = discardHand(currentPlayer.hand,currentPlayer.deck)
            // currentPlayer.hand = currentPlayer.handAndDeck[0]
            // currentPlayer.deck = currentPlayer.handAndDeck[1]

            // //Redraw and update hand and deck
            // currentPlayer.handAndDeck = drawHand(currentPlayer.deck)
            // currentPlayer.hand = currentPlayer.handAndDeck[0]
            // currentPlayer.deck = currentPlayer.handAndDeck[1]
        }
      //If player played a card, draw a card, check if active runes update, check for winner
        // if (isRuneActive(playedRune,currentPlayer.placedRunes)){
        //   //update DOM to reflect current active one in same aett no longer active, and now this one is
        //   //note this could also be factored out in an 'activateRune' function triggered from isRuneActive func
        //   var runeAett = runeAettAndIndex(rune)[0]
        //   currentPlayer['activeRuneAett'+runeAett] = playedRune
        // }
        //build this out
      //If no winner after player action, trigger active player function to iterate turn
      setPlayerTurn(currentPlayer)

      //Setting winner after one turn
      playerWins = true
    }
  }

  function isWinner(placedRunes){
    var winner = false
    //If 3rd aett is done there is a winner
    var aett3Sum = 0
    for (var i = 0; i < placedRunes[2].length; i++){
      aett3Sum += placedRunes[2][i]
    }
    if (aett3Sum == 8){
      winner = true
    }
    return winner
  }
// END 4.0

// BEGIN 5.0 Game start
  gameInit()
// END 5.0

// BEGIN 6.0 Dev test functions
  // function devTest_discardCards(numCards){
  //   //BUILD discardCards testing function
  //   //to test
  //   gameInit()
  //   var cardsInHand = []
  //   for (i = 0; i < p1Hand.length; i++){
  //     cardsInHand.push(p1Hand[i].name)
  //   }
  //   // console.log('cards in hand before delete: ',cardsInHand)
  //   var cardsToDelete = selectRandomCardsInHand(numCards,p1Hand)
  //   var cardsToDeleteNames = []
  //   for (i = 0; i < cardsToDelete.length; i++){
  //     cardsToDeleteNames.push(cardsToDelete[i].name)
  //   }
  //   // console.log('these are the cards to delete: ',cardsToDeleteNames)
  //   var newHandDeck = discardCards(cardsToDelete,p1Hand,p1Deck)
  //   //console.log(newHandDeck[0])
  //   cardsInHand = []
  //   for (i = 0; i < newHandDeck[0].length; i++){
  //     cardsInHand.push(newHandDeck[0][i].name)
  //   }
  //   // console.log('cards in hand after delete: ',cardsInHand)

  //   cardsInDeck = []
  //   for (i = 0; i < newHandDeck[1].length; i++){
  //         cardsInDeck.push(newHandDeck[1][i].name)
  //       }
  //   //console.log('cards in deck after delete: ',cardsInDeck)
  // }
// END 6.0