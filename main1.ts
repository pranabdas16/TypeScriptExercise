let message;
message = 'abc';


// type assertion.. so that intelisense work.
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

//intelisense with come automatically since defines the type....
let msg ='xyz';
let endWithZ = msg.endsWith('z');
