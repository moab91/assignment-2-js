var randomOfQuotes=[
    {'author': 'Jim Rohn', 
        'quote': 'Beware of what you become in pursuit of what you want.'
       },
       {'author': 'Epictetus', 
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
       },
       {'author': 'Frank Sinatra', 
        'quote': 'The best revenge is massive success.'
       },
       {'author': 'Wayne Gretzy', 
        'quote': 'You miss 100% of the shots you don\'t take.'
       },
       {'author': 'Nelson Mandela', 
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
       },
       {'author': 'Oscar Wilde', 
        'quote': 'Be yourself; everyone else is already taken.'
       },
       {'author': 'Albert Einstein', 
        'quote': 'A room without books is like a body without a soul.'
       },
       {'author': 'Bernard M. Baruch', 
        'quote': 'You only live once, but if you do it right, once is enough.'
       },
       {'author': 'Mahatma Gandhi', 
        'quote': 'Be the change that you wish to see in the world.'
       },
       
];

function generateQuote(){

var numders=Math.floor(Math.random() *randomOfQuotes.length+1);
var add=randomOfQuotes.slice(numders,2)[0];
document.getElementById('quoteOutput').innerHTML=`"${randomOfQuotes[numders].quote}"`;
document.getElementById('authorOutput').innerHTML=`--${randomOfQuotes[numders].author}`;

}