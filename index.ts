import * as _ from 'lodash';

async function hello() {
	return 'world'
}

const url = new URL('....');

let lucky = 23;

//lucky = '24';

let lucky1: any = 23;
lucky1 = '23';

let lucky2: number;

type Style = ' bold' | 'italic' | string | 23;

let font: Style;

font = 'something';

interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person1: Person = {
    fisrt: 'Jeff',
    last: 'Delaney'

}

const person2: Person = {
    first: 'Usain',
    last: 'Bolt'
    fast: true
}