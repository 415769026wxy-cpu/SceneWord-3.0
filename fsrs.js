export function fsrsUpdate(card,rating){
let stability=card.stability||1;
if(rating>=4) stability*=2;
else if(rating===3) stability*=1.2;
else stability=1;
return {...card,stability,nextReview:Date.now()+stability*86400000};
}