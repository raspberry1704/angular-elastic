import { Player } from '../player';

export class PlayerImpl implements Player {
    public firstname: string;
    public lastname: string;
    public hand: hand;
    public birthday: date;
    public nationality: string;

    constructor(
        public firstname: string,
        public lastname: string,
        public hand: hand,
        public birthday: date,
        public nationality: string
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.hand = hand;
        this.birthday = birthday;
        this.nationality = nationality;
    }
}
